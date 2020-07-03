<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单详情</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>

<!--      part1-->
      <div style="display: flex">
        <div></div>
      </div>

    </div>




  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
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
    }
  }
</script>

<style>
  body{background: #f5f5f5;}
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
</style>
