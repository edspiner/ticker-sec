"use strict";

var linker={

_mappings:{
login:/login\?(.*)$/},


_navigators:{
login:function(params){
LOGGER.debug("Handling LOGIN URL:"+JSON.stringify(params));
var uid=null,
token=null;
if(params&&params.uid&&params.token&&(
uid=params.uid,
params.token)){
var link={
type:"login",
uid:params.uid,
token:params.token,
email:params.email};









return params.host&&(link.deployment={region:params.region||"Link",host:params.host,port:params.port,protocol:params.protocol}),link;
}

}},



_getParamsFromUrl:function(urlString){
var path=null;
urlString&&(
path=urlString.split("://")[1]);


var matches=null,
index=0,
mappingKeys=Object.keys(this._mappings),
regex=this._mappings[mappingKeys[0]];
do
regex=this._mappings[mappingKeys[index]];while(
!(matches=path.match(regex))&&++index<mappingKeys.length);

if(!matches)
return null;


LOGGER.debug("url string matches: "+JSON.stringify(matches)),
LOGGER.debug("navigator name: "+mappingKeys[index]);for(var

match,
search=/([^&=]+)=?([^&]*)/g,

params={};
match=search.exec(matches[1]);)params[match[1]]=match[2];
return{
key:mappingKeys[index],
matches:matches,
params:params};

},

link:function(urlString,expireDeffered){
if(urlString){



var parsed=this._getParamsFromUrl(urlString);
if(parsed)






return parsed.params&&"true"===parsed.params.dl_deferred&&expireDeffered&&require("services/deeplink_service").expireLink(parsed.params.dl_ref).catch(function(e){LOGGER.warn("Problem expiring deferred link: "+JSON.stringify(e))}),this._navigators[parsed.key].call(this,parsed.params)}

}};


module.exports={
handleUrl:function(urlString,expireDeffered){

return LOGGER.debug("Handling DEEP-LINK:"+urlString),linker.link(urlString,expireDeffered||!1);
}};