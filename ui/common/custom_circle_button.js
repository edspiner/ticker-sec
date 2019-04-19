"use strict";

var shape=require("ui/shape");

function createCircleButton(x,y,radius,color,tint,borderColor,iconStyle,borderSize,svg,bufferScale,opacity){var
bufferScale=bufferScale||1.5,
bSize=borderSize?radius-borderSize:.85*radius,
circleButton=shape.createCircle({
x:x,
y:y,
radius:radius*bufferScale,
color:"transparent"});



if(circleButton.opacity=opacity,"transparent"===color){
var border=shape.createCircle({
x:radius*bufferScale,
y:radius*bufferScale,
radius:radius,
color:color,
borderColor:borderColor,
borderWidth:borderSize,
opacity:1});

if(tint)
var tintcircle=shape.createCircle({
x:radius*bufferScale,
y:radius*bufferScale,
radius:radius,
color:tint,
isTransparent:!0,
opacity:1});


}else
var border=shape.createCircle({
x:radius*bufferScale,
y:radius*bufferScale,
radius:radius,
color:borderColor});var


halo=shape.createCircle({
x:radius*bufferScale,
y:radius*bufferScale,
radius:bSize,
color:color}),

button=shape.createCircle({
x:radius*bufferScale,
y:radius*bufferScale,
radius:bSize,
color:color});


circleButton.add(border),
tintcircle&&
circleButton.add(tintcircle),

circleButton.add(halo),
circleButton.add(button);

var lbl=Ti.UI.createLabel(iconStyle);


if(lbl.setTouchEnabled(!1),circleButton.add(lbl),svg.file){var
svgView=require("com.geraudbourdin.svgview"),
boxwidth=Math.sqrt(2*bSize*(2*bSize)/2);
svg.sizePct&&(
boxwidth=boxwidth*svg.sizePct/100);

var svg1=svgView.createView({
image:svg.file,
width:boxwidth+"dp",
height:boxwidth+"dp"});

if(svg.txPct){
var left=(2*bSize-boxwidth)/2;
left+=boxwidth*svg.txPct/100,
svg1.left=left+"dp";
}
if(svg.tyPct){
var top=(2*bSize-boxwidth)/2;
top+=boxwidth*svg.tyPct/100,
svg1.top=top+"dp";
}
svg1.setTouchEnabled(!1),
button.add(svg1);
}

return{
options:{
bufferScale:bufferScale},

container:circleButton,
button:button,
border:border,
halo:halo,
label:lbl};

}var

