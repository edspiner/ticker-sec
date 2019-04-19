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




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activitySummaryCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.activityCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'activityCard'}),

$.__views.activityCard&&$.addTopLevelView($.__views.activityCard),
$.__views.activitySummary=Alloy.createWidget('tf.app.activitySummary','widget',{id:'activitySummary',__parentSymbol:$.__views.activityCard}),
$.__views.activitySummary.setParent($.__views.activityCard),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

setActivity=function(rxa){
$.activitySummary.setActivity(rxa);
};

args.rxActivity&&
setActivity(args.rxActivity),


exports.setActivity=setActivity,

exports.cleanup=function(){
$.activitySummary.cleanup();
},









_.extend($,exports);
}

module.exports=Controller;