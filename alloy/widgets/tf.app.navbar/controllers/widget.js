var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.navbar/'+s:
s.substring(0,index)+'/tf.app.navbar/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.navbar');




if(this.__widgetId='tf.app.navbar',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.navbar=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{top:0,width:Alloy.Globals.Style.Size.Width.pct100}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{top:44}),Alloy.deepExtend(!0,o,{id:'navbar'}),o;
}()),

$.__views.navbar&&$.addTopLevelView($.__views.navbar),
$.__views.lblTitle=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:Alloy.Globals.Style.Widget.Navbar.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,left:48,right:48,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'lblTitle',text:'\t'}),

$.__views.navbar.add($.__views.lblTitle),
$.__views.home=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,opacity:0,right:10,id:'home'}),

$.__views.navbar.add($.__views.home),
$.__views.__alloyId182=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:33,width:33,touchEnabled:!1,image:'/images/home.svg',id:'__alloyId182'}),

$.__views.home.add($.__views.__alloyId182),
$.__views.leftAction=Ti.UI.createView(
{height:40,width:40,left:8,id:'leftAction'}),

$.__views.navbar.add($.__views.leftAction),
$.__views.drawer=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:24},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'r',visible:!1,width:Ti.UI.SIZE,height:40,id:'drawer'}),

$.__views.leftAction.add($.__views.drawer),
$.__views.back=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:'14dp'},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'d',visible:!1,width:Ti.UI.SIZE,height:40,id:'back'}),

$.__views.leftAction.add($.__views.back),
$.__views.imgTitle=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{defaultImage:'',id:'imgTitle'}),

$.__views.navbar.add($.__views.imgTitle),
$.__views.rightActions=Ti.UI.createView(
{right:8,width:Ti.UI.SIZE,height:40,id:'rightActions',layout:'horizontal'}),

$.__views.navbar.add($.__views.rightActions),
$.__views.midRightAction=Ti.UI.createView(
{visible:!1,width:Ti.UI.SIZE,height:40,id:'midRightAction'}),

$.__views.rightActions.add($.__views.midRightAction),
$.__views.lblMidRightAction=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:Alloy.Globals.Style.Widget.Navbar.RightActionFontSize},color:Alloy.Globals.Style.Color.DarkSkyBlue,right:16,width:Ti.UI.SIZE,id:'lblMidRightAction'}),

$.__views.midRightAction.add($.__views.lblMidRightAction),
$.__views.rewards=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:'24dp'},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'^',visible:!1,width:Ti.UI.SIZE,height:40,right:16,id:'rewards'}),

$.__views.midRightAction.add($.__views.rewards),
$.__views.rightAction=Ti.UI.createView(
{visible:!1,width:Ti.UI.SIZE,height:40,id:'rightAction'}),

$.__views.rightActions.add($.__views.rightAction),
$.__views.lblRightAction=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:Alloy.Globals.Style.Widget.Navbar.RightActionFontSize},color:Alloy.Globals.Style.Color.DarkSkyBlue,right:8,width:Ti.UI.SIZE,id:'lblRightAction'}),

$.__views.rightAction.add($.__views.lblRightAction),
$.__views.inbox=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:'24dp'},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'"',visible:!1,width:Ti.UI.SIZE,height:40,right:11,id:'inbox'}),

$.__views.rightAction.add($.__views.inbox),
$.__views.badge=Ti.UI.createView(
{width:Ti.UI.SIZE,height:20,backgroundColor:'white',borderRadius:10,right:0,top:3,id:'badge'}),

$.__views.rightAction.add($.__views.badge),
$.__views.__alloyId183=Ti.UI.createView(
{left:2,right:2,width:Ti.UI.SIZE,height:16,backgroundColor:Alloy.Globals.Style.Color.RedPink,borderRadius:8,id:'__alloyId183'}),

$.__views.badge.add($.__views.__alloyId183),
$.__views.badgeValue=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:12},color:'white',left:4,right:4,bottom:1,width:Ti.UI.SIZE,height:16,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'badgeValue'}),

$.__views.__alloyId183.add($.__views.badgeValue),
_setMinBadgeWidth?$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth):__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']=!0,$.__views.underline=Ti.UI.createView(
{backgroundColor:Alloy.Globals.Style.Color.SilverTwo,width:Titanium.UI.FILL,height:1,bottom:0,id:'underline'}),

$.__views.navbar.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var



leftEvent,
midRightEvent,
rightEvent,animateButton=require('utils/ui').animateClick;

$.navbar.height=require('platform/dimension').navBarHeightDp();var







































































































































