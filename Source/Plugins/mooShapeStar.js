/*
---
description: mooShapeStar, creates an star shape.

license: MIT-style

authors:
- Ramy Hasan (http://www.solexperts.com)

requires:
- mooShape/1.0: '*'

provides: [mooShapeStar]

...
*/

var mooShapeStar = new Class({
	Extends			: mooShape,
	prependMethods	: [],
	appendMethods	: [],
	
	draw: function() {
    	var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset);
    	this.ctx.shape.fillStyle = this.options.shape.color;
		this.ctx.shape.beginPath();			
		this.ctx.shape.moveTo( 0 + this.borderWeight		, y - this.borderWeight);
		this.ctx.shape.lineTo( (x/2)						, 0 +  this.borderWeight);
		this.ctx.shape.lineTo( x - this.borderWeight		, y - this.borderWeight);
		this.ctx.shape.lineTo( 0 + this.borderWeight		, (y/3) + this.borderWeight);
		this.ctx.shape.lineTo( x - this.borderWeight		, (y/3) + this.borderWeight);
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
		this.ctx.shape.fill();
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