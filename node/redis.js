const redis = require("redis");
const client = redis.createClient({
    db:2 // 连接第三个数据库
});

client.on("error", function(error) {
  console.error(error);
});

client.on("connect",function(erro){
    console.info(erro);
})

client.set("key", "value", redis.print);
client.get("key", redis.print);