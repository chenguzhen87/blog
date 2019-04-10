# React开发遇见常见问题汇总

很多时候，时间久，很多事情记不清了,本篇博客主要记录我自己在react项目开发遇到问题，方便自己回顾，也给刚从事react开发新手提供参考，少走些弯路。

* React报错信息：Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

上面报错大概意思是：我们不能在组件销毁后操作state，这是一个禁忌，容易出现内存泄漏的情况，若要修复，请取消组件中的所有订阅和异步任务

报错信息截图
![React报错信息](/images/react-common-err1.jpg)

我写代码截图

![React报错信息](/images/react-common-err2.jpg)

分析出现问题的原因

我这里在组件加载完成的钩子函数里监听了resize事件，函数节流调用getClinetHeight方法中操作了state更新。

解决方法
在componentWillMount钩子函数移除事件监听
![React报错信息](/images/react-common-err3.jpg)