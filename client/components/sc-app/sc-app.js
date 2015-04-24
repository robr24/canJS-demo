import can from 'can';
import 'can/view/stache/';

import template from './sc-app.stache!';

// import Reddit from 'client/models/reddit';
import VM from './view-model';


var SCApp = can.Component.extend({
	tag: 'sc-app',
	template: template,
	viewModel: VM,
	events: {
		'{items} move': function(items, event, item, newIndex, oldIndex) {
			var movedItem = this.element.find('#news-' + item.attr('data.id')),
				newClass = newIndex < oldIndex ? 'moving-up' : 'moving-down';
			movedItem.addClass(newClass);

			// hack, need to hook into transition end event
			setTimeout(function() {
				selectedItem.removeClass(newClass);
			}, 2000);
		}
	},
	helpers: {
		imageUrlQualifier: function(imageUrl) {
			if(imageUrl() === 'self' || imageUrl() === 'nsfw' || imageUrl() === '') {
				return 'images/avatar.png';
			}
			else {
				return imageUrl();
			}
		},
		scrubUrl: function(url) {
			if (!url()) {
				return;
			}
			var url = url();
			if (url.match('reddit.com')) {
				return 'images/avatar.png';	
			}		
			else {
				return url;
			}
		}
	}
});

export { SCApp as default };