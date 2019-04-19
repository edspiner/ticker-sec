var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"LOGIN"}),Model;
}},


model=Alloy.M("login",exports.definition,[]),

collection=Alloy.C("login",exports.definition,model),

exports.Model=model,
exports.Collection=collection;