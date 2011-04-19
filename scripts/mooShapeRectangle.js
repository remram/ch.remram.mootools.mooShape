var mooShapeRectangle = new Class({
	Extends: mooShape,
	
	initialize: function(el, ctx, options){
    	this.element = $(el); if (!this.element) return;
    	this.ctx = ctx;
    	this.setOptions(options);    	
    	this.methodOverload(
    			this,
    			'draw',
    			[
    			 	function(width,height){
    			 		var x = 0, y = 0;
    			 		this.ctx.fillStyle = this.options.shape.rgb;
    					this.ctx.beginPath();
    					this.ctx.moveTo(x, y);
    					this.ctx.lineTo(x, y + height);
    					this.ctx.lineTo(x + width, y + height);
    					this.ctx.lineTo(x + width, y);
    					this.ctx.lineTo(x, y);
    					this.ctx.fill();    			 		
    			 	},
    			 	
    			 	function(width,height,rgb){
    			 		var x = 0, y = 0;
    			 		this.ctx.fillStyle = rgb;
    					this.ctx.beginPath();
    					this.ctx.moveTo(x, y);
    					this.ctx.lineTo(x, y + height);
    					this.ctx.lineTo(x + width, y + height);
    					this.ctx.lineTo(x + width, y);
    					this.ctx.lineTo(x, y);
    					this.ctx.fill();
    			 	},
    			 	
    			 	function(width,height,rgb,d){
    			 		var x = 0, y = 0;
    			 		this.ctx.fillStyle = rgb;
    					this.ctx.beginPath();
    					this.ctx.moveTo(x, y);
    					this.ctx.lineTo(x, y + height);
    					this.ctx.lineTo(x + width, y + height);
    					this.ctx.lineTo(x + width, y);
    					this.ctx.lineTo(x, y);
    					this.ctx.fill();
    			 	},
    			 	
    			 	function(a,b,c,d,e){
    			 		
    			 	}
    			]
    	);
    }
});