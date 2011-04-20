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
    			 	
    			 	function(a,b,c,d,e,f,g,h){
    			 		console.log('func4');
    			 		this.ctx.title.font = this.options.title.size + 'px ' + this.options.title.font;
    			 		this.ctx.title.fillStyle = this.options.title.rgb;
    			 		this.ctx.title.textBaseline = this.options.title.baseline;
    			 		this.ctx.title.textAlign = this.options.title.align;
    			 		this.ctx.title.fillText(this.options.title.text, 
    			 				(this.options.title.width/2),
    			 				(this.options.title.height/2) );
    			 		return true;
    			 	}
    			]
    	);
    },
    
    check: function() {
    	alert('yes');
    }
});