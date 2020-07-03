<template>
  <div id="demo" class="pindetail">
    <!--头部导航栏  拼宝页商品详情-->
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

<!--      倒计时-->
      <div>
        <div style="display: flex">
          <div style="width: 60%;display: flex;background-image: linear-gradient(to right, #f39542 , #fa4b16);">
            <div style="width: 60%;color: white;text-align: left;padding:5px 10px;">
              <div>价值</div>
              <span>￥</span><span style="font-size:20px;">{{price}}</span>
            </div>
            <div style="width:40%;text-align: right;color:white;font-size: 20px;padding:0px 10px;line-height: 75px;">万人乐</div>
          </div>

          <div style="width:40%;line-height: 45px;background: #f5f5f5">
            <div style="color:orangered;font-size:18px;">距离结束还有</div>
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="block" style="background: orangered;font-size: 16px;padding:3px;">{{ timeData.hours }}</span>
                <span class="colon" >:</span>
                <span class="block" style="background: orangered;font-size: 16px;padding:3px;">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block" style="background: orangered;font-size: 16px;padding:3px;">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
      </div>

      <!--      part2 商品名价格-->
      <div class="part2">
        <div style="" class="commodity">{{commodity}}</div>
        <div style="height:50px;padding-top: 15px;">
          <div class="share" style="">
            <span class="glyphicon glyphicon-share-alt"></span>
            <span>分享</span>
          </div>
        </div>
      </div>

      <div class="tianchong"></div>

<!--      part3份数-->
      <div v-for="(fenshu,fen) in fenshus" class="part3">
        <div style="padding:20px;">
          <div class="part3_1">
            <div class="part3_2"></div>
          </div>
        </div>
        <div style="padding:0px 20px;display: flex">
          <div style="width: 31%">
            <div class="fenshu1">{{fenshu.zongxufenshu}}</div>
            <div style="color: grey">总需份数</div>
          </div>
          <div style="width: 33%">
            <div class="fenshu1">{{fenshu.yipinfenshu}}</div>
            <div style="color: grey">已拼份数</div>
          </div>
          <div style="width: 33%">
            <div class="fenshu1">{{fenshu.shengyufenshu}}</div>
            <div style="color: grey">剩余份数</div>
          </div>
        </div>
      </div>

      <div class="tianchong"></div>

      <!--      part5-->
      <div class="part5">
        <div v-for="(imgdetail,index) in imgdetails" class="part5_1">
          <img v-lazy="imgdetail" class="imgdetail"/>
        </div>
      </div>


      <div class="blank">-----------我是有底线的-----------</div>
    </div>

    <!--底部导航栏-->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="首页" @click="Toshouye" color="#00c130"/>
      <van-goods-action-icon icon="chat-o" text="客服" color="#00c130" />
      <van-goods-action-icon icon="star" color="#00c130" @click="shoucang" text="收藏"  />
      <van-goods-action-button type="danger" style="font-size:18px;border-radius: unset" @click="pinbao">马上拼宝 ￥{{pinprice}}</van-goods-action-button>

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
        fenshus:[
          {
            zongxufenshu:'10,100',
            yipinfenshu:'4,700',
            shengyufenshu:'5,530',

          }
        ],
        time: 30 * 60 * 60 * 1000,
        commodity:'9.90拼宝马X3，不中返10元消费券+1000元现金购车抵扣券',
        price:'10099.00',
        pinprice:'9.90',
        active:'0',
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
      },
      pinbao(){
        alert("马上拼宝")
      }

    },
    computed:{

    }
  }
</script>

<style>

</style>
