<template>


  <div class="my-order" ref="container">
    <!--头部导航栏-->
    <div class="head" >
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>


    <!--Part1 搜索框-->
    <van-search style="padding:0 15px;height: 70px;" v-model="search" shape="round" background="white" placeholder="请输入搜索关键词"/>
    <hr/>
    <div class=" acea-row row-around" style="background: white;padding:15px 0;font-size: 17px;color:#b3b1b1">
      <hr/>
      <div
        class="item"
        :class="{ on: type === 5 }"
        @click="$router.replace({ path: '/order/list/5' })"
        style="margin-left:5px;"
      >
        <div>全部</div>

      </div>
      <div
        class="item"
        :class="{ on: type === 0 }"
        @click="$router.replace({ path: '/order/list/0' })"
      >
        <div>待付款</div>

      </div>
      <div
        class="item"
        :class="{ on: type === 1 }"
        @click="$router.replace({ path: '/order/list/1' })"
      >
        <div>待发货</div>

      </div>
      <div
        class="item"
        :class="{ on: type === 2 }"
        @click="$router.replace({ path: '/order/list/2' })"
      >
        <div>待收货</div>

      </div>
      <div
        class="item"
        :class="{ on: type === 3 }"
        @click="$router.replace({ path: '/order/list/3' })"
      >
        <div>已成交</div>

      </div>
      <div
        class="item"
        :class="{ on: type === 4 }"
        @click="$router.replace({ path: '/order/list/4' })"
      >
        <div>已取消</div>

      </div>

    </div>
    <hr/>
    <div class="list" style="width:100%;">
      <div class="item" v-for="order in orderList" :key="order.id">
        <div class="title acea-row row-between-wrapper" style="font-size:18px;">
          <div class="acea-row row-middle">

            订单号：{{ order.order_id }}
          </div>
          <div class="font-color-red">{{ getStatus(order) }}</div>
        </div>
        <div @click="$router.push({ path: '/order/detail/' + order.order_id })">
          <div
            class="item-info acea-row row-between row-top"
            v-for="cart in order.cartInfo"
            :key="cart.id"
          >
            <div class="pictrue">
              <img
                v-lazy="cart.productInfo.image"
                @click.stop="
                  $router.push({ path: '/detail/' + cart.productInfo.id })
                "
                v-if="
                  cart.combination_id === 0 &&
                    cart.bargain_id === 0 &&
                    cart.seckill_id === 0
                "
              />
              <img
                v-lazy="cart.productInfo.image"
                @click.stop="
                  $router.push({
                    path: '/activity/group_detail/' + cart.combination_id
                  })
                "
                v-else-if="cart.combination_id > 0"
              />
              <img
                v-lazy="cart.productInfo.image"
                @click.stop="
                  $router.push({
                    path: '/activity/dargain_detail/' + cart.bargain_id
                  })
                "
                v-else-if="cart.bargain_id > 0"
              />
              <img
                v-lazy="cart.productInfo.image"
                @click.stop="
                  $router.push({
                    path: '/activity/seckill_detail/' + cart.seckill_id
                  })
                "
                v-else-if="cart.seckill_id > 0"
              />
            </div>
            <div class="text acea-row row-between">
              <div style="display: flex;flex-direction:column;text-align: left">
                <div class="name line2">
                  {{ cart.productInfo.store_name }}
                </div>
                <div class="money">
                  <div>
                    <span>
                    ￥{{
                      cart.productInfo.attrInfo
                        ? cart.productInfo.attrInfo.price
                        : cart.productInfo.price
                    }}</span><span style="margin-left: 40%;">x{{ cart.cart_num }}</span>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="totalPrice">
          实付款
          <span class="money font-color-red">￥{{totalprice}}</span>
        </div>
        <div class="bottom acea-row row-right row-middle">
          <template
            v-if="order._status._type === 0 || order._status._type == 9"
          >
            <div class="bnt cancelBnt" @click="cancelOrder(order)">
              取消订单
            </div>
          </template>
          <template v-if="order._status._type === 0">
            <div style="margin-bottom: 10px;">
              <button type="button" class="btn btn-default" style="border:2px solid #f5f5f5;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #787575;" @click="
                $router.push({ path: '/order/detail/' + order.order_id })" >取消订单</button>
              <button type="button" class="btn btn-default" style="border:2px solid #f84a4a;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #f84a4a;" @click="takeOrder(order)">去付款</button>
            </div>
          </template>
          <template
            v-if="order._status._type === 1 || order._status._type === 9"
          >
            <div style="margin-bottom: 10px;">
              <button type="button" class="btn btn-default" style="border:2px solid #f5f5f5;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #787575;" @click="
                $router.push({ path: '/order/detail/' + order.order_id })" >我要催单</button>
              <button type="button" class="btn btn-default" style="border:2px solid #f84a4a;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #f84a4a;" @click="takeOrder(order)">再次购买</button>
            </div>

          </template>
          <template v-if="order._status._type === 2">
            <div style="margin-bottom: 10px;">
              <button type="button" class="btn btn-default" style="border:2px solid #f5f5f5;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #787575;" @click="
                $router.push({ path: '/order/detail/' + order.order_id })" >查看物流</button>
              <button type="button" class="btn btn-default" style="border:2px solid #f84a4a;border-radius: 20px;font-size:17px;line-height: 0;margin-top:8px;color: #f84a4a;" @click="takeOrder(order)">确认收货</button>
            </div>
          </template>
          <template v-if="order._status._type === 3">
            <div
              class="bnt default"
              @click="
                $router.push({ path: '/order/logistics/' + order.order_id })
              "
              v-if="order.delivery_type === 'express'"
            >
              查看物流
            </div>
            <div
              class="bnt bg-color-red"
              @click="$router.push({ path: '/order/detail/' + order.order_id })"
            >
              去评价
            </div>
          </template>
          <template v-if="order._status._type === 4">
            <div
              class="bnt bg-color-red"
              @click="$router.push({ path: '/order/detail/' + order.order_id })"
            >
              查看订单
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="noCart" v-if="orderList.length === 0 && page > 1">
      <div class="pictrue"><img src="../assets/images/noOrder.png" /></div>
    </div>
    <Loading :loaded="loaded" :loading="loading"></Loading>
    <Payment
      v-model="pay"
      :types="payType"
      @checked="toPay"
      :balance="userInfo.now_money"
    ></Payment>
    <GeneralWindow
      :generalActive="generalActive"
      @closeGeneralWindow="closeGeneralWindow"
      :generalContent="generalContent"
    ></GeneralWindow>
  </div>
