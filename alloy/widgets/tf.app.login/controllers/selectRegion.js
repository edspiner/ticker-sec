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




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='selectRegion',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.regionList=Alloy.createWidget('tf.app.tableview','widget',{padtop:24,padbottom:24,left:16,right:16,opacity:100,rowType:{widget:'tf.app.login',controller:'regionCell'},type:'simulated',id:'regionList',__parentSymbol:$.__views.container}),
$.__views.regionList.setParent($.__views.container),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

cus=require('services/current_user_service'),
listCellHeight=84,

init=function(){
_selectDeployment();
},

_selectDeployment=function(){
Alloy.createCollection('deployments').fetch().then(function(deployments){
if(deployments){var
list=[],
current=_.findWhere(deployments,{
current:!0}),




showAllGroups=cus.singleton().get('enableAllDeployments');
_.forEach(deployments,function(deployment){

if(showAllGroups||current.type&&'PRODUCTION'!==current.type||current.group===deployment.group){
var thisElement={
text:deployment.name,
selected:!0===deployment.current,
region:deployment.region,
value:deployment};

list.push(thisElement);
}
}),

1<list.length&&(
list=_(list).chain().sortBy(function(item){
return item.region;
}).sortBy(function(item){
return-item.value.group;
}).value(),
$.regionList.setData(list),
$.regionList.height=list.length*listCellHeight);

}else
LOGGER.error('No Deployments found');

}).catch(function(){

require('bootstrap/env').reset();
});
};

init(),

$.cleanup=function(){
$.regionList.cleanup(),
DISPATCHER.off('tf.app.login.regionSelected');
},









_.extend($,exports);
}

module.exports=Controller;