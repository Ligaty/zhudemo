<template>
  <div id="demo" class="Involved">
<!--    我参与的-->
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>


    <!--内容-->
    <div style="text-align: left">
      <!--Part1 搜索框-->
      <van-search class="part1" v-model="search" shape="round" background="white" placeholder="请输入搜索关键词"/>
      <!--      part2-->
      <van-tabs v-model="active" class="">
        <van-tab title="全部" >
          <!--有商品状态时-->
          <div v-for="(orderlist,index) in orderlists"  >

            <div v-if="orderlists.length>0" class="quanbu1">
              <div class="tianchong"></div>
              <div class="quanbu1_1">
                <span class="quanbuNum">订单号：{{orderlist.orderNumber}}</span>
                <span class="quanbuState">{{orderlist.orderState}}</span>
              </div>

              <hr/>

              <div class="quanbu2">
                <span><img class="orderlistgoodImg" :src="orderlist.goodImg" ></span>
                <span class="quanbu2_2">
                  <span class="orderlistgoodsName">{{orderlist.goodsName}}</span><br/>
                  <span class="orderlistprice">
                    <span>￥{{orderlist.price}}</span>
                    <span class="orderlistnumber">×{{orderlist.number}}</span>
                  </span>
                </span>
              </div>

              <hr/>

              <div class="pay">
                <span>实付款</span>
                <span style="color: #f63333">￥{{totalp}}</span>
              </div>
            </div>
            <!--无订单状态时-->
            <div v-else >
              <van-empty description="您还没有宝贝哦" />
            </div>

          </div>
        </van-tab>
        <van-tab title="待开奖">待开奖</van-tab>
        <van-tab title="拼宝成功">拼宝成功</van-tab>
        <van-tab title="待收货">待收货</van-tab>
        <van-tab title="已收货">已收货</van-tab>

      </van-tabs>




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
            orderState:'待开奖',
            goodsName:'9.9拼宝马，不中返10元消费券+1000元现金购车抵扣券',
            describe:'银色；256G',
            goodImg:'https://img.yzcdn.cn/vant/ipad.jpeg',
            number:2,
            price:9.90,
            totalprice: '',
          },
          {
            orderNumber:'wx2020043020002410039',
            orderState:'待开奖',
            goodsName:'9.9拼宝马，不中返10元消费券+1000元现金购车抵扣券',
            describe:'银色；256G',
            goodImg:'https://img.yzcdn.cn/vant/ipad.jpeg',
            number:2,
            price:9.90,
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

</style>
