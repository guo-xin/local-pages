**node自带npm，不同的node版本对应的npm版本也不一样**

#### 1.安装n
```
<!-- 安装 -->
sudo npm i n -g

<!-- 查看版本 -->
n --version

<!-- 清除node缓存 -->
sudo npm cache clean -f
```

#### 2.使用n
```
<!-- 查看可用node版本 -->
npm view node versions

<!-- 或 -->
n ls

<!-- 查看已安装node版本并切换 -->
sudo n

<!-- 安装指定版本node -->
sudo n 10.16.1

<!-- 安装最新可用node版本 -->
sudo n stable

<!-- 删除某个版本 -->
sudo n rm 10.16.1

<!-- 卸载n -->
sudo npm un n -g

<!-- 查看node安装目录 -->
which node
```