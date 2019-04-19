var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"ROUTINE"}),Model;
}},


model=Alloy.M("routine",exports.definition,[]),

collection=Alloy.C("routine",exports.definition,model),

exports.Model=model,
exports.Collection=collection;