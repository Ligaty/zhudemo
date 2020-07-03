<template>
  <div id="demo" class="RegisterVIP">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >申请VIP</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div style="background: white;padding-bottom: 10px;">

      <div>
        <div style="padding:5%;border-radius: 25px;"><img :src="VIPimg" style="width:100%;height: 120px;"> </div>
        <div class="textkuang">
          <input type="text" placeholder="请输入姓名" v-model="VIPname">
        </div>
        <div class="textkuang">
          <input type="text" placeholder="请输入手机号码" v-model="VIPphone">
        </div>
        <div class="textkuang">
          <input type="text" placeholder="VIP号" v-model="VIPnum">
        </div>

        <van-checkbox v-model="checked" style="padding-left:5%;" checked-color="#07c160">
          已阅读并同意<a :href="'#'+'.html'" style="color:#1e90ff">《法律声明》</a>及<a :href="'#'+'.html'" style="color:#1e90ff">《隐私协议》</a>
        </van-checkbox>


      </div>

    </div>

    <div class="Vregister" @click="register">立即申请</div>

    <!--底部导航栏-->
    <div id="footer" class="acea-row row-middle" >
      <router-link
        :to="item.url"
        class="item"
        :class="{ on: item.url === $route.path }"
        v-for="(item, index) in footerList"
        :key="index"
      >
        <div
          class="iconfont"
          :class="item.icon1 + ' ' + (item.url === $route.path ? item.icon2 : '')"
        ></div>
        <div>{{ item.name }}</div>
      </router-link>
    </div>


  </div>
</template>

<script>
  export default {
    name:'',

    data(){
      return{
        active:'0',
        VIPimg:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
        VIPname:'',
        VIPphone:'',
        VIPnum:'16279964518785623434',
        checked:'false',
        footerList: [
          {
            name: "首页",
            icon1: "icon-shouye-xianxing",
            icon2: "icon-shouye",
            url: "/"
          },
          {
            name: "我参与的",
            icon1: "icon-yingyongchengxu-xianxing",
            icon2: "icon-yingyongchengxu",
            url: "/category"
          },
          {
            name: "购物车",
            icon1: "icon-caigou-xianxing",
            icon2: "icon-caigou",
            url: "/cart"
          },
          {
            name: "我的",
            icon1: "icon-yonghu-xianxing",
            icon2: "icon-yonghu",
            url: "/PersonalCenter"
          }
        ]
      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      register(){
        alert("立即申请")
      }
    }
  }
</script>

<style>

</style>
