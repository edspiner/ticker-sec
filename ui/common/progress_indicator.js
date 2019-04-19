"use strict";var


currentSpinner,spinner=Alloy.createWidget("tf.app.loading"),
spinners={},

getId=function(data){return(
data&&data.id?
data.id:

"default");
},
getSpinner=function(id){



return spinners[id]||(spinners[id]={id:id}),spinners[id];
};

module.exports={
init:function(){

DISPATCHER.on("tf:progress.start",function(data){
var id=getId(data);
currentSpinner||(
currentSpinner=getSpinner(id),
currentSpinner.cancelled=!1,
currentSpinner.visible=!1,
setTimeout(function(){
var s=getSpinner(id);
s.cancelled||(
s.visible=!0,
spinner.show(data.message,!!data.cancel&&data.cancel));

},(data?data.delay:void 0)||200));

}),
DISPATCHER.on("tf:progress.stop",function(data){
var id=getId(data);
currentSpinner&&currentSpinner.id===id&&(
currentSpinner.cancelled=!0,
currentSpinner.visible&&
spinner.hide(),

currentSpinner=void 0);

});
}};