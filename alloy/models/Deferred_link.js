var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"DEFERRED_LINK"}),Model;
}},


model=Alloy.M("deferred_link",exports.definition,[]),

collection=Alloy.C("deferred_link",exports.definition,model),

exports.Model=model,
exports.Collection=collection;