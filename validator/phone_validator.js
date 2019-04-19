"use strict";

module.exports={
isPhoneNumber:function(val){
return /^[0-9+.,\-\s\)\(]+$/.test(val);

},

isValidPhoneNumber:function(phoneNumber,country){return!!

phoneNumber&&(



country||(
country=Ti.Locale.getCurrentCountry().toUpperCase()),!0);



},

matchPhoneNumber:function(phone1,phone2){
return phone1.slice(-7)+""==phone2.slice(-7)+"";
}};