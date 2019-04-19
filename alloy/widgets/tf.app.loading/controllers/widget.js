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
$.view.update(_cancelable),
cancelable=_cancelable;
}

function show(_cancelable){
closeOnOpen=!1,
$.view.start(_cancelable),
$.loading.open({animated:!1});
}

function hide(){
var close=function close(){
$.loading.close({animated:!1}),
$.view.stop(),
isOpen=!1,
cancelable=null,
closeOnOpen=!1;
};
isOpen?
close():

closeOnOpen=!0;

}

function onFocus(e){
hasFocus=!0;
}

function onBlur(e){
hasFocus=!1;
}var Widget=new(require('/alloy/widget'))('tf.app.loading');if(this.__widgetId='tf.app.loading',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.loading=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)({orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:!0,pinned:!0,backgroundColor:'transparent',backgroundImage:null,opacity:1,modal:!1,theme:'Theme.AppCompat.Translucent.NoTitleBar',exitOnClose:!1,id:'loading'}),$.__views.loading&&$.addTopLevelView($.__views.loading),onFocus?$.addListener($.__views.loading,'focus',onFocus):__defers['$.__views.loading!focus!onFocus']=!0,onBlur?$.addListener($.__views.loading,'blur',onBlur):__defers['$.__views.loading!blur!onBlur']=!0,$.__views.background=Ti.UI.createView({backgroundColor:Alloy.Globals.Style.Color.PalerGrey,opacity:.7,id:'background'}),$.__views.loading.add($.__views.background),$.__views.view=Alloy.createWidget('tf.app.loading','view',{id:'view',__parentSymbol:$.__views.loading}),$.__views.view.setParent($.__views.loading),hide?$.__views.view.on('cancel',hide):__defers['$.__views.view!cancel!hide']=!0,exports.destroy=function(){},_.extend($,$.__views);var cancelable,isOpen=!1,closeOnOpen=!1,hasFocus=!1;

(function constructor(args){

$.loading.onBack=function(){
_.isFunction(cancelable)&&
$.view.cancel();

},

$.loading.addEventListener('open',function onOpen(e){
isOpen=!0,
closeOnOpen&&
hide();

}),
args=null;
})(arguments[0]||{}),

$.update=update,
$.show=show,
$.hide=hide,





__defers['$.__views.loading!focus!onFocus']&&$.addListener($.__views.loading,'focus',onFocus),__defers['$.__views.loading!blur!onBlur']&&$.addListener($.__views.loading,'blur',onBlur),__defers['$.__views.view!cancel!hide']&&$.__views.view.on('cancel',hide),



_.extend($,exports);
}

module.exports=Controller;