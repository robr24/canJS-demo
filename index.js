import $ from 'jquery';
import can from 'can';
import 'can/view/stache/';

import 'components/sc-app/';

// import 'fixtures/reddit';

import Reddit from 'models/reddit';

$('body').append(can.stache('<sc-app></sc-app>')());

$(document).on('ready', function() {
	$('#myModal').modal();
});

var dfd = Reddit.findAll();
dfd.done(function(data) {
	console.log(data);
});
dfd.fail(function(err) {
	console.log('error: ', err);
})