var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
























































function animateOn(){
exports.setToggle(!0);
}
function animateOff(){
exports.setToggle(!1);
}var Widget=new(require('/alloy/widget'))('tf.app.routines');if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='toggleCheck',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.container=Ti.UI.createView({width:24,height:24,borderWidth:1,borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:4,id:'container'}),$.__views.container&&$.addTopLevelView($.__views.container),toggle?$.addListener($.__views.container,'click',toggle):__defers['$.__views.container!click!toggle']=!0,$.__views.tick=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:16},color:'white',text:'h',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,opacity:0,id:'tick'}),$.__views.container.add($.__views.tick),exports.destroy=function(){},_.extend($,$.__views);var args=arguments[0],WTools=require('WidgetTools');WTools.setTiProps(args,$.container);var callback,on=!0,disabled=!0,toggle=function(){disabled||(on=!on,on?animateOn():animateOff(),callback&&callback(on))};

exports.getToggle=function(){
return on;
},
exports.setToggle=function(val){
on=val,
$.updateViews({
"#container":{
backgroundColor:on?Alloy.Globals.Style.Color.RedPink:'transparent',
borderColor:on?Alloy.Globals.Style.Color.RedPink:Alloy.Globals.Style.Color.SilverTwo},

"#tick":{
opacity:on?1:0}});


},
exports.setColor=function(c){


},
exports.setCallback=function(cb){
callback=cb;
},
exports.disable=function(val){
disabled=val;
},





__defers['$.__views.container!click!toggle']&&$.addListener($.__views.container,'click',toggle),



_.extend($,exports);
}

module.exports=Controller;