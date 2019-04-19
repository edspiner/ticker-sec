var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},



extendModel:function(Model){



return _.extend(Model.prototype,{url:"ACTIVITY_SYNC"}),Model;
}},



model=Alloy.M("activitySync",exports.definition,[]),

collection=Alloy.C("activitySync",exports.definition,model),

exports.Model=model,
exports.Collection=collection;