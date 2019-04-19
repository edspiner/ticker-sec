var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'nl.fokkezb.pullToRefresh/'+s:
s.substring(0,index)+'/nl.fokkezb.pullToRefresh/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){





































































function refresh(){
show(),

onRefreshstart();
}

function hide(){1?



refreshControl.setRefreshing(!1):refreshControl.endRefreshing();

}

function show(){1?




refreshControl.setRefreshing(!0):refreshControl.beginRefreshing();

}

function onRefreshstart(){
$.trigger('release',{
source:$,
hide:hide});

}var Widget=new(require('/alloy/widget'))('nl.fokkezb.pullToRefresh');if(this.__widgetId='nl.fokkezb.pullToRefresh',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};exports.destroy=function(){},_.extend($,$.__views);var refreshControl;$.refresh=refresh,$.hide=hide,$.show=show,function constructor(args){if(!1)return void console.warn('[pullToRefresh] only supports iOS and Android.');if(!_.isArray(args.children)||!_.contains(['Ti.UI.ListView','Ti.UI.TableView','de.marcelpociot.CollectionView'],args.children[0].apiName))return void console.error('[pullToRefresh] is missing required Ti.UI.ListView or Ti.UI.TableView or de.marcelpociot.CollectionView as first child element.');var list=args.children[0];delete args.children,_.extend($,args),1?(refreshControl=require('com.rkam.swiperefreshlayout').createSwipeRefresh({view:list}),refreshControl.addEventListener('refreshing',onRefreshstart),$.addTopLevelView(refreshControl)):(refreshControl=Ti.UI.createRefreshControl(),refreshControl.addEventListener('refreshstart',onRefreshstart),list.refreshControl=refreshControl,$.addTopLevelView(list))}(arguments[0]||{}),









_.extend($,exports);
}

module.exports=Controller;