var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='trialCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.trialCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'trialCard'}),

$.__views.trialCard&&$.addTopLevelView($.__views.trialCard),
$.__views.innerCard=Ti.UI.createView(
{left:'15dp',right:'15dp',top:'15dp',bottom:'15dp',backgroundColor:'#fff',height:Ti.UI.SIZE,id:'innerCard',layout:'vertical'}),

$.__views.trialCard.add($.__views.innerCard),
$.__views.__alloyId97=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:32,id:'__alloyId97'}),

$.__views.innerCard.add($.__views.__alloyId97),
$.__views.brand=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:140,height:140,borderRadius:70,id:'brand',image:''}),

$.__views.__alloyId97.add($.__views.brand),
$.__views.lblStatus=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:'16dp'},color:Alloy.Globals.Style.Color.TwilightBlue,textAlign:'center',top:32,id:'lblStatus'}),

$.__views.innerCard.add($.__views.lblStatus),
$.__views.sync=Alloy.createWidget('tf.app.activitySummary','sync',{top:24,height:20,id:'sync',__parentSymbol:$.__views.innerCard}),
$.__views.sync.setParent($.__views.innerCard),
$.__views.lblDptn1=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:Alloy.Globals.Style.Color.BattleshipGrey,textAlign:'center',top:24,id:'lblDptn1'}),

$.__views.innerCard.add($.__views.lblDptn1),
$.__views.lblDptn2=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:Alloy.Globals.Style.Color.BattleshipGrey,textAlign:'center',top:16,id:'lblDptn2'}),

$.__views.innerCard.add($.__views.lblDptn2),
$.__views.lblDptn3=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'12dp'},color:Alloy.Globals.Style.Color.RedPink,textAlign:'center',top:16,id:'lblDptn3'}),

$.__views.innerCard.add($.__views.lblDptn3),
exports.destroy=function(){},




_.extend($,$.__views);var







mode,args=arguments[0]||{},moment=require('alloy/moment'),du=require('utils/date'),cus=require('services/current_user_service'),

_init=function(){
$.brand.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',
_update(),
require('services/summary_service').getSummaryData().then(_update);
},

_update=function(){
var cu=cus.singleton();

if($.sync.update(),'control'===mode){
$.lblStatus.text='ACTIVE MONITORING';
var finishDate=moment(new Date(args.rxActivity.startDate)).add(args.rxActivity.details.length,'weeks').toDate();
$.lblDptn1.text='Thanks for participating in the trial, we will monitor your physical activity levels over a '+args.rxActivity.details.length+' week period until '+du.getDateString(finishDate)+'.',
$.lblDptn2.text='As before, please open '+(IS_HACKA?'Hacka':'TickerFit')+' occasionally to ensure your data is being recorded and syncing correctly during the active monitoring period.';
}else{

$.lblStatus.text='BASELINE DETECTION IN PROGRESS';
var days=moment(moment(du.getStartOfDay(new Date(args.rxActivity.startDate)))).diff(du.getStartOfDay(new Date),'days');
$.lblDptn1.text='Full application functionality will be enabled in '+days+' day'+(1===days?'':'s')+'.',
$.lblDptn2.text='It\'s a good idea to open '+(IS_HACKA?'Hacka':'TickerFit')+' occasionally to ensure your data is being recorded and syncing correctly during the baseline period.';
}

var fitbitEnabledAndNotLinked=cu.get('enableFitbit')&&!require('tickerfit/tracking').isFitbitLinked();

$.lblDptn3.text=fitbitEnabledAndNotLinked?'If you have a Fitbit, or one has been provided for the trial, please enable Fitbit syncing now from the menu.\n\n"Settings"->"Enable Fitbit Syncing"':

'';

},
setMode=function(m){
mode=m;
};

args.rxActivity&&(

setMode(args.opts.mode),
_init(args.rxActivity)),


DISPATCHER.on('tf:activity.update',_update),
DISPATCHER.on('tf:summary.loaded',_update),
DISPATCHER.on('tf:tracking.fitbit.state.updated',_update);

var _onCompleted=function(){
LOGGER.error('NOOP');
};
exports.setOnCompleted=function(cb){
_onCompleted=cb;
},

exports.onCompleted=function(){
_onCompleted();
},

exports.cleanup=function(){
DISPATCHER.off('tf:activity.update',_update),
DISPATCHER.off('tf:summary.loaded',_update),
DISPATCHER.off('tf:tracking.fitbit.state.updated',_update);
},









_.extend($,exports);
}

module.exports=Controller;