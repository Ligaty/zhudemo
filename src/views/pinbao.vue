<template>
  <div id="demo" class="pinbaoye">
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
          <img v-lazy="imgUrl" class="part4_1">
        </div>
        <!--part2 搜索框-->
        <div>
          <router-link :to="'/search'">
            <div style="width:65%;border-radius: 25px;border:1px solid #bfbcbc;float: left;margin:2%;margin-top:4%;height:50px;background: white">
              <span><input type="text" class="form-control input-lg search " placeholder="输入商品名称搜索" ></span>
              <span class="glyphicon glyphicon-search searchkuang" style="width:10%"></span>
            </div>
          </router-link>
          <span><img v-lazy="imgUrl" class="searchdou" style=""></span>
        </div>


        <!--part3-->
        <div class="" style="margin-bottom:10px;">
          <div style="">
            <img v-lazy="imgUrl" class="part3_1" style="">
          </div>
          <div style="" class="part3_2">
            <div class="part3" v-for="(part3,index) in parts3" :key="index">
              <img v-lazy="part3.imgUrl" style="width:100%">
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




