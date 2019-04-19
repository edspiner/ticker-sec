var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PROGRESS"}),Model;
}},


model=Alloy.M("progress",exports.definition,[]),

collection=Alloy.C("progress",exports.definition,model),

exports.Model=model,
exports.Collection=collection;