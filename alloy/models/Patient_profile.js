var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PATIENT_PROFILE"}),Model;
}},


model=Alloy.M("patient_profile",exports.definition,[]),

collection=Alloy.C("patient_profile",exports.definition,model),

exports.Model=model,
exports.Collection=collection;