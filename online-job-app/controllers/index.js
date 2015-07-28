
//============================== requirements ==============================//
        
var Applicant = require('../models.database');


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

                res.render('applicants', {applicants : doc})
            }
        });
    },

    submitApplicants : function(req, res){

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

            // res.send('sucess')
        }
    })

    res.redirect('/applicants')
}
}
