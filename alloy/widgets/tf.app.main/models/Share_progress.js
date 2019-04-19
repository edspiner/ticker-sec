var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"SHARE_PROGRESS"}),Model;
}},


model=Alloy.M("share_progress",exports.definition,[]),

collection=Alloy.C("share_progress",exports.definition,model),

exports.Model=model,
exports.Collection=collection;