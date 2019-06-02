# nginx 前后端分离配置
```
server {
    listen  80;
    server_name test.com;


    location / {
        root /home/www/target/dist;
	try_files $uri $uri/ @router;
    	index index.html;
    }
    location @router {
	rewrite ^.*$ /index.html last;
    }
   
    location /api {
      proxy_pass http://172.16.88.200:8810/api/;
      include /etc/nginx/proxy.conf;
      #proxy_cookie_path /api/;
    }

}

```