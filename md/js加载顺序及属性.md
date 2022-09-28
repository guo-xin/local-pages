#### 1. 默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到script标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。
如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法，async,defer

**需要提前加载的文件，需要放在head中**
**不重要的文件可以放在body下面加载，对dom操作的也需要放在body下面**
```
<!-- DOM加载完成执行-有序 -->
<script src="path/to/myModule.js" defer></script>

<!-- 下载完成就执行-无序 -->
<script src="path/to/myModule.js" async></script>
```
**标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。
defer:要等到整个页面在内存中正常渲染结束（DOM加载完成，以及其他脚本执行完成），才会执行
async：一旦下载完成，渲染引擎就会终止渲染，执行完这个脚本之后，再继续渲染。
总结：defer是渲染完再执行，async是下载完就执行.另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的**

#### 2.es6模式，type=“module"属性，异步执行
```
<script type="module" src="./foo.js"></script>
<!-- 等同于 —>有序
<script type="module" src="./foo.js" defer></script>

<!-- 无序，下载完就执行 -->
<script type="module" src="./foo.js" async></script>
```