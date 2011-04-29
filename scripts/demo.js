window.addEvent('domready', function() {
	new mooShape('mooShapeContainer', {
		verbose: false,
		type: 'rectangle',
		actions: ['stroke'],
		div: {
			id: 'rectangle_1',
			style: 'my-div-style-1'
		},		
		shape: {
			id: 'rect1',
			style: 'my-shape-style-1',
			width: 20,
			height: 80,
			color: '#036',
			borderWeight: 10,
			borderColor: '#f00'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: false,
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
			shadowBlur: 5,
			shadowColor: '#360',
			borderWeight: 10,
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
			id: 'rectangle_3',
			x : 200,
			y : -50
		},
		shape: {
			width: 60,
			height: 60,
			color: '#767'/*,
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
		verbose: false,
		type: 'rectangle',
		actions: ['fill'],
		div: {
			id: 'rectangle_x',
			x : 300
		},
		shape: {
			width: 10,
			height: 60,
			color: '#391'
		},
		title: {
			text: 'Shape 90°',
			color: [0,0,0],
			size: 8,
			rotate: '90',
			align: 'left'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: false,
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