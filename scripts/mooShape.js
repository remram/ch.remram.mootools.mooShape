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
	className : 'mooShape',
	type      : 'title',
	titleSize : false,
	methods: ['fill', 'stroke', 'shadow', 'replot'],

	Implements: Options,
	
	options: {
		verbose: false,
		type: 'circle',
		actions: [1],
		opacity: false,
		div: {
			id: 'mooshpe-div',
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
			color: [255,0,0],
			shadow: false,
			shadowOffset: 5,
			shadowBlur: 5,
			shadowColor: [187,187,187],
			borderWeight: 1,
			borderColor: [0,0,0]
		},
		title: {
			id: 'mooshape-title',
			style: 'mooshape-title',
			rotate: '0',
			text: false,
			color: [255,0,0],
			align: 'top',
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
    	
    	if(this.options.shape.shadowBlur == 0) {
    		this.options.shape.shadowBlur = 5;
    	}
    	
    	this.options.shape.color = 'rgba(' + this.getColorAsRGB(this.options.shape.color) + ',' + opacity + ')';
    	this.options.shape.shadowColor = 'rgba(' + this.getColorAsRGB(this.options.shape.shadowColor) + ',' + opacity + ')';
    	
    	if(this.options.title.text) {
    		this.options.title.color = 'rgba(' + this.getColorAsRGB(this.options.title.color) + ',' + opacity + ')';
    		this.titleSize = this.options.title.size.toInt()*4 + (this.options.title.text.length * (this.options.title.size.toInt() * .3));
    	}
    	
    	if(this.options.shape.borderColor == false) {
    		this.options.shape.borderColor = 'rgba(' + this.getColorAsRGB(this.options.shape.borderColor) + ',' + opacity + ')';
    	}
    },
	
	assetSystemJsFiles: function() {
		this.className = 'mooShape' + this.ucFirst(this.type);
		var source = this.jsPath + this.className + '.js';

		if($(this.className + '-jsfile')) {
			this.initSystemClass.delay(100, this);
			return true;
		}
		
		// If the class wasn't loaded, we try to load by the Asset method
		Asset.javascript(source, {
			id: this.className + '-jsfile',
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
			title.alignment(this.options.title, this.titleProperty, this.options.verbose);
			title.plot(this.options.title.text, this.ctx.title, this.titleSize);
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.error('Error: Class ( ' + 
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
		if($(this.className + '-jsfile')) {
			this.initClass.delay(100, this);
			return true;
		}
		
		// If the class wasn't loaded, we try to load by the Asset method
		Asset.javascript(source, {
			id: this.className + '-jsfile',
			onload: function(){
				this.initClass();
		    }.bind(this)
		});
		
		return true;
	},
	
	initClass: function() {
		this.className = 'mooShape' + this.ucFirst(this.options.type);
		try {
			var shape = new window[this.className]();
			shape.draw.apply(this);
			Array.each(this.options.actions, function(dig, key){
				var methodKey = dig - 1;
				var foundedMethod = false;
	    		Array.each(this.methods, function(value, index){
	    			if(index == methodKey) {
	    				foundedMethod = true;
	    				try {
	    					shape[value].apply(this);
	    				} catch (oErr) {
	    		    		if(this.options.verbose) 
	    		    			console.error('Error: Method ( ' + 
	    		    					value + ' ) isn\'t implemented yet!'); 
	    		    	}
	    			}
	    		}.bind(this));
	    		
	    		if(!foundedMethod) {
	    			if(this.options.verbose) 
		    			console.error('Error: You are calling unknown method!'); 
	    		}
	    		
			}.bind(this));
		} catch (oErr) {
    		if(this.options.verbose) 
    			console.error('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
		//shape[checkMethodKey(key)]();
		
		
		/*this.className = 'mooShape' + this.ucFirst(this.options.type);
		try {
			//var shape = new window[this.className]();
			console.log(this.methods);
			
			//shape.draw.apply(this, this.getOptionsArr(this.options.shape));        	
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.log('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
    	return true;*/
	}/*,
	
	initClass: function() {
		this.className = 'mooShape' + this.ucFirst(this.options.type);
		try {
			var shape = new window[this.className]();
			shape.draw.apply(this, this.getOptionsArr(this.options.shape));        	
    	} catch (oErr) {
    		if(this.options.verbose) 
    			console.log('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
    	return true;
	}*/,
	
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
        switch (typeOf(fn)) {
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
		
		if(this.options.verbose) {
			console.log(this.options.type + ' - Counted parameters = ' + argArray.length + ' => [' + argArray + ']');
		}
		
		return argArray;
    },
    
    createShapeElements: function() {
    	var canvas       = {};
    	var div          = this.element;
    	var borderWeight = 0;
    	var shadow       = 0;
    	
    	if(this.options.shape.shadow) 
    		shadow = this.options.shape.shadowOffset + 3;
    	
    	

    	var left = 0;
    	var top  = 0;
    	var shapeWidth  = this.options.shape.width  + borderWeight;
    	var shapeHeight = this.options.shape.height + borderWeight;    	
		this.options.div.width  += shapeWidth;
		this.options.div.height += shapeHeight;
		
    	if(this.options.title.text) {    		
    		left = (this.options.div.width  / 2) - (shapeWidth / 2);
    		top  = (this.options.div.height / 2) - (shapeHeight / 2);
    	}
    	
    	if(this.options.div.id) {
    		var div = new Element('div', {
    			'id'     : this.options.div.id,
    			'class'  : this.options.div.style
        	}).inject(this.element).setStyles({
        		position : 'relative',
        		width    : (this.options.div.width + shadow),
        	    height   : (this.options.div.height + shadow),
        	    top      : this.options.div.y,
        	    left     : this.options.div.x
        	});
    	}
    	
    	if(this.options.title.text) {
    		this.titleProperty = new Hash({
    				'pos': {
    					'x': (shapeWidth / 2) - (this.titleSize / 2),
        				'y': -this.titleSize
    				},
    				'size': this.titleSize,
    				'shape': {
    					'width': shapeWidth,
    					'height': shapeHeight
    				}
    		});
    		
    		var canvTitle = new Element('canvas', {
    			'id'     : this.options.title.id,
    			'width'  : this.titleSize,
    			'height' : this.titleSize,
    			'class'  : this.options.title.style 
        	}).inject(div).setStyles({
        		position : 'absolute',
        		width    : this.titleSize,
        	    height   : this.titleSize,
        	    top      : this.titleProperty.pos.y,
        	    left     : this.titleProperty.pos.x
        	});
    		
    		this.titleProperty.extend({
    			'element': canvTitle
    		});
    		
    		if (Browser.ie){
        		G_vmlCanvasManager.initElement(canvTitle);
        	}
    		Object.append(canvas, {'title': canvTitle.getContext('2d')});
    	}
    	
    	var canvShape = new Element('canvas', {
			'id'     : this.options.shape.id,
			'width'  : (this.options.shape.width + shadow),
			'height' : (this.options.shape.height + shadow),
			'class'  : this.options.shape.style
    	}).inject(div).setStyles({
    		position : 'absolute',
    	    top      : top,
    	    left     : left
    	});
    	
    	if (Browser.ie){
    		G_vmlCanvasManager.initElement(canvShape);
    	}
    	
    	Object.append(canvas, {'shape': canvShape.getContext('2d')});
    	
    	this.ctx = canvas;
    	
    	if(this.options.title.text) {
    		this.assetSystemJsFiles();
    	}
    },
    
    /**
     * Convert the first char to capital
     * @param str
     * @returns
     */    
    ucFirst: function(str) {
    	var word = str.toLowerCase();
        var firstChar = word.charAt(0).toUpperCase();
        return firstChar + word.substr(1);
    },
    
    /**
     * This function try to convert a hex color such as #f00 to rgb like [255,0,0]
     * @param color
     * @returns color as [0-255,0-255,0-255]
     */
    getColorAsRGB: function(color) {
    	if(/^(#){1}?[0-9a-fA-F]{3,6}/.test(color)) {
    		return color.hexToRgb(true);
    	}
    	return color;
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