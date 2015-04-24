import can from 'can';
import 'can/map/define/';
import 'can/list/sort/';

import Reddit from 'models/reddit';

var VM = can.Map.extend({
	define: {
		items: {
			Type: Reddit.List,
			Value: Reddit.List,
			get: (items) => {
				items.replace(Reddit.findAll());
				return items;
			},
			set: (items) => {
				items.attr('comparator', function(a,b) {
					return a.attr('data.score') === b.attr('data.score') 
						? 0
						: a.attr('data.score') < b.attr('data.score') 
						? 1 : -1
				});
				return items;
			}
		}
	},
	setSelectedItem: function(item) {
		this.attr('selectedItem', item);
	},
	voteUp: function(item) {
		item.attr('data.score', item.data.score + 1);

	},
	voteDown: function(item) {
		item.attr('data.score', item.data.score - 1);
	}
});

export { VM as default };
