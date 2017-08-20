var express = require('express');
var router = express.Router();
var pool = require('../modules/pool'); 

router.post('/', function(req, res){
	console.log('record post was hit!');
	// Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('INSERT INTO messages (name, message) VALUES ($1, $2);', [req.body.name, req.body.message], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
	});
});

router.get('/', function(req, res) {
	console.log('record get was hit!');
	// Add a SELECT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('SELECT * FROM records;', function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});
		}
	});
});

module.exports = router;