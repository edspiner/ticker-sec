var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PATIENT_PASSWORD_SET"}),Model;
}},


model=Alloy.M("patient_password_set",exports.definition,[]),

collection=Alloy.C("patient_password_set",exports.definition,model),

exports.Model=model,
exports.Collection=collection;