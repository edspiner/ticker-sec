var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.drawer/'+s:
s.substring(0,index)+'/tf.app.drawer/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.drawer');




if(this.__widgetId='tf.app.drawer',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='profile',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.profile=Ti.UI.createView(
{top:32,bottom:32,height:80,width:'85%',id:'profile'}),

$.__views.profile&&$.addTopLevelView($.__views.profile),
$.__views.avatar=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:80,height:80,left:8,borderRadius:40,id:'avatar',image:'/images/man.svg'}),

$.__views.profile.add($.__views.avatar),
$.__views.greeting=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,top:4,left:104,height:52,width:Ti.UI.FILL,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,id:'greeting'}),

$.__views.profile.add($.__views.greeting),
$.__views.points=Ti.UI.createView(
{layout:'horizontal',left:104,bottom:0,height:20,borderRadius:10,width:Ti.UI.SIZE,backgroundColor:Alloy.Globals.Style.Color.RedPink,id:'points'}),

$.__views.profile.add($.__views.points),
$.__views.__alloyId181=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:'12dp'},color:Alloy.Globals.Style.Color.LightGold,text:'k',left:4,width:Ti.UI.SIZE,height:Ti.UI.FILL,id:'__alloyId181'}),

$.__views.points.add($.__views.__alloyId181),
$.__views.pointValue=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:12},color:'white',left:4,right:4,width:Ti.UI.SIZE,id:'pointValue'}),

$.__views.points.add($.__views.pointValue),
exports.destroy=function(){},




_.extend($,$.__views);var


moment=require('alloy/moment'),
nu=require('/utils/number'),
cus=require('services/current_user_service'),

_setPoints=function(points,brand){
if(points){
$.points.visible=!0;var
text=nu.formatNumber(points)+' '+brand+' Points',
attr=Ti.UI.createAttributedString({
text:text,
attributes:[{
type:Ti.UI.ATTRIBUTE_FONT,
value:{fontSize:12,fontFamily:Alloy.CFG.fontBold},
range:[0,text.indexOf(' ')]}]});


$.pointValue.attributedString=attr;
}else
$.points.visible=!1;

},

_getGreeting=function(){
var hour=new Date().getHours();return(
4>hour||18<=hour?
'Evening':
12<=hour?
'Afternoon':

'Morning');

},

_setUser=function(user,toggles){var
greeting=_getGreeting()+',\n',
text=greeting+user.firstname+'!',
attr=Ti.UI.createAttributedString({
text:text,
attributes:[{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:Alloy.Globals.Style.Color.TwilightBlue,
range:[greeting.length,text.length-greeting.length]},
{
type:Ti.UI.ATTRIBUTE_FONT,
value:{fontSize:24,fontFamily:Alloy.CFG.fontBold},
range:[greeting.length,text.length-greeting.length]}]});



if($.greeting.attributedString=attr,toggles&&'yes'===toggles.enablePoints&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl){
$.greeting.height=52;var
points=cus.singleton().get('points'),
balance=points.creditTotal-points.debitTotal,
lifetime=points.creditTotal;
_setPoints(balance,IS_HACKA?'Hacka':'Ticker');
var child=!1;
if(user.dateOfBirth){var
dob=moment(user.dateOfBirth,'DD/MM/YYYY'),
age=moment().diff(dob,'years');
child=18>age;
}
'MALE'===user.sex?(
$.avatar.image=child?'/images/boy.svg':'/images/man.svg',
$.avatar.backgroundColor=Alloy.Globals.Style.Color.DuckEggBlue):
'FEMALE'===user.sex?(
$.avatar.image=child?'/images/girl.svg':'/images/woman.svg',
$.avatar.backgroundColor=Alloy.Globals.Style.Color.DuckEggBlue):(

$.avatar.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',
$.avatar.backgroundColor=void 0);

}else
$.greeting.height=76,
_setPoints(!1),
$.avatar.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',
$.avatar.backgroundColor=void 0;

};

exports.setUser=_setUser,









_.extend($,exports);
}

module.exports=Controller;