var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitySummary/'+s:
s.substring(0,index)+'/tf.app.activitySummary/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){var _Mathmin=








































































































Math.min,_Mathmax=Math.max,Widget=new(require('/alloy/widget'))('tf.app.activitySummary');if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='progressIcon',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.progressIcon=Ti.UI.createView({height:Ti.UI.SIZE,apiName:'Ti.UI.View',id:'progressIcon',classes:['view-height-fit']}),$.__views.progressIcon&&$.addTopLevelView($.__views.progressIcon),$.__views.__alloyId233=Ti.UI.createView({height:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-height-fit'],id:'__alloyId233'}),$.__views.progressIcon.add($.__views.__alloyId233),$.__views.fill=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:0,apiName:'Ti.UI.Label',id:'fill',classes:['summary']}),$.__views.__alloyId233.add($.__views.fill),$.__views.value=Ti.UI.createView({top:0,width:Ti.UI.SIZE,height:Ti.UI.SIZE,apiName:'Ti.UI.View',id:'value',classes:['summary-value-container']}),$.__views.__alloyId233.add($.__views.value),$.__views.empty=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:Alloy.Globals.Style.Color.SilverTwo,top:0,apiName:'Ti.UI.Label',id:'empty',classes:['summary']}),$.__views.value.add($.__views.empty),$.__views.highlight=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:26},color:Alloy.Globals.Style.Color.RedPink,top:0,opacity:0,apiName:'Ti.UI.Label',id:'highlight',classes:['summary']}),$.__views.progressIcon.add($.__views.highlight),exports.destroy=function(){},_.extend($,$.__views);var args=arguments[0]||{},WTools=require('WidgetTools'),cus=require('services/current_user_service');WTools.setTiProps(args,$.progressIcon);var v0h,h1pct,iconClass,progressColor,progress=0,highlight=!1,defaultProgressColor=Alloy.Globals.Style.Color.LightGold,animating=!1,_init=function(){_setColor(defaultProgressColor)},_setIcon=function(icon){if(iconClass!==icon){iconClass=icon;var stdClasses='summary';$.resetClass($.highlight,'summary '+iconClass+'-outline',{opacity:$.highlight.opacity}),$.resetClass($.empty,'summary '+iconClass),$.fill.addEventListener('postlayout',function handler(){v0h=$.fill.rect.height,v0h&&($.fill.removeEventListener('postlayout',handler),h1pct=v0h/100,_setProgress(progress,!0))}),$.resetClass($.fill,'summary '+iconClass,{color:$.fill.color})}},_setHighlight=function(show){highlight!==show&&(highlight=show,$.highlight.opacity=highlight?1:0)},getHeight=function(pct){var val;


return val=pct?pct:0,val=_Mathmin(_Mathmax(0,val),100),_Mathmax(1,Math.floor(v0h-h1pct*val));
},

showPct=function(valueview,pct,colorview){

0<pct&&(pct=_Mathmax(pct,10)),
100>pct&&(pct=_Mathmin(pct,85)),
animating=!0,
valueview.animate({
height:getHeight(0),
duration:100},
function(){
animating=!1,
colorview.color=progressColor,
valueview.animate({
height:getHeight(pct),
duration:200});

});
},

_setColor=function(color){
var colorChange=color!==progressColor;
progressColor=color,
_setProgress(progress,colorChange);
},

_setProgress=function(val,force){(
progress!==val||force)&&(
progress=val,
animating?


LOGGER.debug('CANNOT SET PROGRESS AS CURRENTLY ANIMATING'):v0h&&showPct($.value,progress,$.fill));

};

_init(),

exports.setIcon=_setIcon,
exports.setProgress=_setProgress,
exports.setColor=_setColor,
exports.setHighlight=_setHighlight,









_.extend($,exports);
}

module.exports=Controller;