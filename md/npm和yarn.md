## 包管理工具yarn和npm的使用

**给npm/yarn高级管理权限，避免每次都sudo**
```
sudo chown -R $(whoami) /usr/local/lib/node_modules
sudo chown -R $(whoami) /usr/local/bin
```
### dep，dev依赖包说明
- dependencies：浏览器执行时所需要的包，这些依赖是应用发布后正常执行时所需要的，但是不包含测试时或者本地打包时所使用的包。
- devDependencies：开发环境依赖，这些包通常是单元测试或者打包工具
- peerDependencies：同等依赖或者叫同伴依赖，用于指定当前包（也就是你写的包兼容的宿主版本），当别人使用我们的插件的时候，peerDependencies就会明确告诉使用方，你需要安装该插件的哪个宿主版本。
-O = --save-optional   安装到optionalDependencies：可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包，所以不要在两个地方都写
https://www.cnblogs.com/dfyg-xiaoxiao/p/10004392.html

### 1. yarn [参考链接](https://yarn.bootcss.com/docs/usage/) [详细教程](https://yarnpkg.com/zh-Hans/docs/cli/run)

#### 1. 安装
```
// 全局安装
npm i yarn -g
```

#### 2. 初始化项目，创建package.json文件
```
yarn init
```

#### 3. 添加依赖包
```
yarn = yarn install 安装全部依赖包
yarn install --force 重新拉取所有的包，即使之前已经安装的
yarn add pName 默认到dep下
yarn add pName@version -D  安装某个版本到devDependencies下
yarn add pName@tag -S  安装某个tag版本到dependencies下
yarn add git+http://git.guazi-corp.com/xinche/md-util.git#v1.4.8  安装git地址下的组件,tag
yarn add git+http://git.guazi-corp.com/md-fe/login.git#feature/login-sdk 分支
yarn -g add pName 全局安装
```

#### 4. 升级依赖包
该命令会根据在 package.json 文件中所指定的版本范围将依赖更新到其最新版本。也会重新生成yarn.lock 文件。可以选择指定一个或多个包名称。指定包名称时，将只升级这些包。未指定包名称时，将升级所有依赖项
```
yarn upgrade pName 升级指定包
yarn upgrade pName@version 升级到指定版本
yarn upgrade pName@tag 升级到指定tag
yarn upgrade --scope @name 指定作用域，只会升级以作用域开头的包，作用域必须以’@‘开头，--scope可以简写-S
```

#### 5. 删除依赖包
```
yarn remove pName
```

#### 6. 运行
```
yarn run 查看script命令
yarn run scriptArgs = yarn scriptArgs 运行指定script命令
yarn run dev = yarn dev
```

#### 7. 安装的依赖包列表
```
yarn list [—depth] [—pattern]
yarn list 依赖包列表
yarn list pName 查看某个包信息
```

#### 8. yarn版本
```
yarn -v 或者 yarn --version
```
#### 9. yarn配置信息
```
yarn config list   yarn配置列表
yarn config get registry 获取yarn配置地址
yarn config set registry https://registry.npm.taobao.org  设置yarn淘宝镜像地址
yarn config set registry https://registry.yarnpkg.com  官方地址
```


### 1. [npm](https://www.npmjs.cn/cli/init/)

#### 1. 安装或升级npm版本
```
sudo npm i npm -g
```
#### 2. 常见命令
```
npm init 创建package.json文件
npm -v  或则 npm --version   查看npm版本
npm list  查询安装组件的列表
npm list name 查看安装组件版本, npm ls name
npm search name 查找某个安装包
npm outdated //检测当前安装的pName是否有更新
npm outdated name 检测某个安装包是否有更新
npm install npm@lastest -g 更新npm到最新版本,install 简写i
npm install element-ui@latest 更新element-ui到最新版本
npm install pName  //安装包，简写i,默认是-S,安装在dependencies下
npm i pName1 pName2 安装多个包时，空格隔开
npm i pName -f //强制安装pName包
npm install pName —save  //安装到dependencies下，简写-S,程序运行所需要
npm install pName —save-dev  //安装到devDependencies下，简写-D,开发需要
npm install pName@1.0.1 —save-dev  //安装指定版本
npm install git+https://isaacs@github.com/npm/cli.git  安装git地址上面的包
npm install git://github.com/npm/cli.git#v1.0.27 安装git地址上指定版本的包
npm update pName  //更新包,package.json文件有修改时或者pName有更新
npm un pName //卸载pName包
npm star pName 标星某个包
npm unstar pName 取消标星某个包
npm run 查看当前项目的npm脚本列表
```

#### 3. lock文件
package.lock.json //npm从5.0开始加入组件版本控制机制,所以加入lock文件，锁定版本
- 从git拉取到lock文件，npm install，package.json组件会更新到lock文件中对应的版本
- npm install pName@1.0.1  会更改lock文件

#### 4. 设置镜像
```
// 使用淘宝镜像增加npm速度
sudo npm config set registry https://registry.npm.taobao.org
// 设置为正常地址
sudo npm config set registry http://registry.npmjs.org  
```

#### 5. 配置列表
```
npm config list  查看npm配置列表
npm config get registry  查看npm镜像地址 
npm info pName  返回某个包的信息
npm info express 返回express包的信息
```

### 3. npx
- npx是npm的一个包执行器，重执行，没有某个某块的时候 会先安装再执行，执行完 删除模块
- npm是重安装，并不具备执行某个模块的能力


### 4. 应用
```
使用npm安装node-sass失败的问题（registry镜像没有用）：
1，使用淘宝镜像  2，yarn安装   3，vpn翻墙
参考链接 https://segmentfault.com/a/1190000010984731?utm_source=tag-newest
https://github.com/PanJiaChen/vue-element-admin/issues/24
npm i --registry=https://registry.npm.taobao.org

单次使用淘宝镜像
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

全局设置镜像，以后涉及到node-sass的安装都会走淘宝镜像
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

### 5. [nrm](https://github.com/Pana/nrm)
#### 1. 安装
```
npm i -g nrm
```

#### 2. 使用
```
// 查看已有nrm
nrm ls

// 添加新nrm
nrm add name url
nrm add taobao1  ttps://registry.npm.taobao.org/

// 使用某个源---等同于修改npm的配置
nrm use taobao

// npm配置文件/Users/guoxin/.npmrc，可以手动修改
```