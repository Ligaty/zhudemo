<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >猪猪乐社交商城</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>
      <!--part1-->
      <div></div>
      <div class="part1">
        <div class="accumulatted1">
          <div style="width:50%">
            <div class="accumulatted2"><img :src="participationUrl" class="peopleamount"></div>
            <div class="accumulatted3">
              <div>累计参与</div>
              <div>{{peopleamount}}人</div>
            </div>
          </div>
          <input type="text" class="form-control input-lg search " placeholder="输入商品名称搜索" >
        </div>
      </div>

      <!--part2 轮播图-->
      <div class="part2">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(image, index) in banner" :key="index">
            <img v-lazy="image.pic" class="slideshow1" style=""/>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!--part3-->
      <div>
        <div class="part3" v-for="(menu,index) in menus" :key="index">
          <img :src="menu.pic" style="width:70%">
          <p style="text-align: center;font-size:16px;">{{menu.name}}</p>
        </div>
      </div>

      <!--part4-->
      <div>
        <div v-for="(part4,index) in parts4" :key="index">
          <img :src="part4.imgUrl" class="part4">
        </div>
        <div style="">
          <img :src="imgUrl" class="part4_1">
        </div>
      </div>

      <!--part5 精选品牌-->
      <div class="selected">
        <p class="selectedbrand">精选品牌</p>
        <div class="selectedcontent"  v-for="(fastList,index) in info.fastList" :key="index">
          <img :src="fastList.pic" style="width:100%;border-radius: 8px;margin:7px 0;">
          <p style="text-align: center;font-size:16px;">{{fastList.cate_name}}</p>
        </div>
      </div>

      <!--part6-->
      <div style="">
        <img :src="imgUrl" class="part6">
      </div>
      <div style="">
        <img :src="imgUrl" class="part6">
      </div>

      <!--part7-->
      <div class="like">
        <p class="like1">猜你喜欢</p>
        <div class="like" >
          <div class="good1" v-for="(good,index) in info.bastList" >
            <div class="card card1">
              <img class="card-img-top "  :src="good.image" alt="Card image" style="width:100%;">
              <div class="card-body" >
                <h4 class="card-title cardtil">{{good.store_name}}</h4>
                <div style="display: flex">
                  <div style="width: 100%;">
                    <div class="card-text">
                      <span style="font-weight: bolder;font-size: 22px;">{{Gbi}}</span>
                      <span>G币</span>
                    </div>
                    <div v-if="progressbar === '10'">
                      <div class="jindutiao">
                        <div class="skills css1">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '20'">
                      <div class="jindutiao">
                        <div class="skills css2">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '30'">
                      <div class="jindutiao">
                        <div class="skills css3">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '40'">
                      <div class="jindutiao">
                        <div class="skills css4">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '50'">
                      <div class="jindutiao">
                        <div class="skills css5">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '60'">
                      <div class="jindutiao">
                        <div class="skills css6">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '70'">
                      <div class="jindutiao">
                        <div class="skills css7">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '80'">
                      <div class="jindutiao">
                        <div class="skills css8">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '90'">
                      <div class="jindutiao">
                        <div class="skills css9">{{progressbar}}%</div>
                      </div>
                    </div>
                    <div v-if="progressbar === '100'">
                      <div class="jindutiao">
                        <div class="skills css10">{{progressbar}}%</div>
                      </div>
                    </div>
                  </div>

                  <button type="button" class="btn btn-warning pinbao">去拼宝</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="blank">-----------我是有底线的-----------</div>

    </div>

    <!--底部导航栏-->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="apps-o" icon="apps-o">我参与的</van-tabbar-item>
      <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="user-0" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  import { getHomeData } from "../api/public";
  export default {
    name:'demo',
    data(){
      return{
        active:'0',
        participationUrl:'http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc9934a7c.png',
        imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
        peopleamount:'997,920',
        Gbi:'99',
        banner:[],
        menus:[],
        info: {
          fastList: [],
          bastBanner: [],
          firstList: [],
          bastList: []
        },
        parts4:[
          {imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
          {imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'}
        ],
        progressbar:'50',
      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },

    },
    mounted:function() {
      let that = this;
      getHomeData().then(response=>{
          that.$set(that,"banner", response.data.banner);
          that.$set(that, "menus", response.data.menus);
          that.$set(that, "info", response.data.info);
        })
        .catch(function (error) {
          alert("请求失败")
        })
    }
  }
  //  http://ggl.zscoupon.com/public_api/index
</script>

<style>
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;background-image: linear-gradient(to right, #fa4209, #fa7e58, #ff5f36);color: white;font-family: 幼圆;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:22px}
  .head .headright{float:right;margin-right:15px;font-size:20px}

  .part1{display: flex;background: #ff3131;height: 180px;background-image: linear-gradient(to right, #fa4209, #fa7e58, #ff5f36);position: relative;margin-bottom: -15%;}
  .part1 .accumulatted1{margin:10% 5%;height: 80px;width:100%;}
  .part1 .accumulatted2{display: inline-block;float: left}
  .part1 .peopleamount{width:40px;height: 40px;margin-right: 3px;background: white;}
  .part1 .accumulatted3{display: inline-block;float: left;font-size:16px;color: white;}
  .part1 .search{width:55%;border-radius: 25px;float: right;height:50px;padding-left:3%;font-size:18px;}
  .part2 .slideshow1{display:block;margin:0 auto;width:90%;max-width:90%;height:180px;border-radius: 15px;}

  .part3{width: 23%;display: inline-block;float: left;margin-left:5px;margin-top: 10px}
  .part4{width: 47%;display: inline-block;float: left;margin-left:7px;border-radius: 25px;}
  .part4_1{-webkit-justify-content:center;width: 96%;height:140px;display: inline-block;float: left;border-radius: 10px;margin-top: 10px;margin-left: 2%}
  .selected{width: 96%;background-color: antiquewhite;border-radius: 5px;margin-left: 2%;float: left;margin-top:10px;padding: 5px}
  .selectedbrand{text-align: center;font-size: 22px;margin:10px 0;font-weight: bolder}
  .selectedcontent{width: 23%;display: inline-block;float: left;margin-left:5px;}
  .part6{-webkit-justify-content:center;width: 96%;height:140px;display: inline-block;float: left;border-radius: 10px;margin-top: 10px;margin-left: 2%}
  .like{
    float: left;margin-top:10px;
  }
  .like1{
    font-size: 20px;font-weight: bold;margin-left: 5%;text-align: left;width: 100%;
  }
  .good1{
    width: 47%;float:left;margin-top:5px;margin-left:2%;
  }
  .card1{
    border-radius: 10px;margin-left: 1%;margin-right: 5px;
  }
  .card-text{
    color: #f65959;font-size: 18px;text-align: left;margin-left: 15px;width: 70%;
  }
  .card-title{margin-bottom: 0;}
  .pinbao {
    width: 40%;height: 35px;text-align: center;font-size:15px;color: white;margin-right: 3%;line-height: 20px;
  }
  .btn{padding:5px 12px;border-radius: 20px;}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .cardtil{text-align: left;font-size: 20px;padding:8px;}
  .yipin{display: block;font-size:13px;margin:8px 3px 15px 10px;float:left;border:1px solid #e88e1c;width:100%;border-radius:10px;}
  .card-body{padding:0px;}
  .jindutiao{width: 100%;background-color: #dddddd;height: 20px;line-height: 20px;border-radius: 20px;margin: 10px;color: white}
  .skills {text-align: right;padding-right: 20px;line-height: 20px;}
  .css1 {width: 50%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;}
  .css2 {width: 55%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;}
  .css3 {width: 60%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css4 {width: 65%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css5 {width: 70%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css6 {width: 75%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css7 {width: 80%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css8 {width: 85%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css9 {width: 90%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}
  .css10 {width: 100%; background-color: #f18944;height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;}

</style>
