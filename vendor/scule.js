

var Scule={
namespaces:{}};


(function(){
Scule.registerNamespace=function(namespace,definition){
if(Scule.hasOwnProperty(namespace))
throw'namespace '+namespace+' is already registered';

Scule[namespace]=definition;
},

Scule.registerComponent=function(namespace,type,name,component){
var ns=Scule.require(namespace);
if(!ns.hasOwnProperty(type))
throw'type '+type+' is not registered inside '+namespace+' namespace';

ns[type][name]=component;
},

Scule.require=function(namespace){
if(!Scule.hasOwnProperty(namespace))
throw'namespace '+namespace+' has not been registered, require failed';

return Scule[namespace];
},

Scule.registerNamespace('global',{
constants:{
ID_FIELD:'_id',
REF_FIELD:'_ref',
OBJECT_WILDCARD:'*'},

classes:{},
functions:{},
system:{},
variables:{
debug:!1}}),



Scule.registerNamespace('datastructures',{
constants:Scule.require('global').constants,
classes:{},
variables:{}}),


Scule.registerNamespace('instrumentation',{
constants:Scule.require('global').constants,
classes:{}}),


Scule.registerNamespace('interpreter',{
functions:{},
classes:{},
objects:{},
variables:{},
symbols:{
table:{}},

arities:{
expression:-1,
logical:0,
binary:1,
selective:2,
negative:3,
range:4,
mutate:5,
array:6,
geospatial:7,
variable:8,
operand:9,
index:10},

constants:Scule.require('global').constants}),


Scule.registerNamespace('db',{
constants:Scule.require('global').constants,
functions:{},
classes:{},
plugins:{},
engines:{},
objects:{
core:{
collections:{}}}}),




Scule.registerNamespace('events',{
functions:{},
classes:{},
objects:{}}),


Scule.registerNamespace('messaging',{
functions:{},
classes:{},
objects:{}});

})(),

function(){var _Mathceil=





























































































Math.ceil;Scule.global.classes.sha1=function(){var _StringfromCharCode=














































String.fromCharCode;this.hexcase=0,this.b64pad='',this.hex_sha1=function(s){return this.rstr2hex(this.rstr_sha1(this.str2rstr_utf8(s)))},this.hash=function(s){return this.hex_sha1(s)},this.b64_sha1=function(s){return this.rstr2b64(this.rstr_sha1(this.str2rstr_utf8(s)))},this.any_sha1=function(s,e){return this.rstr2any(this.rstr_sha1(this.str2rstr_utf8(s)),e)},this.hex_hmac_sha1=function(k,d){return this.rstr2hex(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)))},this.b64_hmac_sha1=function(k,d){return this.rstr2b64(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)))},this.any_hmac_sha1=function(k,d,e){return this.rstr2any(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)),e)},this.sha1_vm_test=function(){return'a9993e364706816aba3e25717850c26c9cd0d89d'==this.hex_sha1('abc').toLowerCase()},this.rstr_sha1=function(s){return this.binb2rstr(this.binb_sha1(this.rstr2binb(s),8*s.length))},this.rstr_hmac_sha1=function(key,data){var bkey=this.rstr2binb(key);16<bkey.length&&(bkey=this.binb_sha1(bkey,8*key.length));for(var ipad=Array(16),opad=Array(16),i=0;16>i;i++)ipad[i]=909522486^bkey[i],opad[i]=1549556828^bkey[i];var hash=this.binb_sha1(ipad.concat(this.rstr2binb(data)),512+8*data.length);return this.binb2rstr(this.binb_sha1(opad.concat(hash),672))},this.rstr2hex=function(input){this.hexcase=0;for(var x,hex_tab=this.hexcase?'0123456789ABCDEF':'0123456789abcdef',output='',i=0;i<input.length;i++)x=input.charCodeAt(i),output+=hex_tab.charAt(15&x>>>4)+hex_tab.charAt(15&x);return output},this.rstr2b64=function(input){this.b64pad='';for(var triplet,tab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',output='',len=input.length,i=0;i<len;i+=3){triplet=input.charCodeAt(i)<<16|(i+1<len?input.charCodeAt(i+1)<<8:0)|(i+2<len?input.charCodeAt(i+2):0);for(var j=0;4>j;j++)output+=8*i+6*j>8*input.length?this.b64pad:tab.charAt(63&triplet>>>6*(3-j))}return output},this.rstr2any=function(input,encoding){var i,q,x,quotient,divisor=encoding.length,remainders=[],dividend=Array(_Mathceil(input.length/2));for(i=0;i<dividend.length;i++)dividend[i]=input.charCodeAt(2*i)<<8|input.charCodeAt(2*i+1);for(;0<dividend.length;){for(quotient=[],x=0,i=0;i<dividend.length;i++)x=(x<<16)+dividend[i],q=Math.floor(x/divisor),x-=q*divisor,(0<quotient.length||0<q)&&(quotient[quotient.length]=q);remainders[remainders.length]=x,dividend=quotient}var output='';for(i=remainders.length-1;0<=i;i--)output+=encoding.charAt(remainders[i]);var full_length=_Mathceil(8*input.length/(Math.log(encoding.length)/0.6931471805599453));for(i=output.length;i<full_length;i++)output=encoding[0]+output;return output},this.str2rstr_utf8=function(input){for(var x,y,output='',i=-1;++i<input.length;)x=input.charCodeAt(i),y=i+1<input.length?input.charCodeAt(i+1):0,55296<=x&&56319>=x&&56320<=y&&57343>=y&&(x=65536+((1023&x)<<10)+(1023&y),i++),127>=x?output+=_StringfromCharCode(x):
2047>=x?
output+=_StringfromCharCode(192|31&x>>>6,128|63&x):
65535>=x?
output+=_StringfromCharCode(224|15&x>>>12,128|63&x>>>6,128|63&x):
2097151>=x&&(
output+=_StringfromCharCode(240|7&x>>>18,128|63&x>>>12,128|63&x>>>6,128|63&x));


return output;
},

this.str2rstr_utf16le=function(input){

for(var output='',i=0;i<input.length;i++)
output+=_StringfromCharCode(255&input.charCodeAt(i),255&input.charCodeAt(i)>>>8);

return output;
},

this.str2rstr_utf16be=function(input){

for(var output='',i=0;i<input.length;i++)
output+=_StringfromCharCode(255&input.charCodeAt(i)>>>8,255&input.charCodeAt(i));

return output;
},

this.rstr2binb=function(input){var
output=Array(input.length>>2),
i=null;
for(i=0;i<output.length;i++)
output[i]=0;

for(i=0;i<8*input.length;i+=8)
output[i>>5]|=(255&input.charCodeAt(i/8))<<24-i%32;

return output;
},

this.binb2rstr=function(input){

for(var output='',i=0;i<32*input.length;i+=8)
output+=_StringfromCharCode(255&input[i>>5]>>>24-i%32);

return output;
},

this.binb_sha1=function(x,len){
x[len>>5]|=128<<24-len%32,
x[(len+64>>9<<4)+15]=len;








for(var w=Array(80),a=1732584193,b=-271733879,c=-1732584194,d=271733878,e=-1009589776,i=0;i<x.length;i+=16){






for(var olda=a,oldb=b,oldc=c,oldd=d,olde=e,j=0;80>j;j++){

w[j]=16>j?x[i+j]:

this.bit_rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);

var t=this.safe_add(this.safe_add(this.bit_rol(a,5),this.sha1_ft(j,b,c,d)),this.safe_add(this.safe_add(e,w[j]),this.sha1_kt(j)));
e=d,
d=c,
c=this.bit_rol(b,30),
b=a,
a=t;
}

a=this.safe_add(a,olda),
b=this.safe_add(b,oldb),
c=this.safe_add(c,oldc),
d=this.safe_add(d,oldd),
e=this.safe_add(e,olde);
}
return[a,b,c,d,e];
},

this.sha1_ft=function(t,b,c,d){return(
20>t?
b&c|~b&d:

40>t?
b^c^d:

60>t?
b&c|b&d|c&d:

b^c^d);
},

this.sha1_kt=function(t){
return 20>t?1518500249:40>t?1859775393:60>t?-1894007588:-899497514;
},

this.safe_add=function(x,y){var
lsw=(65535&x)+(65535&y),
msw=(x>>16)+(y>>16)+(lsw>>16);
return msw<<16|65535&lsw;
},

this.bit_rol=function(num,cnt){
return num<<cnt|num>>>32-cnt;
};
},

