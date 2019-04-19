var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.inbox/'+s:
s.substring(0,index)+'/tf.app.inbox/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.inbox');




if(this.__widgetId='tf.app.inbox',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







exports.destroy=function(){},




_.extend($,$.__views);var


os=require('platform/os'),
dimension=require('platform/dimension'),


navBarHeight=dimension.navBarHeightDp();
os.isIOS7Plus()&&(navBarHeight+=dimension.statusBarHeightDp());



var config={};
Alloy.Globals.Style.Widget.Inbox=config;

var init=!1;

$.init=function(width,height,fullscreen){
config.Width=width,
config.Height=height;

var scale=Math.min(1.25,Alloy.Globals.Style.Size.Width.pct100/375);



config.StatusHeight=fullscreen&&os.isIOS7Plus()?dimension.statusBarHeightDp():

0,


config.ViewHeight=height-config.StatusHeight,
config.ViewWidth=width,

DISPATCHER.on('tf:app.inbox.open',_open),
DISPATCHER.once('tf:logout',function cleanup(){
DISPATCHER.off('tf:app.inbox.open',_open);
}),

init=!0;
};var

_open=function(args){
var win=$.getMain(args).getView();
win.addEventListener('open',function done(){
win.removeEventListener('open',done),
setTimeout(function(){
DISPATCHER.trigger('tf:app.window.current.close');
},1?0:500);
}),

require('ui/common/custom_window').openWindow(win),

DISPATCHER.trigger('tf:app.drawer.select',{id:'inbox'});
},

main=null;

$.getMain=function(args){





return init||$.init(Alloy.Globals.Style.Dynamic.Width.P100,Alloy.Globals.Style.Dynamic.Height.P100,!0),main=Widget.createController('main',args),main;
},









_.extend($,exports);
}

module.exports=Controller;