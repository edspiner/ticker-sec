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




if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='userinfo',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.userinfoContainer=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,id:'userinfoContainer'}),

$.__views.userinfoContainer&&$.addTopLevelView($.__views.userinfoContainer),
$.__views.__alloyId52=Ti.UI.createView(
{top:0,height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,id:'__alloyId52'}),

$.__views.userinfoContainer.add($.__views.__alloyId52),
$.__views.__alloyId53=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'__alloyId53'}),

$.__views.__alloyId52.add($.__views.__alloyId53),
$.__views.__alloyId54=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSize},color:Alloy.Globals.Style.WL.Color.TitleLabel,width:'83.33333333333334%',text:'Please tell us a little more about you...',id:'__alloyId54'}),

$.__views.__alloyId53.add($.__views.__alloyId54),
$.__views.__alloyId55=Ti.UI.createView(
{layout:'horizontal',height:Alloy.Globals.Style.Widget.UserInfo.DetailHeight,width:'95%',id:'__alloyId55'}),

$.__views.userinfoContainer.add($.__views.__alloyId55),
$.__views.__alloyId56=Ti.UI.createView(
{width:'42.5%',left:'5%',right:'2.5%',id:'__alloyId56'}),

$.__views.__alloyId55.add($.__views.__alloyId56),

$.__views.__alloyId57=(require('com.tickerfit.activity').createDeceleratedView||Ti.UI.createDeceleratedView)(
{id:'__alloyId57'}),

$.__views.__alloyId56.add($.__views.__alloyId57),
$.__views.femaleIcon=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.GenderIconSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.FemaleString,width:'250%',center:{x:'50%'},textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'femaleIcon'}),

$.__views.__alloyId57.add($.__views.femaleIcon),

$.__views.__alloyId58=Ti.UI.createView(
{width:'42.5%',left:'2.5%',id:'__alloyId58'}),

$.__views.__alloyId55.add($.__views.__alloyId58),

$.__views.__alloyId59=(require('com.tickerfit.activity').createDeceleratedView||Ti.UI.createDeceleratedView)(
{id:'__alloyId59'}),

$.__views.__alloyId58.add($.__views.__alloyId59),
$.__views.maleIcon=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.GenderIconSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.MaleString,width:'250%',center:{x:'50%'},textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'maleIcon'}),

$.__views.__alloyId59.add($.__views.maleIcon),

$.__views.skipView=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{bottom:0,left:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{height:Alloy.Globals.Style.Widget.UserInfo.SkipViewHeight,id:'skipView'}),o;
}()),

$.__views.userinfoContainer.add($.__views.skipView),
$.__views.skipButton=Ti.UI.createView(
{top:0,height:Alloy.Globals.Style.Widget.UserInfo.SkipButtonHeight,width:Alloy.Globals.Style.Widget.UserInfo.SkipButtonWidth,borderRadius:Alloy.Globals.Style.Widget.UserInfo.SkipButtonBorderRadius,borderColor:Alloy.Globals.Style.WL.Color.ButtonDisabled,id:'skipButton'}),

$.__views.skipView.add($.__views.skipButton),
$.__views.__alloyId60=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:'Skip',id:'__alloyId60'}),

$.__views.skipButton.add($.__views.__alloyId60),
$.__views.footer=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{height:Ti.UI.SIZE,bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o;
}()),

$.__views.userinfoContainer.add($.__views.footer),
$.__views.prev=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.LeftString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,left:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'prev'}),

$.__views.footer.add($.__views.prev),
$.__views.next=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:Alloy.Globals.Style.RightString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),

$.__views.footer.add($.__views.next),
exports.destroy=function(){},




_.extend($,$.__views);var










nextView,navigation=Alloy.Globals.Nav.UserInfo,state=navigation.state,animateButton=require('utils/ui').animateClick,autoNext=!1,args=arguments[0]||{},backEnabled=!args.hideBack;
_.defer(function(){
nextView=Alloy.createWidget('tf.app.userinfo','date_of_birth');
});

var nextEnabled=!1;






if($.next.addEventListener('click',function(){nextEnabled&&animateButton($.next,$.next.color,!0,next)}),backEnabled){
var prev=_.debounce(navigation.back,1e3,!0);
$.prev.addEventListener('click',function(){
animateButton($.prev,$.prev.color,!0,prev);
});
}else
$.prev.visible=!1;


$.skipButton.addEventListener('click',function(){
state.gender=void 0,
animateButton($.skipButton,$.skipButton.color,!0,next);
});var

next=_.debounce(function(){
Alloy.Globals.Nav.UserInfo.open(nextView,{
title:'BIRTHDAY',
backEnabled:!0});

},1e3,!0),

enableNext=function(){
$.skipButton.visible=!1,
nextEnabled=!0,
animateButton($.next,Alloy.Globals.Style.WL.Color.Button,!0),
autoNext&&
setTimeout(next,500);

},



gender='',
GENDER_MALE='MALE',
GENDER_FEMALE='FEMALE';

$.femaleIcon.addEventListener('click',function(){

confirmGender(GENDER_FEMALE);
}),
$.maleIcon.addEventListener('click',function(){

confirmGender(GENDER_MALE);
});var

confirmGender=function(g){
var icon;
g===GENDER_MALE?(
animateButton($.maleIcon,Alloy.Globals.Style.Color.BrandBlue,!0),
animateButton($.femaleIcon,Alloy.Globals.Style.WL.Color.Button),
setGender(g)):
g===GENDER_FEMALE?(
animateButton($.maleIcon,Alloy.Globals.Style.WL.Color.Button),
animateButton($.femaleIcon,Alloy.Globals.Style.Color.BrandPink,!0),
setGender(g)):(

animateButton($.maleIcon,Alloy.Globals.Style.WL.Color.Button),
animateButton($.femaleIcon,Alloy.Globals.Style.WL.Color.Button),
setGender(''));

},

setGender=function(g){
gender=g,
state.gender=g,
enableNext();
};

state.user&&state.user.sex&&(

state.user.sex===GENDER_MALE?
$.maleIcon.color=Alloy.Globals.Style.Color.BrandBlue:
state.user.sex===GENDER_FEMALE&&(
$.femaleIcon.color=Alloy.Globals.Style.Color.BrandPink),

setGender(state.user.sex),
$.next.color=Alloy.Globals.Style.WL.Color.Button),

autoNext=!0,









_.extend($,exports);
}

module.exports=Controller;