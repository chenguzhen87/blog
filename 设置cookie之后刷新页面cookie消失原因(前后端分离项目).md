
# 设置cookie之后刷新页面cookie消失原因(前后端分离项目)
## 现象描述：
* 页面刷新前截图
![页面刷新前](/images/cookie-refresh-before.png)

* 页面刷新后截图
![页面刷新后](/images/cookie-refresh-after.png)


## 原因描述
从登录页登录成功之后，java后台通过  

```javascript
HttpSession session = request.getSession();
session.setAttribute(Constants.LOGIN_USER_DTO, loginUserDto);  
```
创建会话，JSESSIONID通过Cookies形式传到前台，但是cookies的Path路径设置为'/XYLMis'，当刷新页面时，cookie存放在'/XYLMis'下，导致'http://ui.56xyl.com:8000/'下没有权限查看'http://ui.56xyl.com:8000/XYLMis'下cookie，导致看不到cookie。

## 结论及解决方案
把cookies的Path设置为'/'。
- 前端项目启动加上'/XYLMis'项目名,后端项目启动有'/XYLMis'项目名
- 前端项目启动没有'/XYLMis',后端项目启动无'/XYLMis'项目名

 


