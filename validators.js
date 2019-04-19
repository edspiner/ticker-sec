

exports.defaultValidator=function(value){
return!!value;
},

exports.email=function(email){
var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
},

exports.password=function(value){
return value&&4<value.length;
},

exports.number=function(value){
return!isNaN(value);
},

exports.url=function(url,callback){

var xhr=Ti.Network.createHTTPClient({
onload:function(e){
callback(!0);
},
onerror:function(e){
Ti.API.info('e: '+JSON.stringify(e)),
callback(!1);
},
timeout:5e3});


-1===url.indexOf('://')&&(
url='http://'+url),


xhr.open('GET',url),
xhr.send();
},
exports.url.useCallback=!0;