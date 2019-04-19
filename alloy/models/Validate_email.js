var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PATIENT_VALIDATE_EMAIL"}),Model;
}},


model=Alloy.M("validate_email",exports.definition,[]),

collection=Alloy.C("validate_email",exports.definition,model),

exports.Model=model,
exports.Collection=collection;