Scule.global.classes.md5=function(){

this.md5cycle=function(x,k){
var a=x[0],
b=x[1],
c=x[2],
d=x[3];

a=this.ff(a,b,c,d,k[0],7,-680876936),
d=this.ff(d,a,b,c,k[1],12,-389564586),
c=this.ff(c,d,a,b,k[2],17,606105819),
b=this.ff(b,c,d,a,k[3],22,-1044525330),
a=this.ff(a,b,c,d,k[4],7,-176418897),
d=this.ff(d,a,b,c,k[5],12,1200080426),
c=this.ff(c,d,a,b,k[6],17,-1473231341),
b=this.ff(b,c,d,a,k[7],22,-45705983),
a=this.ff(a,b,c,d,k[8],7,1770035416),
d=this.ff(d,a,b,c,k[9],12,-1958414417),
c=this.ff(c,d,a,b,k[10],17,-42063),
b=this.ff(b,c,d,a,k[11],22,-1990404162),
a=this.ff(a,b,c,d,k[12],7,1804603682),
d=this.ff(d,a,b,c,k[13],12,-40341101),
c=this.ff(c,d,a,b,k[14],17,-1502002290),
b=this.ff(b,c,d,a,k[15],22,1236535329),

a=this.gg(a,b,c,d,k[1],5,-165796510),
d=this.gg(d,a,b,c,k[6],9,-1069501632),
c=this.gg(c,d,a,b,k[11],14,643717713),
b=this.gg(b,c,d,a,k[0],20,-373897302),
a=this.gg(a,b,c,d,k[5],5,-701558691),
d=this.gg(d,a,b,c,k[10],9,38016083),
c=this.gg(c,d,a,b,k[15],14,-660478335),
b=this.gg(b,c,d,a,k[4],20,-405537848),
a=this.gg(a,b,c,d,k[9],5,568446438),
d=this.gg(d,a,b,c,k[14],9,-1019803690),
c=this.gg(c,d,a,b,k[3],14,-187363961),
b=this.gg(b,c,d,a,k[8],20,1163531501),
a=this.gg(a,b,c,d,k[13],5,-1444681467),
d=this.gg(d,a,b,c,k[2],9,-51403784),
c=this.gg(c,d,a,b,k[7],14,1735328473),
b=this.gg(b,c,d,a,k[12],20,-1926607734),

a=this.hh(a,b,c,d,k[5],4,-378558),
d=this.hh(d,a,b,c,k[8],11,-2022574463),
c=this.hh(c,d,a,b,k[11],16,1839030562),
b=this.hh(b,c,d,a,k[14],23,-35309556),
a=this.hh(a,b,c,d,k[1],4,-1530992060),
d=this.hh(d,a,b,c,k[4],11,1272893353),
c=this.hh(c,d,a,b,k[7],16,-155497632),
b=this.hh(b,c,d,a,k[10],23,-1094730640),
a=this.hh(a,b,c,d,k[13],4,681279174),
d=this.hh(d,a,b,c,k[0],11,-358537222),
c=this.hh(c,d,a,b,k[3],16,-722521979),
b=this.hh(b,c,d,a,k[6],23,76029189),
a=this.hh(a,b,c,d,k[9],4,-640364487),
d=this.hh(d,a,b,c,k[12],11,-421815835),
c=this.hh(c,d,a,b,k[15],16,530742520),
b=this.hh(b,c,d,a,k[2],23,-995338651),

a=this.ii(a,b,c,d,k[0],6,-198630844),
d=this.ii(d,a,b,c,k[7],10,1126891415),
c=this.ii(c,d,a,b,k[14],15,-1416354905),
b=this.ii(b,c,d,a,k[5],21,-57434055),
a=this.ii(a,b,c,d,k[12],6,1700485571),
d=this.ii(d,a,b,c,k[3],10,-1894986606),
c=this.ii(c,d,a,b,k[10],15,-1051523),
b=this.ii(b,c,d,a,k[1],21,-2054922799),
a=this.ii(a,b,c,d,k[8],6,1873313359),
d=this.ii(d,a,b,c,k[15],10,-30611744),
c=this.ii(c,d,a,b,k[6],15,-1560198380),
b=this.ii(b,c,d,a,k[13],21,1309151649),
a=this.ii(a,b,c,d,k[4],6,-145523070),
d=this.ii(d,a,b,c,k[11],10,-1120210379),
c=this.ii(c,d,a,b,k[2],15,718787259),
b=this.ii(b,c,d,a,k[9],21,-343485551),

x[0]=this.add32(a,x[0]),
x[1]=this.add32(b,x[1]),
x[2]=this.add32(c,x[2]),
x[3]=this.add32(d,x[3]);
},

this.cmn=function(q,a,b,x,s,t){

return a=this.add32(this.add32(a,q),this.add32(x,t)),this.add32(a<<s|a>>>32-s,b);
},

this.ff=function(a,b,c,d,x,s,t){
return this.cmn(b&c|~b&d,a,b,x,s,t);
},

this.gg=function(a,b,c,d,x,s,t){
return this.cmn(b&d|c&~d,a,b,x,s,t);
},

this.hh=function(a,b,c,d,x,s,t){
return this.cmn(b^c^d,a,b,x,s,t);
},

this.ii=function(a,b,c,d,x,s,t){
return this.cmn(c^(b|~d),a,b,x,s,t);
},

this.md51=function(s){
/[\x80-\xFF]/.test(s)&&(
s=unescape(encodeURI(s)));

var

i,n=s.length,state=[1732584193,-271733879,-1732584194,271733878];
for(i=64;i<=s.length;i+=64)
this.md5cycle(state,this.md5blk(s.substring(i-64,i)));

s=s.substring(i-64);
var tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i=0;i<s.length;i++)
tail[i>>2]|=s.charCodeAt(i)<<(i%4<<3);


if(tail[i>>2]|=128<<(i%4<<3),55<i)

for(this.md5cycle(state,tail),i=0;16>i;i++)
tail[i]=0;




return tail[14]=8*n,this.md5cycle(state,tail),state;
},

this.md5blk=function(s){
var
i,md5blks=[];
for(i=0;64>i;i+=4)
md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);

return md5blks;
},

this.hex_chr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],

this.rhex=function(n){


for(var s='',j=0;4>j;j++)
s+=this.hex_chr[15&n>>8*j+4]+this.hex_chr[15&n>>8*j];

return s;
},

this.hex=function(x){
for(var i=0;i<x.length;i++)
x[i]=this.rhex(x[i]);

return x.join('');
},

this.hash=function(s){
return this.hex(this.md51(s));
},

this.add32=function(a,b){
return 4294967295&a+b;
};
},

Scule.global.system.installHashFunctions=function(){
Scule.md5=new Scule.global.classes.md5,
Scule.sha1=new Scule.global.classes.sha1;
};
}(),

function(){var _Mathfloor=








































































































































Math.floor;Scule.global.functions.hasOwnProperty=function(object,key){return Object.prototype.hasOwnProperty.call(object,key)},Scule.global.functions.getObjectId=function(object,toString){return void 0===toString&&(toString=!1),toString?object[Scule.global.constants.ID_FIELD].toString():object[Scule.global.constants.ID_FIELD]},Scule.global.functions.cloneObject=function(o){var c={};for(var a in Scule.global.functions.isArray(o)&&(c=[]),o)c[a]='object'==typeof o[a]?o[a]instanceof RegExp?new RegExp(o[a].toString()):Scule.global.functions.cloneObject(o[a]):o[a];return c},Scule.global.functions.traverseObject=function(attributes,object){var depth=0,leaf=null,probe=function(attr){for(var k in attr)if(Scule.global.functions.hasOwnProperty(attr,k))if(!0===attr[k]){leaf=k;break}else depth++,probe(attr[k])};probe(attributes);var i=0,trvs=function(attr,o){if(i===depth)return o;for(var k in attr)if(Scule.global.functions.hasOwnProperty(attr,k))return Scule.global.functions.hasOwnProperty(o,k)?!0===attr[k]?o:(i++,trvs(attr[k],o[k])):null};return[leaf,trvs(attributes,object)]},Scule.global.functions.sortObjectKeys=function(object){var o={},k=[];for(var key in object)Scule.global.functions.hasOwnProperty(object,key)&&k.push(key);return k.sort(function(v1,v2){var v1o=!1;v1.match(/^\$/)&&(v1=v1.substr(1),v1o=!0);var v2o=!1;return(v2.match(/^\$/)&&(v2=v2.substr(1),v2o=!0),v1o&&!v2o)?1:v2o&&!v1o?-1:v2>v1?-1:1}),k.forEach(function(i){o[i]=object[i]}),o},Scule.global.functions.objectKeys=function(object){var keys=[];for(var k in object)Scule.global.functions.hasOwnProperty(object,k)&&keys.push(k);return keys},Scule.global.functions.sizeOf=function(o){if(o instanceof Array||'string'==typeof o)return o.length;var key,size=0;for(key in o)Scule.global.functions.hasOwnProperty(o,key)&&size++;return size},Scule.global.functions.shuffle=function(c){var tmp,current,top=c.length;if(top)for(;--top;)current=_Mathfloor(Math.random()*(top+1)),
tmp=c[current],
c[current]=c[top],
c[top]=tmp;


},

Scule.global.functions.contains=function(object,key){
return Scule.global.functions.hasOwnProperty(object,key);
},

Scule.global.functions.isArray=function(o){
return'[object Array]'===Object.prototype.toString.call(o);
},

Scule.global.functions.isInteger=function(o){
return parseInt(o,10)==o;
},

Scule.global.functions.isDouble=function(o){
return parseFloat(o)==o;
},

Scule.global.functions.isScalar=function(o){
return null!==o&&!(o instanceof Object);
},

Scule.global.functions.randomFromTo=function(from,to){
return _Mathfloor(Math.random()*(to-from+1)+from);
},

Scule.global.functions.compare=function(a,b){return(
a===b?
0:

a>b?1:-1);
},

Scule.global.functions.sort=function(type,collection,key){

-1===type?
collection.sort(function(v1,v2){
return v2[key]-v1[key];
}):


0===type?
Scule.global.functions.shuffle(collection):


1===type?
collection.sort(function(v1,v2){
return v1[key]-v2[key];
}):


2===type?
collection.sort(function(v1,v2){return(
v2[key]>v1[key]?
-1:
v2[key]<v1[key]?
1:

0);

}):


3===type?
collection.reverse():void 0;


},

Scule.global.functions.trim=function(value){return(
String.prototype.trim?


value.trim():value.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' '));

},

Scule.global.functions.getMACAddress=function(){



return Scule.global.variables.hasOwnProperty('SimulatedMacAddress')||(Scule.global.variables.SimulatedMacAddress=new Date().getTime().toString().substring(9,11)+''+Scule.global.functions.randomFromTo(100,999)),Scule.global.variables.SimulatedMacAddress;
},

Scule.global.functions.parseAttributes=function(attributes){
if(!Scule.global.functions.isArray(attributes))
return Scule.global.functions.parseAttributes(attributes.split(','));var

build=function(struct,elements,count){
var element=Scule.global.functions.trim(elements[count]);
if(count===elements.length-1)
struct[element]=!0;else
{
var o={};
struct[element]=o,
build(o,elements,count+1);
}
},
a={};



return attributes.forEach(function(attribute){build(a,attribute.split('.'),0)}),a;
},

Scule.global.functions.traverse=function(path,object){
var t=function(p,o){
if(void 0!==o){


if(1===p.length)
return o[p.pop()];

var idx=p.shift();
return t(p,o[idx])}

};
return t(path.split('.'),object);
};
}(),

