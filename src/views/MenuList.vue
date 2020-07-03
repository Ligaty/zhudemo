<!--<template>-->
<!--  <div id="demo" class="MenuList">-->
<!--&lt;!&ndash;    订单列表&ndash;&gt;-->
<!--    &lt;!&ndash;头部导航栏&ndash;&gt;-->
<!--    <div class="head">-->
<!--      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>-->
<!--      <span class="headmiddle" >订单列表</span>-->
<!--      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>-->
<!--    </div>-->


<!--    &lt;!&ndash;内容&ndash;&gt;-->
<!--    <div style="text-align: left">-->
<!--      &lt;!&ndash;Part1 搜索框&ndash;&gt;-->
<!--      <van-search style="margin:10px;" v-model="search" shape="round" background="white" placeholder="请输入搜索关键词"/>-->
<!--&lt;!&ndash;      part2&ndash;&gt;-->
<!--      <van-tabs v-model="active" style="text-align: left">-->
<!--        <van-tab title="全部"></van-tab>-->

<!--        <van-tab title="待付款" :class="{on:type === 0}" @click="$router.replace({ path: '/order/list/0' })">待付款</van-tab>-->
<!--        <van-tab title="待发货" :class="{ on: type === 1 }" @click="$router.replace({ path: '/order/list/1' })">待发货</van-tab>-->
<!--        <van-tab title="待收货" :class="{ on: type === 2 }"-->
<!--                 @click="$router.replace({ path: '/order/list/2' })">待收货</van-tab>-->
<!--        <van-tab title="已成交" :class="{ on: type === 4 }"-->
<!--                 @click="$router.replace({ path: '/order/list/4' })">已成交</van-tab>-->
<!--        <van-tab title="已取消">已取消</van-tab>-->
<!--      </van-tabs>-->

<!--      &lt;!&ndash;有商品状态时&ndash;&gt;-->
<!--      <div v-show="IsShow">-->
<!--        <div class="tianchong"></div>-->

<!--        <div v-for="(order,index) in orderList" :key="order.id">-->
<!--          <div v-for="cart in order.cartInfo" :key="cart.id">-->
<!--          <div style="margin: 3%">-->
<!--            <span >订单号：{{orderlist.orderNumber}}</span>-->
<!--            <span style="margin-left: 6%;color: #f63333">{{ getStatus(order) }}</span>-->
<!--          </div>-->

<!--          <hr/>-->

<!--          <div class="M1">-->
<!--            <span><img style="width: 100px;" src="cart.productInfo.image" @click.stop="-->
<!--                  $router.push({ path: '/detail/' + cart.productInfo.id })-->
<!--                "></span>-->
<!--            <span class="Mstore_name">-->
<!--              <span>{{cart.productInfo.store_name}}</span><br/>-->
<!--              <span >{{orderlist.describe}}</span>-->
<!--              <span class="Mprice">-->
<!--                <span>￥{{cart.productInfo.price}}</span>-->
<!--                <span style="margin-left: 60%;color: #afb2b4">×{{cart.cart_num}}</span>-->
<!--              </span>-->
<!--            </span>-->
<!--          </div>-->

<!--          <hr/>-->

<!--          <div class="shifukuan">-->
<!--            <span>实付款</span>-->
<!--            <span style="color: #f63333">￥{{totalp}}</span>-->
<!--          </div>-->

<!--          <hr/>-->

<!--          <div >-->
<!--            <button type="button" class="btn btn-default quxiaodingdan"  @click="cancelOrder(order)">取消订单</button>-->
<!--            <button type="button" class="btn btn-default qufukuan"  @click="paymentTap(order)">去付款</button>-->
<!--          </div>-->

<!--          <div class="tianchong"></div>-->
<!--        </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash;无订单状态时&ndash;&gt;-->
<!--      <div v-show="!IsShow" >-->
<!--        <van-empty description="暂无此类信息" />-->
<!--      </div>-->
<!--      <div class="tianchong" style="margin-top: 50%;"></div>-->


<!--      <div class="blank">-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;我是有底线的-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</div>-->

<!--    </div>-->

<!--    &lt;!&ndash;底部导航栏&ndash;&gt;-->
<!--    <van-tabbar v-model="active">-->
<!--      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>-->
<!--      <van-tabbar-item name="apps-o" icon="apps-o">我参与的</van-tabbar-item>-->
<!--      <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o">购物车</van-tabbar-item>-->
<!--      <van-tabbar-item name="user-0" icon="user-o">我的</van-tabbar-item>-->
<!--    </van-tabbar>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import { getOrderData, getOrderList } from "../api/order";-->
<!--  import {-->
<!--    cancelOrderHandle,-->
<!--    payOrderHandle,-->
<!--    takeOrderHandle-->
<!--  } from "../libs/order";-->
<!--  import Loading from "../components/Loading";-->
<!--  import Payment from "../components/Payment";-->
<!--  import { mapGetters } from "vuex";-->
<!--  import { isWeixin } from "../utils";-->
<!--  import GeneralWindow from "../components/GeneralWindow";-->

