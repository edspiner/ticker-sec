var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},



extendModel:function(Model){







return _.extend(Model.prototype,{url:function(){var params=this.get("urlParams")||{},source=params.hasOwnProperty("source")?"?source="+params.source:"";return require("tickerfit/url").ACTIVITY+source}}),Model;
}},



model=Alloy.M("activity",exports.definition,[]),

collection=Alloy.C("activity",exports.definition,model),

exports.Model=model,
exports.Collection=collection;