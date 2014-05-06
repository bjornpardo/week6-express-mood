var express = require('express');
var _ = require('underscore');
var app = express();
var moods = ['joyful', 'antsy', 'despondent'];

app.get('/', function(req, res) {
	res.send(_.sample(moods) );
});

var server = app.listen(9106, function() {
	console.log('Express server listening on port ' + server.address().port);
});
