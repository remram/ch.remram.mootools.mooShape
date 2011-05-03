/**
 * mooShape compatible with MooTools version 1.3
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
	jsPath    : './scripts/shapes/',
	className : 'mooShape',
	type      : 'title',
	titleSize : false,
	methods   : ['shadow', 'fill', 'stroke'],

	Implements: Options,
	
	options: {
		verbose: false,
		type: 'circle',
		actions: ['fill'],
		opacity: false,
		div: {
			id: 'mooshpe-div',
			style: 'mooshpe-div',
			x: 10,
			y: 10,
			width: 20,
			height: 20
		},
		shape : {
			id: 'mooshape-canvas',
			style: 'mooshape-canvas',
			rotate: '0',
			width: 20,
			height: 20,
			color: [255,0,0],
			shadowOffset: 1,
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
    	this.reorderActions(true);
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
    	this.options.shape.borderColor = 'rgba(' + this.getColorAsRGB(this.options.shape.borderColor) + ',' + opacity + ')';
    	
    	if(this.options.title.text) {
    		this.options.title.color = 'rgba(' + this.getColorAsRGB(this.options.title.color) + ',' + opacity + ')';
    		this.titleSize = this.options.title.size.toInt()*4 + (this.options.title.text.length * (this.options.title.size.toInt() * .3));
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
			title.init.apply(this);
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
			this.shape = new window[this.className]();
			//try to add extra methods as prepend and merge it to one array
			this.shape.extraMethods.combine(this.options.actions);
			//empty the action array
			this.options.actions.empty();
			//fill the action array
			this.options.actions = Array.clone(this.shape.extraMethods);
			//apply the draw method
			this.shape.draw.apply(this);
			//try to execute each method inside the action array
			Array.each(this.options.actions, function(value, index){
				try {
					this.shape[value].apply(this);
				} catch (oErr) {
		    		if(this.options.verbose) 
		    			console.error('Error: Method ( ' + 
		    					value + ' ) isn\'t implemented yet!'); 
		    	}
			}.bind(this));
		} catch (oErr) {
    		if(this.options.verbose) 
    			console.error('Error: Class ( ' + 
    					this.options.type + 
    					' @ ' + this.className + 
    					'.js ) not found!'); 
    	}
	},
	
	reorderActions: function(warn) {
		//make the array values as unique
		this.options.actions = this.options.actions.unique();
		
		//check methods
		Array.each(this.options.actions, function(value, index){
			if(!this.methods.contains(value)) {
				if(this.options.verbose) 
	    			console.error('Error: You are calling unknown method [' + value + ']!'); 
			}	    		
		}.bind(this));
		
		//check the joining between shadow and stroke
		if(this.options.actions.contains('shadow') && this.options.actions.contains('stroke')) {
			this.options.actions.erase('stroke');
			if(this.options.verbose && warn) 
    			console.warn('Warning: You are just allowed to shadow or to stroke a shape!'); 
		}
		
		//check if only shadow was activated
		if(this.options.actions.length == 1 && this.options.actions.contains('shadow')) {
			if(this.options.verbose && warn) 
    			console.warn('Warning: You are trying to shadow a shape without to filling it!');
			
			return false;
		}
		
		//clone the original array
		var tempArray        = Array.clone(this.options.actions);
		
		//empty the original array
		this.options.actions.empty();
		
		//iterate the methods array and include the values to the action array
		Array.each(this.methods, function(value, index){
			if(tempArray.contains(value)) {
				this.options.actions.include(value);
			}
		}.bind(this));
		
		return true;
	},
	
	execMethod: function(methodName) {
		//alert(this.className +' , '+ methodName);
		try {
			this.shape = new window[this.className]();
			this.shape.draw.apply(this);
			this.shape[methodName].apply(this);
		} catch (oErr) {
    		if(this.options.verbose) 
    			console.error('Error: Method ( ' + 
    					methodName + ' ) isn\'t implemented yet!'); 
    	}
	},
    
    createShapeElements: function() {
    	var canvas        = {};
    	var specialTypes  = ['circle','star','triangle','arrow'];
    	var div           = this.element;
    	this.shadowBlur    = 0;
    	this.shadowOffset  = 0;
    	this.borderWeight = 0;
    	
    	if(this.options.actions.contains('shadow')) {
    		this.shadowOffset = this.options.shape.shadowOffset;
    		this.shadowBlur   = this.options.shape.shadowBlur*0.1;
    	}
    	
    	if(this.options.actions.contains('stroke')) {
    		(this.options.shape.borderWeight > 10) ? this.borderWeight = 10 : this.borderWeight = this.options.shape.borderWeight;
    	}

    	var left = 0;
    	var top  = 0;
    	this.shapeWidth  = this.options.shape.width + this.shadowBlur + this.shadowOffset;
    	this.shapeHeight = this.options.shape.height + this.shadowBlur + this.shadowOffset;
    	
    	
    	if(specialTypes.contains(this.options.type)) {
    		if(this.options.type == 'circle') {
    			this.shapeWidth  = (this.options.shape.width * 2) + this.shadowBlur + this.shadowOffset + (this.borderWeight * 2);
            	this.shapeHeight = (this.options.shape.width * 2) + this.shadowBlur + this.shadowOffset + (this.borderWeight * 2);
    		} else if(specialTypes.contains(this.options.type)) {
    			this.shapeWidth  = this.shapeHeight = this.options.shape.width + 
    												this.shadowBlur + this.shadowOffset + 
    												this.borderWeight;
    		} 
    	}
    	
		this.options.div.width  += this.shapeWidth;
		this.options.div.height += this.shapeHeight;
		
    	if(this.options.title.text) {    		
    		left = (this.options.div.width  / 2) - (this.shapeWidth / 2);
    		top  = (this.options.div.height / 2) - (this.shapeHeight / 2);
    	}
    	
    	if(this.options.div.id) {
    		var div = new Element('div', {
    			'id'     : this.options.div.id,
    			'class'  : this.options.div.style
        	}).inject(this.element).setStyles({
        		'position' : 'relative',
        		/*'border'   : 'solid 1px red',*/
        		'width'    : this.options.div.width,
        	    'height'   : this.options.div.height,
        	    'top'      : this.options.div.y,
        	    'left'     : this.options.div.x
        	});
    	}
    	
    	if(this.options.title.text) {
    		this.titleProperty = new Hash({
    				'pos': {
    					'x': (this.shapeWidth / 2) - (this.titleSize / 2),
        				'y': -this.titleSize
    				},
    				'size': this.titleSize,
    				'shape': {
    					'width': this.shapeWidth,
    					'height': this.shapeHeight
    				}
    		});
    		
    		var canvTitle = new Element('canvas', {
    			'id'     : this.options.title.id,
    			'width'  : this.titleSize,
    			'height' : this.titleSize,
    			'class'  : this.options.title.style 
        	}).inject(div).setStyles({
        		'position' : 'absolute',
        		'border'   : 'solid 1px yellow',
        		'width'    : this.titleSize,
        	    'height'   : this.titleSize,
        	    'top'      : this.titleProperty.pos.y,
        	    'left'     : this.titleProperty.pos.x
        	});
    		
    		this.titleProperty.extend({
    			'element': canvTitle
    		});
    		
    		if (Browser.ie && Browser.version < 9){
        		G_vmlCanvasManager.initElement(canvTitle);
        	}
    		Object.append(canvas, {'title': canvTitle.getContext('2d')});
    	}
    	
    	var canvShape = new Element('canvas', {
			'id'     : this.options.shape.id,
			'width'  : this.shapeWidth,
			'height' : this.shapeHeight,
			'class'  : this.options.shape.style
    	}).inject(div).setStyles({
    		'position' : 'absolute',
    		'border'   : 'solid 1px blue',
    	    'top'      : top,
    	    'left'     : left
    	});
    	
    	if (Browser.ie && Browser.version < 9){
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
    
    getOptions: function() {
    	return this.options;
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