<template>
  <div class="page_bottom">
    <p>这里是page_bottom.vue</p>
    <p>作者信息通过父组件的标签属性传递，子组件用props接收：{{msg}}</p>
    <p v-if="$route.query.name">用$route.query.name获取query参数 name:{{$route.query.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'page_bottom',
  props: ["msg"],
  data () {
    return {
      showTopBottom: false
    }
  },
  methods: {
  }
}
// this.$parent.showTopBottom = false;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
