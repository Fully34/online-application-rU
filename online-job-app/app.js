var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var applicant = require('./models/database.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});

// creates and applicant
app.post('/applicant', function(req, res){


    var name = req.body.name;
    var bio = req.body.bio;
    var skills = req.body.skills;
    var years = req.body.years;
    var why = req.body.why;

    var applier = {
        name : name,
        bio : bio, 
        skills : skills,
        years : years,
        why : why
    }

    // Since the body is in the exact same format as the schema, we can just pass the body in
    var thisApplicant = new Applicant(applier);

    thisApplicant.save(function(err, doc) {

        if(err) {

            console.log('Son Of A!')
        } else {

            res.redirect
        }
    })

    thisApplicant.save();
	// Here is where you need to get the data
	// from the post body and store it in the database
	Applicant.find({}, function(err, doc) {

        if (err) {

            console.log('ERROR! ' + err.name);

        } else {

            res.render('applicants', {applicants : doc})
        }
    })
});


//============================== server/db ==============================//
        
mongoose.connect('mongodb://localhost/company');

var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