CustomCircleButton=function(args){
var self=this;

args=args||{},
this.color=args.color,
this.tint=args.tint,
this.borderColor=args.borderColor,
this.borderSize=args.borderSize,
this.iconStyle=args.iconStyle||{},
this.centerX=args.centerX,
this.centerY=args.centerY,
this.radius=args.radius,
this.enabled="undefined"==typeof args.enabled||args.enabled,
this.action=args.action,
this.svg=args.svg||{},
this.bufferScale=args.bufferScale,
this.touchStyle=args.touchStyle||"scale",
this.opacity=args.opacity,

this.duration=args.duration||6e4,
this.timeout=null,
this.circleButton=createCircleButton(this.centerX,this.centerY,this.radius,this.color,this.tint,this.borderColor,this.iconStyle,this.borderSize,this.svg,this.bufferScale,this.opacity),
this.circleButton.animate=args.animate||!1,

this.animate=function(animate){
animate?







animate&&!self.circleButton.animate&&(
self.circleButton.animate=animate,
animateButtonForDuration()):(self.circleButton.animate=animate,self.shouldAnimateOnResume=animate,clearAnimation(self.circleButton),null!==self.timeout&&(clearTimeout(self.timeout),self.timeout=null));

},
this.enable=function(enabled){
enabled?








enabled&&!self.enabled&&(
self.enabled=enabled,

self.circleButton.label.color=self.iconStyle.color?self.iconStyle.color:

"white",

self.circleButton.border.borderColor=self.borderColor):(self.enabled=enabled,self.circleButton.label.color=self.iconStyle.disabledColor?self.iconStyle.disabledColor:Alloy.Globals.Style.Color.BrandGrey,self.circleButton.border.borderColor="transparent",self.animate(!1));

},
this.setText=function(enabled){
enabled?




enabled&&!self.enabled&&(
self.enabled=enabled,
self.circleButton.label.color="white",
self.circleButton.border.borderColor=self.borderColor):(self.enabled=enabled,self.circleButton.label.color=Alloy.Globals.Style.Color.BrandGrey,self.circleButton.border.borderColor="transparent",self.animate(!1));

},
this.enable(this.enabled);var

press=function(e){
self.enabled&&
self.press(e);

},

release=function(e){
self.enabled&&
self.release(e);

},
action=function(e){
self.enabled&&
self.action&&
self.action(e,self);


};
this.circleButton.button.addEventListener("touchstart",press),
this.circleButton.button.addEventListener("touchend",release),
this.circleButton.button.addEventListener("touchcancel",release),

self.circleButton.button.addEventListener("touchmove",press),

this.circleButton.button.addEventListener("click",action);

var animateButtonForDuration=function(){
animateButton(self.circleButton);
var p=function(){
pause();
};
self.timeout=setTimeout(p,self.duration);
};

this.circleButton.animate&&require("bootstrap/lifecycle").isActive()?
animateButtonForDuration():

self.shouldAnimateOnResume=self.circleButton.animate;var


pause=function(){
null!==self.timeout&&(
clearTimeout(self.timeout),
self.timeout=null),

self.shouldAnimateOnResume=self.circleButton.animate||self.shouldAnimateOnResume,
self.circleButton.animate=!1;
},
resume=function(){
self.shouldAnimateOnResume&&(
self.circleButton.animate=!0,
animateButtonForDuration());

};



















return Ti.App.addEventListener("tf:life.cycle.pause",pause),Ti.App.addEventListener("tf:life.cycle.resume",resume),this.circleButton.destroy=function(){self.circleButton.animate=!1,Ti.App.removeEventListener("tf:life.cycle.pause",pause),Ti.App.removeEventListener("tf:life.cycle.resume",resume),self.circleButton.button.removeEventListener("touchstart",press),self.circleButton.button.removeEventListener("touchend",release),self.circleButton.button.removeEventListener("touchcancel",release),self.circleButton.button.removeEventListener("touchmove",press),self.circleButton.button.removeEventListener("click",action)},this.circleButton.container.circleButton=this.circleButton,this.circleButton.container.object=self,this.circleButton.container;
},

animateButton=function(circleButton){var
bufferScale=circleButton.options.bufferScale,

borderScale=1+(bufferScale-1)/2,
_startAnimation=function(){
circleButton.halo.animate({
duration:1200,
transform:Ti.UI.create2DMatrix({
scale:bufferScale}),

opacity:0}),

circleButton.border.animate({
duration:1700,
transform:Ti.UI.create2DMatrix({
scale:borderScale}),

opacity:.05},
_finishAnimation);
},

_finishAnimation=function(){
circleButton.halo.animate({
duration:1200,
transform:Ti.UI.create2DMatrix({
scale:1}),

opacity:.75}),

circleButton.border.animate({
duration:1700,
opacity:1,
transform:Ti.UI.create2DMatrix({
scale:1})},

function(){
circleButton.animate&&
_startAnimation();

});
};
_startAnimation();
},

clearAnimation=function(circleButton){
circleButton.halo.animate({
duration:100,
transform:Ti.UI.create2DMatrix({
scale:1}),

opacity:.75}),

circleButton.border.animate({
duration:100,
opacity:1,
transform:Ti.UI.create2DMatrix({
scale:1})});


};

CustomCircleButton.prototype.press=function(){
var self=this;
this.touched=!0,
"scale"===this.touchStyle?
this.circleButton.button.animate({
duration:100,
transform:Ti.UI.create2DMatrix({
scale:1.3})},

function(){
self.touched=!1;
}):!1?


this.circleButton.button.animate({
duration:100,
backgroundColor:this.touchStyle},
function(){
self.touched=!1;
}):(

this.circleButton.button.backgroundColor=this.touchStyle,
self.touched=!1);


},

CustomCircleButton.prototype.release=function(){
var self=this;return(
this.touched?void
setTimeout(function(){
self.release();
},100):void(


"scale"===this.touchStyle?
this.circleButton.button.animate({
duration:50,
transform:Ti.UI.create2DMatrix({
scale:1})}):



this.circleButton.button.backgroundColor=this.color));

},

exports.createButton=function(args){
return new CustomCircleButton(args);
};