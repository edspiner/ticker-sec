var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"ROUTINE_DASHBOARD_TASK"}),Model;
}},


model=Alloy.M("routine_dashboard_task",exports.definition,[]),

collection=Alloy.C("routine_dashboard_task",exports.definition,model),

exports.Model=model,
exports.Collection=collection;