## [vuex 使用](https://vuex.vuejs.org/)

### [vuex 与 pinia](https://mp.weixin.qq.com/s/3k3jQs0cTcDwVrbW20N5lQ)

### 1. app.js

```
// 注入vuex
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

### 2. src/store 下

#### 1. 标准目录结构

- ├── index.html
- ├── main.js
- ├── api
- │ └── ... # 抽取出 API 请求
- ├── components
- │ ├── App.vue
- │ └── ...
- └── store
-     ├── index.js          # 我们组装模块并导出 store 的地方
-     ├── actions.js        # 根级别的 action
-     ├── getters.js        # 根级别的 getter
-     ├── mutations.js      # 根级别的 mutation
-     └── modules
-         ├── cart.js       # 购物车模块
-         └── products.js   # 产品模块

#### 2. store/index.js

```
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

// 动态引入modules目录下的store
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,

  // 全局state
  state: {
      userInfo: {}
  },

  getters,
  mutations,
  actions
})

export default store
```

#### 3. modules/user

```
// 定义
import axios from 'axios'
import config from '../../config'
import { Message } from 'element-ui'

const state = {
   name: '',
   phone: null
}

// 计算属性
const getters = {
    nameNumber(state, getters, rootState) {
      return `${state.name}666`
    }
}

const mutations = {
    getUserInfo(state, payload) {
        const { name, phone } = payload.data
        state.name = name
        state.phone = phone
    }
}

const actions = {
    // payload参数
    getUserInfo({ state, commit, rootState }, payload) {
        // 访问不到vue的实例this
        commit({
            // 对应mutation
            type: 'getUserInfo',
            data: { name: 1, phone: 11222 }
        })
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

### 3. 页面中使用

1. 获取 state，this.$store.state.userInfo
2. 修改 state，this.$store.dispatch(actionType, payload)
3. 修改 state，this.$store.commit(mutationType, payload)
4. 触发 getters，this.$store.getters['user/nameNumber']

```
// 获取state，放在computed
computed: {
    name() {
        return this.$store.state.user.name
    },
    userInfo() {
        return this.$store.state.userInfo
    }
}


// 改变state
// 触发action
this.$store.commit({
    type: 'user/getUserInfo',
    data: {
        name: 'testCommit', phone: 17888842074
    }
})

// 触发mutation
this.$store.dispatch('user/getUserInfo', { value: 1 })

// 不推荐，严格模式下会报错
this.$store.state.user.name = 'xxx'


// 触发getters
this.$store.getters['user/nameNumber']
this.$store.getters.userInfoNumber
```
