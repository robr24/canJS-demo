import can from 'can';
import Filler from 'controls/filler/';

can.view.attr('filler', function(el) {
	new Filler(el);
});