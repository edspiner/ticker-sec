var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){






return _.extend(Collection.prototype,{url:"METRICS",save:function(options){return this.sync("create",this,options)}}),Collection;
}},


model=Alloy.M("metrics",exports.definition,[]),

collection=Alloy.C("metrics",exports.definition,model),

exports.Model=model,
exports.Collection=collection;