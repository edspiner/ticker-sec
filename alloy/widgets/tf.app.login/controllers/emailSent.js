var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.login/'+s:
s.substring(0,index)+'/tf.app.login/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.login');




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='emailSent',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{height:Ti.UI.FILL,layout:'vertical',backgroundColor:'#FFF',width:Alloy.Globals.Style.Size.Width.pct100,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.emailSentPage=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'emailSentPage',layout:'vertical'}),

$.__views.container.add($.__views.emailSentPage),
$.__views.iconView=Ti.UI.createView(
{height:Ti.UI.SIZE,top:32,id:'iconView'}),

$.__views.emailSentPage.add($.__views.iconView),
$.__views.iconContainer=Ti.UI.createView(
{height:140,width:140,borderRadius:70,backgroundColor:'#61C7E9',opacity:.05,id:'iconContainer'}),

$.__views.iconView.add($.__views.iconContainer),
$.__views.emailIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:72},color:'#2DB9E8',text:'8',textAlign:'center',opacity:1,id:'emailIcon'}),

$.__views.iconView.add($.__views.emailIcon),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24,fontWeight:'bold'},color:'#000',top:32,textAlign:'center',id:'title'}),

$.__views.emailSentPage.add($.__views.title),
$.__views.subTitle=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#898989',left:48,right:48,top:8,textAlign:'center',id:'subTitle'}),

$.__views.emailSentPage.add($.__views.subTitle),
$.__views.buttonContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,top:32,left:48,right:48,id:'buttonContainer',layout:'vertical'}),

$.__views.container.add($.__views.buttonContainer),
$.__views.openMailButton=Alloy.createWidget('tf.app.button','widget',{type:'primary',text:'Open mail application',id:'openMailButton',__parentSymbol:$.__views.buttonContainer}),
$.__views.openMailButton.setParent($.__views.buttonContainer),
openMailApp?$.__views.openMailButton.on('click',openMailApp):__defers['$.__views.openMailButton!click!openMailApp']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var



email,iconStyles=require('/styles/iconFormats'),args=arguments[0]||{},
appName=IS_HACKA?'Hacka':'TickerFit',

_init=function(){
$.title.text='An email is on it\u2019s way!',
$.container.top=350>Alloy.Globals.Style.Size.Width.pct100?-24:'4%',
$.iconContainer.height=iconStyles.getIconCircleSize(),
$.iconContainer.width=iconStyles.getIconCircleSize(),
$.iconContainer.borderRadius=iconStyles.getBorderRadius();
},

openMailApp=function(){
if(!1)
Ti.Platform.openURL('Message://');else

try{
var intent=Ti.Android.createIntent({
action:Ti.Android.ACTION_MAIN,
packageName:'com.google.android.gm'});

intent.addCategory(Ti.Android.CATEGORY_LAUNCHER),
intent.setFlags(Ti.Android.FLAG_ACTIVITY_NEW_TASK),
Ti.Android.currentActivity.startActivity(intent);
}catch(e){
Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:'It looks like you don\'t have the Gmail app.\nKeep an eye out for our email in whichever mail app you use!',
title:'Oops!'}).
show();
}

};

exports.setEmail=function(emailAddress){
email=emailAddress,
$.subTitle.text='We\u2019ve sent an email to '+email+', be sure to click on the magic link \u201CLog in to '+appName+'\u201D on your mobile device to be signed in quickly.';
},

$.cleanup=function(){},

_init(),





__defers['$.__views.openMailButton!click!openMailApp']&&$.__views.openMailButton.on('click',openMailApp),



_.extend($,exports);
}

module.exports=Controller;