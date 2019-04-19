var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={

config:{
adapter:{
type:"restapi"}},


extendModel:function(Model){



return _.extend(Model.prototype,{url:"RX_PROGRAM_ITEM_PROGRESS"}),Model;
}},



model=Alloy.M("rx_program_item_progress",exports.definition,[]),

collection=Alloy.C("rx_program_item_progress",exports.definition,model),

exports.Model=model,
exports.Collection=collection;