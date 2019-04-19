"use strict";var

_defaults={
Color:{
Light:Alloy.Globals.Style.Color.BrandGreyLight,
Dark:Alloy.Globals.Style.Color.BrandGreyDark,
Button:Alloy.Globals.Style.Color.BrandGrey,
ButtonDisabled:Alloy.Globals.Style.Color.BrandGreyDark,
ButtonLabel:Alloy.Globals.Style.Color.BrandGreyDark,
TitleLabel:Alloy.Globals.Style.Color.BrandGreyDarker,
Label:Alloy.Globals.Style.Color.BrandGreyDark,
Icon:Alloy.Globals.Style.Color.BrandBlue,
Hint:Alloy.Globals.Style.Color.BrandGrey},

Image:{
BannerLogo:"",
RoundLogo:"/images/logo-small.png",
TitleLogo:{image:"/images/tickerfit.svg",width:110,height:22}},

Template:{
WelcomeLabel:"Welcome <%= name %>",
WelcomeMessage:"Your activity program awaits!"},

Config:{
id:"default"}},



colors={
hseGreenDark:"#296758",
hseGreenLight:"#D0DFD8"},

hseColors={
Dark:colors.hseGreenDark,
Light:colors.hseGreenLight,
Button:Alloy.Globals.Style.Color.BrandGrey,
ButtonDisabled:colors.hseGreenDark,
ButtonLabel:Alloy.Globals.Style.Color.BrandGreyDark,
TitleLabel:"#fff",
Label:Alloy.Globals.Style.Color.BrandGreyDark,
Icon:colors.hseGreenDark,
Hint:Alloy.Globals.Style.Color.BrandGrey},

hseImages={
BannerLogo:"/images/HSE-white.png",
RoundLogo:"/images/HI-transparent.png",
TitleLogo:{image:"/images/tickerfit.svg",width:110,height:22}},

hseTemplates={
WelcomeLabel:"Great to have you on board <%= name %>!",
WelcomeMessage:"Your mission should you choose to accept it, is to accumulate at least <%= steps %> steps per day over the next <%= weeks %> weeks\n\nCheck your email for further information!"},


hackaImages={
BannerLogo:"",
RoundLogo:"/images/logo-hacka-small.png",
TitleLogo:{image:"/images/hacka.svg",width:80,height:14}},


_this=_.extend({},_defaults);

module.exports={

get:function(){
return _this;
},

setColors:function(color){
_.extend(_this.Color,color);
},

setImages:function(image){
_.extend(_this.Image,image);
},

setTemplates:function(template){
_.extend(_this.Template,template);
},

reset:function(){
_this.Color=_.extend({},_defaults.Color),
_this.Image=_.extend({},_defaults.Image),
_this.Template=_.extend({},_defaults.Template),
_this.Config=_.extend({},_defaults.Config);
},

configure:function(id){
module.exports.reset(),
"HSE"===id&&(
module.exports.setColors(hseColors),
module.exports.setImages(hseImages),
module.exports.setTemplates(hseTemplates),
_this.Config.id="HSE"),

"HACKA"===id&&(
module.exports.setImages(hackaImages),
_this.Config.id="HACKA");

}};