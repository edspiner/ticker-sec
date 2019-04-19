var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.loading/'+s:
s.substring(0,index)+'/tf.app.loading/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){



















































function update(_cancelable){
cancelable=_cancelable;
}

function cancel(){
_.isFunction(cancelable)&&(
cancelable(),
$.trigger('cancel'),
stop());

}

function start(_cancelable){
update(_cancelable),
$.loadingImages.start();
}

function stop(){
$.loadingImages.stop();
}var Widget=new(require('/alloy/widget'))('tf.app.loading');if(this.__widgetId='tf.app.loading',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='view',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.loadingMask=Ti.UI.createView({backgroundColor:'transparent',id:'loadingMask'}),$.__views.loadingMask&&$.addTopLevelView($.__views.loadingMask),cancel?$.addListener($.__views.loadingMask,'click',cancel):__defers['$.__views.loadingMask!click!cancel']=!0,$.__views.loadingOuter=Ti.UI.createView({width:100,height:100,borderRadius:50,backgroundColor:'#FFF',id:'loadingOuter'}),$.__views.loadingMask.add($.__views.loadingOuter),$.__views.loadingImages=Ti.UI.createImageView({width:26,height:26,duration:150,images:['/images/tf.app.loading/Load1.png','/images/tf.app.loading/Load2.png','/images/tf.app.loading/Load3.png','/images/tf.app.loading/Load4.png','/images/tf.app.loading/Load5.png','/images/tf.app.loading/Load6.png','/images/tf.app.loading/Load5.png','/images/tf.app.loading/Load4.png','/images/tf.app.loading/Load3.png','/images/tf.app.loading/Load2.png'],id:'loadingImages'}),$.__views.loadingOuter.add($.__views.loadingImages),exports.destroy=function(){},_.extend($,$.__views);var cancelable=null;$.start=start,$.stop=stop,$.update=update,$.cancel=cancel,function constructor(args){args=null}(arguments[0]||{}),





__defers['$.__views.loadingMask!click!cancel']&&$.addListener($.__views.loadingMask,'click',cancel),



_.extend($,exports);
}

module.exports=Controller;