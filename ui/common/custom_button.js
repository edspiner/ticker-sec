"use strict";

var CustomButton=function(args){

args=args||{},
args.backgroundColor=args.normalColor,
args.borderColor=args.normalBorderColor,
this.titleColor=args.color,
this.normalColor=args.normalColor,
this.normalBorderColor=args.normalBorderColor,
this.selectedColor=args.selectedColor,
this.selectedBorderColor=args.selectedBorderColor,
this.disableAnimation=args.disableAnimation,
this.toggleMode=args.toggleMode,
this.toggleState=!1;

var view=Ti.UI.createView(args);






if(view.addEventListener("touchstart",this.press),view.addEventListener("touchend",this.release),view.addEventListener("touchcancel",this.release),view.addEventListener("touchmove",this.release),args.title){

var label=Ti.UI.createLabel({
id:"title",
text:args.title,
textAlign:args.textAlign,
font:args.font,
color:args.color});


view.add(label);
}
return view;
};

CustomButton.prototype.press=function(){
this.toggleMode?(
this.toggleState=!this.toggleState,
this.toggleState?
this.disableAnimation?(
this.backgroundColor=this.selectedColor,
this.borderColor=this.selectedBorderColor):

this.animate({
backgroundColor:this.selectedColor,
duration:300},
function(){
this.borderColor=this.selectedBorderColor;
}):


this.disableAnimation?(
this.backgroundColor=this.normalColor,
this.borderColor=this.normalBorderColor):

this.animate({
backgroundColor:this.normalColor,
borderColor:this.normalBorderColor,
duration:300},
function(){
this.borderColor=this.normalBorderColor;
})):



this.backgroundColor=this.selectedColor;

},

CustomButton.prototype.release=function(){
if(!this.toggleMode){

if(this.disableAnimation)

return void(this.backgroundColor=this.normalColor);


this.animate({
backgroundColor:this.normalColor,
duration:300});

}
},

exports.createButton=function(args){
return new CustomButton(args);
};