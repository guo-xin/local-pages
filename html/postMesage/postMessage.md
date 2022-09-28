# 前端跨域方案-postMessage
**api文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage**

### postMessage：类似于设计模式中的订阅模式，一个页面发送，经过浏览器媒介传递给接受页面

otherWindow.postMessage(message, targetOrigin, [transfer])
- otherWindow: 其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames。
- message: 将要发送到其他 window 的数据。
- targetOrigin: 通过窗口的 origin 属性来指定哪些窗口能接收到消息事件.
- transfer(可选) : 是一串和 message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权

```
window.addEventListener('message', (event) => {
    const { data, origin, source } = event
    console.log(data, 'B页面', origin, source)
}, false)
```

message事件的事件对象event，提供以下三个属性。
- event.source：发送消息的窗口
- event.origin: 消息发向的网址
- event.data: 消息内容

## 1. 内嵌iframe的父子页面通讯
- 父页面给子页面发送消息：

  父页面：
  ```
  // 触发机制需要在页面加载完成之后，要不然推送不过去
  window.onload = function () {
      const iframe = document.getElementById('iframe').contentWindow;
      iframe.postMessage('测试parent to children', '*')

      // window.frames[0].postMessage('测试parent to children', '*')
  }
  ```

  子页面： 
  ```
  // 监听父页面的postMessage
  function receiveMessage(event) {
      // event.data:测试parent to children
      console.log(event.data, 'children')
  }
  window.addEventListener('message', receiveMessage, false)
  ```

- 子页面给父页面发送消息：

  子页面：
  ```
  window.parent.postMessage(800, '*')
  ```

  父页面：
  ```
  // 监听需要早执行，要不然消息推送的时候接收不到
  window.addEventListener('message', receiveMessage, false);
  //监听子页面的postMessage
  function receiveMessage(event) {
      // event.source是消息发送的窗口的引用，可以用它往回定向推送消息
      console.log(event.data, 'parent');
  }
  ```

  ### A、B页面之间通讯
  - A页面：
  ```
  const popup = window.open('http://127.0.0.1:1024/#/postMessage', '_blank')

  // 这里需要延迟执行，要不然B页面的监听事件还没注入
  setTimeout(() => {
      // 定向推送
      // popup.postMessage('测试A to B', 'http://127.0.0.1:1024/#/postMessage')
      popup.postMessage('测试A to B', '*')
  }, 600);
  ```

  - B页面：
  ```
  // 监听A页面的postMessage
  const receiveMessage = (event) => {
  // event.data:测试A to B
  const { data, origin } = event;
  console.log(data, 'B页面', origin)
  // 接受定向消息推送
  // if (origin === 'http://local.dev.gotokeep.com:91') {
      // this.info = data
  // }
  this.info = data
  }
  window.addEventListener('message', receiveMessage, false)
  ```