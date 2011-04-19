var mooShape = new Class({
	version: '1.0',
	jsPath:  './scripts/',	
	files: new Hash(),
	className: 'mooShape',
	exCanvas: 'excanvas',

	Implements: [Options],
	
	options: {
		verbose: false,
		type: 'circle',
		id: false,
		properties : {
			width: 20,
			height: 20,
			color: '#f00',
			rgb: false,
			opacity: false,
			borderColor: false,
			borderWeight: false
		}
	},

    initialize: function(el, options){
    	this.element = $(el); if (!this.element) return;
    	this.setOptions(options);
    	this.prepareOptions();
    	this.ctx = this.createShapeElements();
    	this.assetJsFile();   	
    },
    
    prepareOptions: function() {
    	var opacity = 1;
    	if(this.options.properties.opacity) {
    		opacity = this.options.properties.opacity;
    	}
    	
    	if(this.options.properties.rgb) {
    		this.options.properties.rgb = 'rgba(' + this.options.properties.rgb + ',' + opacity + ')';
    	} else {
    		this.options.properties.rgb = 'rgba(' + this.options.properties.color.hexToRgb(true) + ',' + opacity + ')';
    	}
    	
    	//reset variable
    	this.options.properties.color   = false;
    	this.options.properties.opacity =  false;
    },
    
    /**
     * try to asset javascript file dyanmically 
     */
    assetJsFile: function() {
    	/**
    	 * Create the class name
    	 * For example: this.options.type = circle
    	 * It changes to "Circle"
    	 * As result: this.className = "mooShapeCircle"
    	 */
    	this.className = 'mooShape' + this.ucfirst(this.options.type);
    	
    	/**
    	 * Contains the source path of the shape class
    	 * As example: source = "./scripts/mooShapeStar.js"
    	 */
    	var source = this.jsPath + this.className + '.js';
    			
    	// If the class already loaded try to init the class
		if (this.files[source] == 'loaded'){
			this.initClass.delay(100, this);
			return true;
		}
		
		// If the class wasn't loaded, we try to load by the Asset method
		this.files[source] = 'loaded';
		Asset.javascript(source, {
			onload: function(){
				this.initClass();
		    }.bind(this)
		});
	},
	
	initClass: function() {
		try {
			var shape = new window[this.className](this.element, this.ctx, this.options);
			shape.draw.apply(this, this.getArgumentsArr());        	
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.log('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
	},
	
	createOverload: function(arr) {
        return function() {
            var list = arr, len = arguments.length, i, l;
            for (i = 0, l = list.length; i < l; i++) {
                if (list[i].length == len) return (list[i].apply(this, arguments));
            }

            if(this.options.verbose) {
            	console.log('Error: Class [' + this.className + '] does\'t have a method with [' + len + '] arguments!');
            } else {
            	alert('Error: Class [' + this.className + '] does\'t have a method with [' + len + '] arguments!');
            }
            return list[0].apply(this,arguments);
        };
    },
	
	methodOverload: function(obj, name, fn) {
        var args = [];
        switch ($type(fn)) {
	        case 'function':
	            args = [fn];
	            break;
	        default:
	            args = fn;
        }
        
        if (name in obj) args.unshift(obj[name]);        
        obj[name] = this.createOverload(args);
    },
    
    getArgumentsArr: function() {
    	var propertyValues = new Hash(this.options.properties);
		var argArray = new Array();
		var i = 0;
		propertyValues.each(function(value, key){
			if(value) {
				argArray[i] = value;
				i++;
			}
		});
		return argArray;
    },
    
    createShapeElements: function() {
    	var div = this.element;
    	var borderWeight = 0;
    	if(!this.options.properties.borderWeight) 
    		borderWeight = 2;
    	if(this.options.id) {
    		var div = new Element('div', {
    			'id':     this.options.id,
    			'width':  (this.options.properties.width + borderWeight),
    			'height': (this.options.properties.height + borderWeight)
        	}).inject(this.element);
    	}
    	
    	var canvas = new Element('canvas', {
			'id':     div.getProperty('id') + '-canvas',
			'width':  this.options.properties.width,
			'height': this.options.properties.height
    	}).inject(div);
    	
    	if (Browser.Engine.trident && this.exCanvas == 'excanvas'){
    		G_vmlCanvasManager.initElement(canvas);
    	}
    	return canvas.getContext('2d');
    },
    
    ucfirst: function(str) {
        var firstChar = str.charAt(0).toUpperCase();
        return firstChar + str.substr(1);
    },
    
    getVersion: function() {
    	return this.version;
    },
    
    getJsPath: function() {
    	return this.jsPath;
    },
    
    getClassName: function() {
    	return this.className;
    }
});