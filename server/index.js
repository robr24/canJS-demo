var feathers = require('feathers');
var bodyParser = require('body-parser');

var app = feathers()
	.configure(feathers.rest())
	.configure(feathers.socketio())

	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))

	.use(feathers.static(__dirname + '/../'));

var port = process.env.PORT || 8080;

console.log('App is running on http://localhost:' + port);
app.listen(port);