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
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='main',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.routinesWindow=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,windowSoftInputMode:Alloy.Globals.Style.KeyboardState,id:'routinesWindow'}),

$.__views.routinesWindow&&$.addTopLevelView($.__views.routinesWindow),
exports.destroy=function(){},




_.extend($,$.__views);


var navigation=Alloy.Globals.Nav.Routines=Alloy.createController('navigation');


navigation.state={};var

args=arguments[0]||{},
widgetDashboard=Widget.createController('dashboard',args),
backEnabled=!0===args.closeOnBack;
navigation.setActionButtonColor(Alloy.Globals.Style.Color.DarkSkyBlue),
navigation.init({
index:widgetDashboard,
defaultOpenTransition:{transition:'none',duration:150},
defaultBackTransition:{transition:'slideInFromLeft',duration:150},
historyLimit:20,
backgroundColor:'#fff',
mainWindow:$.routinesWindow,
handleClose:widgetDashboard.cleanup,
title:'My Routines',
backEnabled:backEnabled,
drawerEnabled:!0,
openOnInit:!1,
rightAction:'Manage',
height:'100%'}),










_.extend($,exports);
}

module.exports=Controller;