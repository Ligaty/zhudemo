<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" ><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >购物车</span>
      <span class="headright" @click="onClickLeft"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->

    <div class="container">
      <div class="zhuzhu">
        <div class="zhuzhu1">猪猪乐商城</div>
        <div class="zhuzhu2">编辑</div>
      </div>


      <!--购物车内容-->
      <div v-if="cartList.valid.length > 0 || cartList.invalid.length > 0" v-for="(item, index) in cartList.valid"
           :key="index">


      <div v-if="cartList.valid.length > 0">
        <div >
          <div class="tianchong"></div>
          <div style="display: flex">
<!--            选择按钮-->
            <div class="select-btn" style="width:3%;line-height: 150px;margin-left:2%">
              <div class="checkbox-wrapper">
                <label class="well-check">
                  <input
                    type="checkbox"
                    name=""
                    value=""
                    :checked="item.checked"
                    @click="switchSelect(index)"
                  />
                  <i class="icon"></i>
                </label>
              </div>
            </div>
<!--            购物车商品信息-->
            <div style="width: 93%;margin-left: 2%">
              <mt-cell-swipe :right="[{content:'删除',
                         style:{background:'red',color:'#fff'},
                           handler:()=>delgoods(index)}]">
                <div>
                  <div class="">
                    <div class="shopDetails">

                      <img  :src="item.productInfo.attrInfo.image" @click="$router.push({ path: '/detail/' + item.product_id })" v-if="item.productInfo.attrInfo"/>
                      <img :src="item.productInfo.image" v-else />
                      <div class="detailList">
                        <span class="detailName" @click="$router.push({ path: '/detail/' + item.product_id })">{{ item.productInfo.store_name }}</span>
                        <div class="listmore">{{ item.productInfo.attrInfo.suk }}</div>
                        <div class="shopprice">
                          <div class="listprice">￥{{ item.truePrice }}</div>
                          <div class="shopNum">
                            <div class="carnum acea-row row-center-wrapper">
                              <div
                                class="reduce"
                                :class="cartList.valid[index].cart_num <= 1 ? 'on' : ''"
                                @click.prevent="reduce(index)"
                              >
                                -
                              </div>
                              <div class="num">
                                <input
                                  type="number"
                                  v-model="item.cart_num"
                                  class="ipt_num"
                                  @input.prevent="specifiName(index)"
                                  @blur.prevent="blurName(index)"
                                />
                              </div>
                              <div
                                class="plus"
                                v-if="cartList.valid[index].attrInfo"
                                :class="
                                  cartList.valid[index].cart_num >=
                                  cartList.valid[index].attrInfo.stock
                                    ? 'on'
                                    : ''
                                "
                                @click.prevent="plus(index)"
                              >
                                +
                              </div>
                              <div
                                class="plus"
                                v-else
                                :class="
                                  cartList.valid[index].cart_num >= cartList.valid[index].stock
                                    ? 'on'
                                    : ''
                                "
                                @click.prevent="plus(index)"
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </mt-cell-swipe>
            </div>
        </div>
        </div>
      </div>
      <div v-else>
        <van-empty description="您的购物车还是空的" style="height: 350px"/>
        <button type="button" class="btn btn-warning" style="margin-bottom: 100px;">去逛逛</button>
      </div>


<!--      <mt-cell-swipe :right="[{content:'select',-->
<!--                     style:{background:'red',color:'#fff'},-->
<!--                     handler:()=>this.$messagebox('删除')}]">-->
<!--      </mt-cell-swipe>-->

      </div>
      <div style="background: #f5f5f5;height:150px;"></div>

