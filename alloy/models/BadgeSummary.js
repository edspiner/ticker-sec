var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){



return _.extend(Collection.prototype,{url:"BADGE_SUMMARY"}),Collection;
}},


model=Alloy.M("badgeSummary",exports.definition,[]),

collection=Alloy.C("badgeSummary",exports.definition,model),

exports.Model=model,
exports.Collection=collection;