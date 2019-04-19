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
$.toggle.animate({left:leftOn,backgroundColor:'white',duration:100},function(){
$.background.animate({backgroundColor:colorOn,borderColor:colorOn,duration:50}),
$.container.animate({backgroundColor:colorOn,duration:50});
});
}
function animateOff(){
$.toggle.animate({left:leftOff,backgroundColor:colorOff,duration:100},function(){
$.background.animate({backgroundColor:'white',duration:50}),
$.container.animate({backgroundColor:colorOff,duration:50});
});
}var Widget=new(require('/alloy/widget'))('tf.app.routines');if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='toggleSwitch',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.container=Ti.UI.createView({width:50,height:32,borderRadius:16,borderWidth:0,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'container'}),$.__views.container&&$.addTopLevelView($.__views.container),toggle?$.addListener($.__views.container,'click',toggle):__defers['$.__views.container!click!toggle']=!0,$.__views.background=Ti.UI.createView({width:48,height:30,borderRadius:15,borderWidth:0,backgroundColor:'#fff',id:'background'}),$.__views.container.add($.__views.background),$.__views.toggle=Ti.UI.createView({height:24,width:24,borderRadius:12,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'toggle'}),$.__views.background.add($.__views.toggle),exports.destroy=function(){},_.extend($,$.__views);var args=arguments[0],WTools=require('WidgetTools');WTools.setTiProps(args,$.container);var callback,on=!0,width=48,height=30,toggleHeight=24,toggleMargin=(height-toggleHeight)/2,leftOff=toggleMargin,leftOn=width-(toggleHeight+toggleMargin),colorOff=Alloy.Globals.Style.Color.SilverTwo,colorOn=Alloy.Globals.Style.Color.RedPink,toggle=function(){on=!on,on?animateOn():animateOff(),callback&&callback(on)};

exports.setToggle=function(val){
on=val,
$.toggle.left=on?leftOn:leftOff,
$.toggle.backgroundColor=on?'#fff':colorOff,
$.background.backgroundColor=on?colorOn:'white',
$.container.backgroundColor=on?colorOn:colorOff;
},
exports.setCallback=function(cb){
callback=cb;
},





__defers['$.__views.container!click!toggle']&&$.addListener($.__views.container,'click',toggle),



_.extend($,exports);
}

module.exports=Controller;