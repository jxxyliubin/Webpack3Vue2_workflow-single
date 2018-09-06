
<!-- app这个实例的每个路由和组件的共用html、css、js都写在这个.vue里 -->
<template>
  <div id="app">
    <p>这里是App.vue <br>已挂载。如需手动挂载，可通过Vue.extend(jsonObj).$mount("#DOMid")来手动挂载</p>
    <h1>欢迎来到 {{appName}}!</h1>

    <p>router-link和a标签的区别：router-link可以避免不必要的渲染，视觉上不会闪烁。<br>
      <span>&lt;router-line to='/'&gt;<router-link to="/">跳转到首页</router-link>&lt;/router-line&gt;</span><br>
      <span>&lt;router-line to='/ajax'&gt;<router-link to="/ajax">跳转到ajax</router-link>&lt;/router-line&gt;</span><br>
      <span>&lt;router-line to="{path:'/ajax',query:{name:'jack'}}"&gt;<router-link :to="{path:'/ajax',query:{name:'jack'}}">带参数跳转到ajax页</router-link>
&lt;/router-line&gt;</span><br>
      prop除了to，常用的还有：<br>
      replace：不会留下History记录，不能使用后退键回到上一页。<br>
      当前页面与to匹配的话，会自动添加一个class: router-link-exact-active
    </p>

    <p>在JavaScript中实现跳转，可以绑定一个事件，事件函数里写上: this.$router.push("目标路径")或this.$router.place("目标路径")</p>
    <p>
      vue-router提供了导航钩子beforeEach和afterEach。它们会在路由即将改变前和改变后触发。<br>
      导航钩子有3个参数：<br>
      to：即将进入的目标的路由对象<br>
      from：当前导航即将要离开的路由对象<br>
      next：调用该方法后，才能进入下一个钩子。next()的参数设置为false时，可以取消导航，设置为具体的路径，可以导航到指定的页面。
    </p>

    <p><span @click="changeChildTxt">通过this.$refs来访问子组件。点击这句，获取 ref="child_top"的page_top子组件的childMsg字段，log在控制台。</span></p>
    <p v-once>{{ONCE}}</p>

    <hr>
    <page_top ref="child_top" imgurl="./static/images/logo.png"></page_top>
    <hr>

    <router-view/>

    <hr>
    <page_bottom msg="jxxyliubin@163.com"></page_bottom>
  </div>
</template>

<script>
  import page_top from "./components/page_top.vue"
  import page_bottom from "./components/page_bottom.vue"

  export default {
    name: 'App',
    components: {
      page_top,
      page_bottom
    },
    data () {
      return {
        appName: "VUE DEMO",
        loaded: 1,
        ONCE: "这句话用了v-once，appName 不再随着数据的变化而变化。"
      }
    },
    methods: {
      changeChildTxt (){
        let childMsg = this.$refs.child_top.childMsg;
        console.log("page_top组件的childMsg字段值为："+childMsg)
      }
    }
  }
</script>

<style lang="scss">
@import "./assets/sass/_mixin.scss";
$back: #000;
$green: #42b983;
*{
    font-size: 14px;
}
body{
  padding-bottom: 50px;
}
h1{
  font-size: 16px;
  text-weight: bold;
}
pre{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  color: $back;
}
.vue_base,.page_top,.page_bottom, .hello{
  padding: 10px;
  margin: 10px;
  background: #eee
}
.a, a {
  color: $green;
  cursor: pointer;
  text-decoration: none;
}
.router-link-exact-active{
  color: #f00;
}
</style>
