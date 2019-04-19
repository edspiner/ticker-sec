var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"DEEPLINK"}),Model;
}},


model=Alloy.M("deeplink",exports.definition,[]),

collection=Alloy.C("deeplink",exports.definition,model),

exports.Model=model,
exports.Collection=collection;