<!--  const STATUS = [-->
<!--    "待付款",-->
<!--    "待发货",-->
<!--    "待收货",-->
<!--    "待评价",-->
<!--    "已完成",-->
<!--    "",-->
<!--    "",-->
<!--    "",-->
<!--    "",-->
<!--    "待付款"-->
<!--  ];-->
<!--  const NAME = "MyOrder";-->
<!--    export default {-->
<!--      name:'',-->
<!--      data(){-->
<!--        return{-->
<!--          active:0,-->
<!--          search:'',-->
<!--          IsShow:false,-->
<!--          //到时需要从后端获取数组数据-->
<!--          orderlists:[-->
<!--            {-->
<!--              orderNumber:'wx2020043020002410039',-->
<!--              orderState:'待付款',-->
<!--              goodsName:'Apple/苹果 10.5 英寸iPad Air',-->
<!--              describe:'银色；256G',-->
<!--              number:2,-->
<!--              price:6039.00,-->
<!--              totalprice: '',-->
<!--            },-->
<!--          ],-->
<!--          offlinePayStatus: 2,-->
<!--          orderData: {},-->
<!--          type: parseInt(this.$route.params.type) || 0,-->
<!--          page: 1,-->
<!--          limit: 20,-->
<!--          loaded: false,-->
<!--          loading: false,-->
<!--          orderList: [],-->
<!--          pay: false,-->
<!--          payType: ["yue", "weixin"],-->
<!--          from: isWeixin() ? "weixin" : "weixinh5",-->
<!--          generalActive: false,-->
<!--          generalContent: {-->
<!--            promoterNum: "",-->
<!--            title: ""-->
<!--          }-->
<!--        }-->
<!--      },-->
<!--      watch: {-->
<!--        $route(n) {-->
<!--          if (n.name === NAME) {-->
<!--            const type = parseInt(this.$route.params.type) || 0;-->
<!--            if (this.type !== type) {-->
<!--              this.changeType(type);-->
<!--            }-->
<!--            this.getOrderData();-->
<!--          }-->
<!--        }-->
<!--      },-->
<!--      methods:{-->
<!--        onClickLeft(){-->
<!--          window.history.back(-1);-->
<!--        },-->
<!--        onClickRight(){-->
<!--          alert("更多")-->
<!--        },-->
<!--        setOfflinePayStatus: function(status) {-->
<!--          var that = this;-->
<!--          that.offlinePayStatus = status;-->
<!--          if (status === 1) {-->
<!--            if (that.payType.indexOf("offline") < 0) {-->
<!--              that.payType.push("offline");-->
<!--            }-->
<!--          }-->
<!--        },-->
<!--        getOrderData() {-->
<!--          getOrderData().then(res => {-->
<!--            this.orderData = res.data;-->
<!--          });-->
<!--        },-->
<!--        takeOrder(order) {-->
<!--          this.$dialog.loading.open("正在加载中");-->
<!--          takeOrderHandle(order.order_id)-->
<!--            .then(res => {-->
<!--              if (-->
<!--                (res.data.gain_integral != "0.00" &&-->
<!--                  res.data.gain_coupon != "0.00") ||-->
<!--                (res.data.gain_integral > 0 && res.data.gain_coupon > 0)-->
<!--              ) {-->
<!--                this.$dialog.loading.close();-->
<!--                this.generalActive = true;-->
<!--                this.generalContent = {-->
<!--                  promoterNum: `恭喜您获得${res.data.gain_coupon}元优惠券以及${-->
<!--                    res.data.gain_integral-->
<!--                  }积分，购买商品时可抵现哦～`,-->
<!--                  title: "恭喜您获得优惠礼包"-->
<!--                };-->
<!--                return;-->
<!--              } else if (-->
<!--                res.data.gain_integral != "0.00" ||-->
<!--                res.data.gain_integral > 0-->
<!--              ) {-->
<!--                this.$dialog.loading.close();-->
<!--                this.generalActive = true;-->
<!--                this.generalContent = {-->
<!--                  promoterNum: `恭喜您获得${-->
<!--                    res.data.gain_integral-->
<!--                  }积分，购买商品时可抵现哦～`,-->
<!--                  title: "赠送积分"-->
<!--                };-->
<!--                return;-->
<!--              } else if (-->
<!--                res.data.gain_coupon != "0.00" ||-->
<!--                res.data.gain_coupon > 0-->
<!--              ) {-->
<!--                this.$dialog.loading.close();-->
<!--                this.generalActive = true;-->
<!--                this.generalContent = {-->
<!--                  promoterNum: `恭喜您获得${-->
<!--                    res.data.gain_coupon-->
<!--                  }元优惠券，购买商品时可抵现哦～`,-->
<!--                  title: "恭喜您获得优惠券"-->
<!--                };-->
<!--                return;-->
<!--              } else {-->
<!--                this.$dialog.loading.close();-->
<!--                this.$dialog.success("收货成功");-->
<!--              }-->
<!--              this.getOrderData();-->
<!--              this.orderList = [];-->
<!--              this.page = 1;-->
<!--              this.loaded = false;-->
<!--              this.loading = false;-->
<!--              this.getOrderList();-->
<!--            })-->
<!--            .catch(err => {-->
<!--              this.$dialog.loading.close();-->
<!--              this.$dialog.error(err.msg);-->
<!--            });-->
<!--        },-->
<!--        closeGeneralWindow(msg) {-->
<!--          this.generalActive = msg;-->
<!--          this.reload();-->
<!--          this.getOrderData();-->
<!--        },-->
<!--        reload() {-->
<!--          this.changeType(this.type);-->
<!--        },-->
<!--        changeType(type) {-->
<!--          this.type = type;-->
<!--          this.orderList = [];-->
<!--          this.page = 1;-->
<!--          this.loaded = false;-->
<!--          this.loading = false;-->
<!--          this.getOrderList();-->
<!--        },-->
<!--        getOrderList() {-->
<!--          if (this.loading || this.loaded) return;-->
<!--          this.loading = true;-->
<!--          const { page, limit, type } = this;-->
<!--          getOrderList({-->
<!--            page,-->
<!--            limit,-->
<!--            type-->
<!--          }).then(res => {-->
<!--            this.orderList = this.orderList.concat(res.data);-->
<!--            this.page++;-->
<!--            this.loaded = res.data.length < this.limit;-->
<!--            this.loading = false;-->
<!--          });-->
<!--        },-->
<!--        getStatus(order) {-->
<!--          return STATUS[order._status._type];-->
<!--        },-->
<!--        cancelOrder(order) {-->
<!--          cancelOrderHandle(order.order_id)-->
<!--            .then(() => {-->
<!--              this.getOrderData();-->
<!--              this.orderList.splice(this.orderList.indexOf(order), 1);-->
<!--            })-->
<!--            .catch(() => {-->
<!--              this.reload();-->
<!--            });-->
<!--        },-->
<!--        paymentTap: function(order) {-->
<!--          var that = this;-->
<!--          if (-->
<!--            !(-->
<!--              order.combination_id > 0 ||-->
<!--              order.bargain_id > 0 ||-->
<!--              order.seckill_id > 0-->
<!--            )-->
<!--          ) {-->
<!--            that.setOfflinePayStatus(order.offlinePayStatus);-->
<!--          }-->
<!--          this.pay = true;-->
<!--          this.toPay = type => {-->
<!--            payOrderHandle(order.order_id, type, that.from)-->
<!--              .then(() => {-->
<!--                const type = parseInt(this.$route.params.type) || 0;-->
<!--                that.changeType(type);-->
<!--                that.getOrderData();-->
<!--              })-->
<!--              .catch(res => {-->
<!--                if (res.status === "WECHAT_H5_PAY")-->
<!--                  return that.$router.push({-->
<!--                    path: "/order/status/" + order.order_id + "/5"-->
<!--                  });-->
<!--                const type = parseInt(that.$route.params.type) || 0;-->
<!--                that.changeType(type);-->
<!--                that.getOrderData();-->
<!--              });-->
<!--          };-->
<!--        },-->
<!--        toPay() {},-->
<!--      },-->
<!--      computed:{-->
<!--        totalp:function () {-->
<!--          let totalpr = 0-->
<!--          totalpr = this.orderlists[0].number * this.orderlists[0].price-->
<!--          return totalpr-->
<!--        }-->
<!--      },-->
<!--      mounted() {-->
<!--        this.getOrderData();-->
<!--        this.getOrderList();-->
<!--        this.$scroll(this.$refs.container, () => {-->
<!--          !this.loading && this.getOrderList();-->
<!--        });-->
<!--      }-->
<!--    }-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
