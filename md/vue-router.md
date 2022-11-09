## [vue router](https://router.vuejs.org/zh/)

**router 是相关跳转方法的集合，route 是相关路由参数属性的集合**

### 1. 路由定义

#### 1. 模式---hash 和 history

```
// hash
history: createWebHashHistory(),

// history
history: createWebHistory(),
```

#### 2. 写法

```
routes: [
  // 404页面
  {
    path: '*',
    name: 'nav',
    // component: resolve => require(['@/components/nav'], resolve)
    // component: () => import('@/components/nav'),
    // 推荐，可以自定义分片文件名称
    component: () =>
      import(/* webpackChunkName: "nav" */ '@/components/nav')
    // redirect: '/helloWorld'
  },
  // 动态路由参数配置，严格匹配
  {
    path: '/method/:id',
    name: 'method',
    component: resolve => require(['@/components/testMethod'], resolve)
  },
  // 动态路由参数配置，问号是可写可不写
  {
    path: '/route/:id?/:name',
    name: 'route',
    component: testRoute
  }
]
```

### 2. 路由跳转

#### 1. push、标签 router-link

#### 2. replace，替换-不会留下 history 记录

#### 3. back()、go(-1)，返回-页面会初始化

#### 4. 跳转 go(n)、前进 forward
**this.$router.go(0) 初始化当前页面**

```
// 声明式
<router-link :to="...">

// 编程式
router.push(...)

// 当前路径下加home路径
<router-link to="home">Home</router-link>
router.push('home')

// 根路径
<router-link to="/home">Home</router-link>
router.push('/home')

// 带参数
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
// push方式
router.push({
  name: 'user',
  params: { userId: 123 }
})

// replace，导航不会留下history记录
<router-link :to="{ path: '/abc'}" replace></router-link>
router.replace({
  path: '/abc'
})
```

### 3. 路由守卫
#### 1. beforeEach全局前置路由守卫
```
// 没有next时可用return
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '金穗联动';
  // next可以使用router对象
  // next({ name: 'Login' })
  // return { name: 'Login' }
  // return false 取消当前的导航
  next();
  // next 下面的内容也会被执行，不同于return
});
```

#### 2. beforeResolve全局解析守卫

```
// 没有next时可用return
router.beforeResolve((to, from. next) => {
  next()
  // return false 取消当前的导航
})
```

#### 3. afterEach全局后置钩子
**不接受 next 函数也不会改变导航本身**
```
router.afterEach((to, from) => {
  iView.LoadingBar.finish()
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
})
```

#### 4. beforeEnter路由独享的守卫
**beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发**
```
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

#### 5. 组件内的守卫
- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave
```
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被验证前调用
  // 不能获取组件实例 `this` ！
  // 因为当守卫执行时，组件实例还没被创建！
  next((vm) => {
    // 通过 `vm` 访问组件实例
  })
}

beforeRouteUpdate (to, from) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  // just use `this`
  this.name = to.params.name
}

// 这个 离开守卫 通常用来预防用户在还未保存修改前突然离开。该导航可以通过返回 false 来取消
beforeRouteLeave (to, from) {
  // 在导航离开渲染该组件的对应路由时调用
  // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) return false
}
```

#### 6. 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用离开守卫beforeRouteLeave。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 解析守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。


### 4. 总结说明
- 路由相同，参数发生变化时会触发 beforeRouteUpdate 钩子函数
- route 包含 param 路径参数，path、fullpath、component、name、query 参数、meta、macthed 数组、匹配的路径 等属性
- params 需要在路由器注册，否则 url 不展示，刷新会丢失
- path 与 params 不能同时使用，否则 params 不生效

### 5. 页面应用
```
// 拿到的属性都是string类型
const { shopCode, isEdit } = this.$route.query
const { shopCode, isEdit } = this.$route.params

this.$router.push({
  name: 'Login',
  query: {
    id: 1,
    name: 'guoxin'
  }
})

// dom内使用
<Button type="primary" @click="$router.push({ name: 'shareLinkManageProductList' })">共享商品管理</Button>
```