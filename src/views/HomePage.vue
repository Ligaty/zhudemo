<template>
  <div id="demo" class="homepage">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>
      <!--part1-->
      <div></div>
      <div class="part1">
        <div class="accumulatted1">
          <div style="width:50%">
            <div class="accumulatted2"><img v-lazy="participationUrl" class="peopleamount"></div>
            <div class="accumulatted3">
              <div>累计参与</div>
              <div>{{peopleamount}}人</div>
            </div>
          </div>
          <!--          搜索框-->
          <router-link :to="'/search'">
            <div class="input-group input-group-1">
              <span class="outsearch">
                <span style="width: 90%"><input type="text" class=" search " style="float:left;display: flex" placeholder="输入商品名称搜索" >
                  <span class="glyphicon glyphicon-search searchkuang" style="width:10%"></span>
                </span>
              </span>
            </div>
          </router-link>

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
      <div style="width:100%;overflow: hidden;flex-wrap: wrap">

          <div class="part3" >
              <router-link :to="menu.wap_url ? menu.wap_url : ''" class="item" v-for="(menu,index) in menus.slice(0,4)" :key="index">
                  <img v-lazy="menu.pic" style="width:60%">
                  <p style="text-align: center;font-size:15px;margin-bottom: 3px;">{{menu.name}}</p>
              </router-link>
          </div>

      </div>

      <!---->
      <div style="overflow: hidden">
        <div style="display: flex">
          <div v-for="(part4,index) in parts4" :key="index" >
            <img v-lazy="part4.imgUrl" class="part4">
          </div>
        </div>
          <div style="">
            <img v-lazy="imgUrl" class="part4_1">
          </div>

      </div>

      <!--part5 精选品牌-->
      <div class="selected">
        <p class="selectedbrand">精选品牌</p>
        <div class="selectedcontent"  v-for="(fastList,index) in info.fastList" :key="index">
          <img v-lazy="fastList.pic" style="width:100%;border-radius: 8px;margin:7px 0;">
          <p style="text-align: center;font-size:16px;">{{fastList.cate_name}}</p>
        </div>
      </div>

      <!--part6-->
      <div style="">
        <img v-lazy="imgUrl" class="part6">
      </div>
      <div style="">
        <img v-lazy="imgUrl" class="part6">
      </div>


      <!--part7-->
      <div class="part7">
        <p class="like1">猜你喜欢</p>
        <div class="part7" >
          <div class="good1" v-for="(good,index) in info.bastList" @click="goDetail(good)" :key="index">
            <div class="card card1">
              <span class="jiaobiao">拼宝</span>
              <img class="card-img-top "  v-lazy="good.image" alt="Card image" style="width:100%;position: relative;">
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
  import { getHomeData } from "../api/public";
  import { goShopDetail } from "../libs/order";
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
      // 商品详情跳转
      goDetail(item) {
        goShopDetail(item).then(() => {
          this.$router.push({ path: "/detail/" + item.id });
        });
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


