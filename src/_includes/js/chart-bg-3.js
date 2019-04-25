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
				names: {
					data1: 'Short Term'
				},
				columns: [
					['data1', 10, 15, 10, 13, 16, 20, 25]
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