<!--      购物车底部付款-->
      <div class="footer">
        <div class="foot-left">
          <div class="foot-left1">已选({{ cartCount }})</div>
          <div class="foot-left2">合计
            <span>￥{{ countmoney }}</span>
          </div>
        </div>
        <div class="footer-right" @click="placeOrder">去结算</div>
      </div>



    </div>

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
  import Recommend from "../components/Recommend";
  import {
    getCartList,
    postCartDel,
    changeCartNum,
    getCartCount
  } from "../api/store";
  import { postCollectAll } from "../api/user";
  import { mul, add } from "../utils/bc";
  import cookie from "../utils/store/cookie";
  import debounce from "lodash.debounce";

  const CHECKED_IDS = "cart_checked";

  export default {
    name:'',
    data(){
      return{
        cartList: { invalid: [], valid: [] },
        isAllSelect: false,
        cartCount: 0,
        countmoney: 0,
        goodsHidden: true,
        footerswitch: false,
        count: 0,
        checkedIds: [],
        loaded: false,
        index_num: 0,
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
        ],


      }
    },
    watch: {
      $route(n) {
        if (n.name === "ShoppingCart") {
          this.carnum();
          this.countMoney();
          this.getCartList();
          this.gainCount();
          this.goodsHidden = true;
          this.footerswitch = false;
        }
      }
    },
    mounted: function() {
      let that = this;
      that.carnum();
      that.countMoney();
      that.getCartList();
      that.gainCount();
    },
    methods: {
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      getCartList: function() {
        let that = this;
        getCartList().then(res => {
          that.cartList = res.data;
          let checkedIds = cookie.get(CHECKED_IDS) || [];
          if (!Array.isArray(checkedIds)) checkedIds = [];
          this.cartList.valid.forEach(cart => {
            if (checkedIds.length) {
              if (checkedIds.indexOf(cart.id) !== -1) cart.checked = true;
              else cart.checked = false;
            } else {
              cart.checked = true;
              that.checkedIds.push(cart.id);
            }
          });
          if (checkedIds.length) {
            that.checkedIds = checkedIds;
          }
          that.isAllSelect =
            that.checkedIds.length === this.cartList.valid.length;
          that.carnum();
          that.countMoney();
          this.loaded = true;
        });
      },
      //删除商品；
      delgoods: function() {
        let that = this,
          id = [],
          valid = [],
          list = that.cartList.valid;
        list.forEach(function(val) {
          if (val.checked === true) {
            id.push(val.id);
          }
        });
        if (id.length === 0) {
          that.$dialog.toast({ mes: "请选择产品" });
          return;
        }
        postCartDel(id).then(function() {
          list.forEach(function(val, i) {
            if (val.checked === false || val.checked === undefined)
              valid.push(list[i]);
          });
          that.$set(that.cartList, "valid", valid);
          that.carnum();
          that.countMoney();
          that.gainCount();
        });
      },
      // //获取数量
      gainCount: function() {
        let that = this;

        getCartCount().then(res => {
          that.count = res.data.count;
        });
      },
      //清除失效产品；
      delInvalidGoods: function() {
        let that = this,
          id = [],
          list = that.cartList.invalid;
        list.forEach(function(val) {
          id.push(val.id);
        });
        postCartDel(id).then(function() {
          list.splice(0, list.length);
          that.gainCount();
        });
      },
      //批量收藏;
      collectAll: function() {
        let that = this,
          data = { id: [], category: "" },
          list = that.cartList.valid;
        list.forEach(function(val) {
          if (val.checked === true) {
            data.id.push(val.product_id);
            data.category = val.type;
          }
        });
        if (data.id.length === 0) {
          that.$dialog.toast({ mes: "请选择产品" });
          return;
        }
        postCollectAll(data).then(function() {
          that.$dialog.toast({ mes: "收藏成功!" });
        });
      },
      //立即下单；
      placeOrder: function() {
        let that = this,
          list = that.cartList.valid,
          id = [];
        list.forEach(function(val) {
          if (val.checked === true) {
            id.push(val.id);
          }
        });
        if (id.length === 0) {
          that.$dialog.toast({ mes: "请选择产品" });
          return;
        }
        this.$router.push({ path: "/order/submit/" + id });
      },
      manage: function() {
        let that = this;
        that.footerswitch = !that.footerswitch;
      },
      goodsOpen: function() {
        let that = this;
        that.goodsHidden = !that.goodsHidden;
      },
      //加
      plus: function(index) {
        let that = this;
        let list = that.cartList.valid[index];
        list.cart_num++;
        if (list.attrInfo) {
          if (list.cart_num >= list.attrInfo.stock) {
            that.$set(list, "cart_num", list.attrInfo.stock);
          }
        } else {
          if (list.cart_num >= list.stock) {
            that.$set(list, "cart_num", list.stock);
          }
        }
        that.carnum();
        that.countMoney();
        that.syncCartNum(list);
      },
      specifiName(index) {
        let list = this.cartList.valid[index];
        this.index_num = index;
        this.carnum();
        this.countMoney();
        this.syncCartNum(list);
      },
      blurName(index) {
        let list = this.cartList.valid[index];
        if (list.cart_num < 1) {
          this.$set(list, "cart_num", 1);
        }
        this.carnum();
        this.countMoney();
        this.syncCartNum(list);
      },
      //减
      reduce: function(index) {
        let that = this;
        let list = that.cartList.valid[index];
        list.cart_num--;
        if (list.cart_num < 1) {
          that.$set(list, "cart_num", 1);
        }
        that.carnum();
        that.countMoney();
        that.syncCartNum(list);
      },
      syncCartNum(cart) {
        if (!cart.sync)
          cart.sync = debounce(() => {
            changeCartNum(cart.id, Math.max(cart.cart_num, 1) || 1);
          }, 500);

        cart.sync();
      },
      //单选
      switchSelect: function(index) {
        let that = this,
          cart = that.cartList.valid[index],
          i = this.checkedIds.indexOf(cart.id);
        cart.checked = !cart.checked;

        if (i !== -1) this.checkedIds.splice(i, 1);
        if (cart.checked) {
          this.checkedIds.push(cart.id);
        }
        let len = that.cartList.valid.length;
        let selectnum = [];
        for (let i = 0; i < len; i++) {
          if (that.cartList.valid[i].checked === true) {
            selectnum.push(true);
          }
        }
        that.isAllSelect = selectnum.length === len;
        that.$set(that, "cartList", that.cartList);
        that.$set(that, "isAllSelect", that.isAllSelect);
        cookie.set(CHECKED_IDS, that.checkedIds);
        that.carnum();
        that.countMoney();
      },
      //全选
      allChecked: function() {
        let that = this;
        let selectAllStatus = that.isAllSelect;
        selectAllStatus = !selectAllStatus;
        let checkedIds = [];
        // for (let i = 0; i < array.length; i++) {
        //   array[i].checked = selectAllStatus;
        //   checked.push()
        // }
        that.cartList.valid.forEach(cart => {
          cart.checked = selectAllStatus;
          if (selectAllStatus) checkedIds.push(cart.id);
        });
        that.$set(that, "cartList", that.cartList);
        that.$set(that, "isAllSelect", selectAllStatus);
        this.checkedIds = checkedIds;
        cookie.set(CHECKED_IDS, checkedIds);
        that.carnum();
        that.countMoney();
      },
      //数量
      carnum: function() {
        let that = this;
        var carnum = 0;
        var array = that.cartList.valid;
        for (let i = 0; i < array.length; i++) {
          if (array[i].checked === true) {
            if (array[i].cart_num) carnum += parseInt(array[i].cart_num);
          }
        }
        that.$set(that, "cartCount", carnum);
      },
      //总共价钱；
      countMoney: function() {
        let that = this;
        let carmoney = 0;
        let array = that.cartList.valid;
        for (let i = 0; i < array.length; i++) {
          if (array[i].checked === true) {
            carmoney = add(carmoney, mul(array[i].cart_num, array[i].truePrice));
          }
        }
        that.countmoney = carmoney;
      }
    }
  }
