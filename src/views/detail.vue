<template>
  <div id="demo" class="detail">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >商品详情</span>
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
          <div class="share"><span class="glyphicon glyphicon-share-alt"></span>分享</div>
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
      <van-goods-action-icon icon="star" color="#00c130" @click="shoucang" text="收藏"  />
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

</style>
