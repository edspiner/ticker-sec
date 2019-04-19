var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.slideWindow/'+s:
s.substring(0,index)+'/tf.app.slideWindow/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){












































































































































function close(){
DISPATCHER.trigger('tf:app.slideWindow.close');
}

function swipe(e){
'down'==e.direction&&
close();

}var Widget=new(require('/alloy/widget'))('tf.app.slideWindow');if(this.__widgetId='tf.app.slideWindow',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.winSlide=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)({orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',pinned:!0,exitOnClose:!1,backgroundColor:'transparent',apiName:'Ti.UI.Window',id:'winSlide',classes:['root-window','pinned']}),$.__views.winSlide&&$.addTopLevelView($.__views.winSlide),$.__views.background=Ti.UI.createView({backgroundColor:'transparent',height:Ti.UI.FILL,width:Ti.UI.FILL,apiName:'Ti.UI.View',id:'background',classes:[]}),$.__views.winSlide.add($.__views.background),close?$.addListener($.__views.background,'click',close):__defers['$.__views.background!click!close']=!0,$.__views.panel=Ti.UI.createView({bottom:-5,height:Ti.UI.SIZE,width:Alloy.Globals.Style.Size.Width.pct100,backgroundColor:'white',borderRadius:5,apiName:'Ti.UI.View',id:'panel',classes:[]}),$.__views.winSlide.add($.__views.panel),$.__views.content=Ti.UI.createView({left:16,right:16,bottom:5,height:Ti.UI.SIZE,apiName:'Ti.UI.View',id:'content',classes:[]}),$.__views.panel.add($.__views.content),swipe?$.addListener($.__views.content,'swipe',swipe):__defers['$.__views.content!swipe!swipe']=!0,$.__views.close=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.SilverTwo,text:'j',right:12,top:16,width:32,height:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'close',classes:['tf-close','silver-two']}),$.__views.panel.add($.__views.close),close?$.addListener($.__views.close,'click',close):__defers['$.__views.close!click!close']=!0,exports.destroy=function(){},_.extend($,$.__views);var content,slideDuration=1?100:150,open=!1,screenHeight=Alloy.Globals.Style.Size.Height.pct100,_init=function(selected){DISPATCHER.on('tf:app.slideWindow.open',_open),DISPATCHER.on('tf:app.slideWindow.close',_close),DISPATCHER.once('tf:logout',function cleanup(){DISPATCHER.off('tf:app.slideWindow.open',_open),DISPATCHER.off('tf:app.slideWindow.close',_close)}),$.winSlide.onBack=function(){_close()}},openAnimation=Ti.UI.createAnimation({bottom:0,backgroundColor:'#7f022632',duration:slideDuration,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT}),_onOpen=function(){LOGGER.debug('OPEN: slideWindow')},_setContent=function(c){content=c,$.content.add(content.getView())},_open=function(e){var wargs=e.content.args||{},w=Widget.createWidget(e.content.widget,e.content.controller||'widget',wargs);_setContent(w);var options={fullscreen:!0};!1,openAnimation.duration=2*slideDuration,options.activityEnterAnimation=Titanium.App.Android.R.anim.slide_in_bottom,$.winSlide.addEventListener('open',function onOpen(){$.winSlide.removeEventListener('open',onOpen),open=!0,_onOpen()}),$.winSlide.open(options),$.winSlide.animate(openAnimation)},closeAnimation=Ti.UI.createAnimation({bottom:-screenHeight,duration:slideDuration,backgroundColor:'transparent'}),_close=function(callback){function closeWindow(options){open=!1,$.winSlide.addEventListener('close',function onClose(){$.winSlide.removeEventListener('close',onClose),content&&(content.cleanup&&content.cleanup(),content=void 0,$.content.removeAllChildren()),callback&&callback()}),$.winSlide.close(options)}1?($.winSlide.backgroundColor='transparent',closeWindow({activityExitAnimation:Titanium.App.Android.R.anim.slide_out_bottom})):(closeAnimation.addEventListener('complete',function doClose(){closeAnimation.removeEventListener('complete',doClose),closeWindow({})}),$.winSlide.animate(closeAnimation))};
exports.init=_init,





__defers['$.__views.background!click!close']&&$.addListener($.__views.background,'click',close),__defers['$.__views.content!swipe!swipe']&&$.addListener($.__views.content,'swipe',swipe),__defers['$.__views.close!click!close']&&$.addListener($.__views.close,'click',close),



_.extend($,exports);
}

module.exports=Controller;