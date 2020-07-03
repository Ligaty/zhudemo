<template>
  <div id="demo" class="AddAddress">
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

          <van-field
            readonly
            clickable
            label="城市"
            :value="value"
            placeholder="选择城市"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
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
        value: '',
        showPicker: false,
        columns: [
          {
            text: '浙江',
            children: [
              {
                text: '杭州',
                children: [{ text: '西湖区' }, { text: '余杭区' }],
              },
              {
                text: '温州',
                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
              },
            ],
          },
          {
            text: '福建',
            children: [
              {
                text: '福州',
                children: [{ text: '鼓楼区' }, { text: '台江区' }],
              },
              {
                text: '厦门',
                children: [{ text: '思明区' }, { text: '海沧区' }],
              },
            ],
          },
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
      save(){
        alert("保存")
      },
      del(){
        alert("删除")
      },
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
    }
  }
</script>

<style>

</style>
