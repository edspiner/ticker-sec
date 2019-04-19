
(function(service){var
serviceIntent=service.getIntent(),
type=serviceIntent.hasExtra('type')?serviceIntent.getStringExtra('type'):void 0,
data=JSON.parse(serviceIntent.hasExtra('data')?serviceIntent.getStringExtra('data'):'{}'),
identifier=serviceIntent.hasExtra('identifier')?serviceIntent.getStringExtra('identifier'):void 0,

justStarted=require('bootstrap/init').init(type);

if('notification'===type){
var notification={};
notification.data=data,
notification.identifier=identifier,
notification.processInBackground=!0,
LOGGER.info('JOB: handling '+type+' - '+JSON.stringify(notification)),

require('push').onReceived(notification);
}
if('event'===type){
var event=data;
LOGGER.info('JOB: handling '+type+' - '+JSON.stringify(event)),

Ti.App.fireEvent('tf:sync',{data:{type:'activity',event:event}});
}

setTimeout(function(){
LOGGER.warn('STOPING SERVICE ON TIMEOUT'),
service.stop();
},2e4);
})(require('ti.jobservice').getCurrentJobIntentService()||Ti.Android.currentService);