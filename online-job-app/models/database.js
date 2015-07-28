
//============================== requirements ==============================//
        
var mongoose = require('mongoose');


// var Applicant = function(name, bio, skills, years, why) {
//     this.name = name;
//     this.bio = bio;
//     this.skills = skills;
//     this.years = years;
//     this.why = why;
// }


//============================== schema ==============================//

// create the mongoose model
var Applicant = mongoose.model('Applicant', {

    name : {type : String}, 
    bio : {type : String}, 
    skills : {type : String},
    years : {type : String}, 
    why : {type : String}
});
        


module.exports = Applicant;