// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios


/* eslint-disable no-new */
/*可以有数个Vue实例，多个实例的共用代码可写在这个文件*/
window.busVue = new Vue(); //一个空白实例，用作组件间及其它实例间的事件总线
window.mainVue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
  // 实例创建完成，但尚未挂载，$el还不可用，可以初始化一些数据
  },
  mounted: function () {
	  /*实例已挂载，一般第一个业务逻辑放在这里*/
	  //注册事件总线的各种监听事件
	  busVue.$on("on-message", function(msg){
	  	console.log(msg);
	  });
  },
  beforeDestroy () {
  // 实例销毁之前调用，主要解绑一些使用addEventListener监听的事件等
  }
})
