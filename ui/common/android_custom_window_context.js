"use strict";

module.exports={
on:function(name,activity,id){var
start=new Date().getTime(),
firstStart=!0;
LOGGER.debug("ACT: "+name+" ID:"+id+" ACT:"+JSON.stringify(activity)),

activity.onCreate=function(){
LOGGER.debug("ACT CREATE("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity);
},
activity.onRestart=function(){
LOGGER.debug("ACT RESTART("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity);
},
activity.onStop=function(){
LOGGER.debug("ACT STOP("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity);
},
activity.onStart=function(){
LOGGER.debug("ACT START("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity),
firstStart&&(
activeActivity=name,
firstStart=!1);

},

activity.onPause=function(){
LOGGER.debug("ACT PAUSE("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity),
activeActivity==name&&(
_transitionTimer=setTimeout(function(){
LifeCycle.pause(),
_transitionTimer=null;
},_MAX_ACTIVITY_TRANSITION_TIME_MS));

},
activity.onResume=function(){
LOGGER.debug("ACT RESUME("+(new Date().getTime()-start)+"):"+name+" ID:"+id+" Active:"+activeActivity),
LifeCycle.setCurrentWindowId(id),
activeActivity=name,
null==_transitionTimer?



activeActivity==name&&
LifeCycle.resume():(clearTimeout(_transitionTimer),_transitionTimer=null);


};
},

off:function(activity){
activity.onStart=null,
activity.onStop=null,
activity.onPause=null,
activity.onResume=null,
activity.onCreate=null,
activity.onRestart=null,
activity.onStop=null;
},

getNextID:function(){
return activityID++;
}};var





activeActivity,_MAX_ACTIVITY_TRANSITION_TIME_MS=1e3,_transitionTimer=null,
activityID=0,
LifeCycle=require("bootstrap/lifecycle");