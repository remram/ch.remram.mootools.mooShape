window.addEvent('domready', function() {
	new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'star',
		actions: ['fill','shadow'],
		div: {
			id: 'shape_1',
			style: 'my-div-style-1'
		},		
		shape: {
			style: 'my-shape-style-1',
			width: 300,
			color: '#036',
			shadowOffset: 20,
			shadowBlur: 5,
			borderWeight: 5,
			borderColor: '#f00'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'circle',
		actions: ['fill','stroke'],
		opacity: 1,
		div: {
			id: 'shape_2',
			x : 200,
			y : 400
		},
		shape: {
			id: 'rect2',
			width: 50,
			height: 100,
			color: [255,100,60],
			shadowOffset: 10,
			shadowBlur: 500,
			shadowColor: '#360',
			borderWeight: 1000,
			borderColor: '#c6f829'
		},
		title: {
			text: 'Shape 2',
			size: 50,
			color: '#cfcfcf',
			rotate: '315',
			align: 'top-right'
		}
	});

	var rec3 = new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'rectangle',
		actions: ['fill','shadow'],
		div: {
			id: 'shape_3',
			x : 200,
			y : -50
		},
		shape: {
			width: 200,
			height: 150,
			color: '#767',
			shadowOffset: 10,
			shadowBlur: 5/*,
			borderWeight: 2,
			borderColor: [0,0,0]*/
		},
		title: {
			text: 'Shape 3',
			rotate: '315',
			align: 'top-right'
		}
	});
	
	//rec3.execMethod('stroke');
	

	new mooShape('mooShapeContainer', {
		type: 'rectangle',
		opacity: .3
	});

	new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'rectangle',
		div: {
			id: 'shape_5',
			style: 'my-div-style-2',
			y: 10
		},		
		shape: {
			width: 30,
			height: 20
		},
		title: {
			text: 'Shape 5',
			rotate: '0',
			align: 'right'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'triangle',
		actions: ['fill','stroke'],
		opacity: .5,
		div: {
			id: 'shape_6',
			x : 500,
			y : -500
		},
		shape: {
			width: 400,
			rotate: '270',
			color: '#391',
			shadowOffset: 10,
			shadowBlur: 50,
			borderWeight: 10
		},
		title: {
			text: 'Shape 90°',
			color: [0,0,0],
			size: 30,
			rotate: '90',
			align: 'left'
		}
	});

	var arrow = new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'arrow',
		actions: ['fill'],
		div: {
			id: 'shape_7',
			x : 1300,
			y : -800
		},
		shape: {
			width: 80,
			rotate: '90',
			color: '#fff',
			shadowOffset: 3
		},
		title: {
			text: 'Shape 135°',
			color: [0,0,0],
			size: 20,
			rotate: '0',
			align: 'top'
		}
	});
	
	//arrow.execMethod('title', 'testMethode');
	//console.warn();
	//console.log(Object.keys(shapeObj));
	//console.log(Object.keys(arrow.ctx));
	//arrow.mooCanv.stroke();
	
	//arrow.setOptions({action: ['fill','shadow'], shape:{shadowColor: '#360', rotate: '180'}});
	//arrow.reInit();
	//arrow.reInit();
	
	//console.log(arrow.options);
});