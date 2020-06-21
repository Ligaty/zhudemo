<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div >
      <!--part1 轮播图-->
      <div class="part1">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" class="slideshow1" style=""/>
          </van-swipe-item>
        </van-swipe>
      </div>
<!--      part2 商品名价格-->
      <div class="part2">
        <p class="commodity">{{commodity}}</p>
        <div>
          <span class="price">￥ {{minprice}} - {{maxprice}}</span>
          <span class="fprice">{{fprice}}</span>
          <div class="share"><span class="glyphicon glyphicon-share-alt"></span>=>分享</div>
        </div>
      </div>

      <div class="tianchong"></div>

<!--      part3 -->
      <div class="part3">
        <span class="xuanze">选择  </span>
        <span class="xilie">系列、规格</span>
        <van-icon name="arrow" @click="choose" class="choose"/>
      </div>

      <div class="tianchong"></div>

<!--      part4-->
      <div class="part4">
        <div class="part4_1"><span class="xuanze">活动</span><span class="xilie"> {{huodong}}</span></div>
        <div class="part4_1"><span class="xuanze">运费</span><span class="xilie"> {{yunfei}}</span></div>
        <div><span class="xuanze">说明</span><span class="xilie"> {{shuoming}}</span></div>
      </div>

      <div class="tianchong"></div>

<!--      part5-->
      <div class="part5">
        <div v-for="(imgdetail,index) in imgdetails" class="part5_1">
          <img :src="imgdetail" class="imgdetail"/>
        </div>
      </div>


      <div class="blank">-----------我是有底线的-----------</div>
    </div>

    <!--底部导航栏-->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="首页" @click="Toshouye" color="#00c130"/>
      <van-goods-action-icon icon="chat-o" text="客服" color="#00c130" />
      <van-goods-action-icon icon="star" color="#00c130" @click="shoucang" text="收藏" :class='{"icon":true,"shoucang1":true,"active":isSelected}' />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

  </div>
</template>

<script>
  export default {
    name:'demo',
    data(){
      return{
        imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
        commodity:'Apple/苹果 10.5 英寸 iPad Air',
        minprice:'4870.00',
        maxprice:'6039.00',
        fprice:'10099.00',
        active:'0',
        huodong:'[满减]满3188减10元，满5000减30元',
        yunfei:'满88元免运费',
        shuoming:'收货后结算，快递发货',
        imgdetails:[
          'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
        isSelected:false,

      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      choose(){
        alert("choose");
      },
      shoucang(){
        this.isSelected = !this.isSelected;
        if(this.isSelected==true)
          alert("收藏成功");
        else
          alert("取消收藏");
      },
      Toshouye(){
        this.$router.push({path:"/"})
      }

    },
    computed:{

    }
  }
</script>

<style>
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .part1 .slideshow1{
    display:block;margin:0 auto;width:90%;max-width:90%;height:auto;border-radius: 25px;
  }
  .part2{
    margin-top: 30px;text-align: left;padding-left: 20px;
  }
  .part2 .commodity{
    font-size: 25px;font-weight: bold;
  }
  .part2 .price{
    font-size: 24px;font-weight: bold;color: #e74202;
  }
  .part2 .fprice{
    color: #b4b5b6;text-decoration:line-through;font-size: 17px;
  }
  .part2 .share{
    float: right;color: rgba(141, 124, 123, 0.83);border: 2px #d7d4d4 solid;background: #d7d4d4;padding: 5px;border-radius: 25px 0 0 25px;
  }
  .tianchong{height: 20px;background: #efefef;margin-top:17px;}
  .part3{margin-top: 30px;text-align: left;padding-left: 20px;margin-bottom: 30px;}
  .xuanze{font-size:19px;color: #7d7979;font-family: 宋体;}
  .xilie{font-size: 19px;margin-left:3%;font-family: 宋体;}
  .part3 .choose{float: right;margin-right: 10%;font-size: 25px;}
  .part4{margin-top: 30px;text-align: left;padding-left: 20px;margin-bottom: 30px;}
  .part4_1{margin-bottom:8px}
  .part5{padding: 20px;margin-bottom: 10px;}
  .part5_1{background: gray}
  .imgdetail{width: 100%;height: auto}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .shoucang1.active{color:#ff5000}
</style>
