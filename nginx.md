| name | 价格 | 数量 | 地址 |
| ---- | ---- | ---- | ---- |
| 香蕉 | $1   | 5    |
| 苹果 | $1   | 6    |
| 草莓 | $1   | 7    |

# nginx 版本
nginx -v

# nginx 路径
/usr/local/etc/nginx

# 启动 nginx
sudo nginx 启动
sudo nginx -s reload 重启
sudo nginx -s stop 停止

# 配置文件，每次修改之后需重启 nginx
路径 sudo vim /usr/local/etc/nginx/nginx.conf

# server 属性说明
listen 监听端口，可多个
server_name 服务名称，反向代理地址
root 静态资源位置
location 位置信息
proxy_pass 实际访问地址

# 检查是否配置正确
nginx -t 出现 ok 或 successfull 就代表正确

# 应用
## 访问本地local-pages资源，host（本地域名未注册）需配置dev.pre.gotokeep.com
## 注册的域名不需要host，DNS自动会解析到对应服务器上面

server {
listen 80;
server_name dev.pre.gotokeep.com;
root /Users/guoxin/Documents/study/local-pages;
location / {}
# dev.pre.gotokeep.com:90/html/
location /html/{
	root /Users/guoxin/Documents/study/local-pages/;
	autoindex on;
	}
}


# 工作进程数，和CPU核数相同
worker_processes 1;
# 每个进程允许的最大连接数
events {
    worker_connections 1024;
}
http {
# 负载均衡就靠它,法格式：upstream name {}
    upstream firstdemo {
# 第一次访问该服务器后就记录，之后再访问都是该服务器
        ip_hash;
        server 39.106.145.33;
        server 47.93.6.93;
    }
# 实现反向代理
    server {
        listen 8080;
        location / {
# 代理到firstdemo里两个服务器上
            proxy_pass http://firstdemo;
        }
    }
}