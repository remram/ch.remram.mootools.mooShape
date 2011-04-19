var mooShapeRectangle = new Class({
	Extends: mooShape,
	
	initialize: function(el, options){
    	this.element = $(el); if (!this.element) return;
    	this.setOptions(options);    	
    	this.methodOverload(
    			this,
    			'draw',
    			[
    			 	function(width,height){
    			 		var x = 0, y = 0;
    			 		this.ctx.shape.fillStyle = this.options.shape.rgb;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + height);
    					this.ctx.shape.lineTo(x + width, y + height);
    					this.ctx.shape.lineTo(x + width, y);
    					this.ctx.shape.lineTo(x, y);
    					this.ctx.shape.fill();
    					return true;
    			 	},
    			 	
    			 	function(width,height,rgb){
    			 		var x = 0, y = 0;
    			 		this.ctx.shape.fillStyle = rgb;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + height);
    					this.ctx.shape.lineTo(x + width, y + height);
    					this.ctx.shape.lineTo(x + width, y);
    					this.ctx.shape.lineTo(x, y);
    					this.ctx.shape.fill();
    					return true;
    			 	},
    			 	
    			 	function(width,height,rgb,d){
    			 		var x = 0, y = 0;
    			 		this.ctx.shape.fillStyle = rgb;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + height);
    					this.ctx.shape.lineTo(x + width, y + height);
    					this.ctx.shape.lineTo(x + width, y);
    					this.ctx.shape.lineTo(x, y);
    					this.ctx.shape.fill();
    					return true;
    			 	},
    			 	
    			 	function(a,b,c,d,e){
    			 		
    			 	}
    			]
    	);
    }
});