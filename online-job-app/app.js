var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Applicant = require('./models/database.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.index);

// displays a list of applicants
app.get('/applicants', indexController.renderApplicants);

// creates an applicant
app.post('/submit-applicant', );

// delete the user from the list
app.post('/delete-applicant/:id', function(req, res){

    var id = req.params.id

    Applicant.remove({_id : id}, function(err) {

        res.redirect('/applicants')
    })
})

//============================== server/db ==============================//
        
mongoose.connect('mongodb://localhost/company');

var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
