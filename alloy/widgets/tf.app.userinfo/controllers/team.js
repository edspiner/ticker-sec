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




if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='team',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.workplace=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,id:'workplace'}),

$.__views.workplace&&$.addTopLevelView($.__views.workplace),
$.__views.__alloyId46=Ti.UI.createView(
{top:0,height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,id:'__alloyId46'}),

$.__views.workplace.add($.__views.__alloyId46),
$.__views.__alloyId47=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'__alloyId47'}),

$.__views.__alloyId46.add($.__views.__alloyId47),
$.__views.__alloyId48=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.IconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BuildingString,top:Alloy.Globals.Style.Widget.UserInfo.SpacerHeight,id:'__alloyId48'}),

$.__views.__alloyId47.add($.__views.__alloyId48),
$.__views.inputView=Ti.UI.createScrollView(
{height:Alloy.Globals.Style.Widget.UserInfo.DetailHeight,width:Ti.UI.FILL,bottom:Alloy.Globals.Style.Widget.UserInfo.BannerHeight,id:'inputView'}),

$.__views.workplace.add($.__views.inputView),
$.__views.inputContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:'91.66666666666666%',id:'inputContainer',layout:'vertical'}),

$.__views.inputView.add($.__views.inputContainer),
$.__views.__alloyId49=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,text:'Team Name:',id:'__alloyId49'}),

$.__views.inputContainer.add($.__views.__alloyId49),
$.__views.name=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,bottom:10,text:'UNKNOWN',id:'name'}),

$.__views.inputContainer.add($.__views.name),
$.__views.__alloyId50=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,text:'Location/Workplace:',id:'__alloyId50'}),

$.__views.inputContainer.add($.__views.__alloyId50),
$.__views.org=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,bottom:10,text:'UNKNOWN',id:'org'}),

$.__views.inputContainer.add($.__views.org),
$.__views.__alloyId51=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,text:'What is your Staff Grade?',id:'__alloyId51'}),

$.__views.inputContainer.add($.__views.__alloyId51),
$.__views.grade=Alloy.createWidget('tf.app.combobox','widget',{left:0,right:0,width:'100%',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,borderRadius:0,borderWidth:'1dp',borderColor:Alloy.Globals.Style.WL.Color.Button,font:{fontSize:'18dp'},hintTextColor:Alloy.Globals.Style.WL.Color.Hint,returnKeyType:Ti.UI.RETURNKEY_DONE,height:'50dp',dropButton:{color:'black',selectedColor:'yellow'},backgroundColor:'#fff',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,hintText:'Select grade',id:'grade',__parentSymbol:$.__views.inputContainer}),
$.__views.grade.setParent($.__views.inputContainer),
$.__views.footer=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.SIZE}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o;
}()),

$.__views.workplace.add($.__views.footer),
$.__views.next=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:Alloy.Globals.Style.RightString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),

$.__views.footer.add($.__views.next),
exports.destroy=function(){},




_.extend($,$.__views);var









nextView,navigation=Alloy.Globals.Nav.UserInfo,state=navigation.state,animateButton=require('utils/ui').animateClick,nextEnabled=!1;
_.defer(function(){
nextView=Alloy.createWidget('tf.app.userinfo','userinfo');
}),

$.next.addEventListener('click',function(){
nextEnabled&&
animateButton($.next,$.next.color,!0,next);

});var

next=_.debounce(function(){
var selgrade=_.extend({},grade);
state.grade=selgrade,
Alloy.Globals.Nav.UserInfo.open(nextView,{
title:'SELECT GENDER',
backEnabled:!0});

},1e3,!0),

enableNext=function(val){
nextEnabled!=val&&(
nextEnabled=val,
val?animateButton($.next,Alloy.Globals.Style.WL.Color.Button,!0):animateButton($.next,Alloy.Globals.Style.WL.Color.ButtonDisabled,!1));

},

grades={},

_loadGroupings=function(type){
return Widget.createCollection('groupings').fetch({
category:type});

},

doneFirst=!1,
_setGradeChoices=function(groupings){
grades={},
_.each(groupings,function(g){
grades[g.id]={
title:g.text};

}),

grades[0]={
title:'Select grade'},


$.grade.choices=grades,

doneFirst||(
state.user&&state.user.grouping3&&(
$.grade.id=state.user.grouping3.id,
grade=grades[state.user.grouping3.id],
grade.id=state.user.grouping3.id,
validate()),

doneFirst=!0);

},

refreshGroupings=function(){
LOGGER.debug('Refreshing groupings'),
_loadGroupings('Grade').then(_setGradeChoices).catch(function(e){
LOGGER.error('Error loading grade groupings:'+JSON.stringify(e));
});
};

refreshGroupings(),
Ti.App.addEventListener('tf:life.cycle.resume',refreshGroupings);

var grade=null;
$.grade.init($.getView()),
$.grade.on('change',function(event){
grade=grades[event.id],
validate();
});

var validate=function(){


enableNext(null!=grade&&'0'!==grade.id);
};

state.user&&state.user.grouping1&&(
$.org.text=state.user.grouping1.text),

state.user&&state.user.grouping2&&(
$.name.text=state.user.grouping2.text),










_.extend($,exports);
}

module.exports=Controller;