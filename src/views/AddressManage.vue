<template>
  <div id="demo" class="AddressManage">
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
</style>
