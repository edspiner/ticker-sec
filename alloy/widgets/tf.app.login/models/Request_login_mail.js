var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PATIENT_LOGIN_EMAIL"}),Model;
}},


model=Alloy.M("request_login_mail",exports.definition,[]),

collection=Alloy.C("request_login_mail",exports.definition,model),

exports.Model=model,
exports.Collection=collection;