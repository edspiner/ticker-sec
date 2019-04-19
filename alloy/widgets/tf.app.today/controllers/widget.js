var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
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
Alloy.Globals.Style.Widget.Today=config;

var init=!1;

$.init=function(width,height,fullscreen){var _Mathmin=





















Math.min;config.Width=width,config.Height=height,config.StatusHeight=fullscreen&&os.isIOS7Plus()?dimension.statusBarHeightDp():0,config.ViewHeight=height-config.StatusHeight,config.ViewWidth=width,config.dp={},config.dp.ViewHeight=config.ViewHeight,config.dp.ViewWidth=config.ViewWidth,config.PlayPauseRadius=40,config.PlayPauseSvgScale=70,config.PlaySvgTxPct=1?10:20,config.ViewWidthHalf=width/2;var scale=_Mathmin(1.25,Alloy.Globals.Style.Size.Width.pct100/375);

config.Stamp={},
config.Stamp.TitleFontSize=_Mathmin(16*scale,16),
config.Stamp.HighlightFontSize=Math.max(11,_Mathmin(12*scale,12)),

init=!0;
};

var main=null;

$.getMain=function(){








return null===main&&(!init&&$.init(Alloy.Globals.Style.Dynamic.Width.P100,Alloy.Globals.Style.Dynamic.Height.P100,!0),main=Alloy.createWidget('tf.app.today','main'),main.setVisibleDimensions(config.Width,config.Height)),main;
},









_.extend($,exports);
}

module.exports=Controller;