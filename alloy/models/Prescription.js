var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={

config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"PRESCRIPTION"}),Model;
}},



model=Alloy.M("prescription",exports.definition,[]),

collection=Alloy.C("prescription",exports.definition,model),

exports.Model=model,
exports.Collection=collection;