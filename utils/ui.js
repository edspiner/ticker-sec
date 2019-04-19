"use strict";var

_hasOwnProperty=function(element,attribute){
return element&&element[attribute]!==void 0&&null!==element[attribute];
},

_isWindow=function(element){
return _hasOwnProperty(element,"exitOnClose")||_hasOwnProperty(element,"orientationModes")||_hasOwnProperty(element,"navBarHidden");
};

module.exports={
getWindow:function(element){
if(!_isWindow(element)){for(
var parent=element.getParent();
parent;){
if(_isWindow(parent))
return parent;

parent=parent.getParent();
}
return parent;
}
return element;
},

animateClick:function(i,c,scale,callback){
scale?(
!0===scale&&(
scale=.95),

i.animate({
duration:50,
transform:Ti.UI.create2DMatrix({
scale:scale}),

color:c},
function(){
i.color=c,
i.animate({
duration:50,
transform:Ti.UI.create2DMatrix({
scale:1})},

function(){
callback&&
callback();

});
})):

i.animate({
duration:50,
color:c},
function(){
i.color=c,
callback&&
callback();

});

}};