</template>
<script>
import { getOrderData, getOrderList } from "../api/order";
import {
  cancelOrderHandle,
  payOrderHandle,
  takeOrderHandle
} from "../libs/order";
import Loading from "../components/Loading";
import Payment from "../components/Payment";
import { mapGetters } from "vuex";
import { isWeixin } from "../utils";
import GeneralWindow from "../components/GeneralWindow";

const STATUS = [
  "待付款",
  "待发货",
  "待收货",
  "待评价",
  "已完成",
  "",
  "",
  "",
  "",
  "待付款"
];

const NAME = "MyOrder";

export default {
  name: NAME,
  data() {
    return {
      offlinePayStatus: 2,
      orderData: {},
      totalprice:'',
      type: parseInt(this.$route.params.type) || 0,
      page: 1,
      limit: 20,
      loaded: false,
      loading: false,
      orderList: [],
      pay: false,
      payType: ["yue", "weixin"],
      from: isWeixin() ? "weixin" : "weixinh5",
      generalActive: false,
      generalContent: {
        promoterNum: "",
        title: ""
      }
    };
  },
  components: {
    Loading,
    Payment,
    GeneralWindow
  },
  computed: mapGetters(["userInfo"]),
  watch: {
    $route(n) {
      if (n.name === NAME) {
        const type = parseInt(this.$route.params.type) || 0;
        if (this.type !== type) {
          this.changeType(type);
        }
        this.getOrderData();
      }
    }
  },
  methods: {
    setOfflinePayStatus: function(status) {
      var that = this;
      that.offlinePayStatus = status;
      if (status === 1) {
        if (that.payType.indexOf("offline") < 0) {
          that.payType.push("offline");
        }
      }
    },
    getOrderData() {
      getOrderData().then(res => {
        this.orderData = res.data;
      });
    },
    takeOrder(order) {
      this.$dialog.loading.open("正在加载中");
      takeOrderHandle(order.order_id)
        .then(res => {
          if (
            (res.data.gain_integral != "0.00" &&
              res.data.gain_coupon != "0.00") ||
            (res.data.gain_integral > 0 && res.data.gain_coupon > 0)
          ) {
            this.$dialog.loading.close();
            this.generalActive = true;
            this.generalContent = {
              promoterNum: `恭喜您获得${res.data.gain_coupon}元优惠券以及${
                res.data.gain_integral
              }积分，购买商品时可抵现哦～`,
              title: "恭喜您获得优惠礼包"
            };
            return;
          } else if (
            res.data.gain_integral != "0.00" ||
            res.data.gain_integral > 0
          ) {
            this.$dialog.loading.close();
            this.generalActive = true;
            this.generalContent = {
              promoterNum: `恭喜您获得${
                res.data.gain_integral
              }积分，购买商品时可抵现哦～`,
              title: "赠送积分"
            };
            return;
          } else if (
            res.data.gain_coupon != "0.00" ||
            res.data.gain_coupon > 0
          ) {
            this.$dialog.loading.close();
            this.generalActive = true;
            this.generalContent = {
              promoterNum: `恭喜您获得${
                res.data.gain_coupon
              }元优惠券，购买商品时可抵现哦～`,
              title: "恭喜您获得优惠券"
            };
            return;
          } else {
            this.$dialog.loading.close();
            this.$dialog.success("收货成功");
          }
          this.getOrderData();
          this.orderList = [];
          this.page = 1;
          this.loaded = false;
          this.loading = false;
          this.getOrderList();
        })
        .catch(err => {
          this.$dialog.loading.close();
          this.$dialog.error(err.msg);
        });
    },
    closeGeneralWindow(msg) {
      this.generalActive = msg;
      this.reload();
      this.getOrderData();
    },
    reload() {
      this.changeType(this.type);
    },
    changeType(type) {
      this.type = type;
      this.orderList = [];
      this.page = 1;
      this.loaded = false;
      this.loading = false;
      this.getOrderList();
    },
    getOrderList() {
      if (this.loading || this.loaded) return;
      this.loading = true;
      const { page, limit, type } = this;
      getOrderList({
        page,
        limit,
        type
      }).then(res => {
        this.orderList = this.orderList.concat(res.data);
        this.page++;
        this.loaded = res.data.length < this.limit;
        this.loading = false;
      });
    },
    getStatus(order) {
      return STATUS[order._status._type];
    },
    cancelOrder(order) {
      cancelOrderHandle(order.order_id)
        .then(() => {
          this.getOrderData();
          this.orderList.splice(this.orderList.indexOf(order), 1);
        })
        .catch(() => {
          this.reload();
        });
    },
    onClickLeft(){
      window.history.back(-1);
    },
    onClickRight(){
      alert("更多")
    },
    paymentTap: function(order) {
      var that = this;
      if (
        !(
          order.combination_id > 0 ||
          order.bargain_id > 0 ||
          order.seckill_id > 0
        )
      ) {
        that.setOfflinePayStatus(order.offlinePayStatus);
      }
      this.pay = true;
      this.toPay = type => {
        payOrderHandle(order.order_id, type, that.from)
          .then(() => {
            const type = parseInt(this.$route.params.type) || 0;
            that.changeType(type);
            that.getOrderData();
          })
          .catch(res => {
            if (res.status === "WECHAT_H5_PAY")
              return that.$router.push({
                path: "/order/status/" + order.order_id + "/5"
              });
            const type = parseInt(that.$route.params.type) || 0;
            that.changeType(type);
            that.getOrderData();
          });
      };
    },
    toPay() {}
  },
  mounted() {
    this.getOrderData();
    this.getOrderList();
    this.$scroll(this.$refs.container, () => {
      !this.loading && this.getOrderList();
    });
    this.totalprice = this.orderList.cartInfo.productInfo.attrInfo.price * this.orderList.cartInfo.cart_num
  }
};
</script>

<style>

</style>
