// https://www.cnblogs.com/shaozhu520/p/10859276.html
// https://www.npmjs.com/package/redis
const redis = require("redis");
const client = redis.createClient({
    db:2 // 连接第三个数据库
});

client.on('ready',function(res){
  console.log('ready');
});

client.on('end',function(err){
  console.log('end');
});

client.on('error', function (err) {
  console.log(err);
});

client.on('connect',function(){
  console.log('redis connect success!');
});


client.set("key", 'kkkkkkkkkkkkkkkkk', redis.print);

client.get("key", redis.print);

client.set('hello', 5, function(err, obj) {
  client.incr('hello', function(err,data) {
      client.get('hello', function(err,data) {
          console.log(data);         // 6
      })
  })
})

var obj = {
  name:'sss',
  age:223
}

client.hmset("hmset-obj",obj);


client.send_command('lset',['mylist',0,1], function(err,data) {
  console.log(data);          // OK
})
client.send_command('lpush',['mylist', 'one'], function(err, data) {
  console.log(data);          //OK 
})


let db1 = ['mysql','redis'];
 let db2 = ['mongo','redis'];
 client.sadd('db1',db1, function(err,data) {
     client.smembers('db1', function(err,data) {
         console.log(toString.call(data));               // [object Array]
         console.log('smemers:' + data);                 // 获取set中的成员, ['redis,mysql]  
     })
     client.sadd('db2', db2, function(err, data) {
         client.sinter('db1','db2', function(err,data) {
             console.log('sinter:' + data)                    //交集: sinter:redis
         });
         client.sunion('db1','db2', function(err,data) {
             console.log('sunion:' + data)                    // 并集: sunion:mongo,mysql,redis
         });
         client.sdiff('db1','db2', function(err,data) {
             console.log('SDIFF:' + data)                     // 补集: SDIFF:mysql
         })
     })
 });

 client.zadd(['zdb',0,'mysql', 1,'mongo',2,'redis'], function(err, data) {
  console.log(data);           // 3
})


 client.multi()
     .set('xiao','xing')
     .get('xiao')
     .exec(function(err,replies) {
         console.log(replies);         // [ 'OK', 'xing' ]
     })

client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");
client.hgetall("hosts", function (err, obj) {
  console.dir(obj);
});


client.hmset('hmset', {
  "0123456789": "abcdefghij", // NOTE: key and value will be coerced to strings 
  "some manner of key": "a type of value"
});

client.lpush('lpush',[1,2,3,4])