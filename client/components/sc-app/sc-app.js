import can from 'can';
import 'can/view/stache/';

import template from './sc-app.stache!';


var SCApp = can.Component.extend({
	tag: 'sc-app',
	template: template
});

export { SCApp as default };