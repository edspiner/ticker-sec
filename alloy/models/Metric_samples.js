var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){



return _.extend(Collection.prototype,{url:"METRIC_SAMPLES"}),Collection;
}},


model=Alloy.M("metric_samples",exports.definition,[]),

collection=Alloy.C("metric_samples",exports.definition,model),

exports.Model=model,
exports.Collection=collection;