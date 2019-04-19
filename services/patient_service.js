"use strict";var


refreshPromise,refreshing=!1,
initialised=!1,
lastLoad=0,
cus=require("services/current_user_service"),

_loadCurrentUser=function(){
var cu=cus.singleton();
cu.hasAuth()&&
module.exports.findOne(cu.get("userId"));

},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
_loadCurrentUser();
}),
Ti.App.addEventListener("tf:life.cycle.loggedout",function(user){
lastLoad=0;
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
_loadCurrentUser();
});
},

_saveUser=function(user){
cus.save({user:user}),
DISPATCHER.trigger("tf:user.loaded",user);
};

module.exports={

init:function(){
initialised||(
initialised=!0,
_initListeners());

},

findOne:function(userId){
if(userId===cus.singleton().get("userId")){
var now=new Date().getTime();
if(5e3<now-lastLoad)
return Alloy.createModel("patient",{
id:userId}).
fetch().then(function(user){


return _saveUser(user),lastLoad=new Date().getTime(),user;
});

LOGGER.error("SUPRESSING REQUEST TO LOAD USER");

}
},
updatePatient:function(patient){
return Alloy.createModel("patient",patient).save().then(function(data){

return _saveUser(data),data;
});
},
login:function(username,password){var

device,cu=cus.singleton();

cu.has("device")?





device=cu.get("device"):(device=require("utils/utilities").guid(),cus.save({device:device}));

var params={
username:username,
password:password,
type:"PATIENT",
device:device};
return Alloy.createModel("login",params).save().then(function(data){
if(data){
var cu=cus.singleton();
cu.has("password")&&
cu.unset("password"),


cu.save({
token:data.token,
refreshToken:data.refreshToken});

}
return data;
});
},
refreshLogin:function(){
if(!refreshing){
refreshing=!0;

var params={};
params.auth={},
params.auth.header=cus.singleton().getRefreshAuthHeader(),
refreshPromise=Alloy.createModel("refresh_token",params).fetch().then(function(data){






return data&&cus.save({token:data.token,refreshToken:data.refreshToken}),data;
}),
refreshPromise.finally(function(e){
refreshing=!1;
});
}
return refreshPromise;
},
setPassword:function(pid,verificationCode,password,email){
var params={
password:password,
urlParams:{
pid:pid,
verificationCode:verificationCode}};





return email&&(params.email=email),Alloy.createModel("patient_password_set",params).save().then(function(data){








return data&&password&&cus.save({userId:data.id,email:data.email,password:password,showWelcome:!0}),data;
});
},
getProfile:function(pid,verificationCode){

var params={
urlParams:{
pid:pid,
verificationCode:verificationCode}};



return Alloy.createModel("patient_profile",params).fetch();
}};