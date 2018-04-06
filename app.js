
var express = require('express');

var path = require('path');

var app = express();

var routes = require('./routes/index');

app.use('/', routes);

app.set('puerto', process.env.PORT || 9080);

//archivos estaticos con express
if(process.argv[2] == "dev"){
	app.use(express.static(path.join(__dirname)));
}

//Configuracion de vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//Inicia la aplicacion en el puerto 9080
var server = app.listen(app.get('puerto'), function () {
	console.log("aplicacion iniciada");
});