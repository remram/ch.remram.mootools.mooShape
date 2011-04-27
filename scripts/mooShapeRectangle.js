var mooShapeRectangle = new Class({
	Extends: mooShape,
	
	initialize: function(){ 	
    	this.methodOverload(
    			this,
    			'draw3',
    			[
    			 	function(a,b){
    			 		var x = y = 0;
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + height);
    					this.ctx.shape.lineTo(x + width, y + height);
    					this.ctx.shape.lineTo(x + width, y);
    					this.ctx.shape.lineTo(x, y);
    					this.ctx.shape.fill();
    					return true;
    			 	},
    			 	
    			 	/**
    			 	 * draw without border and shadow
    			 	 */
    			 	function(a,b,c,d,e,f){
    			 		var x = y = 0;
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y);
    					this.ctx.shape.lineTo(x, y);   					
    					this.ctx.shape.fill();    					
    					
    					return true;
    			 	},
    			 	
    			 	/**
    			 	 * draw without border
    			 	 */
    			 	function(a,b,c,d,e,f,g){
    			 		var x = y = 0;
    					
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y);
    					this.ctx.shape.lineTo(x, y);
    					
    					this.ctx.shape.fill();
    					
    					return true;
    			 	},
    			 	
    			 	/**
    			 	 * draw with shadow and without border
    			 	 */
    			 	function(a,b,c,d,e,f,g,h){
    			 		var x = y = 0;
    					
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y);
    					this.ctx.shape.lineTo(x, y);
    					
    					//shadow
    					this.ctx.shape.shadowColor   = this.options.shape.shadowColor;
    					this.ctx.shape.shadowBlur    = this.options.shape.shadowBlur;
    					this.ctx.shape.shadowOffsetX = this.options.shape.shadowOffset;
    					this.ctx.shape.shadowOffsetY = this.options.shape.shadowOffset;
    					
    					this.ctx.shape.fill();
    					
    					return true;
    			 	},
    			 	
    			 	/**
    			 	 * draw without shadow and with border
    			 	 */
    			 	/*function(a,b,c,d,e,f,g,h,i){
    			 		var x = y = 0;
    					
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y);
    					this.ctx.shape.lineTo(x, y);
    					
    					//border
    					this.ctx.shape.lineWidth     = this.options.shape.borderWeight;
    					this.ctx.shape.strokeStyle   = this.options.shape.borderColor;
    					
    					this.ctx.shape.fill();
    					this.ctx.shape.stroke();
    					
    					return true;
    			 	},*/
    			 	
    			 	/**
    			 	 * draw with border and shadow
    			 	 */
    			 	function(a,b,c,d,e,f,g,h,i){
    			 		var x = y = 0;
    					
    			 		this.ctx.shape.fillStyle = this.options.shape.color;
    					this.ctx.shape.beginPath();
    					this.ctx.shape.moveTo(x, y);
    					this.ctx.shape.lineTo(x, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
    					this.ctx.shape.lineTo(x + this.options.shape.width, y);
    					this.ctx.shape.lineTo(x, y);
    					
    					//shadow
    					this.ctx.shape.shadowColor   = this.options.shape.shadowColor;
    					this.ctx.shape.shadowBlur    = this.options.shape.shadowBlur;
    					this.ctx.shape.shadowOffsetX = this.options.shape.shadowOffset;
    					this.ctx.shape.shadowOffsetY = this.options.shape.shadowOffset;
    					
    					this.ctx.shape.fill();
    					
    					//border
    					/*this.ctx.shape.lineWidth     = this.options.shape.borderWeight;
    					this.ctx.shape.strokeStyle   = this.options.shape.borderColor;
    					this.ctx.shape.stroke();*/
    					
    					return true;
    			 	}
    			]
    	);
    },
    
    draw: function() {
    	//console.log('I DRAW SOMTHIMG! -- ' + this.options.shape.width);
    	var x = y = 0;
 		this.ctx.shape.fillStyle = this.options.shape.color;
		this.ctx.shape.beginPath();
		this.ctx.shape.moveTo(x, y);
		this.ctx.shape.lineTo(x, y + this.options.shape.height);
		this.ctx.shape.lineTo(x + this.options.shape.width, y + this.options.shape.height);
		this.ctx.shape.lineTo(x + this.options.shape.width, y);
		this.ctx.shape.lineTo(x, y); 
    },
    
    fill: function() {
    	this.ctx.shape.fill();
    },
    
    stroke: function() {
    	this.ctx.shape.lineWidth     = this.options.shape.borderWeight;
		this.ctx.shape.strokeStyle   = this.options.shape.borderColor;
		this.ctx.shape.stroke();
    },
    
    shadow: function() {
    	this.ctx.shape.shadowColor   = this.options.shape.shadowColor;
		this.ctx.shape.shadowBlur    = this.options.shape.shadowBlur;
		this.ctx.shape.shadowOffsetX = this.options.shape.shadowOffset;
		this.ctx.shape.shadowOffsetY = this.options.shape.shadowOffset;
    }
    
});