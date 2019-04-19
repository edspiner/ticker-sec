var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){



return _.extend(Collection.prototype,{url:"PROGRAMS"}),Collection;
}},


model=Alloy.M("programs",exports.definition,[]),

collection=Alloy.C("programs",exports.definition,model),

exports.Model=model,
exports.Collection=collection;