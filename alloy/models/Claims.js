var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"CLAIMS"}),Model;
}},


model=Alloy.M("claims",exports.definition,[]),

collection=Alloy.C("claims",exports.definition,model),

exports.Model=model,
exports.Collection=collection;