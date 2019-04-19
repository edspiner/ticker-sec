var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={

config:{
adapter:{
type:"restapi"}},



extendCollection:function(Collection){



return _.extend(Collection.prototype,{url:"GROUPINGS"}),Collection;
}},


model=Alloy.M("groupings",exports.definition,[]),

collection=Alloy.C("groupings",exports.definition,model),

exports.Model=model,
exports.Collection=collection;