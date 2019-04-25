require(['c3', 'jquery'], function (c3, $) {
	$(document).ready(function() {
		var chart = c3.generate({
			bindto: '#{{ include.id }}',
			padding: {
				bottom: -10,
				left: -1,
				right: -1
			},
			data: {
				columns: [
					['data1', 0, 3, 7, 6, 4, 12, 15]
				],
				type: 'area-spline'
			},
			legend: {
				show: false
			},
			transition: {
				duration: 0
			},
			point: {
				show: false
			},
			tooltip: {
				format: {
					title: function (x) {
						return '';
					}
				}
			},
			axis: {
				y: {
					padding: {
						bottom: 0,
					},
					show: false,
					tick: {
						outer: false
					}
				},
				x: {
					padding: {
						left: 0,
						right: 0
					},
					show: false
				}
			},
			color: {
				pattern: ['{{ site.colors[include.color].hex }}']
			}
		});
	});
});