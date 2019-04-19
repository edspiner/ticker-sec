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




if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='summary',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.summary=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,id:'summary'}),

$.__views.summary&&$.addTopLevelView($.__views.summary),
$.__views.details=Ti.UI.createView(
{top:0,height:Alloy.Globals.Style.Widget.UserInfo.MainHeight,id:'details',layout:'vertical'}),

$.__views.summary.add($.__views.details),
$.__views.__alloyId22=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId22'}),

$.__views.details.add($.__views.__alloyId22),
$.__views.__alloyId23=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSize},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,height:Ti.UI.FILL,text:'Does everything look OK?',id:'__alloyId23'}),

$.__views.__alloyId22.add($.__views.__alloyId23),
$.__views.workplaceRow=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'workplaceRow'}),

$.__views.details.add($.__views.workplaceRow),
$.__views.__alloyId24=Ti.UI.createView(
{width:'25%',id:'__alloyId24'}),

$.__views.workplaceRow.add($.__views.__alloyId24),
$.__views.__alloyId25=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BuildingString,id:'__alloyId25'}),

$.__views.__alloyId24.add($.__views.__alloyId25),
$.__views.__alloyId26=Ti.UI.createView(
{width:'74%',id:'__alloyId26'}),

$.__views.workplaceRow.add($.__views.__alloyId26),
$.__views.workplace=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'workplace'}),

$.__views.__alloyId26.add($.__views.workplace),
$.__views.__alloyId27=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId27'}),

$.__views.details.add($.__views.__alloyId27),
$.__views.__alloyId28=Ti.UI.createView(
{width:'25%',id:'__alloyId28'}),

$.__views.__alloyId27.add($.__views.__alloyId28),
$.__views.genderIcon=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.MaleString,id:'genderIcon'}),

$.__views.__alloyId28.add($.__views.genderIcon),
$.__views.__alloyId29=Ti.UI.createView(
{width:'74%',id:'__alloyId29'}),

$.__views.__alloyId27.add($.__views.__alloyId29),
$.__views.gender=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'gender'}),

$.__views.__alloyId29.add($.__views.gender),
$.__views.__alloyId30=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId30'}),

$.__views.details.add($.__views.__alloyId30),
$.__views.__alloyId31=Ti.UI.createView(
{width:'25%',id:'__alloyId31'}),

$.__views.__alloyId30.add($.__views.__alloyId31),
$.__views.__alloyId32=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BirthdayString,id:'__alloyId32'}),

$.__views.__alloyId31.add($.__views.__alloyId32),
$.__views.__alloyId33=Ti.UI.createView(
{width:'74%',id:'__alloyId33'}),

$.__views.__alloyId30.add($.__views.__alloyId33),
$.__views.birthday=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'birthday'}),

$.__views.__alloyId33.add($.__views.birthday),
$.__views.__alloyId34=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId34'}),

$.__views.details.add($.__views.__alloyId34),
$.__views.__alloyId35=Ti.UI.createView(
{width:'25%',id:'__alloyId35'}),

$.__views.__alloyId34.add($.__views.__alloyId35),
$.__views.__alloyId36=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.RulerString,id:'__alloyId36'}),

$.__views.__alloyId35.add($.__views.__alloyId36),
$.__views.__alloyId37=Ti.UI.createView(
{width:'74%',id:'__alloyId37'}),

$.__views.__alloyId34.add($.__views.__alloyId37),
$.__views.height=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'height'}),

$.__views.__alloyId37.add($.__views.height),
$.__views.__alloyId38=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId38'}),

$.__views.details.add($.__views.__alloyId38),
$.__views.__alloyId39=Ti.UI.createView(
{width:'25%',id:'__alloyId39'}),

$.__views.__alloyId38.add($.__views.__alloyId39),
$.__views.__alloyId40=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.ScalesString,id:'__alloyId40'}),

$.__views.__alloyId39.add($.__views.__alloyId40),
$.__views.__alloyId41=Ti.UI.createView(
{width:'74%',id:'__alloyId41'}),

$.__views.__alloyId38.add($.__views.__alloyId41),
$.__views.weight=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'weight'}),

$.__views.__alloyId41.add($.__views.weight),
$.__views.__alloyId42=Ti.UI.createView(
{layout:'horizontal',width:'90%',height:'13%',id:'__alloyId42'}),

$.__views.details.add($.__views.__alloyId42),
$.__views.__alloyId43=Ti.UI.createView(
{width:'25%',id:'__alloyId43'}),

