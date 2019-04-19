var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.userinfo/'+s:
s.substring(0,index)+'/tf.app.userinfo/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.userinfo');




if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
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

Alloy.Globals.Style.Widget.UserInfo=config;

var args=arguments[0]||{};
config.showGroupPage=!args.hideGroupPage,


config.ViewHeight=Alloy.Globals.Style.Dynamic.Height.P100-navBarHeight,

config.BannerHeight=Alloy.Globals.Style.Dynamic.Width.P25,
config.SkipButtonHeight=25,
config.SkipButtonWidth=50,
config.SkipButtonBorderRadius=10,

config.SkipViewHeight=config.BannerHeight+config.SkipButtonHeight+5,

config.BannerLogoWidth=Alloy.Globals.Style.Dynamic.Width.P50,
config.ButtonSize=Alloy.Globals.Style.Dynamic.Width.P15,
config.ButtonMargin=Alloy.Globals.Style.Dynamic.Width.P5,

config.MainHeight=config.ViewHeight-config.BannerHeight,
config.Dynamic={},

Object.defineProperty(Alloy.Globals.Style.Widget.UserInfo.Dynamic,'MainHeight',{
get:function(){
return require('bootstrap/dynamic').get('UserInfo','MainHeight',function(val){
return config.MainHeight*val/100;
});
}}),


config.HeaderHeight=config.Dynamic.MainHeight.P35,
config.DetailHeight=config.MainHeight-config.HeaderHeight,
config.IconSize=config.Dynamic.MainHeight.P20,
config.GenderIconSize=.9*config.DetailHeight,
config.SpacerHeight=(config.HeaderHeight-config.IconSize)/2,

config.FontSize=config.Dynamic.MainHeight.P5,
config.FontSizeSmall=config.Dynamic.MainHeight.P4,




config.SummaryIconSize=config.Dynamic.MainHeight.P7,

$.main=Alloy.createWidget('tf.app.userinfo','main',{user:args.user,metrics:args.metrics}),









_.extend($,exports);
}

module.exports=Controller;