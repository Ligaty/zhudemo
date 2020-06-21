<template>
  <div id="demo" >
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div class="bg">
      <div>
        <!--part1-->
        <div >
          <img :src="imgUrl" class="part4_1">
        </div>
        <!--part2 搜索框-->
        <div>
          <span><input type="text" class="form-control input-lg search " placeholder="输入商品名称搜索" ></span>
          <span><img :src="imgUrl" class="searchdou" style=""></span>
        </div>


        <!--part3-->
        <div class="" style="margin-bottom:10px;">
          <div style="">
            <img :src="imgUrl" class="part3_1" style="">
          </div>
          <div style="" class="part3_2">
            <div class="part3" v-for="(part3,index) in parts3" :key="index">
              <img :src="part3.imgUrl" style="width:100%">
              <p style="text-align: center;">{{part3.name}}</p>
            </div>
          </div>
        </div>

        <!--part4-->
        <div class="like" >
          <div class="good1" v-for="(good,index) in test" >
            <div class="card card1">
              <img class="card-img-top "  :src="good.image" alt="Card image" style="width:100%;">
              <div class="card-body" >
                <h4 class="card-title">{{good.store_name}}</h4>
                <div style="width: 90%;overflow:hidden;">
                  <div class="card-text card-text" style="">99G币</div>
                  <div class="yipin">已拼{{yipin}}</div>
                </div>
                <a href="#" class="btn btn-warning pinbao">去拼宝</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
      <div class="blank">-----------我是有底线的-----------</div>


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
    name:'demo',
    data(){
      return{
        imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
        searchpin:'',
        active:'0',
        yipin:'70%',
        test:{},
        parts3:[
          {name:'链坠项链',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
          {name:'链坠项链',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
          {name:'链坠项链',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'},
          {name:'链坠项链',imgUrl:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg'}
        ],
        goods:[
          {goodsName: '',goodsUrl:''},
          // {goodsName: '小白鞋',goodsUrl:'https://i.loli.net/2020/06/06/LCnI3pqKi1Drevc.jpg'},
          // {goodsName: '长裤',goodsUrl: 'https://i.loli.net/2020/06/06/DPZcYpfBtXTVbzK.jpg'},
          // {goodsName: '白鞋',goodsUrl: 'https://i.loli.net/2020/06/06/LCnI3pqKi1Drevc.jpg'},
          // {goodsName: 'da长裤',goodsUrl: 'https://i.loli.net/2020/06/06/DPZcYpfBtXTVbzK.jpg'},
        ],
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
    mounted() {
      this.$ajax.get('http://ggl.zscoupon.com/api/index')
        .then(response=>{
          this.test = response.data.data.info.bastList
          console.log(this.test)
        })
        .catch(function (error) {
          alert("请求失败")
        })
    },
  }
</script>

<style>
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .bg{
    background: #f3f3ed;overflow:hidden;
  }
  .part4_1{
    -webkit-justify-content:center;width: 96%;height:140px;display: inline-block;float: left;border-radius: 10px;margin-top: 10px;margin-left: 2%
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
  .search{
    width:65%;border-radius: 25px;float: left;margin:2%;margin-top:4%;color:gray;height:50px;
  }
  input::-webkit-input-placeholder{
    color:lightgray;
  }
  .searchdou{
    margin-top:4%;width:29%;height:50px;border-radius: 25px;margin-right: 2%;
  }
  .part3{
    width: 23%;display: inline-block;margin-left:5px;margin-top: 10px;
  }
  .part3_1{
    width: 96%;height: 150px;
    border-top-left-radius: 10px;
    -moz-border-top-left-radius: 10px;
    -webkit-border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    -moz-border-top-right-radius: 10px;
    -webkit-border-top-right-radius: 10px;
  }
  .part3_2{
    background: white;width: 96%;margin-left:2%;margin-right: 2%;overflow:hidden;
    border-bottom-left-radius: 10px;
    -moz-border-bottom-left-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    -moz-border-bottom-right-radius: 10px;
    -webkit-border-bottom-right-radius: 10px;
  }
  .yipin{display: block;font-size:13px;margin-top:5px;margin:3px;float:left;border:1px solid #e88e1c;width:50%;border-radius:10px;overflow: hidden}
  /*对父级样式加overflow样式：overflow:hidden；；；对父级div标签闭合</div>前加一个clear清除浮动对象：.clear{ clear:both} 可以解决float:left问题*/
  .like{
    background: #f3f3ed;overflow:hidden;width: 100%;margin-left: 2%;
  }
  .like1{
    font-size: 20px;font-weight: bold
  }
  .good1{
    width: 48%;float:left;
  }
  .card1{
    border-radius: 10px;margin:2%;
  }
  .card1 img{height: 200px;}
  .card-text{
    color:indianred;float: left;font-size: 22px
  }
  .card-title{text-align: left;}
  .pinbao{
    color:indianred;border-radius: 25px;float:right
  }
  .card-body{padding:1rem;}
</style>
