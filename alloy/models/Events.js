var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},



extendModel:function(Model){






return _.extend(Model.prototype,{url:"BULK_EVENTS",toJSON:function(){return this.get("array")}}),Model;
}},



model=Alloy.M("events",exports.definition,[]),

collection=Alloy.C("events",exports.definition,model),

exports.Model=model,
exports.Collection=collection;