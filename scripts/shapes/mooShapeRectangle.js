var mooShapeRectangle = new Class({
	Extends			: mooShape,
	extraMethods	: [],
    
    draw: function() {
    	var x = y = 0;
 		this.ctx.shape.fillStyle = this.options.shape.color;
		this.ctx.shape.beginPath();
		this.ctx.shape.moveTo(x								, y);
		this.ctx.shape.lineTo(x								, y + this.options.shape.height);
		this.ctx.shape.lineTo(x + this.options.shape.width	, y + this.options.shape.height);
		this.ctx.shape.lineTo(x + this.options.shape.width	, y);
		this.ctx.shape.lineTo(x								, y); 
		this.ctx.shape.closePath();
		return true;
    },
    
    fill: function() {
    	this.ctx.shape.fill();
		return true;
    },
    
    stroke: function() {
    	this.ctx.shape.lineWidth     = this.borderWeight;
		this.ctx.shape.strokeStyle   = this.options.shape.borderColor;
		this.ctx.shape.stroke();
		return true;
    },
    
    shadow: function() {
    	this.ctx.shape.shadowColor   = this.options.shape.shadowColor;
		this.ctx.shape.shadowBlur    = this.options.shape.shadowBlur;
		this.ctx.shape.shadowOffsetX = this.options.shape.shadowOffset;
		this.ctx.shape.shadowOffsetY = this.options.shape.shadowOffset;
		return true;
    }
});