<template>
  <div id="demo">
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
              <div><img :src="headportrait" class="headportrait">
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

<!--      part 2-->
      <div style="background: white;margin:-20px 10px;border-radius: 10px;">
<!--        part 2_1我的拼宝-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div style="text-align: left;font-size: 22px;font-weight: bolder;font-family: 楷体">我的拼宝</div>
            <div style="font-size:17px;color:#a19f9f;margin-left: 150px;margin-top:6px;">全部拼宝 ></div>
          </div>

<!--      part 2_2 图  -->
          <div style="display: flex;text-align: center;margin-left: 10px;">
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">拼宝中</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">已开奖</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">待收货</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">已收货</div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!--      part 3-->
      <div style="background: white;margin:35px 10px;border-radius: 10px;" >
        <!--        part 3_1我的订单-->
        <div style="padding:7px 0">
          <div style="margin-left:30px;display: flex;">
            <div style="text-align: left;font-size: 22px;font-weight: bolder;font-family: 楷体">我的订单</div>
            <div style="font-size:17px;color:#a19f9f;margin-left: 150px;margin-top:6px;">全部订单 ></div>
          </div>

          <!--      part 3_2 图  -->
          <div style="display: flex;text-align: center;margin-left: 10px;">
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">待付款</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">待发货</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">待收货</div>
              </div>
            </div>
            <div style="display:flex;width: 23%">
              <div style="text-align: left;padding-left: 15px;">
                <div><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg"  style="width: 100%;"></div>
                <div style="font-size: 20px;text-align: center;font-family: 楷体;">已完成</div>
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

  export default {
    name:'',
    data(){
      return{
        active:'0',
        name:'吃饭不洗碗',
        time:'2020-02-01',
        headportrait:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
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
  body{background: #f5f5f5;}
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .part1{display: flex;background: #ff3131;height: 180px;z-index:0;background-image: linear-gradient(to right, #f83939 ,#fc5050, #ea7979);}
  .part1 .toubu{text-align: left;padding:60px 40px;font-size: 18px;color:#ffffff}
  .part1 .name{font-size: 20px;}
  .part1 .time{font-size: 16px;margin-top:8px;}
  .part1 .headportrait{width: 80px;border-radius: 50px;margin-top:46px;border:solid 4px white}
</style>
