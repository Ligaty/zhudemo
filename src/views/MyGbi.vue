<template>
  <div id="demo" class="MyGbi">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >我的G币</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>

      <div>
        <div class="Gbi">

          <div class="Gbi1">
            <div class="Gbi1_1">当前G币（个）</div>
            <div class="Gbi1_2">919,249</div>
          </div>
        </div>

        <div class="Gbi2">
          <div style="padding:0px 10%;width: 50%">
            <span class="glyphicon glyphicon-usd Gbi2_1" ></span>
            <span style="font-size:18px;">立即充值</span>
          </div>
          <div style="padding:0px 10%;width: 50%">
            <span class="glyphicon glyphicon-usd Gbi2_2" ></span>
            <span style="font-size:18px;">进入商城</span>
          </div>
        </div>

        <div class="Gbi3">G币明细</div>

        <div class="Gbi4">
          <van-tabs v-model="active">
            <van-tab title="全部" style="font-size: 20px;">
              <div v-if = "active === 0" v-for="(quan,idex) in quanbu">
                <hr class="hr"/>
                <div class="quanbu1">
                  <div class="quanbu1_1">
                    <div class="quanbuname">{{quan.name}}</div>
                    <div class="quanbutime">{{quan.time}}</div>
                  </div>
                  <div class="quanbumoney">{{quan.money}}</div>
                </div>

              </div>
            </van-tab>
            <van-tab title="支出">支出</van-tab>
            <van-tab title="充值">充值</van-tab>
          </van-tabs>
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
  import ShareRedPackets from "../components/ShareRedPackets";
  export default {
    name:'',
    components: {ShareRedPackets},
    data(){
      return{
        active:0,
        quanbu:[
          {
            name:"支付20G币参与拼宝",
            time:"2020/05/01  22:22:22",
            money:"-20"
          },
          {
            name:"支付20G币参与拼宝",
            time:"2020/05/01  22:22:22",
            money:"-20"
          }
        ],
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


