var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"SUMMARY"}),Model;
}},


model=Alloy.M("summary",exports.definition,[]),

collection=Alloy.C("summary",exports.definition,model),

exports.Model=model,
exports.Collection=collection;