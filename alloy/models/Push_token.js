var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PUSH_TOKEN"}),Model;
}},


model=Alloy.M("push_token",exports.definition,[]),

collection=Alloy.C("push_token",exports.definition,model),

exports.Model=model,
exports.Collection=collection;