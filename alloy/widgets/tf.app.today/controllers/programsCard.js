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




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='programsCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.programsCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'programsCard'}),

$.__views.programsCard&&$.addTopLevelView($.__views.programsCard),
$.__views.innerCard=Ti.UI.createView(
{bottom:5,height:Ti.UI.SIZE,id:'innerCard',layout:'vertical'}),

$.__views.programsCard.add($.__views.innerCard),
$.__views.__alloyId88=Ti.UI.createView(
{height:64,width:Ti.UI.FILL,id:'__alloyId88'}),

$.__views.innerCard.add($.__views.__alloyId88),
$.__views.__alloyId89=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId89'}),

$.__views.__alloyId88.add($.__views.__alloyId89),
$.__views.__alloyId90=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:Alloy.Globals.Style.Color.LightBlue,text:'v',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:10,id:'__alloyId90'}),

$.__views.__alloyId89.add($.__views.__alloyId90),
$.__views.__alloyId91=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,text:'My Programs',id:'__alloyId91'}),

$.__views.__alloyId89.add($.__views.__alloyId91),
$.__views.__alloyId92=Ti.UI.createView(
{opacity:.6,bottom:0,height:1,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId92'}),

$.__views.__alloyId88.add($.__views.__alloyId92),
$.__views.programList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.programs',controller:'program_cell'},opacity:0,height:Ti.UI.SIZE,type:'simulated',id:'programList',__parentSymbol:$.__views.innerCard}),
$.__views.programList.setParent($.__views.innerCard),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{type:'secondary',text:'View all',top:10,left:24,bottom:24,right:24,id:'button',__parentSymbol:$.__views.innerCard}),
$.__views.button.setParent($.__views.innerCard),
openAll?$.__views.button.on('click',openAll):__defers['$.__views.button!click!openAll']=!0,exports.destroy=function(){},




_.extend($,$.__views);var





rxPrograms,args=arguments[0]||{},cus=require('services/current_user_service'),

setPrograms=function(rxps){
rxPrograms=rxps;

var sorted=_.chain(rxPrograms).sortBy(function(p){
return p.program.title;
}).sortBy(function(p){
var incomplete=_.find(p.program.items,function(i){
return!i.done;
});
return incomplete?0:1;
}).sortBy(function(p){
var viewable=_.find(p.program.items,function(i){
return i.viewable&&!i.done;
});
return viewable?0:1;
}).sortBy(function(p){
var sticky=_.find(p.program.items,function(i){
return i.sticky&&i.due;
});
return sticky?0:1;
}).sortBy(function(p){
return-p.dueItems.length;
}).value();

2<sorted.length&&(
sorted=sorted.slice(0,2)),

$.programList.setData(sorted);
},

updatePrograms=function(){var
cu=cus.singleton(),
toggles=cu.get('toggles'),
rx=cu.get('rx');
if(rx&&rx.rxPrograms){
var rxps=require('services/rx_service').filterPrograms(cu.get('enableProgramThemeMode')?rx.themeRxPrograms:rx.rxPrograms,['VIDEO','DOCUMENT','REPORT']);
setPrograms(rxps);
}
},

_openProgramsView=function(programId){
var win=Alloy.createWidget('tf.app.programs').getMain({
selectedProgramId:programId,
closeOnBack:!0}).
getView();

require('ui/common/custom_window').openWindow(win),
setTimeout(function(){
DISPATCHER.trigger('tf:app.slideWindow.close');
},500);



},
openProgramsView=_.debounce(_openProgramsView,500,!0),

openAll=function(evt){
openProgramsView();
},

showProgram=function(rxProgram){
openProgramsView(rxProgram.program.id);
},

_onCompleted=function(){
LOGGER.error('NOOP');
};

DISPATCHER.on('tf:rx.loaded',updatePrograms),
updatePrograms(),

$.programList.onClick(showProgram),

exports.setOnCompleted=function(cb){
_onCompleted=cb;
},

exports.onCompleted=function(){
_onCompleted();
},

exports.cleanup=function(){
DISPATCHER.off('tf:rx.loaded',updatePrograms);
},





__defers['$.__views.button!click!openAll']&&$.__views.button.on('click',openAll),



_.extend($,exports);
}

module.exports=Controller;