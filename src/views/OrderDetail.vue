<template>
  <div id="demo" class="OrderDetail">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单详情</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>

<!--      part1-->
      <div style="display: flex;padding:15px;background-image: linear-gradient(to right, #f88b43 , #fd501b);">
        <div style="width:80%;text-align: left;color:white">
          <div style="font-size: 20px;">商家已发货</div>
          <div style="font-size: 16px;">商家已发货，请留意快递信息</div>
        </div>
        <div style="width: 20%"><img src="@/assets/images/ywc001.gif" height="60" width="60"/></div>
      </div>

<!--      part2-->
      <div class="part1" v-for="(logistic,index) in logistics">
        <div class="glyphicon glyphicon-map-marker mapicon" ></div>
        <div style="padding-left: 4%">
          <div>
            <span class="wuliu">物流：{{logistic.logisticname}}</span>
            <span class="danhao">({{logistic.ordernumber}})</span>
          </div>
          <div class="address">快件由【{{logistic.startadd}}】发往【广州转运中心】</div>
          <div class="time">{{logistic.time}}</div>
        </div>
        <div class="glyphicon glyphicon-chevron-right" style="line-height: 80px;"></div>
      </div>

      <hr/>

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

<!--      part3-->
      <!--有商品状态时-->
      <div v-for="(orderlist,index) in orderlists"  >

        <div v-if="orderlists.length>0" class="quanbu1">

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
            <span>商品小计</span>
            <span style="color: #f63333">￥{{orderlist.totalprice}}</span>
          </div>
        </div>
        <!--无订单状态时-->
        <div v-else >
          <van-empty description="您还没有宝贝哦" />
        </div>

      </div>

      <div class="tianchong" style=""></div>

<!--      part4-->
      <div v-for="(list,index) in lists" style="padding:10px 20px;background: white">
        <div class="part4_0">
          <div class="part4_1">订单原价</div>
          <div class="part4_2">￥{{list.dingdanyuanjia}}</div>
        </div>
        <div class="part4_0">
          <div class="part4_1">运费</div>
          <div class="part4_2">￥{{list.yunfei}}</div>
        </div>
        <div class="part4_0">
          <div class="part4_1">活动优惠</div>
          <div class="part4_2">￥{{list.huodongyouhui}}</div>
        </div>
        <div class="part4_0">
          <div class="part4_1">订单总价</div>
          <div class="part4_2">￥{{list.dingdanzongjia}}</div>
        </div>

        <hr style="margin:15px 5px;font-weight: bolder;color:#404040"/>

        <div class="part4_0">
          <div class="part4_1">余额支付</div>
          <div class="part4_2">￥{{list.yuezhifu}}</div>
        </div>
        <div class="part4_0">
          <div class="part4_1">微信支付</div>
          <div class="part4_2">￥{{list.weixinzhifu}}</div>
        </div>

        <hr style="margin:15px 5px;font-weight: bolder;color:#2a2a2a"/>

        <div class="part4_0">
          <div class="part4_1">实际支付</div>
          <div class="part4_2 shiji">￥{{list.shijizhifu}}</div>
        </div>
      </div>

      <div class="tianchong" style=""></div>
      <div v-for="(list,index) in lists" style="padding:10px 20px;background: white">

        <div class="part4_0">
          <div class="part4_1">下单时间</div>
          <div class="part4_2_1">￥{{list.xiadanshijian}}</div>
        </div>
        <div class="part4_0">
          <div class="part4_1">付款时间</div>
          <div class="part4_2_1">￥{{list.fukuanshijian}}</div>
        </div>
      </div>

<!--      part5-->
      <hr style="color:#2a2a2a;margin-bottom: 10px;"/>
      <div class="part5">
        <div style="display: flex">
          <div style="width: 37%"></div>
          <div class="chakanwuliu" @click="chakanwuliu">查看物流</div>
          <div style="width:2%"></div>
          <div class="querenshouhuo" @click="querenshouhuo">确认收货</div>
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
        contacts:[
          {
            name:'王饱饱',
            phone:'15972829878',
            address:'收件地址：广东省南城司岩区橄榄路水木蓝山E区7楼A112室',
          }
        ],
        lists:[
          {
            dingdanyuanjia:12078.00,
            yunfei:0.00,
            huodongyouhui:30.00,
            dingdanzongjia:12048.00,
            yuezhifu:10.00,
            weixinzhifu:12038.00,
            shijizhifu:12038.00,
            xiadanshijian:'2020.05.09  07:11:22',
            fukuanshijian:'2020.05.09  07:12:22'
          }
        ],
        logistics:[
          {
            logisticname:'顺丰快递',
            ordernumber:'1212314152765672',
            startadd:'北京朝阳集散中心',
            endadd:'广东广州转运中心',
            time:'2020-05-09  11:12:11'
          }
        ],
        orderlists:[
          {
            orderNumber:'wx2020043020002410039',
            orderState:'商家已发货',
            goodsName:'9.9拼宝马，不中返10元消费券+1000元现金购车抵扣券',
            describe:'银色；256G',
            goodImg:'https://img.yzcdn.cn/vant/ipad.jpeg',
            number:2,
            price:9.90,
            totalprice: 19.80
          },
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
      chakanwuliu(){
        alert("查看物流")
      },
      querenshouhuo(){
        alert("确认收货")
      }
    }
  }
</script>

<style>
 </style>
