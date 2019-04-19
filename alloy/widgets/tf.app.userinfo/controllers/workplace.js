var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.userinfo/'+s:
s.substring(0,index)+'/tf.app.userinfo/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){


































































































































































































































































function PatternMatch(arrayToSearch,pattern){
var searchLen=pattern.length;
arrayToSearch.sort();

for(var tempArray=[],index=0,len=arrayToSearch.length;index<len;index++)
-1!==arrayToSearch[index].search(new RegExp('\\b'+pattern,'i'))&&
tempArray.push(arrayToSearch[index]);


return tempArray;
}


function CreateAutoCompleteList(searchResults){

for(var tableData=[],index=0,len=searchResults.length;index<len;index++){var

lblSearchResult=Ti.UI.createLabel({
top:'2dp',
width:'90%',
height:'34dp',
left:'5%',
font:{
fontSize:'14dp'},

color:Alloy.Globals.Style.WL.Color.ButtonLabel,
text:searchResults[index]}),



row=Ti.UI.createTableViewRow({
backgroundColor:'transparent',
focusable:!0,
height:'35dp',
result:searchResults[index]});


row.add(lblSearchResult),
tableData.push(row);
}
tblvAutoComplete.setData(tableData);
var rowsToShow=Math.min(3.5,tableData.length);
tblvAutoComplete.height=''+35*rowsToShow+'dp',
rowsToShow>prevheight&&
$.inputView.scrollToBottom(),

prevheight=rowsToShow;
}var Widget=new(require('/alloy/widget'))('tf.app.userinfo');if(this.__widgetId='tf.app.userinfo',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='workplace',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.workplace=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,id:'workplace'}),$.__views.workplace&&$.addTopLevelView($.__views.workplace),$.__views.__alloyId66=Ti.UI.createView({top:0,height:Alloy.Globals.Style.Widget.UserInfo.HeaderHeight,id:'__alloyId66'}),$.__views.workplace.add($.__views.__alloyId66),$.__views.__alloyId67=Ti.UI.createView({height:Ti.UI.SIZE,id:'__alloyId67'}),$.__views.__alloyId66.add($.__views.__alloyId67),$.__views.__alloyId68=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.IconSize},color:Alloy.Globals.Style.WL.Color.Icon,text:Alloy.Globals.Style.BuildingString,top:Alloy.Globals.Style.Widget.UserInfo.SpacerHeight,id:'__alloyId68'}),$.__views.__alloyId67.add($.__views.__alloyId68),$.__views.inputView=Ti.UI.createScrollView({height:Alloy.Globals.Style.Widget.UserInfo.DetailHeight,width:Ti.UI.FILL,bottom:Alloy.Globals.Style.Widget.UserInfo.BannerHeight,id:'inputView'}),$.__views.workplace.add($.__views.inputView),$.__views.inputContainer=Ti.UI.createView({height:Ti.UI.SIZE,width:'91.66666666666666%',id:'inputContainer',layout:'vertical'}),$.__views.inputView.add($.__views.inputContainer),$.__views.__alloyId69=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,text:'Organisation/Group',id:'__alloyId69'}),$.__views.inputContainer.add($.__views.__alloyId69),$.__views.org=Alloy.createWidget('tf.app.combobox','widget',{left:0,right:0,width:'100%',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,borderRadius:0,borderWidth:'1dp',borderColor:Alloy.Globals.Style.WL.Color.Button,font:{fontSize:'18dp'},hintTextColor:Alloy.Globals.Style.WL.Color.Hint,returnKeyType:Ti.UI.RETURNKEY_DONE,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,height:'50dp',hintText:'Select organisation',dropButton:{color:'black',selectedColor:'yellow'},backgroundColor:'#fff',id:'org',__parentSymbol:$.__views.inputContainer}),$.__views.org.setParent($.__views.inputContainer),$.__views.__alloyId70=Ti.UI.createTextField({height:'1',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},width:'1',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,id:'__alloyId70'}),$.__views.inputContainer.add($.__views.__alloyId70),$.__views.__alloyId71=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.UserInfo.FontSizeSmall},color:Alloy.Globals.Style.WL.Color.TitleLabel,left:0,text:'Department/Division',top:'10dp',id:'__alloyId71'}),$.__views.inputContainer.add($.__views.__alloyId71),$.__views.autoComplete=Ti.UI.createView({height:Ti.UI.SIZE,id:'autoComplete',layout:'vertical'}),$.__views.inputContainer.add($.__views.autoComplete),$.__views.unit=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)({height:48,padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.WL.Color.Button,borderRadius:0,borderWidth:'1dp',borderStyle:Ti.UI.INPUT_BORDERSTYLE_LINE,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.WL.Color.Hint,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},left:0,right:0,width:'100%',returnKeyType:Ti.UI.RETURNKEY_DONE,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,hintText:'e.g. Finance/IT',id:'unit'}),$.__views.autoComplete.add($.__views.unit),$.__views.footer=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{bottom:0,left:0,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.SIZE}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:20,left:0}),Alloy.deepExtend(!0,o,{id:'footer'}),o}()),$.__views.workplace.add($.__views.footer),$.__views.prev=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.Button,text:Alloy.Globals.Style.LeftString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,left:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'prev'}),$.__views.footer.add($.__views.prev),$.__views.next=Ti.UI.createLabel({font:{fontFamily:'flaticon',fontSize:Alloy.Globals.Style.Widget.UserInfo.ButtonSize},color:Alloy.Globals.Style.WL.Color.ButtonDisabled,text:Alloy.Globals.Style.RightString,bottom:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,right:Alloy.Globals.Style.Widget.UserInfo.ButtonMargin,id:'next'}),$.__views.footer.add($.__views.next),exports.destroy=function(){},_.extend($,$.__views);var navigation=Alloy.Globals.Nav.UserInfo,state=navigation.state,animateButton=require('utils/ui').animateClick,AnimatedBottomView=require('ui/common/animated_bottom_view');new AnimatedBottomView().setup({container:$.inputView,triggers:[$.unit],bottomWhenViewOnTop:'53%',bgdown:'transparent',bgup:Alloy.Globals.Style.Color.BrandGreyTransparent});var nextView,nextEnabled=!1;_.defer(function(){nextView=Alloy.createWidget('tf.app.userinfo','summary')}),$.next.addEventListener('click',function(){nextEnabled&&animateButton($.next,$.next.color,!0,next)}),$.prev.addEventListener('click',function(){animateButton($.prev,$.prev.color,!0,prev)});var next=_.debounce(function(){var workplace=_.extend({},org);workplace.unit=$.unit.value,state.workplace=workplace,Alloy.Globals.Nav.UserInfo.open(nextView,{title:'PLEASE REVIEW',backEnabled:!0})},1e3,!0),prev=_.debounce(navigation.back,1e3,!0),enableNext=function(val){nextEnabled!=val&&(nextEnabled=val,val?animateButton($.next,Alloy.Globals.Style.WL.Color.Button,!0):animateButton($.next,Alloy.Globals.Style.WL.Color.ButtonDisabled,!1))};$.unit.addEventListener('return',function(e){$.unit.blur()});var orgs={},depts=[],_loadGroupings=function(type){return Widget.createCollection('groupings').fetch({level:type})},_setOrgChoices=function(groupings){orgs={},_.each(groupings,function(g){orgs[g.id]={title:g.text}}),orgs[0]={title:'Select Organisation'},$.org.choices=orgs},_setDepts=function(groupings){depts=[],_.each(groupings,function(g){depts.push(g.text)})},refreshGroupings=function(){LOGGER.debug('Refreshing groupings'),_loadGroupings('First').then(_setOrgChoices).catch(function(e){LOGGER.error('Error loading org groupings:'+JSON.stringify(e))}),_loadGroupings('Second').then(_setDepts).catch(function(e){LOGGER.error('Error loading dept groupings:'+JSON.stringify(e))})};refreshGroupings(),Ti.App.addEventListener('tf:life.cycle.resume',refreshGroupings);var org=null;$.org.init($.getView()),$.org.on('change',function(event){org=orgs[event.id],validate()}),$.org.on('show',function(event){$.unit.blur()});var validate=function(){enableNext(null!=org&&'0'!==org.id&&$.unit.value&&''!=$.unit.value)};$.unit.addEventListener('change',function(event){validate()});var tblvAutoComplete=Ti.UI.createTableView({width:'100%',backgroundColor:'#eeeeee',height:0,maxRowHeight:'35dp',minRowHeight:'35dp',allowSelection:!0,bottom:'5dp'});$.autoComplete.add(tblvAutoComplete);var txtAutoComplete=$.unit,working=!1;txtAutoComplete.addEventListener('change',function(e){if(!working){var pattern=e.source.value,tempArray=PatternMatch(depts,pattern);CreateAutoCompleteList(tempArray)}}),txtAutoComplete.addEventListener('blur',function(e){prevheight=0,CreateAutoCompleteList([])}),tblvAutoComplete.addEventListener('click',function(e){working=!0,txtAutoComplete.value=e.rowData.result,setTimeout(function(){working=!1},1e3),txtAutoComplete.blur()});var prevheight=0;









_.extend($,exports);
}

module.exports=Controller;