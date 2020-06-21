<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft" ><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >购物车</span>
      <span class="headright" @click="onClickLeft"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->

    <div class="container">
      <div class="zhuzhu">
        <div class="zhuzhu1">猪猪乐商城</div>
        <div class="zhuzhu2">编辑</div>
      </div>


      <!--购物车内容-->
      <div v-if="shopCart.length > 0">
        <div v-for="(commodity,index) in shopCart">
          <div class="tianchong"></div>
          <mt-cell-swipe :right="[{content:'删除',
                       style:{background:'red',color:'#fff'},
                       handler:()=>del(index)}]">
            <div>
              <div class="item">
                <div class="shopDetails">
                  <img  :src="commodity.commodityImg">
                  <div class="detailList">
                    <span class="detailName">{{commodity.commodityName}}</span>
                    <div class="listmore"><span>{{commodity.listmorecolor}}</span>；<span>{{commodity.listmoresize}}</span></div>
                    <div class="shopprice">
                      <span class="listprice">￥{{commodity.listprice}}</span>
                      <span class="shopNum">
                        <button @click="btn(false,index)">-</button>
                        <input type="" name="" :value="commodity.listnum" >
                        <button @click="btn(true,index)">+</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </mt-cell-swipe>
        </div>
      </div>
      <div v-else>
        <van-empty description="您的购物车还是空的" style="height: 350px"/>
        <button type="button" class="btn btn-warning" style="margin-bottom: 100px;">去逛逛</button>
      </div>
      <div class="tianchong"></div>

<!--      <mt-cell-swipe :right="[{content:'select',-->
<!--                     style:{background:'red',color:'#fff'},-->
<!--                     handler:()=>this.$messagebox('删除')}]">-->
<!--      </mt-cell-swipe>-->



<!--      购物车底部付款-->
      <div class="footer">
        <div class="foot-left">
          <div class="foot-left1">已选(1)</div>
          <div class="foot-left2">合计
            <span>￥{{totalprice}}</span>
          </div>
        </div>
        <div class="footer-right">去结算</div>
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
        show:'true',
        shopCart:[{
          commodityImg:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
          commodityName:'Apple/苹果 10.5 英寸 iPad Air',
          listmorecolor:'银色',
          listmoresize:'256G',
          listprice:"6040.00",
          listnum:1,
        },
          {
            commodityImg:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
            commodityName:'Apple/苹果 10.5 英寸 iPad Air',
            listmorecolor:'银色',
            listmoresize:'256G',
            listprice:"6040.00",
            listnum:1,
          },
          {
            commodityImg:'https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg',
            commodityName:'Apple/苹果 10.5 英寸 iPad Air',
            listmorecolor:'银色',
            listmoresize:'256G',
            listprice:"6040.00",
            listnum:1,
          }
        ],

        totalprice:'',

      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      getTotalPrice(){
        //总计
        let price=0;
        this.shopCart.forEach((item,index)=>{
          price += item.listnum * item.listprice
        })
        this.totalprice = price.toFixed(2);//保留i两位小数
      },
      btn(bool,index){
        // console.log(bool,index);
        let shopIndex = this.shopCart[index];
        if(bool){
          //当bool为true时，加
          shopIndex.listnum++;
        }else{
          //当bool为false时，减
          if(shopIndex.listnum<=1){
            return;
          }
          shopIndex.listnum--;
        }
        this.getTotalPrice();
      },
      del(index){
        this.shopCart.splice(index,1);
        this.getTotalPrice();
      }
    },
    mounted() {
      this.getTotalPrice();
    }
  }
</script>

<style>
  body{background: #f5f5f5;}
  .container{
    background: #fff;padding:0;margin-bottom: 10px;
  }
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .footer{
    position: fixed;
    bottom:50px;border-top: 1px solid #ccc;
    display: flex;justify-content: space-between;
    width: 100%;
  }
  .foot-left{
    line-height: 50px;
    font-size: 18px;
    width:70%;
    flex:1;
    display: flex;justify-content: space-between;
  }
  .foot-left1{
    margin-left: 15%;
    text-align: left;
  }
  .foot-left2{
    text-align: right;
    padding-right: 10px;
    justify-content: space-between;
  }
  .foot-left2 span{
    color:red;
  }
  .footer-right{
    background: red;
    color: #ffff;
    width:30%;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  .zhuzhu{
    line-height: 65px;
    font-size: 18px;
    height: 50px;
    display: flex;justify-content: space-between;
    margin-bottom: 10px;
  }
  .zhuzhu1{
    text-align: left;
    padding-left: 5%;
  }
  .zhuzhu2{
    color:#808080;
    text-align: right;
    padding-right: 5%;
  }
  .tianchong{height: 15px;background: #efefef;z-index:997;width: 100%}
  .item{padding-right:20px;z-index:998;margin-bottom: 12px;}
  .shopDetails{background:#fff;display: flex;text-align: left;padding-top:18px;line-height: 30px;}
  .shopDetails img{width:100px;margin-right: 3%}
  .detailName{font-size: 19px;font-weight: bold;}
  .listmore{color: #e5e1e1}
  .shopprice{margin-top:10px;}
  .listprice{font-size: 19px;font-weight: bold;}
  .shopNum{text-align: right;margin-left: 40px;}
  .shopNum button{width: 31px;height: 28px;text-align:center;background: #e0e0e0;color: #58595b;border:none;outline: none;}
  .shopNum input{width:37px;height: 25px;border:none;text-align: center;outline: none;}
  .mint-cell-swipe-button{line-height: 180px;}
</style>
