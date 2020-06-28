<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >个人中心</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>
<!--      part 1-->
      <div  class="part1">
        <div >
          <van-row>
            <van-col span="20">
              <div class="toubu">
                <div class="name">{{name}}</div>
                <div class="time">注册时间：{{time}}</div>
              </div>
            </van-col>
            <van-col span="2">
              <div><img :src="headportrait" class="headportrait">
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

<!--      part 2-->
      <div style="background: white;margin:10px 10px;border-radius: 10px;z-index:999">
<!--        part 2_1我的拼宝-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div style="text-align: left;font-size: 22px;font-weight: bolder;font-family: 楷体">我的拼宝</div>
            <div style="font-size:17px;color:#a19f9f;margin-left: 150px;margin-top:6px;">全部拼宝 ></div>
          </div>

          <hr style="margin-bottom: 10px;margin-top: 5px;"/>
<!--      part 2_2 图  -->
          <div style="display: flex;text-align: center;margin-left: 10px;">
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">拼宝中</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">已开奖</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">待收货</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">已收货</div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!--      part 3-->
      <div style="background: white;margin:10px 10px;border-radius: 10px;" >
        <!--        part 3_1我的订单-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div style="text-align: left;font-size: 22px;font-weight: bolder;font-family: 楷体">我的订单</div>
            <router-link :to="'/order/list/'" class="allOrder">
              <div style="font-size:17px;color:#a19f9f;margin-left: 150px;margin-top:6px;">全部订单 ></div>
            </router-link>
          </div>

          <hr style="margin-bottom: 10px;margin-top: 5px;"/>
          <!--      part 3_2 图  -->
          <div style="display: flex;text-align: center;margin-left: 10px;">
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <router-link :to="{ path: '/order/list/' + 0 }" class="item">
                  <div><img src="../assets/images/dfk.png"  style="width: 80%;margin:10px 0 7px 10%"></div>
                  <div style="font-size: 20px;text-align: center;font-family: 楷体;">待付款</div>
                </router-link>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <router-link :to="{ path: '/order/list/' + 1 }" class="item">
                  <div><img src="../assets/images/dfh.png"  style="width: 80%;margin:10px 0 7px 10%"></div>
                  <div style="font-size: 20px;text-align: center;font-family: 楷体;">待发货</div>
                </router-link>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <router-link :to="{ path: '/order/list/' + 2 }" class="item">
                  <div><img src="../assets/images/dsh.png"  style="width: 80%;margin:10px 0 7px 10%"></div>
                  <div style="font-size: 20px;text-align: center;font-family: 楷体;">待收货</div>
                </router-link>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <router-link :to="'/order/refund_list'" class="item">
                  <div><img src="../assets/images/sh.png"  style="width: 80%;margin:10px 0 3px 10%"></div>
                  <div style="font-size: 16px;text-align: center;font-family: 楷体;">售后/退款</div>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!--      part 4-->
      <div style="background: white;margin:10px 10px;border-radius: 10px;" >
        <!--        part 4_1常用工具-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div style="text-align: left;font-size: 22px;font-weight: bolder;font-family: 楷体">常用工具</div>
          </div>

          <hr style="margin-bottom: 10px;margin-top: 5px;"/>

          <!--      part 4_2 图  -->
          <div style="display: flex;flex-wrap: wrap">
            <div v-for="(item, index) in MyMenus" style="width:25%;">
              <div
                class="item"
                :key="index"
                @click="goPages(index)"
                v-if="item.wap_url"
              >
                <div style="display:block;width: 100%" >
                  <div style="text-align: left;padding-left: 15px;">
                    <div><img :src="item.pic"  style="width: 50%;text-align: center;margin:5px 0 5px 25%;"></div>
                    <div style="font-size: 20px;text-align: center;font-family: 楷体;">{{ item.name }}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>



        </div>
      </div>

      <div class="blank">-----------我是有底线的-----------</div>

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
  import { getMenuUser } from "../api/user";
  export default {
    name:'',
    data(){
      return{
        active:'0',
        name:'吃饭不洗碗',
        time:'2020-02-01',
        headportrait:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
        MyMenus: [],
        userInfo:[],
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
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      goPages: function(index) {
        let url = this.MyMenus[index].wap_url;
        if (url === "/user/user_promotion") {
          if (!this.userInfo.is_promoter && this.userInfo.statu == 1)
            return this.$dialog.toast({ mes: "您还没有推广权限！！" });
          if (!this.userInfo.is_promoter && this.userInfo.statu == 2) {
            return (this.generalActive = true);
          }
        }
        if (url === "/customer/index" && !this.userInfo.adminid) {
          return this.$dialog.toast({ mes: "您还不是客服！！" });
        }
        this.$router.push({ path: this.MyMenus[index].wap_url });
      },
    },
    mounted() {
      let that = this;
      getMenuUser().then(res => {
        that.MyMenus = res.data.routine_my_menus;
        console.log(that.MyMenus)
      });
      getUser().then(res => {
        that.userInfo = res.data
      })
    }
  }
</script>

<style>
  body{background: #f5f5f5;}
  .head{font-weight: bold;background-image: linear-gradient(to right, #f83939 ,#fc5050, #ea7979); padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .part1{display: flex;background: #ff3131;height: 160px;z-index:0;background-image: linear-gradient(to right, #f83939 ,#fc5050, #ea7979);position:relative;}
  .part1 .toubu{text-align: left;padding:60px 40px;font-size: 18px;color:#ffffff}
  .part1 .name{font-size: 20px;}
  .part1 .time{font-size: 16px;margin-top:8px;}
  .part1 .headportrait{width: 80px;border-radius: 50px;margin-top:46px;border:solid 4px white}
</style>
