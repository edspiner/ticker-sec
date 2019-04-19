"use strict";var





refreshPointsPromise,

refreshRewardsPromise,

refreshAchievementsPromise,

refreshBadgeSummaryPromise,


points,rewards,achievements,badgeSummary,Q=require("vendor/q"),moment=require("alloy/moment"),refreshingPoints=!1,refreshingRewards=!1,refreshingAchievements=!1,refreshingBadgeSummary=!1,initialised=!1,cus=require("services/current_user_service"),

setPoints=function(pts){
points=pts;
var obj={points:pts};
cus.save(obj),

_.defer(function(){
DISPATCHER.trigger("tf:points.updated",pts);
});
},

_refreshPoints=function(){













return refreshingPoints||(points=void 0,refreshingPoints=!0,refreshPointsPromise=Alloy.createModel("points",{pid:cus.singleton().get("userId")}).fetch().then(function(pts){return setPoints(pts),pts}),refreshPointsPromise.finally(function(e){refreshingPoints=!1})),refreshPointsPromise;
},

_getPoints=function(){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();



return _refreshPoints().finally(function(){deferred.resolve(points)}),deferred.promise;
},

setRewards=function(rwds){
rewards=rwds,

_.defer(function(){
DISPATCHER.trigger("tf:rewards.updated",rewards);
});
},

_refreshRewards=function(){
if(!refreshingRewards){
rewards=void 0,
refreshingRewards=!0;
var rewardsCollection=Alloy.createCollection("rewards");
refreshRewardsPromise=rewardsCollection.fetch({
pid:cus.singleton().get("userId")}).
then(function(rewards){
var filtered=[];








return rewards&&_.forEach(rewards,function(r){r.active&&filtered.push(r)}),setRewards(filtered),filtered;
}),
refreshRewardsPromise.finally(function(e){
refreshingRewards=!1;
});
}
return refreshRewardsPromise;
},

_getRewards=function(){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();



return _refreshRewards().finally(function(){deferred.resolve(rewards)}),deferred.promise;
},

setAchievements=function(as){
achievements=as,

_.defer(function(){
DISPATCHER.trigger("tf:achievements.updated",achievements);
});
},

_refreshAchievements=function(types,fromDate,toDate){
if(!refreshingAchievements){
achievements=void 0,
refreshingAchievements=!0;
var achievementsCollection=Alloy.createCollection("achievements");
achievementsCollection.perPage=1e3,
achievementsCollection.types=types,
achievementsCollection.fromDate=fromDate,
achievementsCollection.toDate=toDate,
refreshAchievementsPromise=achievementsCollection.fetch({
pid:cus.singleton().get("userId")}).
then(function(achievements){

return setAchievements(achievements),achievements;
}),
refreshAchievementsPromise.finally(function(e){
refreshingAchievements=!1;
});
}
return refreshAchievementsPromise;
},

_getAchievements=function(types,fromDate,toDate){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();



return _refreshAchievements(types,fromDate,toDate).finally(function(){deferred.resolve(achievements)}),deferred.promise;
},

setBadgeSummary=function(bs){
badgeSummary=bs,

_.defer(function(){
DISPATCHER.trigger("tf:achievements.badgeSummary.updated",badgeSummary);
});
},

_refreshBadgeSummary=function(){
if(!refreshingBadgeSummary){
badgeSummary=void 0,
refreshingBadgeSummary=!0;
var badgeSummaryCollection=Alloy.createCollection("badgeSummary");
refreshBadgeSummaryPromise=badgeSummaryCollection.fetch({
pid:cus.singleton().get("userId")}).
then(function(bs){

return setBadgeSummary(bs),bs;
}),
refreshBadgeSummaryPromise.finally(function(e){
refreshingBadgeSummary=!1;
});
}
return refreshBadgeSummaryPromise;
},

_getBadgeSummary=function(){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();



return _refreshBadgeSummary().finally(function(){deferred.resolve(badgeSummary)}),deferred.promise;
},

_claimReward=function(rewardId){
return Alloy.createModel("claims",{
urlParams:{
pid:cus.singleton().get("userId"),
rewardid:rewardId}}).

save();
},

_getMonthlyAchievementSummary=function(achievements){var
achievementsByMonth=_.groupBy(achievements,function(a){
return moment(new Date(a.rewardedTime)).startOf("month").toDate();
}),
monthlySummaries=[];














































return _.each(achievementsByMonth,function(as,month){var claimed=[],milestones=[],badges=[],credit=0,debit=0,grants=0,badgeEarnings=0,spent=0,badgeCount=0;_.forEach(as,function(a){credit+=a.credit,debit+=a.debit,"REDEEMABLE"===a.reward.type?(claimed.push(a),spent+=a.debit-a.credit):"MILESTONE"===a.reward.type?milestones.push(a):"GRANT"===a.reward.type?grants+=a.credit-a.debit:"BADGE"===a.reward.type&&(badges.push(a),badgeCount++,badgeEarnings+=a.credit-a.debit)});var badgesByName=_.groupBy(badges,function(b){return b.reward.name}),badgeSummary=[];_.each(badgesByName,function(bs,name){badgeSummary.push({name:name,count:bs.length})}),monthlySummaries.push({date:new Date(month),credit:credit,debit:debit,grantEarnings:grants,badgeEarnings:badgeEarnings,badgeCount:badgeCount,badgeSummary:badgeSummary,rewardsClaimed:claimed,rewardsClaimedSpend:spent,milestonesMet:milestones})}),monthlySummaries;
},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
_refreshPoints();
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
require("bootstrap/lifecycle").isLoggedIn()&&
_refreshPoints();

}),
Ti.App.addEventListener("tf:sync",function(e){
"points"===e.data.type&&(
LOGGER.debug("Points SYNC Received"),
require("bootstrap/lifecycle").isLoggedIn()&&
_refreshPoints());


});
};

module.exports={

getPoints:_getPoints,

refreshPoints:function(){
_refreshPoints();
},

getRewards:_getRewards,

claimReward:_claimReward,

getAchievements:_getAchievements,

getBadgeSummary:_getBadgeSummary,

getMonthlyAchievementSummary:_getMonthlyAchievementSummary};