var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"GUARDIAN_SHARING"}),Model;
}},


model=Alloy.M("guardian_sharing",exports.definition,[]),

collection=Alloy.C("guardian_sharing",exports.definition,model),

exports.Model=model,
exports.Collection=collection;