<template>
  <div id="demo">
    <!--头部导航栏-->
    <div class="head">
      <span class="headleft"  @click="onClickLeft"><van-icon name="arrow-left" /></span>
      <span class="headmiddle" >新增地址</span>
      <span class="headright" @click="onClickRight"><van-icon name="ellipsis" /></span>
    </div>

    <!--内容-->
    <div>
      <div class="addressinfo">
        <div class="addressinfo_1" >
          <van-row>
            <van-col span="7"><span class="addressinfo_2" >收件人</span></van-col>
            <van-col span="12"><span ><input placeholder="请输入收货人姓名" class="addressinfo_3" ></span></van-col>
          </van-row>
        </div>
        <hr/>
        <div class="addressinfo_1">
          <van-row>
            <van-col span="7"><span class="addressinfo_2" >手机号码</span></van-col>
            <van-col span="12"><span><input placeholder="请输入手机号码" class="addressinfo_3"></span></van-col>
          </van-row>
        </div>
        <hr/>
        <div class="addressinfo_1">
          <van-row>
            <van-col span="7"><span class="addressinfo_2" >地区</span></van-col>
            <van-col span="12"><span><input placeholder="选择省/市/区" class="addressinfo_3"></span></van-col>
          </van-row>
        </div>
        <hr/>
        <div class="addressinfo_1">
          <van-row>
            <van-col span="7"><span class="addressinfo_2" >详细地址</span></van-col>
            <van-col span="12"><span><input placeholder="街道、门牌号" class="addressinfo_3"></span></van-col>
          </van-row>
        </div>
        <hr/>
        <div class="addressinfo_1">
          <van-row>
            <van-col span="7"><span class="addressinfo_2" >默认地址</span></van-col>
            <van-col span="12"><span><input placeholder="街道、门牌号" class="addressinfo_3"></span></van-col>
          </van-row>
        </div>
        <hr/>
        <div class="save" @click="save" >保存并使用</div>
        <div class="del" @click="del">删除地址</div>

      </div>

    </div>

    <!--底部导航栏-->

  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        active:'0',
      }
    },
    methods:{
      onClickLeft(){
        window.history.back(-1);
      },
      onClickRight(){
        alert("更多")
      },
      save(){
        alert("保存")
      },
      del(){
        alert("删除")
      },
    }
  }
</script>

<style>
  .head{font-weight: bold;background-color: #f5f3f3; padding-top: 20px;padding-bottom: 20px;}
  .head .headleft{float:left;margin-left:15px;font-size:20px;}
  .head .headmiddle{font-size:20px}
  .head .headright{float:right;margin-right:15px;font-size:20px}
  .blank{margin-bottom: 70px;margin-top:8px;text-align: center;float:left;width:100%;height:auto;color:darkgrey;}
  .addressinfo{text-align: left;margin: 0 7%;}
  .addressinfo_1{margin-top: 19px;}
  .addressinfo_2{font-weight: bold;font-size: 18px;margin-right: 8%}
  .addressinfo_3{border: none}
  .save{background: orangered;color: white;border-radius: 3px;height:40px;width: 100%;text-align: center;line-height: 40px;}
  .del{background: #eeebeb;color: #828181;border-radius: 3px;height:40px;width: 100%;text-align: center;line-height: 40px;;margin-top:10px;}
</style>
