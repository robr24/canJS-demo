import can from 'can';

var Filler = can.Control.extend({

	init: function() {
		this.element.height(this.element.parent().innerHeight());
	}

});

export { Filler as default };