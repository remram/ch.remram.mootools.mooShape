/**
* extend the mooShape class
*/

var mooShapeTriangle = new Class({
	Extends	: mooShape,
	methods	: ['rotates'],
    
	draw: function() {
    	var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset + 5);
    	if(this.options.shape.rotate == '0') {
    		this.ctx.shape.fillStyle = this.options.shape.color;
    		this.ctx.shape.beginPath();			
    		this.ctx.shape.moveTo( 0 + this.borderWeight		, y - this.borderWeight);
    		this.ctx.shape.lineTo( (x/2)						, 0 +  this.borderWeight);
    		this.ctx.shape.lineTo( x - this.borderWeight		, y - this.borderWeight);
    		this.ctx.shape.closePath();
    	}
    },
    
    fill: function() {
    	if(this.options.shape.rotate == '0') {
    		this.ctx.shape.fill();
    	}
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
    
    rotates: function() {
    	if(this.options.shape.rotate != '0') {
    		var x = y = this.shapeWidth - (this.shadowBlur + this.shadowOffset + 5);
        	/*this.ctx.shape.translate(x+5,y);
            this.ctx.shape.rotate(90 * Math.PI/180);*/
    		
    		switch (this.options.shape.rotate) {
	      	  case '45': //45
	      		  this.ctx.shape.translate((x/4)*3,(y/4) );
	      		  this.ctx.shape.rotate(45 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	      	    break;
	      	  case '90': //90
	      		  this.ctx.shape.translate(x,0);
	      		  this.ctx.shape.rotate(90 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	      	    break;
	      	  case '135': //135
	      		  //this.ctx.shape.translate((size/0.842105263), (size/2));
	      		  this.ctx.shape.rotate(135 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	      	    break;
	      	  case '180':
	      		  //this.ctx.shape.translate(size, size);
	      		  this.ctx.shape.rotate(deg.toInt() * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	      	    break;
	      	  case '225': //225
	      		//this.ctx.shape.translate((size/2),(size/0.842105263));
	      		  this.ctx.shape.rotate(225 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	        	break;
	      	  case '270': //270
	      		//this.ctx.shape.translate(0,size);
	      		  this.ctx.shape.rotate(270 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	        	break;
	      	  case '315': //315
	      		//this.ctx.shape.translate(-(size/5.3),(size/2));
	      		  this.ctx.shape.rotate(315 * Math.PI/180);
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	        	break;
	      	  case '0': //0
	      		  if(this.options.verbose) console.info('Rotate shape: ' + this.options.shape.rotate + '°');
	        	break;
	      	  default:
	      		  if(this.options.verbose) console.error('Shape rotation error: ' + this.options.shape.rotate + '° , ' + 
	      				  'allowed are [0° (default), 45°, 90°, 135°, 180°, 225°, 270°, 315°]');
	      	    break;
	      	}
            
            this.ctx.shape.fillStyle = this.options.shape.color;
            this.ctx.shape.moveTo( 0 + this.borderWeight		, y - this.borderWeight);
    		this.ctx.shape.lineTo( (x/2)						, 0 +  this.borderWeight);
    		this.ctx.shape.lineTo( x - this.borderWeight		, y - this.borderWeight);
            this.ctx.shape.fill();
    	}
    	
        
    	/*this.ctx.shape.translate((this.shapeWidth/2),-(this.shapeWidth/5.3));
    	this.ctx.shape.rotate(315 * Math.PI/180);
    	this.ctx.shape.fill();*/
    }
});