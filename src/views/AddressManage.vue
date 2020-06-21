<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >地址管理</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div v-for="(item,index) in addresscard">
      <div  class="addresscard">
        <div class="addresscardleft">
          <div >
            <span >{{item.addressName}}</span>
            <span class="phoneNum">{{item.phoneNum}}</span>
          </div>
          <div class="address">{{item.address}}</div>
        </div>
        <div class="arrow"><van-icon name="arrow" /></div>
      </div>
      <div class="tianchong"></div>
    </div>


    <div class="blank">-----------我是有底线的-----------</div>


    <div class="addinfo" @click="toAddinfo">新增地址信息</div>

    <!--底部导航栏-->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="apps-o" icon="apps-o">我参与的</van-tabbar-item>
      <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="user-0" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
        addresscard:[
          {
          addressName:'饱饱',
          phoneNum:'18612345678',
          address:'广东省中山市是啊啊啊啊啊啊啊啊**',
          },
          {
            addressName:'饱饱',
            phoneNum:'18612345678',
            address:'广东省中山市是啊啊啊啊啊啊啊啊**',
          }
        ],

      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      toAddinfo(){
        alert("增加地址信息")
      }
    }
  }
</script>

<style>
  .addresscard{text-align: left;padding:30px;font-size:20px;display:flex;background: white}
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  body{background: #f5f5f5;}
  .addresscard .phoneNum{margin-letf:20px;}
  .addresscard .arrow{line-height: 60px;margin-left: 13%;width:10%;}
  .addresscard .addresscardleft{width:80%}
  .addresscard .address{color: #c1bfbf;font-size:18px;margin-top:10px;}
  .tianchong{height: 15px;background: #f5f5f5;z-index:997;width: 100%}
  .addinfo{background: orangered;color: white;height: 70px;line-height: 70px;font-size:20px;position: fixed;bottom:50px;width: 100%}
</style>
