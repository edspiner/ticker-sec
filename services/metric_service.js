"use strict";

var cus=require("services/current_user_service");

module.exports={
getCurrent:function(){
return Alloy.createCollection("metrics").fetch({
id:cus.singleton().get("userId")});

},
record:function(metrics){
var m=Alloy.createCollection("metrics");



return _.forEach(metrics,function(metric){m.add(metric)}),m.save({
id:cus.singleton().get("userId")});

},
query:function(type,startDate,endDate){

return LOGGER.debug("Metric query:"+type+" from:"+new Date(startDate)+" to:"+new Date(endDate)),Alloy.createCollection("metric_samples").fetch({
id:cus.singleton().get("userId"),
type:type,
startDate:startDate,
endDate:endDate});

}};