$.__views.__alloyId42.add($.__views.__alloyId43),
$.__views.__alloyId44=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.SummaryIconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BMIString,id:'__alloyId44'}),

$.__views.__alloyId43.add($.__views.__alloyId44),
$.__views.__alloyId45=Ti.UI.createView(
{width:'74%',id:'__alloyId45'}),

$.__views.__alloyId42.add($.__views.__alloyId45),
$.__views.bmi=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.Label,left:0,height:Ti.UI.FILL,ellipsize:!0,id:'bmi'}),

$.__views.__alloyId45.add($.__views.bmi),
$.__views.footer=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{height:Ti.UI.SIZE,bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o;
}()),

$.__views.summary.add($.__views.footer),
$.__views.prev=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.LeftString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,left:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'prev'}),

$.__views.footer.add($.__views.prev),
$.__views.next=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.TickString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),

$.__views.footer.add($.__views.next),
exports.destroy=function(){},




_.extend($,$.__views);var



navigation=Alloy.Globals.Nav.UserInfo,
state=navigation.state,
animateButton=require('utils/ui').animateClick,
Q=require('vendor/q'),
cus=require('services/current_user_service');

$.TAG='SUMMARY';var

GENDER_MALE='MALE',
GENDER_FEMALE='FEMALE',

_isVisible=function(e){
e.tag&&e.tag===$.TAG&&
_updateView();

},
_updateView=function(){
var skipped='< Skipped >';
state.gender===GENDER_MALE?(
$.genderIcon.text=Alloy.Globals.Style.MaleString,
$.gender.text='Male'):
state.gender===GENDER_FEMALE?(
$.genderIcon.text=Alloy.Globals.Style.FemaleString,
$.gender.text='Female'):(

$.genderIcon.text=Alloy.Globals.Style.MaleString,
$.gender.text=skipped),


$.birthday.text=state.dob?state.dob:

skipped,


$.height.text=state.height?state.heighttext:

skipped,


$.weight.text=state.weight?state.weighttext:

skipped,

state.height&&state.weight?(
state.bmi=Math.round(state.weight/(state.height/100*(state.height/100))),
$.bmi.text='BMI:'+state.bmi):(

state.bmi=void 0,
$.bmi.text=skipped),

state.workplace?
$.workplace.text=state.workplace.title+'/'+state.workplace.unit:
state.grade?
$.workplace.text=state.grade.title:

$.workplaceRow.visible=!1;

},

bmiCategory=function(bmi){return(
0>=bmi?
'--':
18.5>bmi?
'Underweight':
24.99>bmi?
'Normal':
30>bmi?
'Overweight':

'Obese');

};

navigation.addEventListener('nav.backcomplete',_isVisible),
navigation.addEventListener('nav.opencomplete',_isVisible),

$.next.addEventListener('click',function(){
animateButton($.next,$.next.color,!0,next);
}),

$.prev.addEventListener('click',function(){
animateButton($.prev,$.prev.color,!0,prev);
});var

next=_.debounce(function(){


saveState(state);
},1e3,!0),

prev=_.debounce(navigation.back,1e3,!0),

saveState=function(state){
startSpinner(state).then(updatePatient).then(updateMetrics).then(closeWindow).catch(handleError).finally(stopSpinner);
},

startSpinner=function(state){
return Q.fcall(function(){




return DISPATCHER.trigger('tf:progress.start',{message:'Saving...'}),state;
});
},

updatePatient=function(){
var patient={
id:cus.singleton().get('userId'),
sex:state.gender,
dateOfBirth:state.dob,
grouping3:state.grade?{id:state.grade.id}:void 0,
needUserInfo:!1};











return require('services/patient_service').updatePatient(patient);
},
updateMetrics=function(){
var metrics=[];






if(state.height&&metrics.push({type:'HeightCM',value1:state.height}),state.weight&&metrics.push({type:'WeightKG',value1:state.weight}),0<metrics.length)
return require('services/metric_service').record(metrics);

},

closeWindow=function(){


function func(){
setTimeout(function(){

DISPATCHER.trigger('tf:userinfo.close',{}),
navigation.exit();
},500),
defer.resolve({});
}var defer=require('vendor/q').defer(),self=$;;

return setTimeout(func,500),defer.promise;
},

handleError=function(error){
LOGGER.debug('Error to be handled: '+JSON.stringify(error)),
Alloy.Globals.alert('Unable to save profile data - Please try again!','There\'s a problem!');
},

stopSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
};









_.extend($,exports);
}

module.exports=Controller;