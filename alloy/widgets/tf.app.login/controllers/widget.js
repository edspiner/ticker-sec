var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.login/'+s:
s.substring(0,index)+'/tf.app.login/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.login');




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.loginWindow=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,id:'loginWindow',backgroundColor:'#fff'}),

$.__views.loginWindow&&$.addTopLevelView($.__views.loginWindow),
exports.destroy=function(){},




_.extend($,$.__views);var


navigation=Alloy.Globals.Nav.Login=Alloy.createController('navigation'),
args=arguments[0]||{},

loginWidget=Widget.createController('login',args);
navigation.showNavBarLine(!1),
navigation.init({
index:loginWidget,
defaultOpenTransition:{transition:'slideInFromRight',duration:150},
defaultBackTransition:{transition:'slideInFromLeft',duration:150},
historyLimit:20,
mainWindow:$.loginWindow,
handleClose:loginWidget.cleanup,
title:' ',
backEnabled:!1}),










_.extend($,exports);
}

module.exports=Controller;