</script>

<style>
  body{background: #f5f5f5;}
  .container{
    background: #fff;padding:0;margin-bottom: 10px;
  }
  .head{font-weight: bold;background-color: #efefef; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .footer{
    position: fixed;
    bottom:50px;border-top: 1px solid #ccc;
    display: flex;justify-content: space-between;
    width: 100%;
  }
  .foot-left{
    line-height: 50px;
    font-size: 18px;
    width:70%;
    flex:1;
    display: flex;justify-content: space-between;
  }
  .foot-left1{
    margin-left: 15%;
    text-align: left;
  }
  .foot-left2{
    text-align: right;
    padding-right: 10px;
    justify-content: space-between;
  }
  .foot-left2 span{
    color:red;
  }
  .footer-right{
    background: red;
    color: #ffff;
    width:30%;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  .zhuzhu{
    line-height: 65px;
    font-size: 18px;
    height: 50px;
    display: flex;justify-content: space-between;
    margin-bottom: 10px;
  }
  .zhuzhu1{
    text-align: left;
    padding-left: 5%;
  }
  .zhuzhu2{
    color:#808080;
    text-align: right;
    padding-right: 5%;
  }
  .tianchong{height: 15px;background: #efefef;z-index:997;width: 100%}
  .item{padding-right:20px;z-index:998;margin-bottom: 12px;}
  .shopDetails{background:#fff;display: flex;text-align: left;padding-top:18px;line-height: 30px;}
  .shopDetails img{width:100px;margin-right: 3%;height:130px;}
  .detailName{font-size: 19px;font-weight: bold;color: #444343;
  }
  .listmore{color: #504f4f
  }
  .shopprice{margin-top:10px;display: flex}
  .listprice{font-size: 19px;width: 50%;color: #504f4f}
  .shopNum{text-align: right;margin-left: 40px;width: 50%}
  .shopNum button{width: 31px;height: 28px;text-align:center;background: #e0e0e0;color: #58595b;border:none;outline: none;}
  .shopNum input{width:37px;height: 25px;border:none;text-align: center;outline: none;}
  .mint-cell-swipe-button{line-height: 180px;}
</style>
