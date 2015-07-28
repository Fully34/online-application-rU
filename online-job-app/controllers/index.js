
//============================== requirements ==============================//
        
var Applicant = require('../models/database');

//============================== controller ==============================//

var indexController = {

    index : function(req, res) {

        res.render('index');
    },

    renderApplicants : function(req, res){

        // renders all applicants currently in the database
            // docs are plugged into the callback by the .find() method!
        Applicant.find({}, function(err, doc) {

            if (err) {

                console.log('ERROR! ' + err.name);

            } else {

                // .render(jadeView, object)
                res.render('applicants', {applicants : doc});
            }
        });
    },

    submitApplicant : function(req, res){

        // reference our body props from the form
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

        // make the applier object a new instance of the Applicant schema
        var thisApplicant = new Applicant(applier);


        thisApplicant.save(function(err, doc) {

            if(err) {

                console.log('Son Of A!');
            }
        });

        // redirect to applicants since we already did that logic above
        res.redirect('/applicants');
    },

    // remove applicant
    rmApplicant : function(req, res){

        // parameterized url
        var id = req.params.id;

        //remove the thing that has the matching id we get from the body param
        Applicant.remove({_id : id}, function(err) {

            // will redirect to applicants after removing the model instance from the db
            res.redirect('/applicants');
        });
    },

    viewThisApplicant : function(req, res) {

        // get the id from the parameterized url 
        var id = req.params.id;

        // find the model instance that matches the id number
        Applicant.find({_id : id}, function(err, doc) {

            if (err) {

                res.send("ERROR " + err.name);

            } else {

                // render only the specific model we selected
                res.render('single-applicant', {applicant : doc})
            }
        })
    }
};

module.exports = indexController;