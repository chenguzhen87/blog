var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 该事件在添加新监听器时被触发。
eventEmitter.on("newListener",function(){
  console.log("newListener")
})
// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 触发 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 返回指定事件的监听器数组。
const listeners = eventEmitter.listeners('connection');
// 返回 EventEmitter 当前的监听器最大限制数的值
const getMaxListeners = eventEmitter.getMaxListeners();
console.log("程序执行完毕。");

// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃

eventEmitter.addListener('error',function(){
  console.log('error')
})
eventEmitter.emit('error'); 