function(){var _Mathfloor2=









































































































































Math.floor,_Mathceil2=

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































Math.ceil;Scule.datastructures.variables.fnv_hash=function(key,size){for(var hash=2166136261,prime=16777619,len=key.length,i=0;i<len;i++)hash=(hash^key.charCodeAt(i))*prime;return hash+=hash<<13,hash^=hash>>7,hash+=hash<<3,hash^=hash>>17,hash+=hash<<5,0>hash&&(hash*=-1),hash%size},Scule.datastructures.variables.djb2_hash=function(key,size){var hash=5381,len=key.length,i=0;for(i=0;i<len;i++)hash=(hash<<5)+hash+key.charCodeAt(i);return 0>hash&&(hash*=-1),hash%size},Scule.datastructures.classes.LinkedList=function(){this.head=null,this.tail=null,this.length=0,this.getHead=function(){return this.head},this.getTail=function(){return this.tail},this.getLength=function(){return this.length},this.isEmpty=function(){return 0===this.length},this.clear=function(){this.head=null,this.tail=null,this.length=0},this.get=function(idx){if(0>idx||idx>this.length)return null;if(0===idx)return this.head;for(var curr=this.head,i=0;curr&&idx!==i;)i++,curr=curr.next;return curr},this.add=function(value){var temp=new Scule.datastructures.classes.LinkedListNode(null,value);if(null===this.head)this.head=temp;else if(null===this.tail)this.head.next=temp,this.tail=temp;else{var curr=this.tail;curr.next=temp,this.tail=curr.next}return this.length++,temp},this.search=function(value,key,cmp){cmp||(cmp=Scule.global.functions.compare);for(var curr=this.head;curr;){if(key){if(0===cmp(curr.element[key],value))break;}else if(0===cmp(curr.element,value))break;curr=curr.next}return curr},this.contains=function(value,cmp){if(null===value)return!1;cmp||(cmp=Scule.global.functions.compare);for(var curr=this.head;curr&&!(0===cmp(curr.element,value));)curr=curr.next;return null!==curr},this.split=function(idx){var node;if(void 0!==idx){if(1>idx||idx>this.length)return null;node=this.get(idx-1)}else if(idx=_Mathfloor2(this.length/2),node=this.middle(),!node)return null;var list=new Scule.datastructures.classes.LinkedList;return list.head=node.next,node.next=null,list.tail=this.tail,this.tail=node,list.length=idx,this.length-=idx,list},this.middle=function(){if(!this.head)return null;for(var slow=this.head,fast=this.head;fast.next&&fast.next.next;)slow=slow.next,fast=fast.next.next;return slow},this.remove=function(idx){if(0>idx||idx>this.length)return null;var curr;if(1===this.length)curr=this.head,this.clear();else{var prev=this.get(idx-1);prev.next==this.tail?(curr=this.tail,this.tail=prev):(curr=prev.next,prev.next=prev.next.next),this.length--}return curr},this.trim=function(){return this.isEmpty()?null:this.remove(this.length-1)},this.reverse=function(){for(var prev=null,curr=this.head,temp=null;curr;)temp=curr.next,curr.next=prev,prev=curr,curr=temp;temp=this.head,this.head=this.tail,this.tail=temp},this.toArray=function(){for(var nodes=[],curr=this.head;curr;)nodes.push(curr.element),curr=curr.next;return nodes},this.forEach=function(callback){for(var curr=this.head;curr;)callback(curr),curr=curr.next;return!0},this.sort=function(cmp,key){if(2>this.length)return this;cmp||(cmp=Scule.global.functions.compare);var middle=function(node){if(!node)return node;for(var slow=node,fast=node;fast.next&&fast.next.next;)slow=slow.next,fast=fast.next.next;return slow},merge=function(left,right){for(var a,b,head={next:null},curr=head;left&&right;)key?(a=right.element[key],b=left.element[key]):(a=right.element,b=left.element),-1<cmp(a,b)?(curr.next=left,left=left.next):(curr.next=right,right=right.next),curr=curr.next;return curr.next=left?left:right,head.next},merge_sort=function(node){if(!node||!node.next)return node;var m=middle(node),s=m.next;return m.next=null,merge(merge_sort(node),merge_sort(s))};this.head=merge_sort(this.head)}},Scule.datastructures.classes.DoublyLinkedList=function(){this.head=null,this.tail=null,this.length=0,this.getHead=function(){return this.head},this.getTail=function(){return this.tail},this.isEmpty=function(){return 0===this.length},this.getLength=function(){return this.length},this.search=function(value,key,cmp){cmp||(cmp=Scule.global.functions.compare);for(var curr=this.head;curr;){if(key){if(0===cmp(curr.element[key],value))break;}else if(0===cmp(curr.element,value))break;curr=curr.next}return curr},this.contains=function(value,cmp){if(null===value)return!1;cmp||(cmp=Scule.global.functions.compare);for(var curr=this.head;curr&&!(0===cmp(curr.element,value));)curr=curr.next;return null!==curr},this.get=function(idx){if(0>idx||idx>this.length)return null;if(0===idx)return this.head;for(var curr=this.head,i=0;curr&&idx!==i;)i++,curr=curr.next;return curr},this.add=function(value){var node=new Scule.datastructures.classes.DoublyLinkedListNode(null,null,value);if(this.isEmpty())this.head=node;else if(!this.tail)this.tail=node,this.tail.prev=this.head,this.head.next=node;else{var curr=this.tail;curr.next=node,node.prev=curr,this.tail=node}return this.length++,node},this.remove=function(idx){if(0>idx||idx>this.length)return null;var curr;if(1===this.length)curr=this.head,this.clear();else{var prev=this.get(idx-1);prev.next==this.tail?(curr=this.tail,this.tail=prev,this.tail.prev=curr.prev,this.tail.next=null):(curr=prev.next,prev.next=prev.next.next,prev.next&&(prev.next.prev=prev)),this.length--}return curr&&curr.detach(),curr},this.trim=function(){return this.isEmpty()?null:this.remove(this.length-1)},this.split=function(idx){var node;if(void 0!==idx){if(1>idx||idx>this.length)return null;node=this.get(idx-1)}else if(idx=_Mathfloor2(this.length/2),node=this.middle(),!node)return null;var list=new Scule.datastructures.classes.DoublyLinkedList;return list.head=node.next,node.next=null,node.prev=null,list.tail=this.tail,this.tail=node,list.length=idx,this.length-=idx,list},this.middle=function(){if(!this.head)return null;for(var slow=this.head,fast=this.head;fast.next&&fast.next.next;)slow=slow.next,fast=fast.next.next;return slow},this.sort=function(cmp,key){if(2>this.length)return this;cmp||(cmp=Scule.global.functions.compare);var middle=function(node){if(!node)return node;for(var slow=node,fast=node;fast.next&&fast.next.next;)slow=slow.next,fast=fast.next.next;return slow},merge=function(left,right){for(var a,b,head={next:null},curr=head;left&&right;)key?(a=right.element[key],b=left.element[key]):(a=right.element,b=left.element),-1<cmp(a,b)?(curr.next=left,curr.prev=right,left=left.next):(curr.next=right,curr.prev=left,right=right.next),curr=curr.next;return curr.next=left?left:right,head.next},merge_sort=function(node){if(!node||!node.next)return node;var m=middle(node),s=m.next;return m.next=null,s.prev=null,merge(merge_sort(node),merge_sort(s))};this.head=merge_sort(this.head)},this.reverse=function(){for(var curr=this.head,temp=null;curr;)temp=curr.next,curr.next=curr.prev,curr.prev=temp,curr=temp;temp=this.head,this.head=this.tail,this.tail=temp},this.prepend=function(value){var node=new Scule.datastructures.classes.DoublyLinkedListNode(null,null,value);if(this.isEmpty())this.head=node;else{var curr=this.head;this.head=node,curr.prev=this.head,this.head.next=curr,this.tail||(this.tail=curr)}return this.length++,node},this.clear=function(){this.head=null,this.tail=null,this.length=0},this.toArray=function(){for(var nodes=[],curr=this.head;curr;)nodes.push(curr.element),curr=curr.next;return nodes},this.forEach=function(callback){for(var curr=this.head;curr;)callback(curr),curr=curr.next;return!0}},Scule.datastructures.classes.CachingLinkedList=function(threshold,cacheKey,list){if(!cacheKey)throw'A valid cache key is required to use a CachingLinkedList';threshold||(threshold=100),this.cacheKey=cacheKey,this.threshold=threshold,this.cache=new Scule.datastructures.classes.LRUCache(threshold),list||(list=new Scule.datastructures.classes.LinkedList),this.list=list,this.clear=function(){this.cache.clear(),this.list.clear()},this.remove=function(idx){var node=this.list.remove(idx);return node&&this.cache.remove(node.element[this.cacheKey]),node},this.middle=function(){return this.list.middle()},this.split=function(){return this.cache.clear(),this.list.split()},this.add=function(value){var node=this.list.add(value);return this.cache.put(node.element[this.cacheKey],node),node},this.search=function(value){if(this.cache.contains(value))return this.cache.get(value);var node=this.list.search(value,this.cacheKey);return node&&this.cache.put(node.element[this.cacheKey],node),node},this.getLength=function(){return this.list.getLength()},this.getTail=function(){return this.list.getTail()},this.getHead=function(){return this.list.getHead()},this.isEmpty=function(){return this.list.isEmpty()},this.get=function(idx){return this.list.get(idx)},this.contains=function(value){return this.list.contains(value)},this.reverse=function(){this.list.reverse()},this.sort=function(cmp){this.list.sort(cmp,this.cacheKey)},this.toArray=function(){return this.list.toArray()},this.forEach=function(callback){return this.list.forEach(callback)}},Scule.datastructures.classes.LinkedListNode=function(next,element){this.next=next,this.element=element,this.getNext=function(){return this.next},this.setNext=function(next){this.next=next},this.getElement=function(){return this.element},this.setElement=function(element){this.element=element}},Scule.datastructures.classes.DoublyLinkedListNode=function(prev,next,element){Scule.datastructures.classes.LinkedListNode.call(this,next,element),this.prev=prev,this.getPrev=function(){return this.prev},this.setPrev=function(prev){this.prev=prev},this.detach=function(){this.prev=null,this.next=null}},Scule.datastructures.classes.LRUCache=function(threshold){this.threshold=threshold,this.cache=new Scule.datastructures.classes.HashTable,this.queue=new Scule.datastructures.classes.DoublyLinkedList,this.contains=function(key){return this.cache.contains(key)},this.remove=function(key){if(!this.cache.contains(key))return null;var entry=this.cache.get(key);this.cache.remove(key);var prev=entry.node.prev,next=entry.node.next;return prev&&(prev.next=next),next&&(next.prev=prev),entry.node.detach(),this.queue.length--,!0},this.get=function(key){if(!this.cache.contains(key))return null;var entry=this.cache.get(key);return entry.requeue(this.queue),entry.value},this.put=function(key,value){var entry;if(this.cache.contains(key)?(entry=this.cache.get(key),entry.value=value,entry.node.element={key:key,value:value},entry.requeue(this.queue)):(entry=new Scule.datastructures.classes.LRUCacheEntry(key,value,this.queue.prepend({key:key,value:value})),this.cache.put(key,entry)),this.queue.length>this.threshold){var o=this.queue.trim();if(!this.cache.remove(o.getElement().key))throw'LRU cache is corrupt';o=null}return!0},this.getLength=function(){return this.cache.getLength()},this.clear=function(){this.cache.clear(),this.queue.clear()}},Scule.datastructures.classes.LRUCacheEntry=function(key,value,node){this.key=key,this.value=value,this.node=node,this.getKey=function(){return this.key},this.getValue=function(){return this.value},this.getNode=function(){return this.node},this.requeue=function(queue){if(this.node.prev){var prev=this.node.prev,next=this.node.next;prev.next=next,next&&(next.prev=prev),this.node.detach(),queue.length--,this.node=queue.prepend({key:this.key,value:this.value})}}},Scule.datastructures.classes.LIFOStack=function(){Scule.datastructures.classes.LinkedList.call(this),this.push=function(value){var curr=this.head;this.head=new Scule.datastructures.classes.LinkedListNode(curr,value),this.length++},this.pop=function(){if(this.isEmpty())return null;var curr=this.head;return this.head=curr.next,this.length--,curr.next=null,curr.getElement()},this.peek=function(){return this.isEmpty()?null:this.head.getElement()}},Scule.datastructures.classes.FIFOStack=function(){Scule.datastructures.classes.LIFOStack.call(this),this.push=this.add,this.pop=function(){if(this.isEmpty())return null;var curr=this.head;return this.head=curr.next,this.length--,curr.getElement()}},Scule.datastructures.classes.Queue=function(){Scule.datastructures.classes.FIFOStack.call(this),this.enqueue=this.push,this.dequeue=this.pop},Scule.datastructures.classes.HashMap=function(size){this.size=size,this.buckets=0,this.length=0,this.table=[],this.hash=Scule.datastructures.variables.djb2_hash,this.retable=function(){var factor=this.length/this.size;if(!(this.length>=this.buckets&&.7>factor)){var elements=this.toArray();this.clear(),this.size*=2;for(var i=0;i<elements.length;i++)this.put(elements[i][0],elements[i][1])}},this.bucket=function(key){return this.table[key]||(this.buckets++,this.table[key]=new Scule.datastructures.classes.BinarySearchTree),this.table[key]},this.put=function(key,value){var k=this.hash(key,this.size),b=this.bucket(k),r=b.insert(key,value);return r&&(this.length++,0==b.getLength()%10&&b.balance()),this.retable(),r},this.contains=function(key){var k=this.hash(key,this.size),b=this.bucket(k);return null!==b.search(key)},this.get=function(key){var k=this.hash(key,this.size),b=this.bucket(k),v=b.search(key);return null===v?null:v.getData()},this.search=function(key){return this.get(key)},this.remove=function(key){var k=this.hash(key,this.size),b=this.bucket(k);return!!b.remove(key)&&(this.length--,this.retable(),!0)},this.clear=function(){this.table=[],this.length=0,this.buckets=0},this.getLength=function(){return this.length},this.getKeys=function(){var keys=[],getKeys=function(node){null===node||(keys.push(node.getKey()),getKeys(node.getLeft()),getKeys(node.getRight()))};return this.table.forEach(function(bucket){bucket&&getKeys(bucket.getRoot())}),keys},this.getValues=function(){var values=[],getValues=function(node){null===node||(values.push(node.getData()),getValues(node.getLeft()),getValues(node.getRight()))};return this.table.forEach(function(bucket){bucket&&getValues(bucket.getRoot())}),values},this.toArray=function(){var array=[];return this.table.forEach(function(bucket){bucket&&(array=array.concat(bucket.toArray()))}),array}},Scule.datastructures.classes.HashTable=function(){this.table={},this.length=0,this.put=function(key,value){this.contains(key)||this.length++,this.table[key]=value},this.get=function(key){return this.contains(key)?this.table[key]:null},this.search=function(key){return this.get(key)},this.remove=function(key){if(this.contains(key)){var value=this.table[key];return delete this.table[key],this.length--,value}return!1},this.contains=function(key){return Scule.global.functions.hasOwnProperty(this.table,key)},this.clear=function(){this.table={},this.length=0},this.getLength=function(){return this.length},this.getKeys=function(){var keys=[];for(var ky in this.table)this.contains(ky)&&keys.push(ky);return keys},this.getValues=function(){var values=[];for(var ky in this.table)this.contains(ky)&&values.push(this.table[ky]);return values},this.toArray=function(){var a=[];for(var ky in this.table)this.contains(ky)&&(a[ky]=this.table[ky]);return a}},Scule.datastructures.classes.BinarySearchTreeNode=function(key,data){this.parent=null,this.left=null,this.right=null,this.key=key,this.data=data,this.setParent=function(parent){this.parent=parent},this.getParent=function(){return this.parent},this.setLeft=function(left){left&&(this.left=left,this.left.setParent(this))},this.getLeft=function(){return this.left},this.setRight=function(right){right&&(this.right=right,this.right.setParent(this))},this.getRight=function(){return this.right},this.getKey=function(){return this.key},this.setData=function(data){this.data=data},this.getData=function(){return this.data},this.clear=function(){this.data=null},this.remove=function(child){return!!child&&(child==this.right?(this.setRight(child.getRight()),this.getRight().setLeft(child.getLeft()),child.parent=null,child.left=null,child.right=null,!0):!(child!=this.left)&&(this.setLeft(child.getRight()),this.getLeft().setLeft(child.getLeft()),child.parent=null,child.left=null,child.right=null,!0))}},Scule.datastructures.classes.AtomicCounter=function(initial){if(void 0===initial&&(initial=0),!Scule.global.functions.isInteger(initial))throw'Unable to initialize counter with non-integer value';this.count=initial,this.increment=function(value){if(void 0===value&&(value=1),!Scule.global.functions.isInteger(value))throw'Unable to increment counter with non-integer value';return this.count+=value,this.count},this.decrement=function(value){if(void 0===value&&(value=1),!Scule.global.functions.isInteger(value))throw'Unable to decrement counter with non-integer value';return this.count-=value,this.count},this.getCount=function(){return this.count}},Scule.datastructures.classes.BinarySearchTree=function(){this.root=null,this.length=0,this.insert=function(key,data){var self=this,node=new Scule.datastructures.classes.BinarySearchTreeNode(key,data);if(null===this.root)return this.length++,this.root=node,!0;var insrt=function(node,parent){return node.getKey()==parent.getKey()?(parent.setData(node.getData()),!1):(node.getKey()<=parent.getKey()?parent.getLeft()?insrt(node,parent.getLeft()):(self.length++,parent.setLeft(node)):parent.getRight()?insrt(node,parent.getRight()):(self.length++,parent.setRight(node)),!0)};return insrt(node,this.root)},this.search=function(key){var srch=function(key,node){return node?node.getKey()==key?node:node.getKey()>key?srch(key,node.getLeft()):srch(key,node.getRight()):null};return srch(key,this.root)},this.remove=function(key){var node=this.search(key);if(!node)return!1;if(!node.getParent())return node.getRight()?(this.root=node.getRight(),this.root.setLeft(node.getLeft())):node.getLeft()?(this.root=node.getRight(),this.root.setLeft(node.getLeft())):this.root=null,this.length--,!0;var r=node.getParent().remove(node);return r&&this.length--,r},this.balance=function(){var self=this,list=this.toArray(),rebuild=function(list){var left=list,right=list.splice(_Mathceil2(list.length/2),list.length),
middle=left.pop();
self.insert(middle[0],middle[1]),
0<left.length&&
rebuild(left),

0<right.length&&
rebuild(right);

};
this.length=0,
this.root=null,
rebuild(list);
},

this.getLength=function(){
return this.length;
},

this.toArray=function(){
var flatten=function(node){return(
node?


flatten(node.getLeft()).concat([[node.getKey(),node.getData()]]).concat(flatten(node.getRight())):[]);
};
return flatten(this.root);
},

this.getRoot=function(){
return this.root;
},

this.clear=function(){
this.root=null,
this.length=0;
};
},

Scule.datastructures.classes.BitSet=function(capacity){

if(capacity===void 0||!Scule.global.functions.isInteger(capacity)||0>=capacity)
throw'Unable to initialize bitset with non-integer capacity';


this.capacity=capacity,
this.words=null,

this.zeroFill=function(){
this.words=[];

for(var b=_Mathceil2(this.capacity/32),i=0;i<=b;i++)
this.words[i]=0;

},

this.indexToAddress=function(index){
if(0>index||index>=this.capacity)
throw'Index out of bounds';

if(32>index)
return{
addr:0,
offs:index};var


addr=_Mathfloor2(index/32),
offs=index%32;
return{
addr:addr,
offs:offs};

},

this.get=function(index){
var o=this.indexToAddress(index);
return 0!=(this.words[o.addr]&1<<o.offs);
},

this.set=function(index){
var o=this.indexToAddress(index);
this.words[o.addr]|=1<<o.offs;
},

this.clear=function(index){
var o=this.indexToAddress(index);
this.words[o.addr]&=~(1<<o.offs);
},

this.getLength=function(){
return this.capacity;
},

this.toString=function(){

for(var string='',i=0;i<this.capacity;i++)
string+=this.get(i)?1:0;

return string;
},

this.zeroFill();
},

Scule.datastructures.classes.BloomFilter=function(m,k){

if(m===void 0||!Scule.global.functions.isInteger(m)||0>=m)
throw'Unable to initialize bloom filter with non-integer m';(


k===void 0||!Scule.global.functions.isInteger(k)||0>=k)&&(
k=_Mathfloor2(m/_Mathceil2(m/3))),


Scule.datastructures.classes.BitSet.call(this,m),

this.k=k,
this.f=[];

for(var i=0;i<this.k;i++)
this.f.push([Scule.global.functions.randomFromTo(0,999999),Scule.global.functions.randomFromTo(0,999999)]);


this.hash=function(i,key,capacity){
return Scule.datastructures.variables.fnv_hash(this.f[i][0]+key+this.f[i][1],capacity);
},

this.add=function(key){
for(var i=0;i<this.k;i++)
this.set(this.hash(i,key,this.capacity));

},

this.query=function(key){
for(var i=0;i<this.k;i++)
if(!this.get(this.hash(i,key,this.capacity)))
return!1;


return!0;
};
},

Scule.datastructures.classes.AtomicCounter=function(initial){





if(void 0===initial&&(initial=0),!Scule.global.functions.isInteger(initial))
throw'Unable to initialize counter with non-integer value';


this.count=initial,

this.increment=function(value){



if(void 0===value&&(value=1),!Scule.global.functions.isInteger(value))
throw'Unable to increment counter with non-integer value';


return this.count+=value,this.count;
},

this.decrement=function(value){



if(void 0===value&&(value=1),!Scule.global.functions.isInteger(value))
throw'Unable to decrement counter with non-integer value';


return this.count-=value,this.count;
},

this.getCount=function(){
return this.count;
};
},

Scule.getLinkedList=function(){
return new Scule.datastructures.classes.LinkedList;
},

Scule.getCachingLinkedList=function(threshold,cacheKey){
return new Scule.datastructures.classes.CachingLinkedList(threshold,cacheKey);
},

Scule.getDoublyLinkedList=function(){
return new Scule.datastructures.classes.DoublyLinkedList;
},

Scule.getHashTable=function(){
return new Scule.datastructures.classes.HashTable;
},

Scule.getPrimaryKeyIndex=function(){
return new Scule.db.classes.PrimaryKeyIndex;
},

Scule.getHashMap=function(size){
return new Scule.datastructures.classes.HashMap(size);
},

Scule.getLIFOStack=function(){
return new Scule.datastructures.classes.LIFOStack;
},

Scule.getFIFOStack=function(){
return new Scule.datastructures.classes.FIFOStack;
},

Scule.getQueue=function(){
return new Scule.datastructures.classes.Queue;
},

Scule.getLRUCache=function(threshold){
return new Scule.datastructures.classes.LRUCache(threshold);
},

Scule.getBinarySearchTreeNode=function(key,data){
return new Scule.datastructures.classes.BinarySearchTreeNode(key,data);
},

Scule.getBinarySearchTree=function(){
return new Scule.datastructures.classes.BinarySearchTree;
},

Scule.getAtomicCounter=function(initial){
return new Scule.datastructures.classes.AtomicCounter(initial);
},

Scule.getBitSet=function(capacity){
return new Scule.datastructures.classes.BitSet(capacity);
},

Scule.getBloomFilter=function(capacity){
return new Scule.datastructures.classes.BloomFilter(capacity);
};
}(),

