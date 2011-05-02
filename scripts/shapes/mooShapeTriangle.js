/**
* extend the mooShape class
*/

var mooShapeTriangle = new Class({
	Extends	: mooShape,
	methods	: ['rotate'],
	
	draw: function() {
    	var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset + 5);
    	this.ctx.shape.fillStyle = this.options.shape.color;
		this.ctx.shape.beginPath();			
		this.ctx.shape.moveTo( 0 + this.borderWeight		, y - this.borderWeight);
		this.ctx.shape.lineTo( (x/2)						, 0 +  this.borderWeight);
		this.ctx.shape.lineTo( x - this.borderWeight		, y - this.borderWeight);
		this.ctx.shape.closePath();
    },
    
    fill: function() {
    	alert(this.methods);
    	this.ctx.shape.fill();
    },
    
    stroke: function() {
    	this.ctx.shape.lineWidth     = this.borderWeight;
		this.ctx.shape.strokeStyle   = this.options.shape.borderColor;
		this.ctx.shape.stroke();
    },
    
    shadow: function() {
    	this.ctx.shape.shadowColor   = this.options.shape.shadowColor;
		this.ctx.shape.shadowBlur    = this.options.shape.shadowBlur;
		this.ctx.shape.shadowOffsetX = this.options.shape.shadowOffset;
		this.ctx.shape.shadowOffsetY = this.options.shape.shadowOffset;
    },
    
    rotate: function() {
    	console.warn(this.options.shape.rotate);
    	this.ctx.shape.translate((this.shapeWidth/2),-(this.shapeWidth/5.3));
    	this.ctx.shape.rotate(45 * Math.PI/180);
    }
});