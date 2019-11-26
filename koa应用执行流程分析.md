# koa应用执行流程分析

## 执行www,主要有两个作用:
1、koa应用初始化;
2、启动并监听服务器

koa应用初始化：
会实例化koa，并注册中间件

启动并监听服务器：
当httpserver接受请求，会调用 koa 实例对象callback方法，callback方法内定义一个内部函数，并返回handleRequest，handleRequest方法分两步。

第一：
调用koa实例对象createContext方法创建上下文对象context，此时往context上添加上request,responce,app,req,res,originalUrl,state,
同时在context.request,context.responce,添加ctx上下文；

第二：
调用koa实例对象handleRequest方法，该方法调用注册中间件进午处理，处理之后调用koa实例对象respond方法响应输出。

中间件处理流程：
koa2会先按照中间件注册顺序执行next()之前的代码, 执行完到底部之后, 返回往前执行next()之后的代码，中间件执行逻辑在compose方法，
从第一个中间件开始执行, 后面可以通过next()调用后续中间件；

执行流程大致如下：

先执行第一个中间件（因为compose会默认执行dispatch(0)），该中间件返回 Promise，然后被Koa监听，
执行对应的逻辑（成功或失败）在执行第一个中间件的逻辑时，遇到 await next()时，会继续执行dispatch(i+1)，也就是执行 dispatch(1)，
会手动触发执行第二个中间件。

这时候，第一个中间件 await next() 后面的代码就会被 pending，等待 await next() 返回 Promise，才会继续执行第一个中间件 await next() 后面的代码。
同样的在执行第二个中间件的时候，遇到await next()的时候，会手动执行第三个中间件，await next() 后面的代码依然被 pending，等待 await 下一个中间件的Promise.resolve。
只有在接收到第三个中间件的 resolve 后才会执行后面的代码，然后第二个中间会返回 Promise，被第一个中间件的 await 捕获，这时候才会执行第一个中间件的后续代码，
然后再返回 Promise 以此类推。
如果有多个中间件的时候，会依照上面的逻辑不断执行，先执行第一个中间件，在 await next() 出 pending，继续执行第二个中间件，
继续在 await next() 出 pending，继续执行第三个中间，直到最后一个中间件执行完，然后返回 Promise，
然后倒数第二个中间件才执行后续的代码并返回Promise，然后是倒数第三个中间件，接着一直以这种方式执行直到第一个中间件执行完，
并返回 Promise。
