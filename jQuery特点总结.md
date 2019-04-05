# jQuery特点总结

* 轻量级(体积小,压缩版体积不到100kb)

![轻量级](/images/jquery-size-show.png)


* 出色的DOM操作封装

![出色的DOM操作封装](/images/dom-api-pic1.png)
![出色的DOM操作封装](/images/dom-api-pic2.png)
![出色的DOM操作封装](/images/dom-api-pic3.png)
![出色的DOM操作封装](/images/dom-api-pic4.png)
![出色的DOM操作封装](/images/dom-api-pic5.png)

* 强大的选择器（复杂先择器用到sizzle）

![强大的选择器](/images/selector1.jpg)
![强大的选择器](/images/selector2.jpg)
![强大的选择器](/images/selector3.jpg)

* 稳定可靠事件处理机制

![强大的选择器](/images/eventHander1.jpg)
![强大的选择器](/images/eventHander2.jpg)
![强大的选择器](/images/eventHander3.jpg)


* 简单易用Ajax

![提供简单易用Ajax](/images/ajax-api-pic.jpg)

* 出色的浏览器兼容性

开发者不需要考虑浏览器兼容性问题，完美支持目前市面上的浏览器


* 链式操作

$('#id').css('width','100px').addClass('test');

* 隐式迭代

1、 在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用,这就叫做隐式迭代　　
我想把ul下的每个li都加个样式jquery写法就是:$("ul li").addClass("test"),就是把ul下的每一个li都加了test的样式，我们并没有去取得所有li然后循环加样式
2、 如果获取的是多元素的值，大部分情况下返回的是第一个元素的值
3、each方法：大部分情况下是不需要使用each方法的，因为jquery有隐式迭代的特性，但是如果要对每个元素做不同的处理就要用到each方法了

* 链式操作
JQuery的易扩展性，吸引了来自全球开发者来编写JQuery的扩展插件。



文章截图是从http://jquery.cuishifeng.cn/ 截取的