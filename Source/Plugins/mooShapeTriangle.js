/**
* extend the mooShape class
*/

var mooShapeTriangle = new Class({
	Extends			: mooShape,
	prependMethods	: ['rotate','drawIt'],
	appendMethods	: [],
    
	draw: function() {
		return true;
    },
    
    fill: function() {
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
    
    drawIt: function() {
    	var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset);
    	this.ctx.shape.fillStyle = this.options.shape.color;
		this.ctx.shape.beginPath();
		this.ctx.shape.moveTo( 0 + this.borderWeight		, 0 + this.borderWeight);
		this.ctx.shape.lineTo( x - this.borderWeight		, (y/2));
		this.ctx.shape.lineTo( 0 + this.borderWeight		, y - this.borderWeight);
		this.ctx.shape.closePath();   	
    },
    
    rotate: function() {
    	var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset);
    	switch (this.options.shape.rotate) {
    	  case '90': //90
    		  this.ctx.shape.translate(0,y);
    		  this.ctx.shape.rotate(270 * Math.PI/180);
    		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
    	    break;
    	  case '180':
    		  this.ctx.shape.translate(x, y);
    		  this.ctx.shape.rotate(180 * Math.PI/180);
    		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
    	    break;
    	  case '270': //270
    		  this.ctx.shape.translate(x,0);
    		  this.ctx.shape.rotate(90 * Math.PI/180);
    		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
    		break;
    	  case '0': //0
    		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
    		break;
    	  default:
    		  if(this.options.verbose) console.error('Shape rotation error: ' + this.options.shape.rotate + '° , ' + 
    				  'allowed are [0° (default), 90°, 180°, 270°]');
    	    break;
    	}
    }
});