var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"REFRESH_TOKEN"}),Model;
}},


model=Alloy.M("refresh_token",exports.definition,[]),

collection=Alloy.C("refresh_token",exports.definition,model),

exports.Model=model,
exports.Collection=collection;