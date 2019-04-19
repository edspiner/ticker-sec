"use strict";var

cus=require("services/current_user_service"),
initialised=!1,

_getToggles=function(){var
cu=cus.singleton(),
userId=cu.get("userId")?cu.get("userId"):"-1";
Alloy.createModel("featureToggles",{
urlParams:{
pid:userId,
utcOffset:-new Date().getTimezoneOffset()}}).

fetch().then(function(toggles){
saveToggles(toggles,"-1"===userId);
});
},

saveToggles=function(toggles,defaults){
toggles.defaults=defaults;
var obj={
toggles:toggles};


toggles.defaults||(

obj.forceLegacyTracking=!("yes"!==toggles.forceLegacyTracking),




obj.enablePassiveTracking="no"!==toggles.enablePassiveTracking,



obj.enableFitbit="no"!==toggles.enableFitbit,
obj.forceFitbit="force"===toggles.enableFitbit,

"meditate"===toggles.uxMode?(
obj.enableFitbit=!0,
obj.recordActivity=!1):

obj.recordActivity=!0,


obj.enableAllDeployments=!("yes"!==toggles.enableAllDeployments),




obj.enableProgramThemeMode=!("yes"!==toggles.enableProgramThemeMode)),




cus.save(obj),
DISPATCHER.trigger("tf:toggles.loaded",toggles);
},

_setToggle=function(name,value){var
cu=cus.singleton(),
userId=cu.get("userId")?cu.get("userId"):"-1";
if("-1"!==userId){
var toggles={
urlParams:{
pid:userId,
utcOffset:-new Date().getTimezoneOffset()},

id:-1};
toggles[name]=value,
Alloy.createModel("featureToggles",toggles).save().then(function(toggles){
saveToggles(toggles,!1);
});
}
},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
module.exports.getToggles();
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
module.exports.getToggles();
});
};

module.exports={

init:function(){
initialised||(
initialised=!0,
_initListeners());

},

getToggles:function(){
LOGGER.debug("Getting feature toggles for user"),
_getToggles();
},

setToggle:_setToggle};