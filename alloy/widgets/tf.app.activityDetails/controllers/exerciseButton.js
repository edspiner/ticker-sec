var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activityDetails/'+s:
s.substring(0,index)+'/tf.app.activityDetails/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activityDetails');




if(this.__widgetId='tf.app.activityDetails',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='exerciseButton',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.exerciseButton=Ti.UI.createView(
{top:0,height:Ti.UI.SIZE,layout:'vertical',id:'exerciseButton'}),

$.__views.exerciseButton&&$.addTopLevelView($.__views.exerciseButton),
click?$.addListener($.__views.exerciseButton,'click',click):__defers['$.__views.exerciseButton!click!click']=!0,$.__views.button=Ti.UI.createView(
{height:64,width:64,borderWidth:0,borderRadius:32,id:'button'}),

$.__views.exerciseButton.add($.__views.button),
$.__views.background=Ti.UI.createView(
{id:'background'}),

$.__views.button.add($.__views.background),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:30},color:'white',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'icon',classes:['circle-icon']}),

$.__views.button.add($.__views.icon),
$.__views.label=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,text:'Label',top:5,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'label'}),

$.__views.exerciseButton.add($.__views.label),
exports.destroy=function(){},




_.extend($,$.__views);var







callback,

exercise,args=arguments[0]||{},WTools=require('WidgetTools'),animateButton=require('utils/ui').animateClick,iconStyles=require('/styles/iconFormats');

WTools.setTiProps(args,$.getView());var

_setExercise=function(ex){
ex&&(
exercise=ex),

_updateViews();
},
_updateViews=function(){
$.addClass($.icon,iconStyles.getIconClass(exercise)),
$.updateViews({
"#background":{
backgroundColor:iconStyles.getBackgroundColor(exercise),
opacity:iconStyles.getBackgroundOpacity(exercise)},

"#icon":{
color:iconStyles.getIconColor(exercise),
font:{
fontFamily:'tickerfit',
fontSize:iconStyles.getIconSize(exercise)}},


"#label":{
text:iconStyles.getText(exercise),
color:iconStyles.getLabelColor(exercise)}});


},
_init=function(){
_setExercise(args.id);
};
_init();

var click=function(){
animateButton($.button,$.button.color,!0,function(){
$.trigger('click',{id:exercise,text:iconStyles.getText(exercise)});
});
};

exports.setExercise=_setExercise,





__defers['$.__views.exerciseButton!click!click']&&$.addListener($.__views.exerciseButton,'click',click),



_.extend($,exports);
}

module.exports=Controller;