window.addEvent('domready', function() {
	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		div: {
			id: 'rectangle_1',
			style: 'my-div-style-1'
		},		
		shape: {
			id: 'rect1',
			style: 'my-shape-style-1',
			width: 20,
			height: 80,
			color: '#036'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		opacity: .3,
		div: {
			id: 'rectangle_2'
		},
		shape: {
			id: 'rect2',
			width: 1000,
			height: 50,
			rgb: [255,100,60]
		},
		title: {
			text: 'Shape 2'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		div: {
			id: 'rectangle_3'
		},
		shape: {
			width: 60,
			height: 60,
			color: '#767'
		},
		title: {
			text: 'Shape 3'
		}
	});

	new mooShape('mooShapeContainer', {
		type: 'rectangle',
		opacity: .5,
		div: {
			id: 'rectangle_4'
		},
		shape: {
			width: 500,
			height: 20,
			color: '#987'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		div: {
			id: 'rectangle_5',
			style: 'my-div-style-2'
		},		
		shape: {
			width: 30,
			height: 20
		}
	});
});