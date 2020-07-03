<template>
  <div id="demo" class="chongzhi">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >充值</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>

      <div style="background: white">
        <div class="press">
          <div class="chongzhijine">充值金额</div>
          <div style="display: flex">
            <div class="shi" tabindex="1">10元</div>
            <div class="ershi" tabindex="2">20元</div>
            <div class="wushi" tabindex="3">50元</div>
          </div>
          <div style="display: flex;margin-top:20px;">
            <div class="yibai" tabindex="4">100元</div>
            <div class="wubai" tabindex="5">500元</div>
            <div class="yiqian" tabindex="6">1000元</div>
          </div>
        </div>

        <div style="padding-bottom: 20px;">
          <div style="padding:15px 5%;font-size:18px;text-align: left">自定义充值金额</div>
          <div style="text-align: left;margin-left: 5%"><input type="text" placeholder="0" style="border-bottom: 1px solid #c6c5c5;text-align: left;width:25%"></div>
        </div>
      </div>
      <div class="wechatpay" @click="wechatpay">微信支付</div>
    </div>




  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
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
      wechatpay(){
        alert("跳转至微信支付")
      }
    }
  }
</script>