_badgeValue,_homeShow=function(){$.home.animate({duration:200,opacity:1},function(e){})},_homeHide=function(){$.home.animate({duration:200,opacity:0},function(e){})},_homeClick=function(e){var id=e.source.id;e.source.animate({autoreverse:!0,duration:50,transform:Ti.UI.create2DMatrix({scale:.7})},function(e){DISPATCHER.trigger('tf:main.home.click')})},_leftActionTouch=function(e){animateButton($.leftAction,$.leftAction.color,.8,function(){DISPATCHER.trigger(leftEvent)})},_rightActionTouch=function(e){animateButton($.rightAction,$.rightAction.color,.8,function(){DISPATCHER.trigger(rightEvent)})},_midRightActionTouch=function(e){animateButton($.midRightAction,$.midRightAction.color,.8,function(){DISPATCHER.trigger(midRightEvent)})},_handleUnreadInfo=function(info){_setBadge(info.total)},initEventListeners=function(){DISPATCHER.on('tf:main.home.show',_homeShow),DISPATCHER.on('tf:main.home.hide',_homeHide),DISPATCHER.on('tf:messages.unread.info',_handleUnreadInfo),DISPATCHER.once('tf:logout',removeEventListeners),$.home.addEventListener('click',_homeClick),$.leftAction.addEventListener('touchstart',_leftActionTouch),$.midRightAction.addEventListener('touchstart',_midRightActionTouch),$.rightAction.addEventListener('touchstart',_rightActionTouch)},removeEventListeners=function(){DISPATCHER.off('tf:main.home.show',_homeShow),DISPATCHER.off('tf:main.home.hide',_homeHide),DISPATCHER.off('tf:messages.unread.info',_handleUnreadInfo),$.home.removeEventListener('click',_homeClick),$.leftAction.removeEventListener('touchstart',_leftActionTouch),$.midRightAction.removeEventListener('touchstart',_midRightActionTouch),$.rightAction.removeEventListener('touchstart',_rightActionTouch)},_setTitle=function(text){$.imgTitle.visible=!1,$.lblTitle.text=text},_setTitleColor=function(color){$.lblTitle.color=color},_showTitleImage=function(show){var img;show&&(img=Alloy.Globals.Style.WL.Image.TitleLogo),void 0===img||''===img?$.imgTitle.visible=!1:($.lblTitle.opacity=0,$.imgTitle.visible=!1,$.imgTitle.width=img.width,$.imgTitle.height=img.height,$.imgTitle.image=img.image,$.imgTitle.visible=!0)},_setLeftActionColor=function(color){$.drawer.color=color,$.back.color=color},_setMidRightActionColor=function(color){$.lblMidRightAction.color=color,$.rewards.color=color},_setRightActionColor=function(color){$.lblRightAction.color=color,$.inbox.color=color},_showUnderline=function(show){$.underline.opacity=show?1:0},_setLeftAction=function(type,eventToTrigger){leftEvent=eventToTrigger;var drawer='DRAWER'===type,back='BACK'===type;$.drawer.visible=drawer,$.back.visible=back,$.leftAction.visible=drawer||back},_setMidRightAction=function(type,eventToTrigger){midRightEvent=eventToTrigger;var rewards='REWARDS'===type,label=!rewards&&'undefined'!=typeof type;$.rewards.visible=rewards,$.lblMidRightAction.text=label?type:'',$.lblMidRightAction.visible=label,$.midRightAction.width=label?Ti.UI.SIZE:40,$.midRightAction.visible=rewards||label},_setRightAction=function(type,eventToTrigger){rightEvent=eventToTrigger;var inbox='INBOX'===type,label=!inbox&&'undefined'!=typeof type;$.inbox.visible=inbox,$.badge.opacity=inbox&&_badgeValue?1:0,$.lblRightAction.text=label?type:'',$.lblRightAction.visible=label,$.rightAction.width=label?Ti.UI.SIZE:40,$.rightAction.visible=inbox||label},
_setBadge=function(value){
_badgeValue=value,
$.updateViews({
"#badge":{
opacity:$.inbox.visible&&value?1:0},

"#badgeValue":{
width:Ti.UI.SIZE,
text:value}});


},
_setMinBadgeWidth=function(e){
$.badgeValue.rect.width&&8>$.badgeValue.rect.width&&(
$.badgeValue.width=8);

};

initEventListeners(),

exports.setTitle=_setTitle,
exports.setTitleColor=_setTitleColor,
exports.setLeftActionColor=_setLeftActionColor,
exports.setMidRightActionColor=_setMidRightActionColor,
exports.setRightActionColor=_setRightActionColor,
exports.showUnderline=_showUnderline,
exports.setLeftAction=_setLeftAction,
exports.setMidRightAction=_setMidRightAction,
exports.setRightAction=_setRightAction,
exports.showTitleImage=_showTitleImage,
exports.setBadge=_setBadge,





__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']&&$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth),



_.extend($,exports);
}

module.exports=Controller;