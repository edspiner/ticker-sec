
exports.config=_.extend({
log:!1},
Alloy.CFG.T?Alloy.CFG.T.sqlite:{});var

Util=require('T/util'),

MODULE_NAME='sqlite',

DatabaseModule=require('T/db');

function SQLite(name,file){
this.query=null,
this.name=name,
this.db=null,

null!=file&&(
this.db=DatabaseModule.install(file,name),

this.close());

}

SQLite.fromFile=function(path){var
file=Ti.Filesystem.getFile(path),
name=file.name.replace(/\..+$/,''),

destination_file=Ti.Filesystem.getFile(Util.getDatabaseDirectory()+'/'+name+'.sql');return(

destination_file.exists()&&destination_file.deleteFile(),
destination_file.write(file),!1)?


new SQLite(name):0?void 0:

new SQLite(destination_file);

},

SQLite.prototype.table=function(name){












return this.query={method:'select',table:name,where:[],whereData:[],select:null,update:null,updateData:[],order:null,insert:null,insertData:[]},this;
},

SQLite.prototype.select=function(){
if(null===this.query)throw new Error('Start a query chain with .table() method');

this.query.method='select';

var args=_.toArray(arguments);















return this.query.select=0===args.length?null:1<args.length?_.object(args,args):_.isArray(args[0])?_.object(args[0],args[0]):_.isObject(args[0])?args[0]:_.object([args[0]],[args[0]]),this;
},

SQLite.prototype.update=function(obj){
if(null===this.query)throw new Error('Start a query chain with .table() method');





return this.query.method='update',this.query.update=_.keys(obj),this.query.updateData=_.values(obj),this;
},

SQLite.prototype.delete=function(){
if(null===this.query)throw new Error('Start a query chain with .table() method');



return this.query.method='delete',this;
},

SQLite.prototype.order=SQLite.prototype.orderBy=function(key,direction){
if(null===this.query)throw new Error('Start a query chain with .table() method');






return this.query.order={key:key,direction:direction||'ASC'},this;
},

SQLite.prototype.truncate=function(){
if(null===this.query)throw new Error('Start a query chain with .table() method');



return this.query.method='truncate',this;
},

SQLite.prototype.where=SQLite.prototype.andWhere=function(){
if(null===this.query)throw new Error('Start a query chain with .table() method');

var args=_.toArray(arguments);

















return 1===args.length?_.isObject(args[0])?(this.query.where=_.map(_.keys(args[0]),function(k){return k+' = ?'}),this.query.whereData=_.values(args[0])):_.isString(args[0])&&this.query.where.push(args[0]):2===args.length?(this.query.where.push(args[0]+' = ?'),this.query.whereData.push(args[1])):3===args.length&&(this.query.where.push(args[0]+' '+args[1]+' ?'),this.query.whereData.push(args[2])),this;
},

SQLite.prototype.insert=function(obj){
if(null===this.query)throw new Error('Start a query chain with .table() method');





return this.query.method='insert',this.query.insert=_.keys(obj),this.query.insertData=_.values(obj),this;
},

SQLite.prototype.getExequery=function(){
if(null===this.query)throw new Error('Start a query chain with .table() method');

var whereClause=0<this.query.where.length?' WHERE '+this.query.where.join(' AND '):'';
switch(this.query.method){

case'select':
return['SELECT '+(null===this.query.select?'*':_.map(this.query.select,function(v,k){
return k+' AS '+v;
}).join(','))+' FROM ['+this.query.table+']'+whereClause+(null===this.query.order?'':' ORDER BY '+this.query.order.key+' '+this.query.order.direction)].concat(this.query.whereData);

case'update':
return['UPDATE ['+this.query.table+'] SET '+(this.query.update.join(' = ?, ')+' = ?')+whereClause].concat(this.query.updateData).concat(this.query.whereData);

case'delete':
return['DELETE FROM ['+this.query.table+']'+whereClause].concat(this.query.whereData);

case'truncate':
return['TRUNCATE TABLE ['+this.query.table+']'];

case'insert':
return['INSERT INTO ['+this.query.table+']('+this.query.insert.join(',')+') VALUES ('+this.query.insert.map(function(){
return'?';
})+')'].concat(this.query.insertData);}


},

