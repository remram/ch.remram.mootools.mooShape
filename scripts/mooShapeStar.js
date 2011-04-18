/**
* extend the mooShape class
*/

var mooShapeStar = new Class({
	Extends: mooShape,
	
    initialize: function(el, ctx, options){
    	this.element = $(el); if (!this.element) return;
    	this.ctx = ctx;
    	this.setOptions(options);    	
    	this.methodOverload(
    			this,
    			'draw',
    			[
    			 	function(a){
    			 		//console.log(arguments.length, this.options.properties.width);
    			 	},
    			 	
    			 	function(a,b){
    			 		//console.log(arguments.length, this.options.properties.width,this.options.properties.height);
    			 	},
    			 	
    			 	function(a,b,c){
    			 		//console.log(arguments.length, this.options.properties.width,this.options.properties.height,this.options.properties.color);
    			 	},
    			 	
    			 	function(a,b,c,d){
    			 		//console.log(arguments.length, this.options.properties.width,this.options.properties.height,this.options.properties.color,this.options.properties.bColor);
    			 		console.log(a,b,c,d);
    			 	},
    			 	
    			 	function(a,b,c,d,e){
    			 		//console.log(arguments.length, this.options.properties.width,this.options.properties.height,this.options.properties.color,this.options.properties.bColor,this.options.properties.x);
    			 	}
    			]
    	);
    }
});