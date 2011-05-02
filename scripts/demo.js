window.addEvent('domready', function() {
	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'star',
		actions: ['fill','stroke','shadow'],
		div: {
			id: 'rectangle_1',
			style: 'my-div-style-1'
		},		
		shape: {
			id: 'rect1',
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
		verbose: true,
		type: 'circle',
		actions: ['fill','stroke'],
		opacity: 1,
		div: {
			id: 'rectangle_2',
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
		verbose: true,
		type: 'rectangle',
		actions: ['fill','shadow'],
		div: {
			id: 'rectangle_3',
			x : 200,
			y : -50
		},
		shape: {
			width: 60,
			height: 60,
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
		verbose: true,
		type: 'rectangle',
		div: {
			id: 'rectangle_5',
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
		verbose: true,
		type: 'triangle',
		actions: ['fill'],
		div: {
			id: 'rectangle_x',
			x : 500,
			y : -500
		},
		shape: {
			width: 400,
			rotate: '45',
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

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		actions: ['shadow','fill'],
		div: {
			id: 'rectangle_y',
			x : 800,
			y : -100
		},
		shape: {
			width: 10,
			height: 10,
			color: [0,0,255],
			shadowOffset: 2
		},
		title: {
			text: 'Shape 135°',
			color: [0,0,0],
			size: 20,
			rotate: '0',
			align: 'top'
		}
	});
});