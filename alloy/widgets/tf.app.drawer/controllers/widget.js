var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.drawer/'+s:
s.substring(0,index)+'/tf.app.drawer/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){








































































































































































































































































































































































































































































































function close(){
DISPATCHER.trigger('tf:app.drawer.close');
}var Widget=new(require('/alloy/widget'))('tf.app.drawer');if(this.__widgetId='tf.app.drawer',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.winDrawer=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)({orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',pinned:!0,exitOnClose:!1,backgroundColor:'transparent',apiName:'Ti.UI.Window',id:'winDrawer',classes:['root-window','pinned']}),$.__views.winDrawer&&$.addTopLevelView($.__views.winDrawer),$.__views.background=Ti.UI.createView({backgroundColor:'transparent',height:Ti.UI.FILL,width:Ti.UI.FILL,apiName:'Ti.UI.View',id:'background',classes:[]}),$.__views.winDrawer.add($.__views.background),close?$.addListener($.__views.background,'click',close):__defers['$.__views.background!click!close']=!0,$.__views.panelBackground=Ti.UI.createView({left:0,height:Ti.UI.FILL,backgroundColor:'white',apiName:'Ti.UI.View',id:'panelBackground',classes:[]}),$.__views.winDrawer.add($.__views.panelBackground),$.__views.backgroundImage=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)({bottom:-20,apiName:'Ti.UI.View',id:'backgroundImage',image:'/images/drawer-background.svg',classes:[]}),$.__views.panelBackground.add($.__views.backgroundImage),$.__views.panel=Ti.UI.createScrollView({left:0,disableBounce:!0,height:Ti.UI.FILL,layout:'vertical',backgroundColor:'transparent',apiName:'Ti.UI.ScrollView',id:'panel',classes:[]}),$.__views.winDrawer.add($.__views.panel),$.__views.spacer=Ti.UI.createView(function(){var o={};return Alloy.deepExtend(!0,o,{height:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{top:44}),Alloy.deepExtend(!0,o,{apiName:'Ti.UI.View',id:'spacer',classes:[]}),o}()),$.__views.panel.add($.__views.spacer),$.__views.profile=Alloy.createWidget('tf.app.drawer','profile',{apiName:'Alloy.Require',id:'profile',classes:[],__parentSymbol:$.__views.panel}),$.__views.profile.setParent($.__views.panel),$.__views.dashboard=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'dashboard',text:'Dashboard',icon:'tf-dashboard',classes:[],__parentSymbol:$.__views.panel}),$.__views.dashboard.setParent($.__views.panel),$.__views.programs=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'programs',text:'Programs',icon:'tf-programs',classes:[],__parentSymbol:$.__views.panel}),$.__views.programs.setParent($.__views.panel),$.__views.routines=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'routines',text:'Routines',icon:'tf-routines',classes:[],__parentSymbol:$.__views.panel}),$.__views.routines.setParent($.__views.panel),$.__views.progress=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'progress',text:'Progress',icon:'tf-progress',classes:[],__parentSymbol:$.__views.panel}),$.__views.progress.setParent($.__views.panel),$.__views.rewards=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'rewards',text:'Rewards',icon:'tf-rewards',classes:[],__parentSymbol:$.__views.panel}),$.__views.rewards.setParent($.__views.panel),$.__views.inbox=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'inbox',text:'Inbox',icon:'tf-inbox',classes:[],__parentSymbol:$.__views.panel}),$.__views.inbox.setParent($.__views.panel),$.__views.settings=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'settings',text:'Settings',icon:'tf-settings',classes:[],__parentSymbol:$.__views.panel}),$.__views.settings.setParent($.__views.panel),$.__views.logout=Alloy.createWidget('tf.app.drawer','button',{apiName:'Alloy.Require',id:'logout',text:'Logout',icon:'tf-logout',classes:[],__parentSymbol:$.__views.panel}),$.__views.logout.setParent($.__views.panel),$.__views.footer=Alloy.createWidget('tf.app.drawer','footer',{apiName:'Alloy.Require',id:'footer',classes:[],__parentSymbol:$.__views.panel}),$.__views.footer.setParent($.__views.panel),exports.destroy=function(){},_.extend($,$.__views);var current,lastTapped,drawerWidth=Alloy.Globals.Style.Widget.Drawer.Width,slideDuration=1?100:150,open=!1,cus=require('services/current_user_service'),_setCurrent=function(button){button||(button=current),current=button,current.simulated=!0,current.force=!1,lastTapped=current,DISPATCHER.trigger('tf:app.drawer.button.click',current)},_init=function(selected){$.panelBackground.width=drawerWidth,$.backgroundImage.height=drawerWidth,$.panel.width=drawerWidth,_setCurrent(selected||{id:'dashboard'}),DISPATCHER.on('tf:app.drawer.open',_open),DISPATCHER.on('tf:app.drawer.close',_close),DISPATCHER.on('tf:app.drawer.button.click',_onButtonClick),DISPATCHER.on('tf:app.drawer.select',_select),DISPATCHER.on('tf:app.drawer.update',_update),DISPATCHER.on('tf:toggles.loaded',_update),DISPATCHER.on('tf:rx.loaded',_update),DISPATCHER.on('tf:user.loaded',_update),DISPATCHER.on('tf:messages.unread.info',_update),DISPATCHER.on('tf:points.updated',_update),DISPATCHER.once('tf:logout',function cleanup(){DISPATCHER.off('tf:app.drawer.open',_open),DISPATCHER.off('tf:app.drawer.close',_close),DISPATCHER.off('tf:app.drawer.button.click',_onButtonClick),DISPATCHER.off('tf:app.drawer.select',_select),DISPATCHER.off('tf:app.drawer.update',_update),DISPATCHER.off('tf:toggles.loaded',_update),DISPATCHER.off('tf:rx.loaded',_update),DISPATCHER.off('tf:user.loaded',_update),DISPATCHER.off('tf:messages.unread.info',_update),DISPATCHER.off('tf:points.updated',_update)}),$.winDrawer.onBack=function(){_close()},$.dashboard.setOnClick(_dashboardHandler),$.programs.setOnClick(_programsHandler),$.routines.setOnClick(_routinesHandler),$.progress.setOnClick(_progressHandler),$.rewards.setOnClick(_rewardsHandler),$.inbox.setOnClick(_inboxHandler),$.settings.setOnClick(_settingsHandler),$.logout.setOnClick(_logoutHandler)},_onButtonClick=function(e){LOGGER.debug('tf:app.drawer.button.click:'+JSON.stringify(e)+' current:'+JSON.stringify(current)+' lastTapped:'+JSON.stringify(lastTapped)),e.simulated?e.force&&_.defer(function(){_setCurrent(e)}):(e.id===current.id&&e.item===current.item?_close():e.id===current.id&&current.item&&!e.item&&_.defer(_setCurrent),_.defer(function(){lastTapped=e}))},_select=function(e){LOGGER.debug('tf:app.drawer.select:'+JSON.stringify(e));var simulated={id:e.id,simulated:!0,force:!0};DISPATCHER.trigger('tf:app.drawer.button.click',simulated)},isCurrent=function(button){return button.args.id===current.id},sameItem=function(selected){return selected.item===current.item},_closeAndOpenWindow=function(win){_close(function(){win.addEventListener('open',function done(){win.removeEventListener('open',done),setTimeout(function(){DISPATCHER.trigger('tf:app.window.current.close')},1?0:500)}),require('ui/common/custom_window').openWindow(win)})},_dashboardHandler=function(selected){isCurrent($.dashboard)||(_setCurrent(selected),_close(function(){DISPATCHER.trigger('tf:app.window.current.close')}))},_programsHandler=function(selected){(!isCurrent($.programs)&&!selected.item&&lastTapped&&'programs'==lastTapped.id||isCurrent($.programs)&&!selected.item&&current.item)&&(_setCurrent(selected),_closeAndOpenWindow(Alloy.createWidget('tf.app.programs').getMain().getView()))},_programItemHandler=function(selected){_setCurrent(selected),_closeAndOpenWindow(Alloy.createWidget('tf.app.programs').getMain({selectedProgramId:selected.item}).getView())},_routinesHandler=function(selected){isCurrent($.routines)||(_setCurrent(selected),_closeAndOpenWindow(Alloy.createWidget('tf.app.routines',{}).main.getView()))},_progressHandler=function(selected){isCurrent($.progress)||(_setCurrent(selected),_closeAndOpenWindow(Alloy.createWidget('tf.app.progress').main.getView()))},_rewardsHandler=function(selected){isCurrent($.rewards)||(_setCurrent(selected),_close(function(){DISPATCHER.trigger('tf:app.rewards.open')}))},_inboxHandler=function(selected){isCurrent($.inbox)||(_setCurrent(selected),_close(function(){DISPATCHER.trigger('tf:app.inbox.open')}))},_settingsHandler=function(selected){isCurrent($.settings)||selected.item||!lastTapped||'settings'!=lastTapped.id||_.defer(_setCurrent)},_settingsLinkFitbit=function(){_close(function(){require('tickerfit/tracking').linkFitbit()})},_settingsUnLinkFitbit=function(){var dialog=Ti.UI.createAlertDialog({cancel:1,buttonNames:['Confirm','Cancel'],message:'Your Fitbit activity will no longer be available if you disable Fitbit syncing. Your account will need to be linked again if you wish to resume Fitbit activity tracking.',title:'Disable Fitbit?'});dialog.addEventListener('click',function(e){e.index===e.source.cancel?(LOGGER.debug('User cancelled unlinking fitbit'),_close()):_close(function(){require('tickerfit/tracking').unlinkFitbit()})}),dialog.show()},_settingsEnablePassiveTracking=function(val){if(val)_close(function(){require('tickerfit/tracking').enablePassiveTracking(val)});else{var dialog=Ti.UI.createAlertDialog({cancel:1,buttonNames:['Confirm','Cancel'],message:'Your activity will not be recorded by your phone if mobile syncing is disabled',title:'Disable Syncing?'});dialog.addEventListener('click',function(e){e.index===e.source.cancel?(LOGGER.debug('User cancelled disabling tracking'),_close()):_close(function(){require('tickerfit/tracking').enablePassiveTracking(val)})}),dialog.show()}},_settingsEnableMeditationReviews=function(){_close(function(){Ti.App.Properties.setString('meditate.showReview','enabled')})},_logoutHandler=function(){var dialog=Ti.UI.createAlertDialog({cancel:1,buttonNames:['Confirm','Cancel'],message:'Tap confirm to continue to logout...',title:'Confirm Logout?'});dialog.addEventListener('click',function(e){e.index===e.source.cancel?(LOGGER.debug('User cancelled logout'),_close()):DISPATCHER.trigger('tf:logout')}),dialog.show()},_update=function(){if(open){var cu=cus.singleton(),user=cu.get('user'),toggles=cu.get('toggles'),rx=cu.get('rx'),unreadInfo=cu.get('messagesUnread');$.profile.setUser(user,toggles),$.footer.update(toggles);var meditateMode=toggles&&'meditate'===toggles.uxMode;if(rx&&rx.rxPrograms){var programs=[],rxPrograms=require('services/rx_service').filterPrograms(cu.get('enableProgramThemeMode')?rx.themeRxPrograms:rx.rxPrograms,['VIDEO','DOCUMENT','REPORT']);_.forEach(rxPrograms,function(rxp){programs.push({id:rxp.program.id,text:rxp.program.title,onClick:function(selected){_programItemHandler(selected)}})}),$.programs.show(0<programs.length&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl),0<programs.length&&$.programs.setItems(programs)}var enableRoutines=toggles&&'yes'===toggles.enableRoutines&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl;$.routines.show(enableRoutines);var enableProgress=!meditateMode&&rx&&rx.startDate<new Date().getTime()&&'yes'===toggles.showProgress&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl;$.progress.show(enableProgress);var enableRewards=toggles&&'yes'===toggles.enablePoints&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl;$.rewards.show(enableRewards);var enableInbox=toggles&&'yes'===toggles.enableInbox&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl;enableInbox&&unreadInfo&&$.inbox.showBadge(unreadInfo.total),$.inbox.show(enableInbox);var settings=[];if(!meditateMode&&!cu.get('forceFitbit')){var trackingEnabled=cu.get('enablePassiveTracking');trackingEnabled?settings.push({id:'disable-tracking',text:'Disable Mobile Syncing',onClick:function(){_settingsEnablePassiveTracking(!1)}}):settings.push({id:'enable-tracking',text:'Enable Mobile Syncing',onClick:function(){_settingsEnablePassiveTracking(!0)}})}var enableFitbit=cu.get('enableFitbit');if(enableFitbit){var fitbitLinked=require('tickerfit/tracking').isFitbitLinked();fitbitLinked?(meditateMode&&!require('tickerfit/tracking').isFitbitHeartrateEnabled()?settings.push({id:'link-fitbit',text:'Update Fitbit Permissions...',onClick:_settingsLinkFitbit}):!meditateMode&&!require('tickerfit/tracking').isFitbitActivityEnabled()&&settings.push({id:'link-fitbit',text:'Update Fitbit Permissions...',onClick:_settingsLinkFitbit}),settings.push({id:'unlink-fitbit',text:'Disable Fitbit Syncing',onClick:_settingsUnLinkFitbit})):settings.push({id:'link-fitbit',text:'Enable Fitbit Syncing ',onClick:_settingsLinkFitbit})}var trackMood='yes'===toggles.trackMood,meditationReviewsDisabled='disabled'===Ti.App.Properties.getString('meditate.showReview');meditateMode&&trackMood&&meditationReviewsDisabled&&settings.push({id:'enable-meditation-reviews',text:'Enable mood ratings',onClick:_settingsEnableMeditationReviews}),$.settings.show(0<settings.length),0<settings.length&&$.settings.setItems(settings),_setCurrent()}},openAnimation=Ti.UI.createAnimation({left:0,backgroundColor:'#7f022632',duration:slideDuration,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT}),_open=function(){var options={fullscreen:!0};!1,openAnimation.duration=2*slideDuration,options.activityEnterAnimation=Titanium.App.Android.R.anim.slide_in_left,$.winDrawer.addEventListener('open',function update(){$.winDrawer.removeEventListener('open',update),open=!0,_update()}),$.winDrawer.open(options),$.winDrawer.animate(openAnimation)},closeAnimation=Ti.UI.createAnimation({left:-drawerWidth,duration:slideDuration,backgroundColor:'transparent'}),_close=function(callback){function closeDrawer(options){open=!1,$.winDrawer.addEventListener('close',function onClose(){$.winDrawer.removeEventListener('close',onClose),callback&&callback()}),$.winDrawer.close(options)}1?($.winDrawer.backgroundColor='transparent',closeDrawer({activityExitAnimation:Titanium.App.Android.R.anim.slide_out_left})):(closeAnimation.addEventListener('complete',function doClose(){closeAnimation.removeEventListener('complete',doClose),closeDrawer({})}),$.winDrawer.animate(closeAnimation))};

$.panel.addEventListener('swipe',function(_event){
'left'==_event.direction&&
close();

}),

exports.init=_init,
exports.update=_update,





__defers['$.__views.background!click!close']&&$.addListener($.__views.background,'click',close),



_.extend($,exports);
}

module.exports=Controller;