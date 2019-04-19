"use strict";

exports.loginMessage=function(type){return(

"wrong-profile"===type?
"Sorry, we got confused! Please click the button in your welcome email again, or enter your email address to get started.":
"logged-out"===type?
"Just logged out? Enter your email address to get going again!":

"Enter your log in details to view your account");

},

exports.errorMessage=function(type){return(

"set-password-failed"===type?
"Login expired! Please log in again":
"no-consent"===type?
"Your consent is required before continuing":

"");

};