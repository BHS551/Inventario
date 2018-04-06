var express = require('express');
var router = express.Router();

//obtiene la ruta /
router.get('/', function (req, res) {
	res.render('index', { name: 'titulo 1'});
});

module.exports = router;