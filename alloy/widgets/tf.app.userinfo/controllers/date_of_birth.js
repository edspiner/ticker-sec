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





















































































































































function report(e){
var d=e.value;



state.dob=0?

d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear():require('com.tickerfit.activity').getFormattedDateString(d),

enableNext(d);
}

function _calculateAge(birthday){var

ageDifMs=Date.now()-birthday.getTime(),
ageDate=new Date(ageDifMs);
return Math.abs(ageDate.getUTCFullYear()-1970);
}var Widget=new(require('/alloy/widget'))('tf.app.userinfo');if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='date_of_birth',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.dob=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,id:'dob'}),$.__views.dob&&$.addTopLevelView($.__views.dob),$.__views.__alloyId11=Ti.UI.createView({top:0,height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,id:'__alloyId11'}),$.__views.dob.add($.__views.__alloyId11),$.__views.__alloyId12=Ti.UI.createView({height:Ti.UI.SIZE,id:'__alloyId12'}),$.__views.__alloyId11.add($.__views.__alloyId12),$.__views.__alloyId13=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.IconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BirthdayString,top:Alloy.Globals.Style.Widget.UserInfo.SpacerHeight,id:'__alloyId13'}),$.__views.__alloyId12.add($.__views.__alloyId13),$.__views.__alloyId14=Ti.UI.createView({top:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,height:Alloy.Globals.Style.Widget.UserInfo.DetailHeight,width:Ti.UI.FILL,id:'__alloyId14'}),$.__views.dob.add($.__views.__alloyId14),$.__views.__alloyId15=Ti.UI.createView({height:Ti.UI.SIZE,id:'__alloyId15'}),$.__views.__alloyId14.add($.__views.__alloyId15),$.__views.pickerBox=Ti.UI.createView({height:Ti.UI.SIZE,width:'90%',bottom:Alloy.Globals.Style.Widget.UserInfo.SpacerHeight,id:'pickerBox'}),$.__views.__alloyId15.add($.__views.pickerBox),$.__views.picker=Ti.UI.createPicker({left:'5%',right:'10dp',backgroundColor:'transparent',width:'90%',format24:!1,calendarViewShown:!1,id:'picker',type:Ti.UI.PICKER_TYPE_DATE}),$.__views.pickerBox.add($.__views.picker),report?$.addListener($.__views.picker,'change',report):__defers['$.__views.picker!change!report']=!0,$.__views.skipView=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{bottom:0,left:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{height:Alloy.Globals.Style.Widget.UserInfo.SkipViewHeight,id:'skipView'}),o}()),$.__views.dob.add($.__views.skipView),$.__views.skipButton=Ti.UI.createView({top:0,height:Alloy.Globals.Style.Widget.UserInfo.SkipButtonHeight,width:Alloy.Globals.Style.Widget.UserInfo.SkipButtonWidth,borderRadius:Alloy.Globals.Style.Widget.UserInfo.SkipButtonBorderRadius,borderColor:Alloy.Globals.Style.WL.Color.ButtonDisabled,id:'skipButton'}),$.__views.skipView.add($.__views.skipButton),$.__views.__alloyId16=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:'Skip',id:'__alloyId16'}),$.__views.skipButton.add($.__views.__alloyId16),$.__views.footer=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{height:Ti.UI.SIZE,bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o}()),$.__views.dob.add($.__views.footer),$.__views.prev=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.LeftString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,left:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'prev'}),$.__views.footer.add($.__views.prev),$.__views.next=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:Alloy.Globals.Style.RightString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),$.__views.footer.add($.__views.next),exports.destroy=function(){},_.extend($,$.__views);var nextView,navigation=Alloy.Globals.Nav.UserInfo,state=navigation.state,animateButton=require('utils/ui').animateClick;_.defer(function(){nextView=Alloy.createWidget('tf.app.userinfo','height')});var nextEnabled=!1;$.next.addEventListener('click',function(){nextEnabled&&animateButton($.next,$.next.color,!0,next)}),$.skipButton.addEventListener('click',function(){state.dob=void 0,animateButton($.skipButton,$.skipButton.color,!0,next)}),$.prev.addEventListener('click',function(){animateButton($.prev,$.prev.color,!0,prev)});var next=_.debounce(function(){Alloy.Globals.Nav.UserInfo.open(nextView,{title:'HEIGHT',backEnabled:!0})},1e3,!0),prev=_.debounce(navigation.back,1e3,!0),enableNext=function(d){13<=_calculateAge(d)?($.skipButton.visible=!1,nextEnabled=!0,animateButton($.next,Alloy.Globals.Style.WL.Color.Button,!0)):($.skipButton.visible=!0,nextEnabled=!1,animateButton($.next,Alloy.Globals.Style.WL.Color.ButtonDisabled,!1),Alloy.Globals.alert('You need to be at least 13yrs old to take part','There\'s a problem!'))};

if($.picker.maxDate=new Date,$.picker.minDate=new Date(1916,0,1),$.picker.value=new Date(1970,0,1),state.user&&state.user.dateOfBirth){var
dob=state.user.dateOfBirth.split('/'),
date=new Date(dob[2],dob[1]-1,dob[0]);
$.picker.value=date,
report({value:date}),
$.next.color=Alloy.Globals.Style.WL.Color.Button;
}





__defers['$.__views.picker!change!report']&&$.addListener($.__views.picker,'change',report),



_.extend($,exports);
}

module.exports=Controller;