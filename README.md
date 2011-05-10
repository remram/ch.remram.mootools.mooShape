mooShape
===========
Creates a simple shape based on canvas. 
Extended by excanvas which allows you to draw your shape under IE-Browser. 
You can create different shape types and you are able to extend the class by 
other shape types. Please feel free, to extend and improve this class!

Demo: http://jsfiddle.net/remram/UkDTE/

![Screenshot](http://www.baghdad.ch/images/mootools/mooshape.png)

How to use
----------

Import the plugin

    <script type="text/javascript" src="{yourSourcePath}/mooShape.js"></script>
    
Import the excanvas.js to support IE-7 & IE-8

    <!--[if IE]>		
		<script type="text/javascript" src="{yourSourcePath}/excanvas.js"></script>
	<![endif]-->

Insert an empty `div` in the html

    <div id="mooShapeContainer"></div>
    


Run the plugin
  
    window.addEvent('domready',function(){
    	//example 1
    	//simple triangle
      	new mooShape('mooShapeContainer', {
    		type: 'triangle'
		});
		
		//example 2
		//draw a shaded star and its title
		new mooShape('mooShapeContainer', {
		    type: 'star',
		    actions: ['fill', 'shadow'],
		    shape: {
		        width: 50,
		        color: '#036',
		        shadowOffset: 5,
		        shadowBlur: 10,
		        shadowColor: [150, 20, 200]
		    },
		    title: {
		        text: 'mooShape',
		        size: 20,
		        color: [150, 20, 200],
		        align: 'top-right'
		    }
		});
		
		//example 3
		//stroke a simple rectangle
		new mooShape('mooShapeContainer', {
		    verbose: false,
		    type: 'rectangle',
		    actions: ['stroke'],
		    shape: {
		        width: 350,
		        height: 50,
		        color: '#036',
		        borderWeight: 10,
		        borderColor: [150, 20, 200]
		    },
		    title: {
		        text: 'Rectangle',
		        size: 30,
		        color: [150, 20, 200],
		        rotate: '270',
		        align: 'right'
		    }
		});
		
		//example 4
		//draw a stroked circle shape and its title
		new mooShape('mooShapeContainer', {
		    verbose: false,
		    type: 'circle',
		    actions: ['fill', 'stroke'],
		    opacity: 1,
		    div: {
		        id: 'div_id',
		        x: 200,
		        y: 100
		    },
		    shape: {
		        id: 'shape_id',
		        width: 50,
		        color: [255, 100, 60],
		        borderWeight: 10,
		        borderColor: '#c6f829'
		    },
		    title: {
		        text: 'Circle',
		        size: 50,
		        color: '#cfcfcf',
		        rotate: '315',
		        align: 'top-right'
		    }
		});
    });