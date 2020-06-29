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
          <router-link :to="'/search'">
            <div style="width:65%;border-radius: 25px;border:1px solid #bfbcbc;float: left;margin:2%;margin-top:4%;height:50px;background: white">
              <span><input type="text" class="form-control input-lg search " placeholder="输入商品名称搜索" ></span>
              <span class="glyphicon glyphicon-search searchkuang" style="width:10%"></span>
            </div>
          </router-link>
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

        <!--part7-->
        <div class="part7">
          <p class="like1">猜你喜欢</p>
          <div class="part7" >
            <div class="good1" v-for="(good,index) in info.bastList" @click="goDetail(good)" :key="index">
              <div class="card card1">
                <span class="jiaobiao">拼宝</span>
                <img class="card-img-top "  :src="good.image" alt="Card image" style="width:100%;position: relative;">
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

      </div>

    </div>
      <div class="blank">-----------我是有底线的-----------</div>


    <!--底部导航栏-->
    <div id="footer" class="acea-row row-middle" >
      <router-link
        :to="item.url"
        class="item"
        :class="{ on: item.url === $route.path }"
        v-for="(item, index) in footerList"
        :key="index"
      >
        <div
          class="iconfont"
          :class="item.icon1 + ' ' + (item.url === $route.path ? item.icon2 : '')"
        ></div>
        <div>{{ item.name }}</div>
      </router-link>

    </div>
  </div>
</template>

<script>
  import {getHomeData} from "../api/public";

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
        banner:[],
        menus:[],
        info: {
          fastList: [],
          bastBanner: [],
          firstList: [],
          bastList: []
        },
        progressbar:'50',
        Gbi:'99',
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
      let that = this;
      getHomeData().then(response=>{
        that.$set(that,"banner", response.data.banner);
        that.$set(that, "menus", response.data.menus);
        that.$set(that, "info", response.data.info);
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
    width:85%;text-align: left;border:none;border-radius: 40px;float: left;color: #adabab;height:45px;background: white;
  }
  .searchkuang{color: #e0dada;font-size: 21px;line-height: 45px;width:10%;}

  input::-webkit-input-placeholder {
    /* placeholder颜色 */
    font-color: #c0c3c6;
    /* placeholder字体大小 */
    font-size: 18px;
    font-family: 宋体;
    text-align: left;
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


  .part7 {float: left;margin-top:10px;}
  .part7 .like1{font-size: 20px;font-weight: bold;margin-left: 5%;text-align: left;width: 100%;}
  .part7 .good1{width: 47%;float:left;margin-top:5px;margin-left:2%;}
  .part7 .card1{border-radius: 10px;margin-left: 1%;margin-right: 5px;position: relative}
  .part7 .card-text{color: #f65959;font-size: 18px;text-align: left;margin-left: 15px;width: 70%;}
  .part7 .card-title{margin-bottom: 0;}
  .part7 .pinbao {width: 40%;height: 35px;text-align: center;font-size:16px;font-family:方正仿宋;color: white;margin-right: 3%;line-height: 20px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .btn{padding:5px 12px;border-radius: 20px;}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .part7 .cardtil{text-align: left;font-size: 20px;padding:8px;}
  .yipin{display: block;font-size:13px;margin:8px 3px 15px 10px;float:left;border:1px solid #e88e1c;width:100%;border-radius:10px;}
  .part7 .card-body{padding:0px;}
  .part7 .jindutiao{width: 100%;background-color: #dddddd;height: 20px;line-height: 20px;border-radius: 20px;margin: 10px;color: white;}
  .part7 .skills {text-align: right;padding-right: 20px;line-height: 20px;}
  .part7 .css1 {width: 50%; height: 20px;;line-height: 20px;border-radius: 20px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css2 {width: 55%; height: 20px;;line-height: 20px;border-radius: 20px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css3 {width: 60%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css4 {width: 65%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css5 {width: 70%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css6 {width: 75%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css7 {width: 80%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css8 {width: 85%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css9 {width: 90%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .css10 {width: 100%; height: 20px;;line-height: 20px;border-radius: 20px;font-size: 10px;background-image: linear-gradient(to right, #f5bb2a, #f58b1b, #f34c0a)}
  .part7 .jiaobiao{background-image: linear-gradient(to top right, #f608f0,#e87edb, #f36f0a);position: absolute;top:0;z-index:8;float:left;border-top-left-radius:10px;border-bottom-right-radius:10px;width:36%;height:35px;color:white;font-size:21px}

  .form-control{font-size:0.5rem;}
</style>
