var

SQLite=require('T/sqlite'),
Util=require('T/util'),

DIR=Ti.Filesystem.applicationCacheDirectory+'database',
TABLE='cachedb';

exports.get=function(hash){
var row=DB.row('SELECT expire, info FROM '+TABLE+' WHERE hash = ? LIMIT 1',hash);
if(null==row)return null;

var expire=row.expire<<0;
if(Util.now()>expire)return null;

var file=Ti.Filesystem.getFile(DIR,hash);return(
file.exists()?

{
value:file.read(),
expire:expire,
info:Util.parseJSON(row.info)}:null);

},

exports.set=function(hash,value,ttl,info){
info=JSON.stringify(info||{}),(
_.isObject(value)||_.isArray(value))&&(value=JSON.stringify(value));

var expire=Util.fromNow(ttl||0);

DB.run('INSERT OR REPLACE INTO '+TABLE+' (hash, expire, info) VALUES (?, ?, ?)',hash,expire,info),
Ti.Filesystem.getFile(DIR,hash).write(value);
},

exports.remove=function(hash){
DB.run('DELETE FROM '+TABLE+' WHERE hash = ?',hash),
Ti.Filesystem.getFile(DIR,hash).deleteFile();
},

exports.purge=function(){
DB.run('DELETE FROM '+TABLE+' WHERE 1'),
Ti.Filesystem.getFile(DIR).deleteDirectory(!0),
Ti.Filesystem.getFile(DIR).createDirectory();
},

exports.getSize=function(){
return require('T/filesystem').getSize(DIR);
},

Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory).createDirectory(),
Ti.Filesystem.getFile(DIR).createDirectory();

var DB=new SQLite('app');
DB.run('CREATE TABLE IF NOT EXISTS '+TABLE+' (hash TEXT PRIMARY KEY, expire INTEGER, info TEXT)'),

DB.list('SELECT hash FROM '+TABLE+' WHERE expire < '+Util.now()).forEach(function(h){
Ti.API.trace('Cache: removing expired key '+h),
exports.remove(h);
});