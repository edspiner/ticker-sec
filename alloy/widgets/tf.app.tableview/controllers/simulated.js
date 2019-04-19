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




if(this.__widgetId='tf.app.tableview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='simulated',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.simulated=Ti.UI.createView(
{width:Ti.UI.FILL,height:Ti.UI.SIZE,opacity:0,backgroundColor:'transparent',id:'simulated',layout:'vertical'}),

$.__views.simulated&&$.addTopLevelView($.__views.simulated),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),

onClick=void 0,
tableView_data=[];





















WTools.setTiProps(args,$.simulated);

var _onClick=function(e){
if(0<=e.index){
var data=tableView_data[e.index].getData();
$.simulated.touchEnabled=!1,
tableView_data[e.index].onClick(function(ignore){
setTimeout(function(){
$.simulated.touchEnabled=!0;
},200),
!ignore&&onClick&&onClick(data);
});
}
};

exports.setData=function(data){




function createOnClickFn(idx){
return function(){
_onClick({index:idx});
};
}

if($.simulated.removeAllChildren(),_.forEach(tableView_data,function(cell){cell.cleanup&&cell.cleanup()}),tableView_data=[],data.length)
for(var i=0;i<data.length;i++){
data[i].rowidx=i;var
wargs={
data:data[i],
showSeparator:i+1!==data.length},

cell=Widget.createWidget(args.rowType.widget,args.rowType.controller||'widget',wargs),
container=cell.getContainer();
0===i&&(container.top=args.padtop?args.padtop:0),
i===data.length-1&&(container.bottom=args.padbottom?args.padbottom:0),
container.left=args.padleft?args.padleft:0,
container.right=args.padright?args.padright:0,
tableView_data.push(cell),

container.on('click',createOnClickFn(i)),
$.simulated.add(container);
}

$.simulated.opacity=1;
};

var _update=function(){

};

exports.hide=function(){
$.simulated.opacity=0;
},
exports.setHeight=function(height){
$.simulated.height=height;
},
exports.setTop=function(top){
$.simulated.top=top;
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