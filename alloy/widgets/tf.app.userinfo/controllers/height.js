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

function Controller(){var _Mathround=






















































































































































































































Math.round,Widget=new(require('/alloy/widget'))('tf.app.userinfo');if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='height',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.height=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,id:'height'}),$.__views.height&&$.addTopLevelView($.__views.height),$.__views.__alloyId17=Ti.UI.createView({top:0,height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,id:'__alloyId17'}),$.__views.height.add($.__views.__alloyId17),$.__views.__alloyId18=Ti.UI.createView({height:Ti.UI.SIZE,id:'__alloyId18'}),$.__views.__alloyId17.add($.__views.__alloyId18),$.__views.__alloyId19=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.IconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.RulerString,top:Alloy.Globals.Style.Widget.UserInfo.SpacerHeight,id:'__alloyId19'}),$.__views.__alloyId18.add($.__views.__alloyId19),$.__views.measureView=Ti.UI.createView({height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,width:Ti.UI.FILL,id:'measureView'}),$.__views.height.add($.__views.measureView),$.__views.__alloyId20=Ti.UI.createTextField({height:'1',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},width:'1',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,id:'__alloyId20'}),$.__views.measureView.add($.__views.__alloyId20),$.__views.metric=Ti.UI.createView({width:'90%',id:'metric'}),$.__views.measureView.add($.__views.metric),$.__views.m1=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)({height:'50dp',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.WL.Color.Button,borderRadius:0,borderWidth:'1dp',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.WL.Color.Hint,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},keyboardType:Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION,returnKeyType:Ti.UI.RETURNKEY_DONE,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,left:'5%',width:'70.5%',hintText:'height cm\'s',id:'m1'}),$.__views.metric.add($.__views.m1),$.__views.mBtn=(require('/ui/common/custom_button').createButton||Ti.UI.createButton)({borderRadius:0,borderWidth:'1dp',height:'50dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},left:'75%',color:Alloy.Globals.Style.WL.Color.ButtonLabel,normalColor:'#fff',normalBorderColor:Alloy.Globals.Style.WL.Color.Button,selectedColor:'#ddd',selectedBorderColor:'#888',backgroundImage:'none',width:'20%',disableAnimation:!0,id:'mBtn',title:'cm'}),$.__views.metric.add($.__views.mBtn),$.__views.imperial=Ti.UI.createView({width:'90%',id:'imperial',visible:!1}),$.__views.measureView.add($.__views.imperial),$.__views.m2=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)({height:'50dp',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.WL.Color.Button,borderRadius:0,borderWidth:'1dp',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.WL.Color.Hint,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},keyboardType:Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION,returnKeyType:Ti.UI.RETURNKEY_NEXT,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,left:'5%',width:'36%',hintText:'height ft',id:'m2'}),$.__views.imperial.add($.__views.m2),$.__views.m3=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)({height:'50dp',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.WL.Color.Button,borderRadius:0,borderWidth:'1dp',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.WL.Color.Hint,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},keyboardType:Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION,returnKeyType:Ti.UI.RETURNKEY_DONE,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,left:'40.5%',width:'35%',hintText:'ins',id:'m3'}),$.__views.imperial.add($.__views.m3),$.__views.iBtn=(require('/ui/common/custom_button').createButton||Ti.UI.createButton)({borderRadius:0,borderWidth:'1dp',height:'50dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},left:'75%',color:Alloy.Globals.Style.WL.Color.ButtonLabel,normalColor:'#fff',normalBorderColor:Alloy.Globals.Style.WL.Color.Button,selectedColor:'#ddd',selectedBorderColor:'#888',backgroundImage:'none',width:'20%',disableAnimation:!0,id:'iBtn',title:'ft/in'}),$.__views.imperial.add($.__views.iBtn),$.__views.skipView=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{bottom:0,left:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{height:Alloy.Globals.Style.Widget.UserInfo.SkipViewHeight,id:'skipView'}),o}()),$.__views.height.add($.__views.skipView),$.__views.skipButton=Ti.UI.createView({top:0,height:Alloy.Globals.Style.Widget.UserInfo.SkipButtonHeight,width:Alloy.Globals.Style.Widget.UserInfo.SkipButtonWidth,borderRadius:Alloy.Globals.Style.Widget.UserInfo.SkipButtonBorderRadius,borderColor:Alloy.Globals.Style.WL.Color.ButtonDisabled,id:'skipButton'}),$.__views.skipView.add($.__views.skipButton),$.__views.__alloyId21=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:'Skip',id:'__alloyId21'}),$.__views.skipButton.add($.__views.__alloyId21),$.__views.footer=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.SIZE}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o}()),$.__views.height.add($.__views.footer),$.__views.prev=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.LeftString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,left:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'prev'}),$.__views.footer.add($.__views.prev),$.__views.next=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:Alloy.Globals.Style.RightString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),$.__views.footer.add($.__views.next),exports.destroy=function(){},_.extend($,$.__views);var navigation=Alloy.Globals.Nav.UserInfo,state=navigation.state,animateButton=require('utils/ui').animateClick,AnimatedBottomView=require('ui/common/animated_bottom_view');new AnimatedBottomView().setup({container:$.measureView,triggers:[$.m1,$.m2,$.m3],bottomWhenViewOnTop:Alloy.Globals.Style.Widget.UserInfo.ViewHeight-$.measureView.height,bottom:(Alloy.Globals.Style.Widget.UserInfo.ViewHeight-$.measureView.height)/2,bgdown:'transparent',bgup:Alloy.Globals.Style.Color.BrandGreyTransparent});var nextView;_.defer(function(){nextView=Alloy.createWidget('tf.app.userinfo','weight')});var nextEnabled=!1;$.next.addEventListener('click',function(){nextEnabled&&animateButton($.next,$.next.color,!0,next)}),$.skipButton.addEventListener('click',function(){state.height=void 0,animateButton($.skipButton,$.skipButton.color,!0,next)}),$.prev.addEventListener('click',function(){animateButton($.prev,$.prev.color,!0,prev)});var next=_.debounce(function(){Alloy.Globals.Nav.UserInfo.open(nextView,{title:'WEIGHT',backEnabled:!0})},1e3,!0),prev=_.debounce(navigation.back,1e3,!0),enableNext=function(){state.height&&90<=state.height&&235>=state.height?($.skipButton.visible=!1,nextEnabled=!0,animateButton($.next,Alloy.Globals.Style.WL.Color.Button,!0)):($.skipButton.visible=!0,nextEnabled=!1,animateButton($.next,Alloy.Globals.Style.WL.Color.ButtonDisabled,!1))},metric=!0;$.m1.addEventListener('change',function(e){metric&&validateInputNumber($.m1,updateMetric,!0)}),$.m2.addEventListener('change',function(e){metric||validateInputNumber($.m2,updateImp1,!1)}),$.m3.addEventListener('change',function(e){metric||validateInputNumber($.m3,updateImp2,!0)}),$.m1.addEventListener('return',function(e){$.m1.blur(),nextEnabled?setTimeout(next,500):Alloy.Globals.alert('Please enter a valid height','There\'s a problem!')}),$.m2.addEventListener('return',function(e){$.m3.focus()}),$.m3.addEventListener('return',function(e){$.m3.blur(),nextEnabled?setTimeout(next,500):Alloy.Globals.alert('Please enter a valid height','There\'s a problem!')});var validateInputNumber=function(input,callback,allowFloat){var replaced;replaced=allowFloat?input.value.replace(/[^0-9.]+/,''):input.value.replace(/[^0-9]+/,''),replaced===input.value?callback(+replaced):input.value=replaced},updateMetric=function(cms){state.height=_Mathround(10*cms)/10,
state.heightmode='metric',
state.heighttext=''+(state.height/100).toFixed(3)+'m',
enableNext();
},

updateImp1=function(feet){
state.heightmode='imperial';var
inches=+$.m3.value,
cms=_Mathround(304.8*feet+25.4*inches)/10;
state.heighttext=''+feet+'ft '+inches+'"',
state.height=cms,
enableNext();
},
updateImp2=function(ins){
state.heightmode='imperial';
var feet=+$.m2.value;
state.heighttext=''+feet+'ft '+ins+'"';
var cms=_Mathround(304.8*feet+25.4*ins)/10;
state.height=cms,
enableNext();
};

$.mBtn.addEventListener('click',function(){
toggleMetric();
}),
$.iBtn.addEventListener('click',function(){
toggleMetric();
});

var toggleMetric=function(){
if(metric){
if(state.height){var
feet=Math.floor(10*state.height/304.8),
inches=10*state.height%304.8/25.4;

inches=_Mathround(10*inches)/10,
$.m2.value=feet,
$.m3.value=inches.toFixed(1);
}else
$.m2.value='',
$.m3.value='';

$.metric.visible=!1,
$.imperial.visible=!0,
$.m2.focus(),
metric=!1;
}else

$.m1.value=state.height?state.height.toFixed(1):

'',

$.metric.visible=!0,
$.imperial.visible=!1,
$.m1.focus(),
metric=!0;

};

if(state.metrics){
var m=_.find(state.metrics,function(metric){
return'HeightCM'===metric.type;
});
m&&(
$.m1.value=m.value1,
updateMetric(m.value1));

}









_.extend($,exports);
}

module.exports=Controller;