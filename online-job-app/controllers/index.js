
//============================== requirements ==============================//
        
var Applicant = require('../models/database');


//============================== controller ==============================//

var indexController = {

    index : function(req, res) {

        res.render('index');
    },

    renderApplicants : function(req, res){

        Applicant.find({}, function(err, doc) {

            if (err) {

                console.log('ERROR! ' + err.name);

            } else {

                res.render('applicants', {applicants : doc});
            }
        });
    },

    submitApplicant : function(req, res){

        // 
        var name = req.body.name;
        var bio = req.body.bio;
        var skills = req.body.skills;
        var years = req.body.years;
        var why = req.body.why;

        // create an object that matches our schema for the db
        var applier = {
            name : name,
            bio : bio, 
            skills : skills,
            years : years,
            why : why
        };

        var thisApplicant = new Applicant(applier);

        thisApplicant.save(function(err, doc) {

            if(err) {

                console.log('Son Of A!');
            }
        });

        res.redirect('/applicants');
    },

    rmApplicant : function(req, res){

        var id = req.params.id;

        Applicant.remove({_id : id}, function(err) {

            res.redirect('/applicants');
        });
    },

    viewThisApplicant : function(req, res) {

        var id = req.params.id;

        Applicant.find({_id : id}, function(err, doc) {

            if (err) {

                res.send("ERROR " + err.name);

            } else {

                res.render('single-applicant', {applicant : doc})
            }
        })
    }
};

module.exports = indexController;