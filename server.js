var express = require('express');
var app = express();
var config = {};

var logger = require('express-logger');
var bodyParser = require('body-parser');

//app.use(logger({path: "./logs/deviceside-dev.log"}));
app.use(bodyParser.json());


app.get('/definitions', function(req, res) {
	res.status(200).send("We're responding as expected.");
});


app.listen(3010, function() {
	console.log("API Definitions server is listening.");
});