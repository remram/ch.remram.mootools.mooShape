var mooShapeTitle = new Class({
	Extends: mooShape,
    
    init: function() {
    	this.ctx.title.font         = this.options.title.size 
			+ 'px ' 
			+ this.options.title.font;
		this.ctx.title.fillStyle    = this.options.title.color;
		this.ctx.title.textBaseline = 'middle';
		this.ctx.title.textAlign    = 'center'; 
		
		return true;
    },
    
    plot: function(text, ctx, size) {
    	ctx.fillText(text, (size/2), (size/2) );
    	return true;
    },
    
    alignment: function(title, property, verbose) {
    	var x = property.pos.x;
    	var y = property.pos.y;
    	
    	switch (title.align) {
    	case 'top':
	  		  x = (property.shape.width / 2) - (property.size / 2);
	  		  y = property.pos.y + (property.size / 2.8);
	  		  property.element.setStyles({
	  			  'top'  : y,
	  			  'left' : x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'right':
	  		  x = property.shape.width;
	  		  y = (property.shape.height / 2) - (property.size / 2);
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'bottom':
	  		  x = (property.shape.width / 2) - (property.size / 2);
	  		  y = property.shape.height;
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'left':
	  		  x = -property.size;
	  		  y = (property.shape.height / 2) - (property.size / 2);
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'top-left':
	  		  x = -property.size;
	  		  y = -property.size;
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'top-right':
	  		  x = property.shape.width;
	  		  y = -property.size;
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'bottom-left':
	  		  x = -property.size;
	  		  y = property.shape.height;
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  case 'bottom-right':	  		  
	  		  x = property.shape.width;
	  		  y = property.shape.height;
	  		  var coordinate = this.getCoordinate(x,y,title, property);
	  		  property.element.setStyles({
	  			  'top'  : coordinate.y,
	  			  'left' : coordinate.x	  			  
	  		  });
	  		  if(verbose) console.log('Align title: ' + title.align);
	  	    break;
	  	  default:
	  		  if(verbose) console.log('Title alignment error: ' + title.align + 
	  				  ', allowed are [top (default), right, bottom, left, top-left, ' + 
	  				  'top-right, bottom-left, bottom-right]');
	  	    break;
	  	}    	
    },
    
    getCoordinate: function(x,y,title, property) {    	
    	if(title.rotate == '45' || title.rotate == '225') {
    		if(title.align == 'bottom-right') {
    			x -= property.size / 2.5;
    	    	y -= property.size / 2.5;
    		} else if(title.align == 'top-left') {
    			x += property.size / 2.5;
    	    	y += property.size / 2.5;
    		}
    	} else if(title.rotate == '135' || title.rotate == '315') {
    		if(title.align == 'bottom-left') {
    			x += property.size / 2.5;
    	    	y -= property.size / 2.5;
    		} else if(title.align == 'top-right') {
    			x -= property.size / 2.5;
    	    	y += property.size / 2.5;
    		}
    	} else if(title.rotate == '0' || title.rotate == '180') {
    		switch (title.align) {
    			case 'top':
    			case 'top-left':
    			case 'top-right':
        	    	y += property.size / 2.8;
    				break;
    			
    			case 'bottom':
    			case 'bottom-left':
    			case 'bottom-right':
    				y -= property.size / 2.8;
    				break;
    			
    		}
    	} else if(title.rotate == '90' || title.rotate == '270') {
    		switch (title.align) {
				case 'left':
				case 'top-left':
				case 'bottom-left':
	    	    	x += property.size / 2.8;
					break;
				
				case 'right':
				case 'top-right':
				case 'bottom-right':
					x -= property.size / 2.8;
					break;
				
			}
    	}    	
    	return ({'x': x, 'y': y});
    },
    
    rotate: function(deg, ctx, size, verbose) {
    	switch (deg) {
    	  case '315': //45
    		  ctx.translate((size/2),-(size/5.3));
    		  ctx.rotate(45 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case '270': //90
    		  ctx.translate(size,0);
    		  ctx.rotate(90 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case '225': //135
    		  ctx.translate((size/0.842105263), (size/2));
    		  ctx.rotate(135 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case '180':
    		  ctx.translate(size, size);
    		  ctx.rotate(deg.toInt() * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case '135': //225
    		  ctx.translate((size/2),(size/0.842105263));
    		  ctx.rotate(225 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case '90': //270
    		  ctx.translate(0,size);
    		  ctx.rotate(270 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case '45': //315
    		  ctx.translate(-(size/5.3),(size/2));
    		  ctx.rotate(315 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case '0': //0
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  default:
    		  if(verbose) console.log('Title rotation error: ' + deg + '° , ' + 
    				  'allowed are [0° (default), 45°, 90°, 135°, 180°, 225°, 270°, 315°]');
    	    break;
    	}
    }
});