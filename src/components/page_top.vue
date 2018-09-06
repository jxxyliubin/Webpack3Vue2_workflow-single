<template>
  <div class="page_top">
  	<div>这里是page_top.vue</div>
    <p>
    	<img :src="imgurl"><br>
    	图片路径通过父组件的标签属性传递:<br>
      &lt;page_top ref="child_top" imgurl="./static/images/logo.png"&gt;&lt;/page_top&gt;<br>
      子组件通过props接收:<br>
      js:<br>
      <pre>
        export default {
          props: ["imgurl"]
        }
      </pre>
      html:
      &lt;img :src="imgurl"&gt;
    </p>
    <p>
      this.$parent.appName = 面朝大海，春暖花开: <br>
      <span @click="changeParentTxt">通过this.$parent来访问父链。点击这句话，将父组件的"欢迎来到VUE DEMO"，改成：面朝大海，春暖花开</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'page_top',
  props: ["imgurl"],
  data () {
    return {
    	childMsg: '面朝大海，春暖花开'
    }
  },
  components: {
  },
  methods: {
  	changeParentTxt (){
  		this.$parent.appName = this.childMsg;
  	}
  },
  computed: {
    //这里是计算属性。因为计算属性会被缓存，所以当遍历大数组和做大量计算时，应该使用计算属性
  },
  filters: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
