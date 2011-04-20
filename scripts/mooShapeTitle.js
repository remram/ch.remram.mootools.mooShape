var mooShapeTitle = new Class({
	Extends: mooShape,
	
	initialize: function(){    	
    	this.methodOverload(
    			this,
    			'draw',
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
    			 		console.log('func4');
    			 		this.ctx.title.font         = this.options.title.size 
    			 										+ 'px ' 
    			 										+ this.options.title.font;
    			 		this.ctx.title.fillStyle    = this.options.title.rgb;
    			 		this.ctx.title.textBaseline = 'middle'/*this.options.title.baseline*/;
    			 		this.ctx.title.textAlign    = 'center'/*this.options.title.align*/;    			 		
    			 		   			 		
    			 		/*this.ctx.title.translate((this.titleSize/2),-(this.titleSize/5.3));
    			 		this.ctx.title.rotate(45 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate(this.titleSize,0);
    			 		this.ctx.title.rotate(90 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate((this.titleSize/0.842105263), (this.titleSize/2));
    			 		this.ctx.title.rotate(135 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate(this.titleSize, this.titleSize);
    			 		this.ctx.title.rotate(180 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate((this.titleSize/2),(this.titleSize/0.842105263));
    			 		this.ctx.title.rotate(225 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate(0,this.titleSize);
    			 		this.ctx.title.rotate(270 * Math.PI/180);*/
    			 		
    			 		/*this.ctx.title.translate(-(this.titleSize/5.3),(this.titleSize/2));
    			 		this.ctx.title.rotate(315 * Math.PI/180);*/
    			 		
    			 		this.ctx.title.fillText(this.options.title.text, 
    			 				(this.titleSize/2),
    			 				(this.titleSize/2) );
    			 		
    			 		return true;
    			 	}
    			]
    	);
    	
    	/*this.methodOverload(
    			this,
    			'rotate',
    			[
    			 	function(deg){
    			 		console.log(this.ctx.title);
    			 		this.ctx.title.translate((this.titleSize/2),-(this.titleSize/5.3));
					 	this.ctx.title.rotate(45 * Math.PI/180);
    			 	}
    			]
    	);*/
    },
    
    rotate: function(deg, ctx, size) {
    	console.log(deg,ctx,size);
    	ctx.translate((size/2),-(size/5.3));
		ctx.rotate(45 * Math.PI/180);
		console.log('rotate: ' + deg);
		
    	/*switch (deg) {
    	  case "45":
    		  ctx.translate((size/2),-(size/5.3));
    		  ctx.rotate(45 * Math.PI/180);
    		  console.log('rotate: ' + deg);
    	    break;
    	  case "90":
    	    alert("Sie sind ein aufrichtiger Zweibeiner");
    	    break;
    	  case "135":
    	    alert("Sie haben ein Dreirad gewonnen");
    	    break;
    	  case "180":
    	    alert("Gehen Sie auf allen Vieren und werden Sie bescheidener");
    	    break;
    	  case "225":
      	    alert("Gehen Sie auf allen Vieren und werden Sie bescheidener");
      	    break;
    	  case "270":
      	    alert("Gehen Sie auf allen Vieren und werden Sie bescheidener");
      	    break;
    	  case "315":
      	    alert("Gehen Sie auf allen Vieren und werden Sie bescheidener");
      	    break;
    	  default:
    	    alert("Sie bleiben leider dumm");
    	    break;
    	}*/
    }
});