import can from 'can';

var Reddit = can.Model.extend({
	// resource: '/reddit'
	findAll: 'GET http://api.reddit.com',
	parseModels: function(data) {
		return data.data.children;
	}
}, {});

// override parse models to walk to data.children
// parse models function o


export {Reddit as default};