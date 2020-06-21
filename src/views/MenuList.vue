<template>
  <div id="demo">
<!--    订单列表-->
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>


    <!--内容-->
    <div style="text-align: left">
      <!--Part1 搜索框-->
      <van-search style="margin:10px;" v-model="search" shape="round" background="white" placeholder="请输入搜索关键词"/>
<!--      part2-->
      <van-tabs v-model="active" style="text-align: left">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款">待付款</van-tab>
        <van-tab title="待发货">待发货</van-tab>
        <van-tab title="待收货">待收货</van-tab>
        <van-tab title="已成交">已成交</van-tab>
        <van-tab title="已取消">已取消</van-tab>
      </van-tabs>

      <!--有商品状态时-->
      <div v-show="IsShow">
        <div class="tianchong"></div>

        <div v-for="(orderlist,index) in orderlists">
          <div style="margin: 3%">
            <span >订单号：{{orderlist.orderNumber}}</span>
            <span style="margin-left: 6%;color: #f63333">{{orderlist.orderState}}</span>
          </div>

          <hr/>

          <div style="display: -webkit-box;-webkit-box-orient:horizontal">
            <span><img style="width: 100px;" src="https://img.yzcdn.cn/vant/ipad.jpeg" ></span>
            <span style="width:50%;display: -webkit-box;-webkit-box-orient: vertical;">
              <span>{{orderlist.goodsName}}</span><br/>
              <span >{{orderlist.describe}}</span>
              <span style="display: -webkit-box;-webkit-box-orient:horizontal;margin-top:17px;">
                <span>￥{{orderlist.price}}</span>
                <span style="margin-left: 60%;color: #afb2b4">×{{orderlist.number}}</span>
              </span>
            </span>
          </div>

          <hr/>

          <div style="font-size:18px;font-weight: bold;margin-left: 65%;">
            <span>实付款</span>
            <span style="color: #f63333">￥{{totalp}}</span>
          </div>

          <hr/>

          <div >
            <button type="button" class="btn btn-default" style="margin-left: 45%;border: solid #cbc6c6 1px;border-radius: 20px;width:25%;color: #cbc6c6">取消订单</button>
            <button type="button" class="btn btn-default" style="border: solid #f63333 1px;border-radius: 20px;color:#f63333;width:25%">去付款</button>
          </div>

          <div class="tianchong"></div>
        </div>
      </div>

      <!--无订单状态时-->
      <div v-show="!IsShow" >
        <van-empty description="暂无此类信息" />
      </div>
      <div class="tianchong" style="margin-top: 50%;"></div>


      <div class="blank">-----------我是有底线的-----------</div>

    </div>

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
          active:0,
          search:'',
          IsShow:false,
          //到时需要从后端获取数组数据
          orderlists:[
            {
              orderNumber:'wx2020043020002410039',
              orderState:'待付款',
              goodsName:'Apple/苹果 10.5 英寸iPad Air',
              describe:'银色；256G',
              number:2,
              price:6039.00,
              totalprice: '',
            },
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
      },
      computed:{
        totalp:function () {
          let totalpr = 0
          totalpr = this.orderlists[0].number * this.orderlists[0].price
          return totalpr
        }
      }
    }
</script>

<style>
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .tianchong{height: 20px;background: #efefef;margin-top:17px;}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
</style>
