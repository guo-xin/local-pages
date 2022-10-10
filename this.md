# [this 用法](https://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

## 1. this 说明及 5 种不同使用场景

**this**是 JavaScript 语言的一个关键字。它是函数运行时，在函数体内部自动生成的一个对象。函数的不同使用场合，this 有不同的值

**总结**

1. 普通函数：this 指指向调用它的对象
2. 箭头函数：this 指向定义它的上下文的 this 指向
3. 构造函数：this 指向生成的新对象
4. window 触发：window.onload、标签上的事件触发 this 指向 window
5. 事件绑定：this 指向绑定的标签

### 1. 纯粹的函数调用

**这是函数的最通常用法，属于全局性调用，因此 this 就代表全局对象**

```
var x = 1
function test() {
   console.log(this) // window
}
test();

// onload事件，this指向window
window.onload = function (e) {
    // e是窗口事件对象，this是指向window
    console.log(e, 3333, this, 444)
}

// 标签中事件绑定，this指向window
<button type="button" style="height: 100px" onclick="getClick(event)">重置</button>
function getClick (e) {
    this.name = 'guoxin'
    // this相当于window，event是点击事件对象
    console.log(this, 555, e, 6666)
    // this.close()
}
```

### 2. 作为对象方法的调用

**函数还可以作为某个对象的方法调用，这时 this 就指这个上级对象**

```
function test() {
  console.log(this) // obj {x: 1, m: f()}
}

var obj = {}
obj.x = 1
obj.m = test

obj.m()

// 类似于
var x = 2
let obj = {
        x: this.x, // this指向window
        m() {
            console.log(this, this.x) // obj {x: 2, f} 2
        }
    }

obj.m() // obj的this指向window
```

### 3. 作为构造函数调用

**所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this 就指这个新对象**

**构造函数实例化过程**

1. 创建对象
2. 将该对象的 内置属性 指向 构造函数的 原型对象（person.**proto** = Person.prototype），构造函数的作用域赋给新对象-this 指向
3. 执行构造函数代码，添加新属性
4. 返回新对象

```
var x = 2
function test() {
　this.x = 1
  console.log(this) // test {x: 1}
}

var obj = new test()
obj.x // 1
```

### 4. apply、call、bind 调用

**apply()、call、bind 是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时 this 指的就是这第一个参数**

```
function test() {
　console.log(this)
}

var obj = {name: 'tt'}
obj.m = test
obj.m() // obj {name: 'tt'}
obj.m.apply({name: 'test'}) // {name: 'test'}
obj.m.apply() // window
```

**apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为 0，证明 this 指的是全局对象**

### 5. 事件绑定

**普通函数的 this 指向绑定的标签，箭头函数指向上下文 this 指向**

```
// js代码中事件绑定，属于匿名函数。this指向绑定的标签，e是触发事件的对象
document.querySelector('.test-event').onmouseover = function (e) {
    // 此时this指向div，e是触发事件的对象
    console.log(this, 7777, e, 8888, e.target);
}

// 如果使用箭头函数，事件绑定和事件兼容函数的this都指向当前函数的上下文this的指向
document.querySelector('.test-event').onmouseover = () => {
  // 此时this指向window，e是触发事件的对象
  console.log(this, 7777, e, 8888, e.target);
}
```

## 2. 综合应用
