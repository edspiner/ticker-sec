var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.meditate/'+s:
s.substring(0,index)+'/tf.app.meditate/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.meditate');




if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
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
Alloy.Globals.Style.Widget.Meditate=config;

var init=!1;

$.init=function(width,height,fullscreen){
config.Width=width,
config.Height=height,


config.StatusHeight=fullscreen&&os.isIOS7Plus()?dimension.statusBarHeightDp():

0,


config.ViewHeight=height-config.StatusHeight,
config.ViewWidth=width,
config.dp={},
config.dp.ViewHeight=config.ViewHeight,
config.dp.ViewWidth=config.ViewWidth,
config.ViewWidthHalf=width/2,

config.ButtonFontSize=width/18,
config.TrackTitleSize=width/10,
config.TrackTimerSize=width/13,
config.TimerSize=width/3.5,
config.PlayPauseRadius=30,
config.PlayPauseSvgScale=70,
config.PlaySvgTxPct=1?10:20,
config.PauseSvgTxPct=1?0:8,

init=!0;
};

var main=null;

$.getMain=function(){







return null===main&&(!init&&$.init(Alloy.Globals.Style.Dynamic.Width.P100,Alloy.Globals.Style.Dynamic.Height.P100,!0),main=Alloy.createWidget('tf.app.meditate','main')),main;
},









_.extend($,exports);
}

module.exports=Controller;