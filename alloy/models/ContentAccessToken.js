var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"CONTENTACCESSTOKEN"}),Model;
}},


model=Alloy.M("contentAccessToken",exports.definition,[]),

collection=Alloy.C("contentAccessToken",exports.definition,model),

exports.Model=model,
exports.Collection=collection;