var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"persistentrest",
persistentType:"nosql",
collectionName:"patient",
merge:!1},

idAttribute:"id"},

extendModel:function(Model){



return _.extend(Model.prototype,{url:"PATIENT"}),Model;
}},


model=Alloy.M("patient",exports.definition,[]),

collection=Alloy.C("patient",exports.definition,model),

exports.Model=model,
exports.Collection=collection;