var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={

config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"LINKED_ACCOUNT"}),Model;
}},



model=Alloy.M("linkedAccount",exports.definition,[]),

collection=Alloy.C("linkedAccount",exports.definition,model),

exports.Model=model,
exports.Collection=collection;