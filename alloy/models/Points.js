var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"POINTS"}),Model;
}},


model=Alloy.M("points",exports.definition,[]),

collection=Alloy.C("points",exports.definition,model),

exports.Model=model,
exports.Collection=collection;