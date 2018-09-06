<template>
  <div class="vue_base">
    <p>这里是vue_base.vue</p>
    <p id="bg" :style="bgstyle">:style="bgstyle <br>这里用v-bind动态绑定了一个style属性。v-bind一般用于动态绑定id、class、style等</p>
    <p>用”v-pre"将能显示两个大括号不被当作插值，例如&lt;span v-pre&gt;<span v-pre>{{date}}</span>&lt;/span&gt;将显示：{{date}}。<br>使用过滤器提取年份，<span v-pre>{{ date?date:"错误" | formateDate }}</span>: {{ date?date:"错误" | formateDate }} </p>
    <p>&lt;span v-html="htmlcode"&gt;&lt;/span&gt;，这里用了v-html将输出一段html而不是字符： <span v-html="htmlcode">html code</span></p>
    <p><span @click="clicklog" class="a">@click="clicklog"： 这里用v-on绑定了一个不带参数的click事件, 并在clicklog里触发了bus事件 busVue.$emit("on-message", "触发busVue空实例的'on-message'监听事件")</span></p>
    <p>
      <a href="#" @click="clickEvent($event)">@click="clickEvent($event)"：这里用v-on绑定了一个带$event（原生事件对象）参数的click事件。 </a>
    </p>
    <p class="list">在v-bind绑定的事件后加小圆点“.”再跟一个后缀来使用修饰符。修饰符可以串连（例 @click.stop.prevent="clicklog"）：</p>
    <ul>
      <li>.stop 阻止事件冒泡</li>
      <li>.prevent @submit.prevent提交事件不再重载页面</li>
      <li>.capture 事件使用捕获模式</li>
      <li>.self 事件仅在该元素本身(而不是子元素)才触发</li>
      <li>.once 事件仅触发一次</li>
      <li>@keycode.enter 监听指定按键。本例是监听回车键 </li>
    </ul>
    <p class="list">
      v-for一个数组或对象（例 &lt;li v-for="(book, index) in books"&gt;<span v-pre>{{index+1}}-{{book.name}}</span>&lt;/li&gt;）:
      <ul>
        <li v-for="(book, index) in books">{{index+1}}-{{book.name}}</li>
      </ul>
    </p>
    <hr>
    <p>v-model:双向绑定</p>
    <p>
      &lt;input type="text" placeholder="请输入" v-model.number.trim="inputVale" key="inputval"&gt;，input使用了修饰符v-model.number.trim。<br>
      <input type="text" placeholder="请输入" v-model.number.trim="inputVale" key="inputval">
      <span>它的值是: <span v-if="inputVale">{{inputVale}}</span><span v-else>空白</span></span><br>
      如果想监听汉字未选词前的输入，可用@input来代替v-model。
    </p>
    <p>
      <input type="radio" :checked="singleRadio" id="single_radio"><label for="single_radio">单个单选不需要v-model</label>
    </p>
    <p>
      <input type="radio" v-model="multipleRadio" id="multipleRadio1" value="multipleRadio1"><label for="multipleRadio1">multipleRadio1</label>
      <input type="radio" v-model="multipleRadio" id="multipleRadio2" value="multipleRadio2"><label for="multipleRadio2">multipleRadio2</label>
      <br>
      <span>你选择的是：{{multipleRadio}}</span>
    </p>
    <p>
      <input type="checkbox" id="checkbox1" v-model="singelCheckbox" value="checkbox01"><label for="checkbox01">checkbox01是否选中：{{singelCheckbox}}</label>
    </p>
    <p>
      <input type="checkbox" id="checkbox1" v-model="singelCheckboxGroup" value="vue"><label for="checkbox1">vue</label><br>
      <input type="checkbox" id="checkbox2" v-model="singelCheckboxGroup" value="webpack"><label for="checkbox2">webpack</label><br>
      <input type="checkbox" id="checkbox3" v-model="singelCheckboxGroup" value="ES6"><label for="checkbox3">ES6</label><br>
      <span>这组多选，选中的是：{{singelCheckboxGroup}}</span>
    </p>
    <p>
      <select v-model="selectVal" name="" id="">
        <option value="js">js</option>
        <option value="css">css</option>
        <option value="html">html</option>
      </select>
      <br>
      <span>选择结果：{{selectVal}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'vue_base',
  data () {
    return {
      date: new Date(),
      bgstyle: "background: #333;padding: 10px",
      htmlcode: "<i>这几个字包含在一对i标签里，span标签被取代</i>",
      clickCount: 0,
      inputVale: "",
      inputVale: "",
      books: [{name: "vue"},{name: "es6"},{name: "webpack"},{name: "node.js"},{name: "canvas"}],
      singleRadio: false,
      multipleRadio: "multipleRadio1",
      singelCheckbox: false,
      singelCheckboxGroup: ["vue"],
      selectVal: "js"
    }
  },
  components: {
  },
  methods: {
    clicklog () {
      this.clickCount++;
      console.log("被点击了"+this.clickCount+"次");
      console.log("@click调用的方法如没有带参数，默认会将原生事件event传入：");
      console.log(event);
      busVue.$emit("on-message", "触发busVue空实例的'on-message'监听事件");
    },
    clickEvent (event) {
        console.log(event);
        event.preventDefault();
    },
  },
  computed: {
    //这里是计算属性。因为计算属性会被缓存，所以当遍历大数组和做大量计算时，应该使用计算属性
  },
  filters: {
    formateDate: function (value) {
      var date = new Date(value)
      var year = date.getFullYear()
      return year
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/sass/_mixin.scss";
$white: #fff;
p {
  font-weight: normal;
}
#bg{
  color: $white;
  @include displayFlex;
}
</style>
