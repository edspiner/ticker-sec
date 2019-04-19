

Ti.Trimethyl=!0,
Alloy.CFG.T=Alloy.CFG.T||{},

Alloy.Globals.Trimethyl={

loadDriver:function(parent,child,intf){
var sub=require('T/'+parent+'/'+child);




return null==sub&&Ti.API.warn('Trimethyl: Unable to load driver <'+child+'> of class <'+parent+'>'),_.extend({},intf,sub);
}},



Alloy.Globals.noop=function(){},

Alloy.Globals.SCREEN_WIDTH=!1?Ti.Platform.displayCaps.platformWidth:Ti.Platform.displayCaps.platformWidth/Ti.Platform.displayCaps.logicalDensityFactor,
Alloy.Globals.SCREEN_HEIGHT=!1?Ti.Platform.displayCaps.platformHeight:Ti.Platform.displayCaps.platformHeight/Ti.Platform.displayCaps.logicalDensityFactor,

Alloy.Globals.SCREEN_DENSITY=!0?Ti.Platform.displayCaps.logicalDensityFactor:Titanium.Platform.displayCaps.dpi/160,
Alloy.Globals.SCREEN_RETINA=2==Alloy.Globals.SCREEN_DENSITY,

Alloy.Globals.SIMULATOR='Simulator'===Ti.Platform.model||-1!==Ti.Platform.model.indexOf('sdk'),

Alloy.Globals.IOS7=!1,
Alloy.Globals.IOS8=!1,
Alloy.Globals.IOS9=!1,

Ti.App.addEventListener('openURL',function(e){
Ti.Platform.openURL(e.url);
}),


Ti.App.addEventListener('uncaughtException',function(e){
Ti.API.error(e.message+' @ '+e.source+':'+e.line),
require('T/ga').exception(e.message+' @ '+e.source+':'+e.line);
}),


_.mixin({
deepClone:function(object){
var clone=_.clone(object);





return _.each(clone,function(value,key){_.isObject(value)&&(clone[key]=_.deepClone(value))}),clone;
}});