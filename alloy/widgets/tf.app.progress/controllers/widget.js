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




if(this.__widgetId='tf.app.progress',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
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

args=arguments[0]||{},


navBarHeight=dimension.navBarHeightDp();
os.isIOS7Plus()&&(navBarHeight+=dimension.statusBarHeightDp());



var config={};
Alloy.Globals.Style.Widget.Progress=config;var

scale=Math.min(1.25,Alloy.Globals.Style.Size.Width.pct100/375),
init=!1;

$.init=function(width,height,fullscreen){
config.Width=width,
config.Height=height,
config.PanelWidth=.9*width,
config.PanelWidthHalf=.5*config.PanelWidth,

config.Chart={
Radius:config.PanelWidth/4,
RadiusSmall:.6*config.PanelWidthHalf/2,
FontSizeSmall:30*scale,
FontSizeLarge:40*scale},

config.Chart.OverallLabelBottom=1.35*config.Chart.Radius,
init=!0;
};

var _init=function(){
init||

$.init(Alloy.Globals.Style.Dynamic.Width.P100,Alloy.Globals.Style.Dynamic.Height.P100,!0);

};

_init(),
$.main=Widget.createController('main',args),









_.extend($,exports);
}

module.exports=Controller;