function(){
Scule.instrumentation.classes.Timer=function(){
this.intervalCounter=0,

this.intervalArray=[],

this.intervals=Scule.getLIFOStack(),

this.resetTimer=function(){
this.intervalCounter=0,
this.intervalArray=[],
this.intervals.clear();
},

this.startInterval=function(tag){
this.intervalCounter++,
tag===void 0&&(
tag=this.intervalCounter),

this.intervals.push(new Scule.instrumentation.classes.TimerInterval(tag)),
this.intervalArray.push(this.intervals.peek());
},

this.stopInterval=function(){return!
this.intervals.isEmpty()&&(


this.intervals.peek().stop(),
this.intervals.pop());
},

this.stopAllIntervals=function(){for(;
!this.intervals.isEmpty();)
this.intervals.pop().stop();

},

this.logToConsole=function(){
this.intervalArray.forEach(function(interval){
interval.logToConsole();
});
};
},

Scule.instrumentation.classes.TimerInterval=function(tag){
this.startTimestamp=new Date().getTime(),
this.endTimestamp=null,
this.tag=tag,

this.stopped=function(){
return null!==this.endTimestamp;
},

this.stop=function(){
this.endTimestamp=new Date().getTime();
},

this.getDifference=function(){return(
null!==this.endTimestamp&&


this.endTimestamp-this.startTimestamp);
},

this.logToConsole=function(){
var diff=this.getDifference();
!1===diff&&
console.log('interval '+this.tag+' is still in progress'),

console.log('interval '+this.tag+' lasted '+diff+'ms');
};
},

Scule.getTimer=function(){
return new Scule.instrumentation.classes.Timer;
};
}(),

