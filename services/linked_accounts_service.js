"use strict";var

Q=require("vendor/q"),
cus=require("services/current_user_service"),
initialised=!1,

_getLinkedAccount=function(type){




return initialised||(initialised=!0,_initListeners()),Alloy.createModel("linkedAccount",{
urlParams:{
id:cus.singleton().get("userId"),
type:type,
enable:!0}}).

fetch();
},

_disableLinkedAccount=function(type){




return initialised||(initialised=!0,_initListeners()),Alloy.createModel("linkedAccount",{
urlParams:{
id:cus.singleton().get("userId"),
type:type,
enable:!1},

id:-1}).save();
},

_initListeners=function(){};

module.exports={
getLinkedAccount:_getLinkedAccount,
disableLinkedAccount:_disableLinkedAccount};