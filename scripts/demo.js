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
		shape: {
			id: 'rect2',
			width: 50,
			height: 50,
			rgb: [255,100,60]
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		div: {
			id: 'rectangle_3'
		},		
		shape: {
			width: 20,
			height: 20,
			color: '#767'
		}
	});

	new mooShape('mooShapeContainer', {
		type: 'rectangle',
		id: 'rectangle_4',
		shape: {
			width: 500,
			height: 20,
			color: '#987',
			opacity: .5
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