"use strict";var

dimension=require("platform/dimension"),
deviceWidth=dimension.deviceWidthDp(),
deviceHeight=dimension.deviceHeightDp();

Alloy.Globals.Style={
Color:{},
Size:{
Width:{},
Height:{}},

Unit:{},
Widget:{},
Dynamic:{}};var


commonColors=function(){
Alloy.Globals.Style.Color.TwilightBlue="#0b4052",
Alloy.Globals.Style.Color.Silver="#b6c0c4",
Alloy.Globals.Style.Color.DarkerSilver="#919699",
Alloy.Globals.Style.Color.BattleshipGrey="#64767c",
Alloy.Globals.Style.Color.PalerGrey="#F7F9FA",
Alloy.Globals.Style.Color.PaleGrey="#eff4f6",
Alloy.Globals.Style.Color.RedPink="#ef2f7a",
Alloy.Globals.Style.Color.SilverTwo="#e3e8ea",
Alloy.Globals.Style.Color.LightBlue="#61c7e9",
Alloy.Globals.Style.Color.DarkSkyBlue="#2db9e8",
Alloy.Globals.Style.Color.DuckEggBlue="#bce9f8",
Alloy.Globals.Style.Color.IceBlue="#effbff",
Alloy.Globals.Style.Color.PumpkinOrange="#fc7725",
Alloy.Globals.Style.Color.LightGold="#ffca54",
Alloy.Globals.Style.Color.KiwiGreen="#94e65c",
Alloy.Globals.Style.Color.OtherGreen="#6ecc2d",
Alloy.Globals.Style.Color.PinkRed="#ff0568",

Alloy.Globals.Style.Color.DrawerMenu=Alloy.Globals.Style.Color.DarkSkyBlue,

Alloy.Globals.BrandPink="#e36d9d",
Alloy.Globals.Style.Color.BrandProgress="#b0f450",
Alloy.Globals.Style.Color.BrandPink="#FF3E8E",
Alloy.Globals.Style.Color.BrandPurple="#A58CC2",
Alloy.Globals.Style.Color.BrandPinkDark="#a5003c",
Alloy.Globals.Style.Color.BrandPinkLight="#FFBDFF",
Alloy.Globals.Style.Color.BrandPinkTransparent="#AAFF3E8E",
Alloy.Globals.Style.Color.BrandPinkUltraTransparent="#33FF3E8E",
Alloy.Globals.Style.Color.BrandBlue="#61c7e9",
Alloy.Globals.Style.Color.BrandBlueDark="#387B94",
Alloy.Globals.Style.Color.BrandBlueLight="#C2EDFB",
Alloy.Globals.Style.Color.BrandBlueTransparent="#AA61c7e9",
Alloy.Globals.Style.Color.BrandBlueUltraTransparent="#4461c7e9",

Alloy.Globals.Style.Color.BrandWarn="#a5003c",
Alloy.Globals.Style.Color.Yellow="#f6cc01",
Alloy.Globals.Style.Color.Purple="#e70068",
Alloy.Globals.Style.Color.BrandGrey="#cececf",
Alloy.Globals.Style.Color.BrandGreyTransparent="#EEcececf",
Alloy.Globals.Style.Color.BrandGreyDarker="#acaeaf",
Alloy.Globals.Style.Color.BrandGreyLight="#F2F2F3",
Alloy.Globals.Style.Color.BrandGreyLightTransparent="#88F2F2F3",
Alloy.Globals.Style.Color.BrandGreyDark="#9CA1A2",
Alloy.Globals.Style.Color.BrandGreyDarkTransparent="#449CA1A2",
Alloy.Globals.Style.Color.GuageYellow="#f4f526",

Alloy.Globals.Style.Color.BrandRed="#FA5059",
Alloy.Globals.Style.Color.BrandGreen="#00B83A",
Alloy.Globals.Style.Color.BrandAmber="#EE9F56",


Alloy.Globals.Style.KeyboardState=Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN|Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;

},

size=function(){
for(var

percentage,i=1;100>=i;i++)percentage="pct"+i,

Alloy.Globals.Style.Size.Width[percentage]=deviceWidth*(i/100),
Alloy.Globals.Style.Size.Height[percentage]=deviceHeight*(i/100);


for(var

grid,j=1;12>=j;j++)grid="grid"+j,

Alloy.Globals.Style.Size.Width[grid]=deviceWidth*(j/12),
Alloy.Globals.Style.Size.Height[grid]=deviceHeight*(j/12);


Alloy.Globals.Style.Size.Width.halfGrid=Alloy.Globals.Style.Size.Width.grid1/2;
},

units=function(){
for(var
unit,i=1;300>=i;i++)unit="unit"+i,
Alloy.Globals.Style.Unit[unit]=i;

};

module.exports={

preCalculate:function(){

commonColors(),
size(),
units(),

Object.defineProperty(Alloy.Globals.Style,"WL",{
get:function(){
return require("bootstrap/whitelabel").get();
}}),


Object.defineProperty(Alloy.Globals.Style.Dynamic,"Width",{
get:function(){
return require("bootstrap/dynamic").get("Device","Width",function(val){
return deviceWidth*val/100;
});
}}),


Object.defineProperty(Alloy.Globals.Style.Dynamic,"Height",{
get:function(){
return require("bootstrap/dynamic").get("Device","Height",function(val){
return deviceHeight*val/100;
});
}});


var init;
init=Alloy.Globals.Style.Dynamic.Width,
init=Alloy.Globals.Style.Dynamic.Height,
init={};
}};