function(){
Scule.interpreter.symbols.table={
$and:Scule.interpreter.arities.selective,
$or:Scule.interpreter.arities.selective,
$nor:Scule.interpreter.arities.negative,
$not:Scule.interpreter.arities.negative,
$lt:Scule.interpreter.arities.range,
$lte:Scule.interpreter.arities.range,
$gt:Scule.interpreter.arities.range,
$gte:Scule.interpreter.arities.range,
$all:Scule.interpreter.arities.array,
$in:Scule.interpreter.arities.array,
$nin:Scule.interpreter.arities.array,
$elemMatch:Scule.interpreter.arities.array,
$eq:Scule.interpreter.arities.binary,
$ne:Scule.interpreter.arities.binary,
$size:Scule.interpreter.arities.binary,
$exists:Scule.interpreter.arities.binary,
$within:Scule.interpreter.arities.geospatial,
$near:Scule.interpreter.arities.geospatial,
$set:Scule.interpreter.arities.mutate,
$inc:Scule.interpreter.arities.mutate,
$unset:Scule.interpreter.arities.mutate,
$pull:Scule.interpreter.arities.mutate,
$pullAll:Scule.interpreter.arities.mutate,
$pop:Scule.interpreter.arities.mutate,
$push:Scule.interpreter.arities.mutate,
$pushAll:Scule.interpreter.arities.mutate,
$rename:Scule.interpreter.arities.mutate},


Scule.interpreter.classes.QueryNormalizer=function(){
this.normalize=function(query){
var normalize=function(o){
for(var key in o)
if(Scule.global.functions.isScalar(o[key])||o[key]instanceof RegExp||o[key]instanceof Scule.db.classes.ObjectId){
var v=o[key];
v instanceof Scule.db.classes.ObjectId&&(
v=o[key].toString()),

delete o[key],
o[key]={
$eq:v};

}else
'$or'===key?
Scule.global.functions.isArray(o[key])&&
o[key].forEach(function(clause){
normalize(clause);
}):

'$elemMatch'===key?
normalize(o[key]):
'$where'===key||(
o[key]=Scule.global.functions.sortObjectKeys(o[key]));



return Scule.global.functions.sortObjectKeys(o);
};
return normalize(query);
};
},

Scule.interpreter.classes.DateComparator=function(){
this.isDate=function(o){
return o instanceof Date||o instanceof Scule.db.classes.ObjectDate;
},

this.normalizeDate=function(date){
if(!this.isDate(date))
throw new Error('unable to compare non-date object');return(

date instanceof Scule.db.classes.ObjectDate?
date.toDate().getTime():

date instanceof Date?
date.getTime():

date);
},

this.$eq=function(a,b){
return this.normalizeDate(a)==this.normalizeDate(b);
},

this.$gt=function(a,b){
return this.normalizeDate(a)>this.normalizeDate(b);
},

this.$gte=function(a,b){
return this.normalizeDate(a)>=this.normalizeDate(b);
},

this.$lt=function(a,b){
return this.normalizeDate(a)<this.normalizeDate(b);
},

this.$lte=function(a,b){
return this.normalizeDate(a)<=this.normalizeDate(b);
};
},

Scule.interpreter.classes.QueryEngine=function(){
this.comparator=new Scule.interpreter.classes.DateComparator,

this.traverse=function(k,o){
return Scule.global.functions.traverse(k,o);
},

this.traverseObject=function(k,o){
return Scule.global.functions.traverseObject(Scule.global.functions.parseAttributes(k),o);
},

this.$ne=function(a,b){
return!this.$eq(a,b);
},

this.$eq=function(a,b){return(
b instanceof RegExp?
b.test(a):
a instanceof Scule.db.classes.ObjectId?
a.toString()==b:

this.comparator.isDate(a)&&this.comparator.isDate(b)?
this.comparator.$eq(a,b):

a==b);

},

this.$gt=function(a,b){return(
this.comparator.isDate(a)&&this.comparator.isDate(b)?
this.comparator.$gt(a,b):

a>b);
},

this.$gte=function(a,b){return(
this.comparator.isDate(a)&&this.comparator.isDate(b)?
this.comparator.$gte(a,b):

a>=b);
},

this.$lt=function(a,b){return(
this.comparator.isDate(a)&&this.comparator.isDate(b)?
this.comparator.$lt(a,b):

a<b);
},

this.$lte=function(a,b){return(
this.comparator.isDate(a)&&this.comparator.isDate(b)?
this.comparator.$lte(a,b):

a<=b);
},

this.$all=function(a,b){
if(!Scule.global.functions.isArray(a)||!Scule.global.functions.isArray(b))
return!1;var

i=0,
lookup={};
for(i=0;i<a.length;i++)
lookup[a[i]]=!0;

for(i=0;i<b.length;i++)
if(!lookup.hasOwnProperty(b[i]))
return!1;


return!0;
},

this.$in=function(a,b){
for(var i=0;i<b.length;i++)
if(this.$eq(a,b[i]))
return!0;


return!1;
},

this.$nin=function(a,b){
for(var i=0;i<b.length;i++)
if(this.$eq(a,b[i]))
return!1;


return!0;
},

this.$where=function(o,callback){
return callback.call(o);
},

this.$elemMatch=function(o,c){
if(!Scule.global.functions.isArray(o))
return!1;

for(var i=0;i<o.length;i++)
if(c(o[i]))
return!0;


return!1;
},

this.$size=function(a,b){return!!
Scule.global.functions.isInteger(b)&&


Scule.global.functions.sizeOf(a)===b;
},

this.$exists=function(a,b){return(
b?
void 0!==a:

a===void 0);
},

this.$within=function(o,q){var _Mathpow=






Math.pow;if(!o.hasOwnProperty('lat')||!o.hasOwnProperty('lon'))return!1;if(!q.hasOwnProperty('lat')||!q.hasOwnProperty('lon'))return!1;var d=Math.sqrt(_Mathpow(q.lat-o.lat,2)+_Mathpow(q.lon-o.lon,2));
return d<=q.distance;
},

this.$near=function(o,q){var _Mathcos=






Math.cos,_Mathsin=Math.sin;if(!o.hasOwnProperty('lat')||!o.hasOwnProperty('lon'))return!1;if(!q.hasOwnProperty('lat')||!q.hasOwnProperty('lon'))return!1;var d=6371*Math.acos(_Mathsin(o.lat)*_Mathsin(q.lat)+_Mathcos(o.lat)*_Mathcos(q.lat)*_Mathcos(q.lon-o.lon));
return d<=q.distance;
},

this.$sort=function(type,o,key){
Scule.global.functions.sort(type,o,key);
},

this.$set=function(struct,value,upsert){var
leaf=struct[0],
o=struct[1];
leaf in o?




o[leaf]=value:!0===upsert&&(o[leaf]=value);

},

this.$unset=function(struct){var
leaf=struct[0],
o=struct[1];
leaf in o&&
delete o[leaf];

},

this.$inc=function(struct,value,upsert){
Scule.global.functions.isInteger(value)||(
value=1);var

leaf=struct[0],
o=struct[1];
leaf in o?(




Scule.global.functions.isInteger(o[leaf])||Scule.global.functions.isDouble(o[leaf]))&&(
o[leaf]+=value):upsert&&(o[leaf]=value);


},

this.$pull=function(struct,value){var
leaf=struct[0],
o=struct[1];
if(leaf in o&&Scule.global.functions.isArray(o[leaf])){

for(var a=[],i=0;i<o[leaf].length;i++)
o[leaf][i]!==value&&
a.push(o[leaf][i]);


o[leaf]=a;
}
},

this.$pullAll=function(struct,value){var
leaf=struct[0],
o=struct[1];
if(leaf in o&&Scule.global.functions.isArray(o[leaf])){
if(!Scule.global.functions.isArray(value))
throw'the $pullAll operator requires an associated array as an operand';

var table=Scule.getHashTable();
value.forEach(function(val){
table.put(val,!0);
});
for(var i=0;i<o[leaf].length;i++)
table.contains(o[leaf][i])&&(
o[leaf].splice(i,1),
i--);


}
},

this.$pop=function(struct){var
leaf=struct[0],
o=struct[1];
leaf in o&&Scule.global.functions.isArray(o[leaf])&&
o[leaf].pop();

},

this.$push=function(struct,value,upsert){var
leaf=struct[0],
o=struct[1];
!(leaf in o)&&upsert?
o[leaf]=[value]:

Scule.global.functions.isArray(o[leaf])&&
o[leaf].push(value);


},

this.$pushAll=function(struct,value,upsert){var
leaf=struct[0],
o=struct[1];
if(!(leaf in o)&&upsert)
o[leaf]=value.slice(0);else
{
if(!Scule.global.functions.isArray(value))
throw'the $pushAll operator requires an associated array as an operand';

Scule.global.functions.isArray(o[leaf])&&
value.forEach(function(v){
o[leaf].push(v);
});

}
};
},

Scule.interpreter.classes.QueryCompiler=function(){
this.cache=Scule.getHashTable(),

this.engine=new Scule.interpreter.classes.QueryEngine,

this.normalizer=new Scule.interpreter.classes.QueryNormalizer,

this.compileConditions=function(conditions){var

o,k,source='';















return conditions.hasOwnProperty('$sort')&&(o=conditions.$sort,k=Scule.global.functions.objectKeys(o),1===k.length&&(source+='\tengine.$sort('+o[k[0]]+', r, "'+k[0]+'");\n')),conditions.hasOwnProperty('$skip')&&(source+='\tr.splice(0, '+conditions.$skip+');\n'),conditions.hasOwnProperty('$limit')&&(source+='\tif (r.length > '+conditions.$limit+') {\n',source+='\t\tr.splice('+conditions.$limit+');\n',source+='\t}\n'),source;
},

this.compileClauseList=function(queries){var
__t=this,
ors=[];return(
Scule.global.functions.isArray(queries)?(


queries.forEach(function(query){
var ands=[];
for(var key in query)
query.hasOwnProperty(key)&&(


ands=ands.concat(__t.compileQueryClauses(key,query[key])));

ors.push(ands.join(' && '));
}),
'('+ors.join(') || (')+')'):ors);
},

this.compileExpressions=function(query){
query=this.normalizer.normalize(query);
var ands=[];
for(var key in query)
ands=ands.concat(this.compileQueryClauses(key,query[key]));

return ands;
},

this.compileQueryClauses=function(key,subQuery){
var clauses=[];
for(var operator in subQuery)
if(this.engine.hasOwnProperty(operator))


if('$elemMatch'==operator){var
sands=this.compileExpressions(subQuery[operator]),
src='function(o) { return ('+sands.join(' && ')+'); }';
0>key.indexOf('.')?
clauses.push('engine.$elemMatch(o.'+key+', '+src+')'):

clauses.push('engine.$elemMatch(engine.traverse('+JSON.stringify(key)+', o), '+src+')');

}else{
var v=null;

v=subQuery[operator]instanceof RegExp?subQuery[operator].toString():
subQuery[operator]instanceof Date?
'new Date("'+subQuery[operator].toString()+'")':
subQuery[operator]instanceof Scule.db.classes.ObjectDate?
'new Date("'+subQuery[operator].toDate().toString()+'")':

JSON.stringify(subQuery[operator]),

0>key.indexOf('.')?
clauses.push('engine.'+operator+'(o.'+key+', '+v+')'):

clauses.push('engine.'+operator+'(engine.traverse('+JSON.stringify(key)+', o), '+v+')');

}

return clauses;
},

this.compileUpdateClauses=function(key,subQuery,upsert){
if(this.engine.hasOwnProperty(key)){


var clauses=[];
for(var operand in subQuery)
clauses.push('\t\tengine.'+key+'(engine.traverseObject('+JSON.stringify(operand)+', o), '+JSON.stringify(subQuery[operand])+', '+JSON.stringify(upsert)+');');

return clauses}
},

this.compileUpdate=function(query,upsert,ignoreCache){

var hash=Scule.md5.hash(this.serializeQuery(query));
if(this.cache.contains(hash))
return this.cache.get(hash);var


updates=[],
closure='var u = function(objects, collection, engine) {\n';


for(var key in closure+='\tobjects.forEach(function(o) {\n',query)
query.hasOwnProperty(key)&&(


updates=updates.concat(this.compileUpdateClauses(key,query[key],upsert)));return(


closure+=updates.join('\n'),
closure+='\n\t});\n',
closure+='\treturn objects;\n',
closure+='}\n',

ignoreCache)?
closure:(


eval(closure),
this.cache.put(hash,u),
this.cache.get(hash));
},

this.serializeQuery=function(query){var
o=Scule.global.functions.cloneObject(query),
serialize=function(o){
for(var key in o)
o[key]instanceof Scule.db.classes.ObjectId||o[key]instanceof RegExp?
o[key]=o[key].toString():

Scule.global.functions.isScalar(o[key])||
serialize(o[key]);



};

return serialize(o),JSON.stringify(o);
},

this.compileQuery=function(query,conditions,ignoreCache){

query=this.normalizer.normalize(query);

var hash=Scule.md5.hash(this.serializeQuery(query)+this.serializeQuery(conditions));
if(this.cache.contains(hash))
return this.cache.get(hash);


var closure='var c = function(objects, engine) {\n';

if(closure+='\tvar r = [];\n',0<Scule.global.functions.sizeOf(query)){
closure+='\tobjects.forEach(function(o) {\n',
closure+='\t\to = o.element;\n';var
ands=[],
ors='';
for(var key in query)
query.hasOwnProperty(key)&&(


'$or'==key?
ors='('+this.compileClauseList(query[key])+')':
'$where'==key?
ands=ands.concat(['engine.$where(o, '+query[key].toString()+')']):

ands=ands.concat(this.compileQueryClauses(key,query[key])));


0<ands.length?(
0<ors.length&&(
ors=' && '+ors),

closure+='\t\tif (('+ands.join(' && ')+')'+ors+') {\n',
closure+='\t\t\tr[r.length] = o;\n',
closure+='\t\t}\n'):
0<ors.length&&(
closure+='\t\tif ('+ors+') {\n',
closure+='\t\t\tr[r.length] = o;\n',
closure+='\t\t}\n'),

closure+='\t});\n';
}else
closure+='\tr = objects.toArray();\n';return(

conditions&&(
closure+=this.compileConditions(conditions)),

closure+='\treturn r;\n',
closure+='};\n',

ignoreCache)?
closure:(


eval(closure),
this.cache.put(hash,c),
this.cache.get(hash));
},

this.explainQuery=function(query,conditions){
var source=this.compileQuery(query,conditions,!0);

return console.log(source),source;
},

this.explainUpdate=function(query,upsert){
var source=this.compileUpdate(query,upsert,!0);

return console.log(source),source;
};
},

Scule.interpreter.classes.QueryInterpreter=function(){

this.compiler=new Scule.interpreter.classes.QueryCompiler,

this.interpret=function(collection,query,conditions,explain){
if(explain)
return this.compiler.explainQuery(query,conditions);var

o=collection.documents.queue,
c=this.compiler.compileQuery(query,conditions);
return c(o,Scule.interpreter.objects.engine);
},

this.update=function(collection,query,updates,conditions,upsert,explain){
var o=this.interpret(collection,query,conditions,explain);
if(explain)
return this.compiler.explainUpdate(updates,upsert);

var u=this.compiler.compileUpdate(updates,upsert);
return u(o,collection,Scule.interpreter.objects.engine);
};
},

Scule.interpreter.objects.engine=new Scule.interpreter.classes.QueryEngine,

Scule.getQueryNormalizer=function(){
return new Scule.interpreter.classes.QueryNormalizer;
},

Scule.getQueryEngine=function(){
return new Scule.interpreter.classes.QueryEngine;
},

Scule.getQueryCompiler=function(){
return new Scule.interpreter.classes.QueryCompiler;
},

Scule.getQueryInterpreter=function(){
return new Scule.interpreter.classes.QueryInterpreter;
},

Scule.getDateComparator=function(){
return new Scule.interpreter.classes.DateComparator;
};
}(),

