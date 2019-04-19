var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'ti.ux.pagingcontrol/'+s:
s.substring(0,index)+'/ti.ux.pagingcontrol/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('ti.ux.pagingcontrol');




if(this.__widgetId='ti.ux.pagingcontrol',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dot',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.view=Ti.UI.createView(
{height:4,width:4,borderRadius:2,borderWidth:0,id:'view'}),

$.__views.view&&$.addTopLevelView($.__views.view),
exports.destroy=function(){},




_.extend($,$.__views);


var args=arguments[0];

$.view.left=args.left,

$.view.activate=function(){


$.view.backgroundColor='#000';
},

$.view.deactivate=function(){


$.view.backgroundColor='#999';
},









_.extend($,exports);
}

module.exports=Controller;