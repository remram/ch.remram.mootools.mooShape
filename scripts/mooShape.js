/**
 * mooShape
 *
 * You can create different shape types and you are able to extend the class
 * by other shape types
 * 
 * Please feel free, to extend and improve this class! 
 *
 * @version		1.0
 *
 * @license		MIT-style license
 * @author		Ramy Hasan <ramy [dot] hasan [at] solexperts [dot] com>
 * @copyright	Solexperts AG
 */

var mooShape = new Class({
	version   : '1.0',
	jsPath    : './scripts/',	
	files     : new Hash(),
	className : 'mooShape',
	exCanvas  : 'excanvas',
	type      : 'title',
	titleSize : false,

	Implements: Options,
	
	options: {
		verbose: false,
		type: 'circle',
		opacity: false,
		div: {
			id: false,
			style: 'mooshpe-div',
			x: false,
			y: false,
			width: false,
			height: false
		},
		shape : {
			id: 'mooshape-canvas',
			style: 'mooshape-canvas',
			width: 20,
			height: 20,
			color: false,
			rgb: [255,0,0],
			borderColor: false,
			borderRGB: false,
			borderWeight: false
		},
		title: {
			id: 'mooshape-title',
			style: 'mooshape-title',
			rotate: '0',
			text: false,
			color: false,
			rgb: [255,0,0],
			align: 'center',
			baseline: 'middle',
			font: 'serif',
			size: 10
		}
	},

    initialize: function(el, options){
    	this.element = $(el); if (!this.element) return;
    	this.setOptions(options);
    	this.prepareOptions();
    	this.createShapeElements();
    	this.assetJsFile();
    },
    
    prepareOptions: function() {
    	var opacity = 1;
    	if(this.options.opacity) {
    		opacity = this.options.opacity;
    	}
    	
    	if(this.options.shape.color) {
    		this.options.shape.rgb = 'rgba(' + this.options.shape.color.hexToRgb(true) + ',' + opacity + ')';
    	} else {
    		this.options.shape.rgb = 'rgba(' + this.options.shape.rgb + ',' + opacity + ')';
    	}
    	
    	if(this.options.title.text) {
    		if(this.options.title.color) {
        		this.options.title.rgb = 'rgba(' + this.options.title.color.hexToRgb(true) + ',' + opacity + ')';
        	} else {
        		this.options.title.rgb = 'rgba(' + this.options.title.rgb + ',' + opacity + ')';
        	}
    		
    		this.titleSize = this.options.title.size.toInt()*4;
    	}
    	
    	
    	//reset variable
    	this.options.shape.color   = false;
    	this.options.title.color   = false;
    },
	
	assetSystemJsFiles: function() {
		this.className = 'mooShape' + this.ucFirst(this.type);
		var source = this.jsPath + this.className + '.js';
		
		if (this.files[source] == 'loaded'){
			this.initSystemClass.delay(100, this);
			return true;
		}
		
		// If the class wasn't loaded, we try to load by the Asset method
		this.files[source] = 'loaded';
		Asset.javascript(source, {
			onload: function(){
				this.initSystemClass();
		    }.bind(this)
		});
		
		return true;
	},
	
	initSystemClass: function() {
		this.className = 'mooShape' + this.ucFirst(this.type);
		try {
			var title = new window[this.className]();
			title.init.apply(this, this.getOptionsArr(this.options.title));
			title.rotate(this.options.title.rotate, this.ctx.title, this.titleSize, this.options.verbose);
			title.plot(this.options.title.text, this.ctx.title, this.titleSize);
			
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.log('Error: Class ( ' + 
    					this.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
    	return true;
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
    	this.className = 'mooShape' + this.ucFirst(this.options.type);
    	/**
    	 * Contains the source path of the shape class
    	 * As example: source = "./scripts/mooShapeCircle.js"
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
		
		return true;
	},
	
	initClass: function() {
		this.className = 'mooShape' + this.ucFirst(this.options.type);
		try {
			var shape = new window[this.className](this.element, this.options);
			shape.draw.apply(this, this.getOptionsArr(this.options.shape));        	
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.log('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
    	return true;
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
    
    getOptionsArr: function(options) {
    	var propertyValues = new Hash(options);
    	//erase the id and style key
    	propertyValues.erase('id');
    	propertyValues.erase('style');

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
    	var canvas       = new Hash();
    	var div          = this.element;
    	var borderWeight = 0;
    	
    	/*if(!this.options.shape.borderWeight) 
    		borderWeight = 2;*/

    	var left = 0;
    	var top  = 0;
		this.options.div.width  += (this.options.shape.width  + borderWeight);
		this.options.div.height += (this.options.shape.height + borderWeight);
    	if(this.options.title.text) {
    		this.options.div.width  += this.titleSize  * 2;
    		this.options.div.height += this.titleSize * 2;
    		
    		left = (this.options.div.width  / 2) - ( (this.options.shape.width  + borderWeight) / 2);
    		top  = (this.options.div.height / 2) - ( (this.options.shape.height + borderWeight) / 2);
    	}
    	
    	if(this.options.div.id) {
    		var div = new Element('div', {
    			'id'     : this.options.div.id,
    			'class'  : this.options.div.style
        	}).inject(this.element).setStyles({
        		position : 'relative',
        		border   : '1px solid red',
        		width    : this.options.div.width,
        	    height   : this.options.div.height
        	});
    	}
    	
    	if(this.options.title.text) {
    		var canvTitle = new Element('canvas', {
    			'id'     : this.options.title.id,
    			'width'  : this.titleSize,
    			'height' : this.titleSize,
    			'class'  : this.options.title.style 
        	}).inject(div).setStyles({
        		position : 'absolute',
        		border   : '1px solid blue',
        		width    : this.titleSize,
        	    height   : this.titleSize,
        	    top      : 0,
        	    right    : 0
        	});
    		
    		if (Browser.Engine.trident && this.exCanvas == 'excanvas'){
        		G_vmlCanvasManager.initElement(canvTitle);
        	}
    		
    		canvas.extend({'title': canvTitle.getContext('2d')});
    	}
    	
    	var canvShape = new Element('canvas', {
			'id'     : this.options.shape.id,
			'width'  : this.options.shape.width,
			'height' : this.options.shape.height,
			'class'  : this.options.shape.style
    	}).inject(div).setStyles({
    		position : 'absolute',
    	    top      : top,
    	    left     : left
    	});
    	
    	if (Browser.Engine.trident && this.exCanvas == 'excanvas'){
    		G_vmlCanvasManager.initElement(canvShape);
    	}
    	
    	canvas.extend({'shape': canvShape.getContext('2d')});
    	
    	this.ctx = canvas;
    	
    	if(this.options.title.text) {
    		this.assetSystemJsFiles();
    	}
    },
    
    ucFirst: function(str) {
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
    },
    
    setType: function(type) {
    	this.type = type;
    	return true;
    },
    
    setClassType: function(type) {
    	this.options.type = type;
    	return true;
    }
});