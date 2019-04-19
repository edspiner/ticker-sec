var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.programs/'+s:
s.substring(0,index)+'/tf.app.programs/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.programs');




if(this.__widgetId='tf.app.programs',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
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
Alloy.Globals.Style.Widget.Program=config;

var init=!1;

$.init=function(width,height,fullscreen){var _Mathmax=





Math.max;config.Width=width,config.Height=height;var scale=Math.min(1.25,Alloy.Globals.Style.Size.Width.pct100/375);config.Item={},config.Item.ThumbnailWidth=_Mathmax(130*scale,70),
config.Item.ThumbnailHeight=_Mathmax(70*scale,70),
config.Item.DetailLeft=config.Item.ThumbnailWidth+11,



config.StatusHeight=fullscreen&&os.isIOS7Plus()?dimension.statusBarHeightDp():

0,


config.ViewHeight=height-config.StatusHeight,
config.ViewWidth=width,

config.PlayPauseRadius=40,
config.PlayPauseSvgScale=70,
config.PlaySvgTxPct=1?10:20,

config.dp={},
config.dp.ViewHeight=config.ViewHeight,
config.dp.ViewWidth=config.ViewWidth,
config.EnableListAnimation=!0,

config.Row={},
config.Row.Height=Math.ceil(width/5),
config.Row.ImageMargin=5,
config.Row.ScrollHeight=config.Row.Height-2*config.Row.ImageMargin,
config.Row.ImageWidth=width/3,
config.Row.ImageHeight=config.Row.Height-2*config.Row.ImageMargin,

config.Row.MetaWidth=width-(config.Row.ImageWidth+25),

init=!0;
};

var main=null;

$.getMain=function(args){







return null===main&&(!init&&$.init(Alloy.Globals.Style.Dynamic.Width.P100,Alloy.Globals.Style.Dynamic.Height.P100,!0),main=Widget.createController('main',args)),main;
},









_.extend($,exports);
}

module.exports=Controller;