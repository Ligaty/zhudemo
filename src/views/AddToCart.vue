<template>
  <div id="demo" class="AddToCart">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >订单列表</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>

      <van-cell is-link title="" @click="mshow" />
<!--      part1-->
      <van-action-sheet v-model ="show" >
        <div class="part1">
          <div class="Cimg"><img src="https://i.loli.net/2020/06/05/1SnCuO7azoFqglB.jpg" style="width:100%;"></div>
          <div class="part1_2">
            <div class="part1_2_1">￥6039.00</div>
            <div>库存 {{kucun}}</div>
            <div>限购 {{xiangou}}</div>
          </div>
        </div>
        <hr/>
<!--        part2-->
        <div class="part2" v-for="(shuxing,a) in shuxings">
          <div class="fenlei">颜色分类</div>
          <div style="display: flex">
            <div  @click="change">
              <div v-if="acclass === false">
                <div class="kuang">深空灰色</div>
              </div>
              <div v-if="acclass === true">
                <div class="kuang1">深空灰色</div>
              </div>

            </div>
            <div  @click="change">
              <div v-if="acclass === false">
                <div class="kuang">金色</div>
              </div>
              <div v-if="acclass === true">
                <div class="kuang1">金色</div>
              </div>
            </div>
            <div  @click="change">
              <div v-if="acclass === false">
                <div class="kuang">银色</div>
              </div>
              <div v-if="acclass === true">
                <div class="kuang1">银色</div>
              </div>
            </div>
          </div>

          <div class="rongliang">存储容量</div>
          <div style="display: flex">
            <div  @click="change">
              <div v-if="acclass === false">
                <div class="kuang">256G</div>
              </div>
              <div v-if="acclass === true">
                <div class="kuang1">256G</div>
              </div>
            </div>
            <div  @click="change">
              <div v-if="acclass === false">
                <div class="kuang">64G</div>
              </div>
              <div v-if="acclass === true">
                <div class="kuang1">64G</div>
              </div>
            </div>

          </div>

<!--          part3-->
          <div class="part3">
            <div class="shuliang">数量</div>
            <div class="jiajian"><van-stepper v-model="value" style="line-height: 50px;"/></div>
          </div>
        </div>

<!--        part4-->
        <div class="part4">确认</div>

      </van-action-sheet>



    </div>




  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
        show:false,
        price:6039.00,
        chang:'kuang',
        acclass:false,
        value:'1',
        kucun:'100',
        xiangou:'1',
        shuxings:[
          {
            fenlei:['深空灰色','金色','银色'],
            rongliang:['256G','64G']
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
      mshow(){
        this.show = true;
      },
      change(){
        this.acclass = !this.acclass;
      },
      change1(){
        this.acclass = !this.acclass;
      }
    }
  }
</script>

<style>

</style>
