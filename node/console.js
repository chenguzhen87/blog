const fs = require('fs');
var colors = require('colors');
var ProgressBar = require('progress');
const https = require('https');
console.log('我的%s已经%d岁%i', '猫', 2,1.23)

console.log('%o', Number)
console.clear()

const x = 1
const y = 2
const z = 3
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)


const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new console.Console({ stdout: output, stderr: errorOutput });
// 像控制台一样使用它
const count = 5;
logger.log('count: %d', count);
// 在 stdout.log 中：count 5


console.dir({a:1})

const function2 = () => console.trace()
const function1 = () => function2()
function1()


console.error('错误了')
console.log('\x1b[33m%s\x1b[0m', '你好')

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


var req = https.request({
    host: 'download.github.com',
    port: 443,
    path: '/visionmedia-node-jscoverage-0d4608a.zip'
  });
   
  req.on('response', function(res){
    var len = parseInt(res.headers['content-length'], 10);
   
    console.log();
    var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 200,
      total: len
    });
   
    res.on('data', function (chunk) {
      bar.tick(chunk.length);
    });
   
    res.on('end', function () {
      console.log('\n');
    });
  });
   
  req.end();


 
