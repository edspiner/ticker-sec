var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'ti.ux.scrollableview/'+s:
s.substring(0,index)+'/ti.ux.scrollableview/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){











































































































function linkScrollableView(){
$.scrollable.removeEventListener('postlayout',linkScrollableView),
pagingTop?
$.pagingControlTop.linkScrollableView($.scrollable):

$.pagingControlBottom.linkScrollableView($.scrollable);

}

function updatePagingControl(e){
pagingTop?
$.pagingControlTop.setActiveDot(e.currentPage):

$.pagingControlBottom.setActiveDot(e.currentPage);

}var Widget=new(require('/alloy/widget'))('ti.ux.scrollableview');if(this.__widgetId='ti.ux.scrollableview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.container=Ti.UI.createView({height:Ti.UI.SIZE,id:'container'}),$.__views.container&&$.addTopLevelView($.__views.container),$.__views.pagingControlContainerTop=Ti.UI.createView({height:Titanium.UI.SIZE,id:'pagingControlContainerTop',top:0}),$.__views.container.add($.__views.pagingControlContainerTop),$.__views.pagingControlTop=Alloy.createWidget('ti.ux.pagingcontrol','widget',{id:'pagingControlTop',__parentSymbol:$.__views.pagingControlContainerTop}),$.__views.pagingControlTop.setParent($.__views.pagingControlContainerTop),$.__views.underlineTop=Ti.UI.createView({backgroundColor:Alloy.Globals.Style.Color.SilverTwo,width:Titanium.UI.FILL,height:1,id:'underlineTop',top:9}),$.__views.container.add($.__views.underlineTop);var __alloyId3=[];$.__views.scrollable=Ti.UI.createScrollableView({views:__alloyId3,id:'scrollable',showPagingControl:!1,disableBounce:!0}),$.__views.container.add($.__views.scrollable),linkScrollableView?$.addListener($.__views.scrollable,'postlayout',linkScrollableView):__defers['$.__views.scrollable!postlayout!linkScrollableView']=!0,updatePagingControl?$.addListener($.__views.scrollable,'scrollEnd',updatePagingControl):__defers['$.__views.scrollable!scrollEnd!updatePagingControl']=!0,$.__views.underlineBottom=Ti.UI.createView({backgroundColor:Alloy.Globals.Style.Color.SilverTwo,width:Titanium.UI.FILL,height:1,id:'underlineBottom',bottom:9}),$.__views.container.add($.__views.underlineBottom),$.__views.pagingControlContainerBottom=Ti.UI.createView({height:Titanium.UI.SIZE,id:'pagingControlContainerBottom',bottom:0}),$.__views.container.add($.__views.pagingControlContainerBottom),$.__views.pagingControlBottom=Alloy.createWidget('ti.ux.pagingcontrol','widget',{id:'pagingControlBottom',__parentSymbol:$.__views.pagingControlContainerBottom}),$.__views.pagingControlBottom.setParent($.__views.pagingControlContainerBottom),exports.destroy=function(){},_.extend($,$.__views);var args=arguments[0],WTools=require('WidgetTools');WTools.setTiProps(args,$.scrollable);var pagingTop;'bottom'===args.pagingControlPosition?(pagingTop=!1,$.underlineTop.visible=!1,$.underlineTop.height=0,args.hideUnderline&&($.underlineBottom.visible=!1,$.underlineBottom.height=0),$.pagingControlContainerTop.visible=!1,$.pagingControlContainerTop.height=0):'hide'===args.pagingControlPosition?(pagingTop=!1,$.underlineBottom.visible=!1,$.underlineBottom.height=0,$.underlineTop.visible=!1,$.underlineTop.height=0,$.pagingControlContainerBottom.visible=!1,$.pagingControlContainerBottom.height=0,$.pagingControlContainerTop.visible=!1,$.pagingControlContainerTop.height=0):(pagingTop=!0,$.underlineBottom.visible=!1,$.underlineBottom.height=0,args.hideUnderline&&($.underlineTop.visible=!1,$.underlineTop.height=0),$.pagingControlContainerBottom.visible=!1,$.pagingControlContainerBottom.height=0),$.scrollable.disableBounce=args.disableBounce,args.children&&($.scrollable.views=args.children);
var first=!0;
$.setPage=function(num){
if(!first){
var view=$.scrollable.getViews()[num];
$.scrollable.scrollToView(view);
}else
$.scrollable.setCurrentPage(num),
pagingTop?
$.pagingControlTop.setActiveDot(num):

$.pagingControlBottom.setActiveDot(num);


first=!1;
},

$.addView=function(view,before){
if(before){
var views=$.scrollable.getViews();
views.unshift(view),
$.scrollable.setViews(views);
}else
$.scrollable.addView(view);

pagingTop?(
$.pagingControlTop.linkScrollableView($.scrollable),
$.pagingControlTop.setActiveDot($.scrollable.currentPage)):(

$.pagingControlBottom.linkScrollableView($.scrollable),
$.pagingControlBottom.setActiveDot($.scrollable.currentPage));

},

$.removeView=function(view){
$.scrollable.removeView(view),
pagingTop?(
$.pagingControlTop.linkScrollableView($.scrollable),
$.pagingControlTop.setActiveDot($.scrollable.currentPage)):(

$.pagingControlBottom.linkScrollableView($.scrollable),
$.pagingControlBottom.setActiveDot($.scrollable.currentPage));

},

$.setViews=function(views){
$.scrollable.setViews(views),
pagingTop?(
$.pagingControlTop.linkScrollableView($.scrollable),
$.pagingControlTop.setActiveDot($.scrollable.currentPage)):(

$.pagingControlBottom.linkScrollableView($.scrollable),
$.pagingControlBottom.setActiveDot($.scrollable.currentPage));

},
$.removeAllViews=function(view){
$.scrollable.setViews([]),
pagingTop?(
$.pagingControlTop.linkScrollableView($.scrollable),
$.pagingControlTop.setActiveDot($.scrollable.currentPage)):(

$.pagingControlBottom.linkScrollableView($.scrollable),
$.pagingControlBottom.setActiveDot($.scrollable.currentPage));

},





__defers['$.__views.scrollable!postlayout!linkScrollableView']&&$.addListener($.__views.scrollable,'postlayout',linkScrollableView),__defers['$.__views.scrollable!scrollEnd!updatePagingControl']&&$.addListener($.__views.scrollable,'scrollEnd',updatePagingControl),



_.extend($,exports);
}

module.exports=Controller;