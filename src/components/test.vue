<template>
    <div id="demo">
      <!--头部导航栏-->
      <van-nav-bar
        title="猪猪商城"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <!--内容-->
      <div>
        <!--part1-->
        <div class="accumulatted1">
          <div class="accumulatted2"><img :src="imgUrl" class="peopleamount"></div>
          <div class="accumulatted3">
            <div>累计参与</div>
            <div>{{peopleamount}}人</div>
          </div>
          <input type="text" class="form-control input-lg search" placeholder="输入商品名称搜索" >
        </div>


        <!--part2 轮播图-->
        <div>
          <van-swipe :autoplay="2000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" class="slideshow1" style=""/>
            </van-swipe-item>
          </van-swipe>
        </div>

        <!--part3-->
        <div>
          <div class="part3" v-for="(part3,index) in parts3" :key="index">
            <img :src="part3.imgUrl" style="width:100%">
            <p style="text-align: center">{{part3.name}}</p>
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

        <!--part5-->
        <div class="selected">
          <p class="selectedbrand">精选品牌</p>
          <div class="selectedcontent"  v-for="(select,index) in selects" :key="index">
            <img :src="select.imgUrl" style="width:100%">
            <p style="text-align: center">{{select.name}}</p>
          </div>
        </div>

        <!--part6-->
        <div style="">
          <img :src="imgUrl" class="part6">
        </div>

        <!--part7-->
        <div class="like">
          <p class="like1">猜你喜欢</p>
          <div class="good1" v-for="(good,index) in goods" >
            <div class="card card1">
              <img class="card-img-top" :src="good.goodsUrl" alt="Card image" style="width:100%">
              <div class="card-body">
                <h4 class="card-title">{{good.goodsName}}</h4>
                <p class="card-text card-text">99G币</p>
                <a href="#" class="btn btn-warning pinbao">去拼宝</a>
              </div>
            </div>
          </div>
        </div>

        <div class="blank">-----------我是有底线的-----------</div>

      </div>

      <!--底部导航栏-->
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">我参与的</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
      name:'demo',
      data(){
        return{
          active:'true',
          imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
          peopleamount:'997,920',
          images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg',
          ],
          parts3:[
            {name:'新手指南',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'充值',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'邀请好友',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'我的财富',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'}
          ],
          parts4:[
            {imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'}
          ],
          selects:[
            {name:'BRAUN',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'施华',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'shiseido',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'MONT',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'TISSOT',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'玫珂菲',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'Champion',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
            {name:'上下',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
          ],
          goods:[
            {goodsName: '小白鞋',goodsUrl:'https://i.loli.net/2020/06/06/LCnI3pqKi1Drevc.jpg'},
            {goodsName: '长裤',goodsUrl: 'https://i.loli.net/2020/06/06/DPZcYpfBtXTVbzK.jpg'},
            {goodsName: '白鞋',goodsUrl: 'https://i.loli.net/2020/06/06/LCnI3pqKi1Drevc.jpg'},
            {goodsName: 'da长裤',goodsUrl: 'https://i.loli.net/2020/06/06/DPZcYpfBtXTVbzK.jpg'},
          ]
        }
      },
      methods:{
        onClickLeft() {
          alert('返回');
        },

      }
    }
</script>

<style>
  .slideshow1{
    display:block;margin:0 auto;width:90%;max-width:90%;height:auto;border-radius: 25px;
  }
  .accumulatted1{
    margin:25px 8px ;height: 80px
  }
  .accumulatted2{
    display: inline-block;float: left
  }
  .peopleamount{
    width:50px;height: 50px;margin-right: 3px
  }
  .accumulatted3{
    display: inline-block;float: left;
  }
  .search{
    width:63%;border-radius: 25px;float: right
  }
  .part3{
    width: 23%;display: inline-block;float: left;margin-left:5px;margin-top: 10px
  }
  .part4{
    width: 47%;display: inline-block;float: left;margin-left:7px;border-radius: 25px;
  }
  .part4_1{
    -webkit-justify-content:center;width: 96%;height:140px;display: inline-block;float: left;border-radius: 10px;margin-top: 10px;margin-left: 2%
  }
  .selected{
    width: 96%;background-color: antiquewhite;border-radius: 5px;margin-left: 2%;float: left;margin-top:10px;padding: 5px
  }
  .selectedbrand{
    text-align: center;font-size: larger
  }
  .selectedcontent{
    width: 23%;display: inline-block;float: left;margin-left:5px
  }
  .part6{
    -webkit-justify-content:center;width: 96%;height:140px;display: inline-block;float: left;border-radius: 10px;margin-top: 10px;margin-left: 2%
  }
  .like{
    margin-left: 3%;float: left;margin-top:10px;
  }
  .like1{
    font-size: 20px;font-weight: bold
  }
  .good1{
    width: 48%;float:left;margin-top:5px
  }
  .card1{
    border-radius: 10px;margin-left: 5px;margin-right: 5px;
  }
  .card-text{
    color:indianred;float: left;font-size: 22px
  }
  .pinbao{
    color:indianred;border-radius: 25px;float:right
  }
  .blank{
    margin-bottom: 70px;
    margin-top:8px;
    text-align: center;
    float:left;
    width:100%;
    height:auto;
    color:darkgrey;
  }
</style>
