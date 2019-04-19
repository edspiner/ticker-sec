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




if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='main',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.userinfoWindow=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,backgroundColor:'#fff',windowSoftInputMode:Alloy.Globals.Style.KeyboardState,id:'userinfoWindow'}),

$.__views.userinfoWindow&&$.addTopLevelView($.__views.userinfoWindow),
$.__views.background=Ti.UI.createView(
{bottom:0,height:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.WL.Color.Light,id:'background'}),

$.__views.userinfoWindow.add($.__views.background),
$.__views.banner=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{bottom:0,left:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{height:Alloy.Globals.Style.Widget.UserInfo.BannerHeight,backgroundColor:Alloy.Globals.Style.WL.Color.Dark,id:'banner'}),o;
}()),

$.__views.background.add($.__views.banner),
$.__views.image=Ti.UI.createImageView(
{width:Alloy.Globals.Style.Widget.UserInfo.BannerLogoWidth,defaultImage:'',id:'image',image:Alloy.Globals.Style.WL.Image.BannerLogo}),

$.__views.banner.add($.__views.image),
exports.destroy=function(){},




_.extend($,$.__views);


var navigation=Alloy.Globals.Nav.UserInfo=Alloy.createController('navigation');


navigation.state={};

var args=arguments[0]||{};
navigation.state.user=args.user,
navigation.state.metrics=args.metrics;var

cus=require('services/current_user_service'),

name=args.user.firstname;

navigation.setActionButtonColor('#fff');
var nextView;

nextView=Alloy.Globals.Style.Widget.UserInfo.showGroupPage?Widget.createController('team',args):

Widget.createController('userinfo',{hideBack:!0}),

navigation.showNavBarLine(!1),
navigation.init({
index:nextView,
defaultOpenTransition:{transition:'slideInFromRight',duration:150},
defaultBackTransition:{transition:'slideInFromLeft',duration:150},
historyLimit:20,
mainWindow:$.userinfoWindow,
title:'WELCOME'+(name?'  '+name.toUpperCase():''),
backEnabled:!1,
height:'100%'}),










_.extend($,exports);
}

module.exports=Controller;