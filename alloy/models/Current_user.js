var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict";

var validator=require("validator/validator_factory");

exports.definition={
config:{
adapter:{
type:"properties",
collection_name:"current_user"}},


extendModel:function(Model){





































return _.extend(Model.prototype,{validate:function(attrs){for(var key in attrs)var value=attrs[key]},hasAuth:function(){return this.has("token")?this.has("refreshToken")?!!this.has("userId")||(LOGGER.debug("No userId..."),!1):(LOGGER.debug("No refresh token..."),!1):(LOGGER.debug("No token..."),!1)},getAuthHeader:function(){return!!this.hasAuth()&&{Authorization:"Bearer "+this.get("token")}},getRefreshAuthHeader:function(){return!!this.hasAuth()&&{Authorization:"Bearer "+this.get("refreshToken")}}}),Model;
}},


model=Alloy.M("current_user",exports.definition,[]),

collection=Alloy.C("current_user",exports.definition,model),

exports.Model=model,
exports.Collection=collection;