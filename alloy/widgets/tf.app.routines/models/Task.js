var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"TASK"}),Model;
}},


model=Alloy.M("task",exports.definition,[]),

collection=Alloy.C("task",exports.definition,model),

exports.Model=model,
exports.Collection=collection;