SQLite.prototype.open=function(){
try{
this.db=DatabaseModule.open(this.name);
}catch(ex){
Ti.API.error(MODULE_NAME+': Error while opening the database: '+ex);
}
},

SQLite.prototype.close=function(){
try{
this.db.close();
}catch(ex){
Ti.API.error(MODULE_NAME+': Error while closing the database: '+ex);
}
},

SQLite.prototype.execute=SQLite.prototype.exec=function(){
Ti.API.warn(MODULE_NAME+': WARNING: if you use .execute(), you will have to close the result set and the database manually!');

var q=null;











return null===this.query?q=arguments:(q=this.getExequery(),this.query=null),exports.config.log&&Ti.API.debug(MODULE_NAME+':',q),this.open(),Function.prototype.apply.call(this.db.execute,this.db,q);
},

SQLite.prototype.transform=function(){var
_arguments=_.toArray(arguments),
transform=_arguments.pop();
if(!_.isFunction(transform))
throw new Error('SQLite: last argument of SQLite.transform must be a Function');


var q=null;

null===this.query?
q=_arguments:(

q=this.getExequery(),
this.query=null),


exports.config.log&&Ti.API.debug(MODULE_NAME+':',q),

this.open();var
dataset=Function.prototype.apply.call(this.db.execute,this.db,q),

res=transform(dataset);




return dataset.close(),this.close(),res;
},

SQLite.prototype.run=function(){
this.open();

var q=null;

null===this.query?
q=arguments:(

q=this.getExequery(),
this.query=null),


exports.config.log&&Ti.API.debug(MODULE_NAME+':',arguments);

var row=Function.prototype.apply.call(this.db.execute,this.db,q);

null!=row&&
row.close(),


this.close();
},

SQLite.prototype.value=SQLite.prototype.val=function(){
var _args=_.toArray(arguments);






return _args.push(function(row){return row&&!1!==row.isValidRow()?row.field(0):null}),this.transform.apply(this,_args);
},

SQLite.prototype.single=SQLite.prototype.row=function(){
var _args=_.toArray(arguments);











return _args.push(function(row){if(!row||!1===row.isValidRow())return null;for(var obj={},i=0;i<row.fieldCount;i++)obj[row.fieldName(i)]=row.field(i);return obj}),this.transform.apply(this,_args);
},

SQLite.prototype.list=SQLite.prototype.array=function(){
var _args=_.toArray(arguments);









return _args.push(function(row){for(var list=[];row&&!0===row.isValidRow();)list.push(row.field(0)),row.next();return list}),this.transform.apply(this,_args);
},

SQLite.prototype.all=SQLite.prototype.rows=function(){
var _args=_.toArray(arguments);















return _args.push(function(row){for(var list=[],fieldNames=[];row&&!0===row.isValidRow();){for(var obj={},i=0;i<row.fieldCount;i++)fieldNames[i]=fieldNames[i]||row.fieldName(i),obj[fieldNames[i]]=row.field(i);list.push(obj),row.next()}return list}),this.transform.apply(this,_args);
},

SQLite.prototype.loop=function(){var
_args=_.toArray(arguments),
loopFn=_args.pop();
if(!_.isFunction(loopFn))
throw new Error('SQLite: last argument of SQLite.loop must be a Function');


this.transform.apply(this,_args.concat(function(row){for(
var fieldNames=[];
row&&!0===row.isValidRow();){

for(var obj={},i=0;i<row.fieldCount;i++)
fieldNames[i]=fieldNames[i]||row.fieldName(i),
obj[fieldNames[i]]=row.field(i);

loopFn(obj),
row.next();
}
}));
},

module.exports=SQLite;