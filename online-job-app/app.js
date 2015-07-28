
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Applicant = require('./models/database.js');
var indexController = require('./controllers/index.js')

//============================== Config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

//============================== routing ==============================//
        
app.get('/', indexController.index);

// displays a list of applicants
app.get('/applicants', indexController.renderApplicants);

// creates an applicant
app.post('/submit-applicant', indexController.submitApplicant);

// delete the user from the list
app.post('/delete-applicant/:id', indexController.rmApplicant)

//View the applicant

app.get('/applicant/:id', indexController.viewThisApplicant)

//============================== server/db ==============================//
        
mongoose.connect('mongodb://localhost/company');

var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
