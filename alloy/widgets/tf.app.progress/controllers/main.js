var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.progress/'+s:
s.substring(0,index)+'/tf.app.progress/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.progress');




if(this.__widgetId='tf.app.progress',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='main',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.progressWindow=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,id:'progressWindow'}),

$.__views.progressWindow&&$.addTopLevelView($.__views.progressWindow),
exports.destroy=function(){},




_.extend($,$.__views);


var navigation=Alloy.Globals.Nav.Progress=Alloy.createController('navigation');


navigation.state={};var

args=arguments[0]||{},
backEnabled=!0===args.closeOnBack;

navigation.setActionButtonColor(Alloy.Globals.Style.Color.DarkSkyBlue);
var progress=Widget.createController('progress');
navigation.init({
index:progress,
defaultOpenTransition:{transition:'none',duration:150},
defaultBackTransition:{transition:'slideInFromLeft',duration:150},
historyLimit:20,
backgroundColor:'#fff',
mainWindow:$.progressWindow,
handleClose:progress.cleanup,
title:'My Progress',
backEnabled:backEnabled,
drawerEnabled:!0,
openOnInit:!1,
height:'100%'}),

$.progressWindow.addEventListener('open',function onOpen(){
$.progressWindow.removeEventListener('open',onOpen),

_.defer(function(){
progress.setActive(!0);
});
}),









_.extend($,exports);
}

module.exports=Controller;