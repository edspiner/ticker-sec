var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){



return _.extend(Collection.prototype,{url:"DEPLOYMENTS"}),Collection;
}},


model=Alloy.M("deployments",exports.definition,[]),

collection=Alloy.C("deployments",exports.definition,model),

exports.Model=model,
exports.Collection=collection;