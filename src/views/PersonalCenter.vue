<template>
  <div id="demo" class="PersonalCenter">
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
              <div><img v-lazy="headportrait" class="headportrait">
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

<!--      part 2-->
      <div class="part2" style="margin-top:25px;">
<!--        part 2_1我的拼宝-->
        <div style="padding:7px 0">
          <div class="part2_1">
            <div class="mypinbao">我的拼宝</div>
            <div class="allpinbao">全部拼宝 ></div>
          </div>

          <hr style="margin-bottom: 10px;margin-top: 5px;"/>

<!--      part 2_2 图  -->
          <div class="part2_2">
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  class="pinimg"></div>
                <div class="pintext">拼宝中</div>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  class="pinimg"></div>
                <div class="pintext">已开奖</div>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  class="pinimg"></div>
                <div class="pintext">待收货</div>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  class="pinimg"></div>
                <div class="pintext">已收货</div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!--      part 3-->
      <div class="part2" >
        <!--        part 3_1我的订单-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div class="mypinbao">我的订单</div>
            <router-link :to="'/order/list/'" class="allpinbao">
              <div class="">全部订单 ></div>
            </router-link>
          </div>

          <hr style="margin-bottom: 10px;margin-top: 5px;"/>
          <!--      part 3_2 图  -->
          <div class="part2_2">
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <router-link :to="{ path: '/order/list/' + 0 }" class="item">
                  <div><img src="../assets/images/dfk.png"  class="pinimg2"></div>
                  <div class="pintext">待付款</div>
                </router-link>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <router-link :to="{ path: '/order/list/' + 1 }" class="item">
                  <div><img src="../assets/images/dfh.png"  class="pinimg2"></div>
                  <div class="pintext">待发货</div>
                </router-link>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <router-link :to="{ path: '/order/list/' + 2 }" class="item">
                  <div><img src="../assets/images/dsh.png"  class="pinimg2"></div>
                  <div class="pintext">待收货</div>
                </router-link>
              </div>
            </div>
            <div class="mypinbao_1">
              <div class="mypinbao_2">
                <router-link :to="'/order/refund_list'" class="item">
                  <div><img src="../assets/images/sh.png"  class="pinimg2"></div>
                  <div class="pintext" style="font-size: 14px;width:110%">售后/退款</div>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!--      part 4-->
      <div class="part4" style="width:95%">
        <!--        part 4_1常用工具-->
        <div style="padding:7px 0">
          <div style="display: flex;">
            <div class="mypinbao">常用工具</div>
          </div>

          <hr style="margin-top: 5px;"/>

          <!--      part 4_2 图  -->
          <div style="display: flex;flex-wrap: wrap">
            <div v-for="(item, index) in MyMenus" style="width:25%;padding:10px;">
              <div
                class="item"
                :key="index"
                @click="goPages(index)"
                v-if="item.wap_url"   style="padding-right: 0px"
              >
                <div style="display:block;width: 100%" >
                  <div style="text-align: left;">
                    <div><img v-lazy="item.pic"  style="width: 50%;text-align: center;margin:5px 0 5px 25%;"></div>
                    <div class="pintext">{{ item.name }}</div>
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
      is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          localStorage.setItem('is_weixin', '1');
          console.log("isweixin")
        } else {
          localStorage.setItem('is_weixin', '0');
          console.log("isn't weixin")
        }
      }

    },
    mounted() {
      let that = this;
      this.is_weixin();
      getMenuUser().then(res => {
        that.MyMenus = res.data.routine_my_menus;
        console.log(that.MyMenus)
      });

    }
  }
</script>

<style>
  body{background: #f5f5f5;}

</style>
