<template>
  <div class="axios_ajax">
    <h1>这里是axios_ajax.vue</h1>
    <p></p>
    <p @click="sendAjax">点击这里发ajax请求</p>
    <h2></h2>
    <pre>
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})

//执行多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));

//创建实例
//可以使用自定义配置新建一个 axios 实例
axios.create([config])
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//实例方法
//以下是可用的实例方法。指定的配置将与实例的配置合并
axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])
    </pre>
  </div>
</template>

<script>
export default {
  name: 'axios_ajax',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    sendAjax: function(){
      this.$ajax({
        method: 'post',
        url: 'http://wechat.xiaomaoqiu.com/event/api/getWXToken.php',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      })
      .then(function (response) {
        console.log("response:");
        console.log(response);
      })
      .catch(function (error) {
        console.log("error:");
        console.log(error);
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$red: #f00;
h1 {
  color: $red;
}
</style>
