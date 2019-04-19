"use strict";

module.exports={
tactile:function(component,targetComponent){
var target=targetComponent?targetComponent:component;
target.addEventListener("touchstart",function(){
component.animate({
autoreverse:!0,
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.7})});


});
}};