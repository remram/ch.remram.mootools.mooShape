var mooShapeTitle = new Class({
	Extends: mooShape,
	
	initialize: function(){    	
    	this.methodOverload(
    			this,
    			'init',
    			[
    			 	function(x,y){
    			 		console.log('func1');
    			 		return true;
    			 	},
    			 	
    			 	function(x,y,rgb){
    			 		console.log('func2: ' + this.options.title.text);
    			 		var x = 0, y = 0;
    			 		this.ctx.title.fillText(this.options.title.text, x, y);
    			 		return true;
    			 	},
    			 	
    			 	function(x,y,rgb,z){
    			 		console.log('func3');
    			 		return true;
    			 	},
    			 	
    			 	function(a,b,c,d,e,f,g){
    			 		this.ctx.title.font         = this.options.title.size 
    			 										+ 'px ' 
    			 										+ this.options.title.font;
    			 		this.ctx.title.fillStyle    = this.options.title.rgb;
    			 		this.ctx.title.textBaseline = 'middle'/*this.options.title.baseline*/;
    			 		this.ctx.title.textAlign    = 'center'/*this.options.title.align*/; 
    			 		
    			 		return true;
    			 	}
    			]
    	);
    },
    
    plot: function(text, ctx, size) {
    	ctx.fillText(text, (size/2), (size/2) );
    	return true;
    },
    
    rotate: function(deg, ctx, size, verbose) {
    	switch (deg) {
    	  case "315": //45
    		  ctx.translate((size/2),-(size/5.3));
    		  ctx.rotate(45 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case "270": //90
    		  ctx.translate(size,0);
    		  ctx.rotate(90 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case "225": //135
    		  ctx.translate((size/0.842105263), (size/2));
    		  ctx.rotate(135 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case "180":
    		  ctx.translate(size, size);
    		  ctx.rotate(deg.toInt() * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
    	    break;
    	  case "135": //225
    		  ctx.translate((size/2),(size/0.842105263));
    		  ctx.rotate(225 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case "90": //270
    		  ctx.translate(0,size);
    		  ctx.rotate(270 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case "45": //315
    		  ctx.translate(-(size/5.3),(size/2));
    		  ctx.rotate(315 * Math.PI/180);
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  case "0": //0
    		  if(verbose) console.log('Rotate title: ' + deg + '°');
      	    break;
    	  default:
    		  if(verbose) console.log('Title rotation error: ' + deg + '° , allowed are [0°(default), 45°, 90°, 135°, 180°, 225°, 270°, 315°]');
    	    break;
    	}
    }
});