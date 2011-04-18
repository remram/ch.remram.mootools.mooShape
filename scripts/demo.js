window.addEvent('domready', function() {
	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		id: 'rectangle_1',
		properties : {
			width: 20,
			height: 80,
			color: '#036'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		id: 'rectangle_2',
		properties : {
			width: 50,
			height: 50,
			color: '#f00'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		properties : {
			width: 20,
			height: 20,
			color: '#767'
		}
	});

	new mooShape('mooShapeContainer', {
		type: 'rectangle',
		id: 'rectangle_4',
		properties : {
			width: 500,
			height: 20,
			color: '#987'
		}
	});

	new mooShape('mooShapeContainer', {
		verbose: true,
		type: 'rectangle',
		id: 'rectangle_5',
		properties : {
			width: 20,
			height: 20,
			color: '#444'
		}
	});
});