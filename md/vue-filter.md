## vue filter

### 1. 定义




<!-- 在双花括号中 -->
<p>{{ infoForm.email | formatNumber }}</p>
<el-button type="primary" @click="changeEmail">改变邮箱</el-button>
<!-- 在 `v-bind` 中 -->
<el-input :value="infoForm.email | formatNumber"></el-input>

<!-- 可以多次使用filter，前一个的输出是后一个输入 -->
<el-tag>{{ infoForm.email | upper | addNumber }}</el-tag>

<!-- 可以传入多个参数，第一个默认是当前的值，类似于bind -->
<el-tag>{{ infoForm.email | addNumber('email') }}</el-tag>
</div>

/**
* @desc: main页面写，vue实例化之前
* 属于全局filter
*/
Vue.filter("size", function(value) {
if (!value) return "";
value = value.toString();
return value.toUpperCase();
});

/* eslint-disable no-new */
new Vue({
el: '#app',
router,
store,
components: { App },
template: '<App/>'
})

/**
* @desc: 全局filter
* @author guoxin
* @date 2020/06/10
*/
// main.js页面引入
import './filter';

Vue.filter("upper", function(value) {
if (!value) return "";
value = value.toString();
return value.toUpperCase();
});

Vue.filter("addNumber", function(value, extra) {
if (!value) return "";
value = value.toString();
return extra + value;
});

/**
* @desc: 页面级别的过滤器
*/
filters: {
formatNumber: (val) => {
return val + '格式化'
},
capitalize: function (value) {
if (!value) return ''
value = value.toString()
return value.charAt(0).toUpperCase() + value.slice(1)
}
},