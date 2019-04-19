var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitylog/'+s:
s.substring(0,index)+'/tf.app.activitylog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activitylog');




if(this.__widgetId='tf.app.activitylog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activity_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'transparent',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',visible:!0,font:{fontFamily:'tickerfit'},id:'container'}),

$.__views.row.add($.__views.container),
$.__views.viewActivity=Ti.UI.createView(
{top:16,bottom:16,left:24,right:24,height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'viewActivity'}),

$.__views.container.add($.__views.viewActivity),
$.__views.iconView=Ti.UI.createView(
{top:0,left:0,width:52,height:52,borderRadius:26,id:'iconView'}),

$.__views.viewActivity.add($.__views.iconView),
$.__views.background=Ti.UI.createView(
{id:'background'}),

$.__views.iconView.add($.__views.background),
$.__views.activityIcon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:26},color:'#111',id:'activityIcon'}),

$.__views.iconView.add($.__views.activityIcon),
$.__views.details=Ti.UI.createView(
{left:66,right:0,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'details',layout:'vertical'}),

$.__views.viewActivity.add($.__views.details),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:'#88999f',left:1,height:Ti.UI.SIZE,width:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title'}),

$.__views.details.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:1,top:2,height:Ti.UI.SIZE,width:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'description'}),

$.__views.details.add($.__views.description),
$.__views.rightAction=Ti.UI.createView(
{right:16,width:60,height:60,id:'rightAction'}),

$.__views.container.add($.__views.rightAction),
toggleOptions?$.addListener($.__views.rightAction,'click',toggleOptions):__defers['$.__views.rightAction!click!toggleOptions']=!0,$.__views.options=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:'14dp'},color:'#b6c0c4',text:'.',visible:!0,id:'options'}),

$.__views.rightAction.add($.__views.options),
$.__views.optionPanels=Ti.UI.createView(
{height:84,width:132,visible:!0,right:-132,font:{fontFamily:'tickerfit',fontSize:26},id:'optionPanels'}),

$.__views.container.add($.__views.optionPanels),
$.__views.editActivity=Ti.UI.createView(
{backgroundColor:'#e3e8ea',width:66,left:0,id:'editActivity'}),

$.__views.optionPanels.add($.__views.editActivity),
editClicked?$.addListener($.__views.editActivity,'click',editClicked):__defers['$.__views.editActivity!click!editClicked']=!0,$.__views.editButton=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:18},color:'#65767c',text:'{',id:'editButton'}),

$.__views.editActivity.add($.__views.editButton),
$.__views.deleteActivity=Ti.UI.createView(
{backgroundColor:'#ef2f7a',width:66,right:0,id:'deleteActivity'}),

$.__views.optionPanels.add($.__views.deleteActivity),
deleteClicked?$.addListener($.__views.deleteActivity,'click',deleteClicked):__defers['$.__views.deleteActivity!click!deleteClicked']=!0,$.__views.deleteButton=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:18},color:'#ffffff',text:'n',id:'deleteButton'}),

$.__views.deleteActivity.add($.__views.deleteButton),
$.__views.underline=Ti.UI.createView(
{height:1,bottom:0,left:24,right:24,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var









item,args=arguments[0]||{},iconStyles=require('/styles/iconFormats'),cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,SECONDS_PER_MINUTE=60,optionsOpen=!1,
setItem=function(data){

if(item=data,'empty'===item.type)


















return void $.updateViews({"#container":{backgroundColor:'#f8fafb'},"#details":{left:0},"#title":{text:'No activity recorded',font:{fontSize:16,fontFamily:Alloy.CFG.fontBold}},"#options":{text:''}});var












activitySource,editable,activeTime=Math.trunc(item.activeTime/SECONDS_PER_MINUTE)||'<1',text=iconStyles.getText(item.type)+' for '+activeTime+' mins',attributedActivityDescription=Ti.UI.createAttributedString({text:text,attributes:[{type:Ti.UI.ATTRIBUTE_FONT,value:{fontSize:16,fontWeight:'bold'},range:[text.indexOf('for ')+4,text.length-text.indexOf('for ')-4]}]});
switch(item.source){
case'MANUAL':
$.container.addEventListener('swipe',function(e){(
'left'===e.direction&&optionsOpen||'right'===e.direction&&!optionsOpen)&&
toggleOptions();

}),
$.container.addEventListener('singletap',function(e){
toggleOptions();
}),
activitySource='';
break;
case'WEARABLE':
case'FB':
case'HKW':
$.addClass($.options,'tf-wearable'),
activitySource=' - Wearable';
break;
case'HK':
case'FIT':
case'GPS':
$.addClass($.options,'tf-mobile'),
activitySource='HK'===item.source?' - iPhone':' - Google Fit';
break;
default:
$.addClass($.options,'tf-mobile'),
activitySource=1?' - Android':' - iPhone';}



$.addClass($.activityIcon,iconStyles.getIconClass(item.type)),
$.updateViews({
"#underline":{
visible:args.showSeparator},

"#background":{
backgroundColor:iconStyles.getBackgroundColor(item.type),
opacity:iconStyles.getBackgroundOpacity(item.type)},

"#activityIcon":{
color:iconStyles.getIconColor(item.type)},

"#title":{
text:require('/utils/date').getTimeString(new Date(item.startTime))+activitySource},

"#description":{
attributedString:attributedActivityDescription},

"#options":{
font:{
fontFamily:'tickerfit',
fontSize:'MANUAL'===item.source?20:26}}});



},

update=function(){
item&&setItem(item);
};
setItem(args.data);var

toggleOptions=_.debounce(function(){
'MANUAL'===item.source&&(
optionsOpen=!optionsOpen,
$.viewActivity.animate({
left:!0==optionsOpen?24:-24}),

$.optionPanels.animate({
right:!0==optionsOpen?-132:0}));


},400,!0),

editClicked=function(){
item.activeTime/=SECONDS_PER_MINUTE,
DISPATCHER.trigger('tf:app.activityDetails.click',{function:'edit',data:item});
},

deleteClicked=function(){
DISPATCHER.trigger('tf:app.activityDetails.click',{function:'delete',id:item.sourceActivityId});
};


exports.onClick=function(callback){
callback(!0);
},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},





__defers['$.__views.rightAction!click!toggleOptions']&&$.addListener($.__views.rightAction,'click',toggleOptions),__defers['$.__views.editActivity!click!editClicked']&&$.addListener($.__views.editActivity,'click',editClicked),__defers['$.__views.deleteActivity!click!deleteClicked']&&$.addListener($.__views.deleteActivity,'click',deleteClicked),



_.extend($,exports);
}

module.exports=Controller;