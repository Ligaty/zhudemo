<template>
  <div id="demo" class="ComfirmOrder">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >确认订单</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div v-for="(orderlist,index) in orderlists">
      <div style="margin-bottom: 100px;">
  <!--part1-->
        <div class="part1" v-for="(contact,index) in contacts">
          <div class="glyphicon glyphicon-map-marker mapicon" ></div>
          <div style="padding-left: 4%">
            <div>
              <span class="shoujianren">{{contact.name}}</span>
              <span class="phone">{{contact.phone}}</span>
            </div>
            <div class="address">{{contact.address}}</div>
          </div>
        </div>
  <!--      <div><img src="@/assets/images/line.jpg" style="height: 10px;width:100%"/>线条图片显示不出来？</div>-->
        <div class="tianchong" style=""></div>

  <!--      part2-->
        <div class="part2">
          <div class="quanbu2" >
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
            <span>商品小计</span>
            <span style="color: #f63333">￥{{orderlist.totalprice}}</span>
          </div>
          <div class="tianchong" style=""></div>
        </div>

  <!--      part3-->
        <div class="part3">
          <div class="youhui">活动优惠</div>
          <div class="zhekou">-￥{{orderlist.discount}}</div>
        </div>
        <div class="tianchong" style=""></div>

  <!--      part4-->
        <div class="part4">
          <div class="part4_1">
            <div class="part4_1_1">配送方式</div>
            <div class="part4_1_2">{{orderlist.distributionmode}}</div>
          </div>
          <hr style="width:90%;margin-left:5%"/>
          <div class="part4_2">
            <span class="part4_2_1"> 留言备注</span>
            <input type="text" class="part4_2_2"  placeholder="留言建议提前协商" >
          </div>
        </div>
        <div class="tianchong" style=""></div>

  <!--      part5-->
        <div class="part5">
          <div class="part5_1">
            <div class="part5_1_1">订单原价</div>
            <div class="part5_1_2">￥{{orderlist.originalprice}}</div>
          </div>
          <div class="part5_2">
            <div class="part5_2_1">运费</div>
            <div class="part5_2_2">￥{{orderlist.freight}}</div>
          </div>
          <div class="part5_3">
            <div class="part5_3_1">活动优惠</div>
            <div class="part5_3_2">-￥{{orderlist.discount}}</div>
          </div>

          <hr/>

          <div class="pay">
            <span>合计</span>
            <span style="color: #f63333">￥{{orderlist.heji}}</span>
          </div>
        </div>
      </div>

  <!--      part6 底部-->
      <div class="part6">
        <div class="addinfo" @click="toAddinfo" >
          <div class="heji">
            <div style="">合计</div>
            <div style="color:orangered;">￥{{orderlist.heji}}</div>
          </div>
          <div class="sumit" style="width:40%">提交订单</div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
        orderlists:[
          {
            orderNumber:'wx2020043020002410039',
            orderState:'待开奖',
            goodsName:'9.9拼宝马，不中返10元消费券+1000元现金购车抵扣券',
            describe:'银色；256G',
            goodImg:'https://img.yzcdn.cn/vant/ipad.jpeg',
            number:2,
            price:6039,
            totalprice: 19.80,
            discount:30.00,
            distributionmode:'快递免运费',
            originalprice:12078.00,
            freight:0.00,
            heji:12048,
          },
        ],
        contacts:[
          {
            name:'王饱饱',
            phone:'15972829878',
            address:'收件地址：广东省南城司岩区橄榄路水木蓝山E区7楼A112室',
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

<style>

</style>