function(){
Scule.db.classes.SimpleCryptographyProvider=function(){
this.signString=function(data,secret,salt){
return Scule.sha1.hash(Scule.sha1.hash(data+secret)+salt);
},

this.signObject=function(object,secret,salt){

return object._sig=salt,this.signString(JSON.stringify(object),secret,salt);
},

this.signJSONString=function(object,secret,salt){
return this.signString(JSON.stringify(object),secret,salt);
},

this.verifyObjectSignature=function(object,secret,salt){var
oldSig=object._sig,
newSig=this.signObject(object,secret,salt);
return oldSig===newSig;
};
},

Scule.db.classes.StorageEngine=function(configuration){
this.configuration=configuration,

this.crypto=null,

this.setConfiguration=function(configuration){
this.configuration=configuration;
},

this.getConfiguration=function(){
return this.configuration;
},

this.setCryptographyProvider=function(provider){
this.crypto=provider;
},

this.getCryptographyProvider=function(){
return this.crypto;
};
},

Scule.db.classes.DummyStorageEngine=function(configuration){

Scule.db.classes.StorageEngine.call(this,configuration),

this.write=function(name,object,callback){
callback&&
callback(object);

},

this.read=function(name,callback){
callback&&
callback();

};
},

Scule.db.classes.MemoryStorageEngine=function(configuration){

Scule.db.classes.StorageEngine.call(this,configuration),

this.setCryptographyProvider(new Scule.db.classes.SimpleCryptographyProvider),
this.storage={},

this.write=function(name,object,callback){
object._salt||(
object._salt=Scule.sha1.hash(new Date().getTime()+'')),

object._sig=this.crypto.signObject(object,this.configuration.secret,object._salt),
this.storage['__scule_collection__'+name]=JSON.stringify(object),
callback&&
callback(object);

},

this.read=function(name,callback){
if(!('__scule_collection__'+name in this.storage)){
var object={
_sig:null,
_salt:Scule.sha1.hash(new Date().getTime()+''),
_version:3,
_name:name,
_objects:{}};

object._sig=this.crypto.signObject(object,this.configuration.secret,object._salt),
this.storage['__scule_collection__'+name]=JSON.stringify(object);
}var
data=this.storage['__scule_collection__'+name],
o=JSON.parse(data);
if(!1===this.crypto.verifyObjectSignature(o,this.configuration.secret,o._salt))
throw JSON.stringify({
event:'SculeDataTampered',
filename:this.configuration.collection});


delete o._sig,
callback&&
callback(o);

};
},

Scule.db.classes.LocalStorageStorageEngine=function(configuration){





if(Scule.db.classes.StorageEngine.call(this,configuration),this.setCryptographyProvider(new Scule.db.classes.SimpleCryptographyProvider),!window||!window.hasOwnProperty('localStorage')&&null!==window.localStorage)
throw JSON.stringify({
event:'SculeLocalStorageError',
message:'Local storage is not available on this device'});



this.write=function(name,object,callback){
object._salt||(
object._salt=Scule.sha1.hash(new Date().getTime()+''));

try{
object._sig=this.crypto.signObject(object,this.configuration.secret,object._salt),
localStorage.setItem('__scule_collection__'+name,JSON.stringify(object)),
callback&&
callback(object);

}catch(e){
throw JSON.stringify({
event:'SculeLocalStorageError',
message:'Storage quota exceeded for origin',
collection:this.configuration.collection});

}
},

this.read=function(name,callback){var
data=localStorage.getItem('__scule_collection__'+name),
o={};
if(!data)
o={
_sig:null,
_salt:Scule.sha1.hash(new Date().getTime()+''),
_version:3,
_name:name,
_objects:{}};else

{

if(o=JSON.parse(data),!1===this.crypto.verifyObjectSignature(o,this.configuration.secret,o._salt))
throw JSON.stringify({
event:'SculeDataTampered',
filename:this.configuration.collection});


delete o._sig;
}
callback&&
callback(o);

};
},

Scule.db.classes.TitaniumDiskStorageEngine=function(configuration){

Scule.db.classes.StorageEngine.call(this,configuration),

this.configuration.path||(
this.configuration.path=Titanium.Filesystem.applicationDataDirectory),


this.setConfiguration=function(configuration){
this.configuration=configuration,
this.configuration.path||(
this.configuration.path=Titanium.Filesystem.applicationDataDirectory);

},

this.setCryptographyProvider(new Scule.db.classes.SimpleCryptographyProvider),

this.write=function(name,object,callback){
object._salt||(
object._salt=Scule.sha1.hash(new Date().getTime()+'')),

object._sig=this.crypto.signObject(object,this.configuration.secret,object._salt);
var file=Titanium.Filesystem.getFile(this.configuration.path,name+'.json');







return file.write(JSON.stringify(object)),file.remoteBackup=!1!==this.configuration.remoteBackup,callback&&callback(object),!0;
},

this.read=function(name,callback){
var file=Titanium.Filesystem.getFile(this.configuration.path,name+'.json');
if(file.exists()){
try{var
contents=file.read(),
o=JSON.parse(contents);
}catch(e){





return LOGGER.error('[Scule Problem] Persisted data has been corrupted for entity:'+name+' it will now be removed and may cause data loss.'),Ti.App.fireEvent('SculeDataCorrupted',{entity:name}),file.deleteFile(),!1;
}return(
!1===this.crypto.verifyObjectSignature(o,this.configuration.secret,o._salt)?(
Ti.App.fireEvent('SculeDataTampered',{
filename:name}),!1):(



delete o._sig,
callback&&
callback(o),

o));
}
return!1;
};
},

Scule.db.classes.NodeJSDiskStorageEngine=function(configuration){

Scule.db.classes.StorageEngine.call(this,configuration),

this.filesystem=require('fs'),

this.setCryptographyProvider(new Scule.db.classes.SimpleCryptographyProvider),

this.write=function(name,object,callback){
var path=this.configuration.path+'/'+name+'.json';
object._salt||(
object._salt=Scule.sha1.hash(new Date().getTime()+'')),

object._sig=this.crypto.signObject(object,this.configuration.secret,object._salt),
this.filesystem.writeFile(path,JSON.stringify(object),function(err){
if(err)
throw err;

callback&&
callback(object);

});
},

this.read=function(name,callback){var
path=this.configuration.path+'/'+name+'.json',
__t=this;
this.filesystem.exists(path,function(exists){return(
exists?void


__t.filesystem.readFile(path,function(err,data){
if(err)
throw err;

var o=JSON.parse(data);
if(2<o._version&&
!1===__t.crypto.verifyObjectSignature(o,__t.configuration.secret,o._salt))
throw JSON.stringify({
event:'SculeDataTampered',
filename:name});



delete o._sig,
callback&&
callback(o);

}):callback({}));
});
};
},

Scule.db.classes.ObjectId=function(id){

if(id===void 0){for(var
ts=Math.floor(new Date().getTime()/1e3).toString(16),
hs=Scule.md5.hash(Scule.global.functions.getMACAddress()).substring(0,6),
pid=Scule.global.functions.randomFromTo(1e3,9999).toString(16);
4>pid.length;)
pid='0'+pid;for(

var inc=Scule.global.functions.randomFromTo(1e5,999999).toString(16);
6>inc.length;)
inc='0'+inc;

id=ts+hs+pid+inc;
}

this.id=id,

this.$type='id',

this.toString=function(){
return this.id.toString();
};
},

Scule.db.classes.ObjectDate=function(sec,usec){

if(sec===void 0&&usec===void 0){
var ts=new Date().getTime().toString();
sec=parseInt(ts.substring(0,10),10),
usec=parseInt(ts.substring(10),10);
}

this.ts=parseInt(sec+usec,10),

this.sec=sec,

this.usec=usec,

this.$type='date',

this.getTimestamp=function(){
return this.ts;
},

this.getSeconds=function(){
return this.sec;
},

this.getMicroSeconds=function(){
return this.usec;
},

this.toDate=function(){
return new Date(1e3*this.sec+this.usec);
};
},

Scule.db.classes.DBRef=function(ref,id){

if(ref===void 0||id===void 0)
throw'illegal object reference';


this.ref=ref,

this.id=new Scule.db.classes.ObjectId(id),

this.$type='dbref',

this.getRef=function(){
return this.ref;
},

this.getId=function(){
return this.id;
},

this.resolve=function(){
return this.resolveReference();
},

this.resolveReference=function(){
var collection=Scule.factoryCollection(this.ref);
return collection.findOne(this.id);
};
},

Scule.db.classes.PrimaryKeyIndex=function(){

this.table=Scule.getHashTable(),
this.queue=Scule.getDoublyLinkedList(),

this.clear=function(){
this.table.clear(),
this.queue.clear();
},

this.contains=function(key){
return this.table.contains(key);
},

this.get=function(key){return(
this.table.contains(key)?


this.table.get(key).element:null);
},

this.add=function(object){
var key=Scule.global.functions.getObjectId(object,!0);




return this.table.contains(key)&&this.remove(object),this.table.put(key,this.queue.add(object)),!0;
},

this.remove=function(object){
var key=Scule.global.functions.getObjectId(object,!0);
if(!this.table.contains(key))
return!1;


var node=this.table.remove(key);
if(!node)
return!1;var


prev=node.prev,
next=node.next;

















return prev&&(prev.next=next),next&&(next.prev=prev),node.detach(),node===this.queue.head?this.queue.head=next:node===this.queue.tail&&(this.queue.tail=prev),this.queue.head===this.queue.tail&&(this.queue.tail=null),this.queue.length--,node.element;
},

this.length=function(){
return this.queue.length;
},

this.toTable=function(){
var objects={};



return this.queue.forEach(function(object){objects[Scule.global.functions.getObjectId(object.element,!0)]=object.element}),objects;
},

this.toArray=function(){
return this.queue.toArray();
},

this.toString=function(){
var str='(h) ';




return this.queue.forEach(function(object){str+=JSON.stringify(object.element)+' -> '}),str+='(t)',str;
};
},

Scule.db.classes.Collection=function(name){
this.documents=Scule.getPrimaryKeyIndex(),

this.interpreter=Scule.getQueryInterpreter(),

this.version=3,

this.lastId=null,

this.name=name,

this.autoCommit=!1,

this.isOpen=!1,

this.storage=null,

this.setStorageEngine=function(storage){
this.storage=storage;
},

this.setAutoCommit=function(semaphor){
this.autoCommit=semaphor;
},

this.getName=function(){
return this.name;
},

this.getLength=function(){
return this.documents.length();
},

this.getLastInsertId=function(){
return this.lastId;
},

this.open=function(callback){
if(!this.isOpen){


var self=this;
this.storage.read(this.name,function(o){
if(o){


for(var ky in o._objects)
if(o._objects.hasOwnProperty(ky)){
var document=o._objects[ky];
Scule.db.functions.unflattenObject(o._objects[ky]),
self.documents.add(document);
}

self.isOpen=!0,
callback&&
callback(this)}

})}
},

this.commit=function(callback){
var collection={
_sig:null,
_salt:null,
_name:this.name,
_version:this.version,
_objects:this.documents.toTable()};

this.storage.write(this.name,collection,callback);
},

this.find=function(query,conditions,callback){
if(Scule.global.constants.ID_FIELD in query){
var result=this.findOne(query[Scule.global.constants.ID_FIELD]);
return result?[result]:[];
}
var result=this.interpreter.interpret(this,query,conditions);



return callback&&callback(result),result;
},

this.explain=function(query,conditions,callback){
this.interpreter.interpret(this,query,conditions,!0),
callback&&
callback();

},

this.clear=function(callback){
this.documents.clear(),
callback&&
callback(this);

},

this.findAll=function(callback){
var result=this.documents.toArray();



return callback&&callback(result),result;
},

this.findOne=function(id,callback){
Scule.global.functions.isScalar(id)||(
id=id.toString());

var document=null;






return this.documents.contains(id)&&(document=this.documents.get(id)),callback&&callback(document),document;
},

this.save=function(document,callback){














return Scule.db.functions.unflattenObject(document),document.hasOwnProperty('_id')&&!(document._id instanceof Scule.db.classes.ObjectId)&&(document._id=new Scule.db.classes.ObjectId(document._id)),this.documents.add(document),this.autoCommit&&this.commit(),this.lastId=Scule.global.functions.getObjectId(document),callback&&callback(this.lastId),this.lastId;
},

this.update=function(query,updates,conditions,upsert,callback){
var result=this.interpreter.update(this,query,updates,conditions,upsert);



return callback&&callback(result),result;
},

this.count=function(query,conditions,callback){
var count=this.find(query,conditions).length;



return callback&&callback(count),count;
},

this.remove=function(query,conditions,callback){var
self=this,
results=this.find(query,conditions);






return results.forEach(function(o){self.documents.remove(o)}),callback&&callback(results),results;
},

this.distinct=function(key,query,callback){var
o=this.find(query),
t={};









return o.forEach(function(d){d[key]in t||(t[d[key]]=0),t[d[key]]++}),callback&&callback(t),t;
},

this.merge=function(collection,callback){
if(!collection)
throw'the merge function requires a valid collection as a parameter';var

self=this,
o=collection.findAll();








return o.forEach(function(document){self.documents.contains(document._id)||self.documents.add(document)}),callback&&callback(this),!0;
},

this.mapReduce=function(map,reduce,options,callback){
new Scule.db.classes.MapReduceHandler(map,reduce,options).run(this,callback);
};
},

Scule.db.classes.MapReduceHandler=function(map,reduce,options){



if(this.options=options,!map)
throw'A valid function is requires as the `map` parameter of the map/reduce operation';


if(!reduce)
throw'A valid function is requires as the `reduce` parameter of the map/reduce operation';


if(!('out'in options))
throw'A valid output collection connection url is required as the `out` parameter of the map/reduce options object';else

if(!('merge'in options.out)&&!('reduce'in options.out))
throw'A valid output collection connection url is required as either the `merge` or `reduce` out parameter of the map/reduce options object';



'query'in options||(
options.query={}),


'conditions'in options||(
options.conditions={}),


this.map=map,

this.reduce=reduce,

this.finalize='finalize'in options?options.finalize:null,

this.run=function(collection,callback){var

self=this,
merge='merge'in this.options.out,
out=Scule.factoryCollection(merge?this.options.out.merge:this.options.out.reduce),
table=Scule.getHashTable(),

emit=function(key,value){
table.contains(key)||
table.put(key,[]),

table.get(key).push(value);
},

o=collection.find(this.options.query,this.options.conditions);
o.forEach(function(document){
self.map(document,emit);
});

var temp=null;
merge&&(
temp=Scule.factoryCollection('scule+dummy://__mr'+new Date().getTime()));var


result=Scule.getHashTable(),
keys=table.getKeys();




















return keys.forEach(function(key){result.put(key,self.reduce(key,table.get(key))),self.finalize&&result.put(key,self.finalize(key,result.get(key))),merge?temp.save(result.get(key)):out.save(result.get(key))}),merge&&out.merge(temp),callback&&callback(out),!0;
};
},

Scule.db.classes.CollectionFactory=function(){
this.collections=Scule.getHashTable(),

this.getCollection=function(url,configuration){
if(this.collections.contains(url))
return this.collections.get(url).c;


configuration||(
configuration={
secret:'dummy'});



var parts=Scule.db.functions.parseCollectionURL(url);
if(!(parts.plugin in Scule.db.plugins))
throw parts.plugin+' is not a registered Scule plugin';


if(!(parts.engine in Scule.db.engines))
throw parts.engine+' is nto a registered Scule storage engine';var


storage=new Scule.db.engines[parts.engine](configuration),
collection=new Scule.db.plugins[parts.plugin](parts.name);







return collection.setStorageEngine(storage),collection.open(),this.collections.put(url,{c:collection,t:new Date().getTime()}),this.collections.get(url).c;
};
},

Scule.db.functions.debug=function(message){
!0===Scule.db.global.debug&&
console.log(message);

},

Scule.db.functions.unflattenObject=function(object){
var u=function(object){
if(!Scule.global.functions.isScalar(object))


for(var key in object)
if(object.hasOwnProperty(key)){
var o=object[key];
if(!Scule.global.functions.isScalar(o)&&o&&'$type'in o)
switch(o.$type){
case'date':
object[key]=new Scule.db.classes.ObjectDate(o.sec,o.usec),
object[key].ts=o.ts;
break;

case'id':
object[key]=new Scule.db.classes.ObjectId(o.id);
break;

case'dbref':
object[key]=new Scule.db.classes.DBRef(o.ref,o.id);}else



u(o);

}

};
u(object),
Scule.global.constants.ID_FIELD in object||(
object[Scule.global.constants.ID_FIELD]=new Scule.db.classes.ObjectId);

},

Scule.db.functions.parseCollectionURL=function(url){
var matches=url.match(/^([^\+]*)\+([^\/]*)\:\/\/(.*)/);
if(!matches||4!==matches.length)
throw url+' is an invalid collection url';

return{
plugin:matches[1],
engine:matches[2],
name:matches[3]};

},

Scule.db.objects.core.collections.factory=new Scule.db.classes.CollectionFactory,

Scule.debug=function(semaphor){
Scule.global.variables.debug=semaphor;
},

Scule.registerStorageEngine=function(name,engine){
if(name in Scule.db.engines)
throw name+' storage engine is already registered';

Scule.db.engines[name]=engine;
},

Scule.registerCollectionPlugin=function(name,plugin){
if(name in Scule.db.plugins)
throw name+' collection plugin is already registered';

Scule.db.plugins[name]=plugin;
},

function(){
Scule.registerStorageEngine('memory',Scule.db.classes.MemoryStorageEngine),
Scule.registerStorageEngine('dummy',Scule.db.classes.DummyStorageEngine),
Scule.registerStorageEngine('local',Scule.db.classes.LocalStorageStorageEngine),
Scule.registerStorageEngine('nodejs',Scule.db.classes.NodeJSDiskStorageEngine),
Scule.registerStorageEngine('titanium',Scule.db.classes.TitaniumDiskStorageEngine),
Scule.registerCollectionPlugin('scule',Scule.db.classes.Collection);
}(),

Scule.factoryCollection=function(name,configuration){
return Scule.db.objects.core.collections.factory.getCollection(name,configuration);
},

Scule.dropAll=function(){
Scule.db.objects.core.collections.factory.collections.clear();
},

Scule.getIndex=function(){
return new Scule.db.classes.Index;
},

Scule.getHashTableIndex=function(threshold){
return new Scule.db.classes.HashTableIndex(threshold);
},

Scule.getObjectId=function(id){
return new Scule.db.classes.ObjectId(id);
},

Scule.getObjectDate=function(sec,usec){
return new Scule.db.classes.ObjectDate(sec,usec);
},

Scule.getObjectDateFromDate=function(date){
if(!(date instanceof Date))
throw new Error('unable to factory ObjectDate from non-date object');var

ts=date.getTime().toString(),
sec=parseInt(ts.substring(0,10),10),
usec=parseInt(ts.substring(10),10);
return new Scule.db.classes.ObjectDate(sec,usec);
},

Scule.getDBRef=function(ref,id){
return new Scule.db.classes.DBRef(ref,id);
},

Scule.getMemoryStorageEngine=function(configuration){
return new Scule.db.classes.MemoryStorageEngine(configuration);
},

Scule.getLocalStorageStorageEngine=function(configuration){
return new Scule.db.classes.LocalStorageStorageEngine(configuration);
},

Scule.getNodeJSDiskStorageEngine=function(configuration){
return new Scule.db.classes.NodeJSDiskStorageEngine(configuration);
},

Scule.getTitaniumDiskStorageEngine=function(configuration){
return new Scule.db.classes.TitaniumDiskStorageEngine(configuration);
},

Scule.getSimpleCryptographyProvider=function(){
return new Scule.db.classes.SimpleCryptographyProvider;
};
}(),

function(){
'undefined'!=typeof Titanium&&'undefined'!=typeof Titanium.Platform?(
Scule.md5={
hash:function(s){
return Ti.Utils.md5HexDigest(s);
}},

Scule.sha1={
hash:function(s){
return Ti.Utils.sha1(s);
}},

module.exports=Scule):

'undefined'!=typeof exports&&this.exports!==exports?(
Scule.md5={
m:require('crypto'),
hash:function(s){
return this.m.createHash('md5').update(s).digest('hex');
}},

Scule.sha1={
m:require('crypto'),
hash:function(s){
return this.m.createHash('sha1').update(s).digest('hex');
}},

module.exports=Scule):

Scule.global.system.installHashFunctions();


}();