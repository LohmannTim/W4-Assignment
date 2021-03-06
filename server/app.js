
var express = require('express');
var bodyParser = require('body-parser');
var records = require('./routes/records');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/records', records);

app.listen(port, function() {
	console.log('listening on port', port);
});