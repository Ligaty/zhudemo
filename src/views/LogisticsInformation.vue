<template>
  <div id="demo" style="LogisticsInformation">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >物流信息</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
<!--    part1-->
    <div v-for="(info,index) in logisticsinfo" style="background: white">
      <div style="display: flex;padding-top:10px;">
        <div style="width: 30%"><img :src="info.img" style="width: 100%"></div>
        <div style="width: 70%;text-align: left;padding:10px;font-size: 17px;">
          <div style="text-overflow: ellipsis;margin-bottom:5px;overflow: hidden;white-space: nowrap;">商品：{{info.name}}</div>
          <div style="color: grey"><span>物流状态：</span><span style="color: orangered">{{info.zhuangtai}}</span></div>
          <div style="color: grey">物流公司：{{info.gongsi}}</div>
          <div style="color: grey">物流单号：{{info.danhao}}</div>
        </div>
      </div>
      <div class="tianchong" style=""></div>
<!--      part2-->
      <van-steps direction="vertical" :active="0" inactive-icon="clock-o"  active-color="orangered" style="text-align: left;" v-for="(sign,inn) in signs" :key="inn">
        <van-step style="font-size: 17px;">
          <h3 >已签收</h3>
          <p style="font-size: 15px;margin-top:5px;">签收人：{{sign.qianshouren}}；投递员：{{sign.toudiyuan}}，电话：{{sign.phone}}</p>
          <p style="font-size: 15px;margin-top:5px;">{{sign.shoujiantime}}</p>
        </van-step>
        <van-step style="font-size: 17px;">
          <h3 >派送中</h3>
          <p style="font-size: 15px;margin-top:5px;">【{{sign.end}}】安排投递，投递员：{{sign.toudiyuan}}，电话：{{sign.phone}}</p>
        </van-step>
        <van-step  style="font-size: 17px;">
          <h3>运输中</h3>
          <p style="font-size: 15px;margin-top:5px;">快件由【{{sign.start}}】发往【{{sign.end}}】</p>
          <p style="font-size: 15px;margin-top:5px;">{{sign.fajiantime}}</p>
        </van-step>
        <van-step  style="font-size: 17px;">
          <h3>快递公司已收件</h3>
          <p style="font-size: 15px;margin-top:5px;">{{sign.lanjiantime}}</p>
        </van-step>

      </van-steps>


    </div>




  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
        logisticsinfo:[
          {
            name:'Apple/苹果 10.5 英寸iPad等等等',
            img:'https://img.yzcdn.cn/vant/ipad.jpeg',
            zhuangtai:'已签收',
            gongsi:'顺丰快递',
            danhao:'1212314152767672'
          }
        ],
        signs:[
          {
            qianshouren:'饱饱',
            toudiyuan:'碗筷',
            phone:'15833928329',
            shoujiantime:'2020.05.13  11:21:01',
            start:'北京朝阳集散中心',
            end:'司岩区顺丰营业部',
            fajiantime:'2020.05.11  09:00:23',
            lanjiantime:'2020.05.11  09:23:23'
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
    }
  }
</script>

<style>
  </style>
