var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.tableview/'+s:
s.substring(0,index)+'/tf.app.tableview/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.tableview');




if(this.__widgetId='tf.app.tableview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='tableView',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.tableview=Ti.UI.createTableView(
{backgroundColor:'transparent',width:Ti.UI.FILL,height:Ti.UI.FILL,opacity:0,showVerticalScrollIndicator:!1,separatorStyle:Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE,id:'tableview'}),

$.__views.tableview&&$.addTopLevelView($.__views.tableview),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),

onClick=void 0,
tableView_data=[];





















WTools.setTiProps(args,$.tableview);

var _onClick=function(e){
if(0<=e.index){
var data=tableView_data[e.index].getData();
$.tableview.touchEnabled=!1,
tableView_data[e.index].onClick(function(ignore){
setTimeout(function(){
$.tableview.touchEnabled=!0;
},200),
!ignore&&onClick&&onClick(data);
});
}
};
$.tableview.addEventListener('click',_onClick),

exports.setData=function(data){
_.forEach(tableView_data,function(cell){
cell.cleanup&&cell.cleanup();
}),
tableView_data=[];
var tableView_rows=[];
if(data.length)
for(var i=0;i<data.length;i++){
data[i].rowidx=i;var
wargs={
data:data[i],
showSeparator:i+1!==data.length},

cell=Widget.createWidget(args.rowType.widget,args.rowType.controller||'widget',wargs);
0===i&&(cell.getContainer().top=args.padtop?args.padtop:0),
i===data.length-1&&(cell.getContainer().bottom=args.padbottom?args.padbottom:0),
cell.getContainer().left=args.padleft?args.padleft:0,
cell.getContainer().right=args.padright?args.padright:0,
tableView_data.push(cell),
tableView_rows.push(cell.getView());
}


var resize=!1;





if($.tableview.setData(tableView_rows),args.height===Ti.UI.SIZE&&($.tableview.height=Ti.UI.FILL,resize=!0),!1)
$.tableview.opacity=1;else
{
var tableview_animation_appear=Ti.UI.createAnimation({
opacity:1,
duration:400,
curve:Titanium.UI.ANIMATION_CURVE_EASE_OUT});

$.tableview.animate(tableview_animation_appear,function(){
$.tableview.opacity=1,
resize&&(
$.tableview.height=Ti.UI.SIZE);

});
}
};

var _update=function(){
$.tableview.setData($.tableview.data);
};

exports.hide=function(){
$.tableview.opacity=0;
},
exports.setHeight=function(height){
$.tableview.height=height;
},
exports.setTop=function(top){
$.tableview.top=top;
},
exports.update=_update,

exports.onClick=function(onclick){
onClick=onclick;
},
exports.getTableViewRows=function(){
return tableView_data;
},
exports.cleanup=function(){
_.forEach(tableView_data,function(cell){
cell.cleanup&&cell.cleanup();
});
},









_.extend($,exports);
}

module.exports=Controller;