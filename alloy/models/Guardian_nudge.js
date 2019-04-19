var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"GUARDIAN_NUDGE"}),Model;
}},


model=Alloy.M("guardian_nudge",exports.definition,[]),

collection=Alloy.C("guardian_nudge",exports.definition,model),

exports.Model=model,
exports.Collection=collection;