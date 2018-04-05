var express = require('express');

var app = express();

var routes = require('./routes/index');

app.use('/', routes);

app.set('puerto', process.env.PORT || 9080);

var server = app.listen(app.get('puerto'), function () {
	console.log("aplicacion iniciada");
});