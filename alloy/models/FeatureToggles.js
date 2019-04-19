var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"persistentrest",
persistentType:"nosql",
collectionName:"featureToggles",
merge:!1},

idAttribute:"id"},

extendModel:function(Model){



return _.extend(Model.prototype,{url:"FEATURE_TOGGLES"}),Model;
}},


model=Alloy.M("featureToggles",exports.definition,[]),

collection=Alloy.C("featureToggles",exports.definition,model),

exports.Model=model,
exports.Collection=collection;