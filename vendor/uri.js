

(function(global){

















function decode(s){




return s&&(s=decodeURIComponent(s),s=s.replace(re.pluses," ")),s;
}

function parseUri(str){var
parser=re.uri_parser,
parserKeys=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
m=parser.exec(str||""),
parts={};





return parserKeys.forEach(function(key,i){parts[key]=m[i]||""}),parts;
}

function parseQuery(str){var
i,ps,p,n,k,v,
pairs=[];

if("undefined"==typeof str||null===str||""===str)
return pairs;








for(0===str.indexOf("?")&&(str=str.substring(1)),ps=str.toString().split(re.query_separator),i=0;i<ps.length;i++)
p=ps[i],
n=p.indexOf("="),

0!==n&&(
k=decodeURIComponent(p.substring(0,n)),
v=decodeURIComponent(p.substring(n+1)),
pairs.push(-1===n?[p,null]:[k,v]));


return pairs;
}

function Uri(str){
this.uriParts=parseUri(str),
this.queryPairs=parseQuery(this.uriParts.query),
this.hasAuthorityPrefixUserPref=null;
}var re={starts_with_slashes:/^\/+/,ends_with_slashes:/\/+$/,pluses:/\+/g,query_separator:/[&;]/,uri_parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};Array.prototype.forEach||(Array.prototype.forEach=function(fn,scope){for(var i=0,len=this.length;i<len;++i)fn.call(scope||this,this[i],i,this)}),

["protocol","userInfo","host","port","path","anchor"].forEach(function(key){
Uri.prototype[key]=function(val){



return"undefined"!=typeof val&&(this.uriParts[key]=val),this.uriParts[key];
};
}),

Uri.prototype.hasAuthorityPrefix=function(val){return(
"undefined"!=typeof val&&(
this.hasAuthorityPrefixUserPref=val),


null===this.hasAuthorityPrefixUserPref?
-1!==this.uriParts.source.indexOf("//"):

this.hasAuthorityPrefixUserPref);

},

Uri.prototype.query=function(val){
var
i,
param,s="";





for("undefined"!=typeof val&&(this.queryPairs=parseQuery(val)),i=0;i<this.queryPairs.length;i++)
param=this.queryPairs[i],
0<s.length&&(
s+="&"),

null===param[1]?
s+=param[0]:(

s+=param[0],
s+="=",
param[1]&&(
s+=encodeURIComponent(param[1])));



return 0<s.length?"?"+s:s;
},

Uri.prototype.getQueryParamValue=function(key){
var param,i;
for(i=0;i<this.queryPairs.length;i++)

if(param=this.queryPairs[i],key===param[0])
return param[1];


},

Uri.prototype.getQueryParamValues=function(key){
var
i,
param,arr=[];
for(i=0;i<this.queryPairs.length;i++)
param=this.queryPairs[i],
key===param[0]&&
arr.push(param[1]);


return arr;
},

Uri.prototype.deleteQueryParam=function(key,val){
var
i,
param,
keyMatchesFilter,
valMatchesFilter,arr=[];

for(i=0;i<this.queryPairs.length;i++)

param=this.queryPairs[i],
keyMatchesFilter=decode(param[0])===decode(key),
valMatchesFilter=param[1]===val,

(1!==arguments.length||keyMatchesFilter)&&(2!==arguments.length||keyMatchesFilter&&valMatchesFilter)||
arr.push(param);





return this.queryPairs=arr,this;
},

Uri.prototype.addQueryParam=function(key,val,index){






return 3===arguments.length&&-1!==index?(index=Math.min(index,this.queryPairs.length),this.queryPairs.splice(index,0,[key,val])):0<arguments.length&&this.queryPairs.push([key,val]),this;
},

Uri.prototype.replaceQueryParam=function(key,newVal,oldVal){
var
i,
param,index=-1;

if(3===arguments.length){
for(i=0;i<this.queryPairs.length;i++)

if(param=this.queryPairs[i],decode(param[0])===decode(key)&&decodeURIComponent(param[1])===decode(oldVal)){
index=i;
break;
}

this.deleteQueryParam(key,oldVal).addQueryParam(key,newVal,index);
}else{
for(i=0;i<this.queryPairs.length;i++)

if(param=this.queryPairs[i],decode(param[0])===decode(key)){
index=i;
break;
}

this.deleteQueryParam(key),
this.addQueryParam(key,newVal,index);
}
return this;
},

["protocol","hasAuthorityPrefix","userInfo","host","port","path","query","anchor"].forEach(function(key){
var method="set"+key.charAt(0).toUpperCase()+key.slice(1);
Uri.prototype[method]=function(val){

return this[key](val),this;
};
}),

Uri.prototype.scheme=function(){
var s="";













return this.protocol()?(s+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(s+=":"),s+="//"):this.hasAuthorityPrefix()&&this.host()&&(s+="//"),s;
},

Uri.prototype.origin=function(){
var s=this.scheme();return(

"file://"==s?
s+this.uriParts.authority:(


this.userInfo()&&this.host()&&(
s+=this.userInfo(),
this.userInfo().indexOf("@")!==this.userInfo().length-1&&(
s+="@")),



this.host()&&(
s+=this.host(),
this.port()&&(
s+=":"+this.port())),



s));
},

Uri.prototype.addTrailingSlash=function(){
var path=this.path()||"";





return"/"!==path.substr(-1)&&this.path(path+"/"),this;
},

Uri.prototype.toString=function(){
var path,
s=this.origin();































return this.path()?(path=this.path(),re.ends_with_slashes.test(s)||re.starts_with_slashes.test(path)?(s&&s.replace(re.ends_with_slashes,"/"),path=path.replace(re.starts_with_slashes,"/")):s+="/",s+=path):this.host()&&(this.query().toString()||this.anchor())&&(s+="/"),this.query().toString()&&(0!==this.query().toString().indexOf("?")&&(s+="?"),s+=this.query().toString()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(s+="#"),s+=this.anchor()),s;
},

Uri.prototype.clone=function(){
return new Uri(this.toString());
},

"function"==typeof define&&define.amd?
define(function(){
return Uri;
}):
"undefined"!=typeof module&&"undefined"!=typeof module.exports?
module.exports=Uri:

global.Uri=Uri;

})(this);