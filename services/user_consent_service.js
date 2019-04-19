"use strict";var

_getUserConsent=function(){
return Ti.App.Properties.getBool("USERCONSENT",!1);
},

_setUserConsent=function(val){
Ti.App.Properties.setBool("USERCONSENT",val),
require("services/event_tracking_service").record("user-consent",{accepted:val,rejected:!val});
};

module.exports={

getUserConsent:_getUserConsent,

setUserConsent:_setUserConsent};