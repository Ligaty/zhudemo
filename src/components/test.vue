<template>



  <div class="content" id="mingxinpian">


    <!--头部导航栏-->
    <nav class="navbar navbar-default navbar-fixed-top "  role="navigation" >
      <div style="font-size:25px;font-family:幼圆;color:grey;font-weight:bold">潮 魂</div>
    </nav>

    <div class="center-block img-thumbnail " style="margin: 4%;margin-top: 13%;padding:2%">
      <img :src="cardurl" alt="明信片" class="img-responsive ">
    </div>
    <img src="https://i.loli.net/2020/03/27/QBOpuWUbgLR3DZc.png" class="img-responsive ">
    <div style="font-size: 28px;font-family: 幼圆;color: darkcyan ;margin: 20px">
      {{message}}

      <LinkButton @click="alert1()" class="glyphicon glyphicon-heart-empty">收藏</LinkButton>
    </div>

    <!--            可接广告-->
    <div style="margin-top: 8%;margin-left: 70%;width: 80px;height: 80px;" class="text-right img-responsive">
      <img :src="guanggao" class="img-responsive ">
    </div>

    <div style="margin-top:15%"></div>

    <!--底部导航栏-->
    <div class="footer">
      <div class="container">

        <ul class="nav nav-pills footer  ">
          <li class="nav-item col-xs-5" style="text-align:center">
            <a @click="toditu()" class="nav-link " href="#" style="font-size:30px">地图</a>
          </li>
          <li class="nav-item col-xs-1" style=""></li>
          <li class="nav-item col-xs-5" style="">
            <a @click="towode()" class="nav-link" href="#"  style="font-size:30px">我的</a>
          </li>
           
        </ul>

      </div>
    </div>


  </div>


</template>
<style>
  .footer {
    border: 0 solid rgb(210, 210, 210);
    position: fixed;
    margin: auto;
    bottom: 0;
    width: 100%;
    height: 65px;
  }
</style>
<script>
  export default {
    name: 'mingxinpian',
    data() {
      return {
        cardId: '',
        message: '',
        cardurl: '',
        guanggao: 'https://i.loli.net/2020/03/27/z6r3MNTEw82CtJx.jpg'
      }
    },
    mounted: function() {
      //this.viewImage = 'https://i.loli.net/2020/03/27/yeKEzOCki6I7mDb.png';
      var postcard = this.$ajax.get('/core/postcard/random')
        .then(response => {
          this.cardId = response.data.data.postcardId
          this.message = response.data.data.postcardSentence
          this.cardurl = response.data.data.postcardImage
        });
    },
    methods: {
      alert1() {
        let _this = this;
        this.$ajax.post(
          "/core/postcard-collect",
          JSON.stringify({
            userId: localStorage.getItem('userId'),
            postcardId: this.cardId,
            postcardSentence: this.message,
            postcardImage: this.cardurl
          }), {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(msg => {
            if (msg.data.code == 200) {
              _this.$messager.alert({
                title: "Alert",
                msg: "已收藏"
              });
            } else {
              alert("收藏失败或者已收藏");
            }
          })
          .catch(msg => {
            alert("收藏失败或者已收藏");
          });

      },
      toditu() {
        this.$router.push({
          path: '/ditu'
        })
      },
      towode() {
        this.$router.push({
          path: '/wode'
        })
      },
    }
  }
</script>



----------
<template>

  <div class="content" id="shantou">

    <!--头部导航栏-->
    <nav class="navbar navbar-default navbar-fixed-top "  role="navigation" >
      <div style="font-size:25px;font-family:幼圆;color:grey;font-weight:bold">潮 魂</div>
    </nav>


    <div class="input-group" style="width:95%;text-size:50px;padding-left:5px">
      <input v-model="search" style="height:35px" type="text" class="form-control input-lg" placeholder="搜索需要输入关键字找到对应的内容">
      <span class="btn btn-primary" style="height:35px" @click="searchName">搜索</span>
    </div>

    <div style="border:1px solid grey;width:80%;margin-left:13px;font-size:17px;padding:4px;">{{search}}</div>
    <img src="https://i.loli.net/2020/03/27/QBOpuWUbgLR3DZc.png" class="img-responsive ">

    <div style="padding:20px" v-for="(view,i) in listObj">
      <img :src="view.viewImage" @click="xiangqing(view.viewId)" style="width:100%;height:230px;">
      <div style="font-size:30px;color: grey;margin:10px 0px 0px 0px">{{view.viewName}}</div>
      <LinkButton @click="alert1(i)" class="glyphicon glyphicon-heart-empty"></LinkButton>
    </div>

    </br>
    <div style="margin-top:15%"></div>

    <!--底部导航栏-->
    <div class="footer">
      <div class="container">

        <ul class="nav nav-pills footer  ">
          <li class="nav-item col-xs-5" style="text-align:center">
            <a @click="toditu()" class="nav-link " href="#" style="font-size:30px">地图</a>
          </li>
          <li class="nav-item col-xs-1" style=""></li>
          <li class="nav-item col-xs-5" style="">
            <a @click="towode()" class="nav-link" href="#"  style="font-size:30px">我的</a>
          </li>
           
        </ul>

      </div>
    </div>


  </div>


</template>
<style>
  .footer {
    border: 0 solid rgb(210, 210, 210);
    position: fixed;
    margin: auto;
    bottom: 0;
    width: 100%;
    height: 65px;
  }

  .shoucang {
    font-size: 32px;
  }

  .shoucang.active {
    color: red;
  }
</style>
<script>
  export default {
    name: 'shantou',
    data() {
      return {
        listObj: [{
          viewId: '',
          viewImage: '',
          viewName: '',

        }],
        search: '',
      }
    },
    mounted: function() {
      //this.viewImage = 'https://i.loli.net/2020/03/27/yeKEzOCki6I7mDb.png';
      var view = this.$ajax.get('/core/view/汕头', {

      }).then(response => {
        this.listObj = response.data.data;
        //var data = response.data;
        //this.viewImage = data.viewImage;
        //this.viewName = data.viewName;
      });
    },
    methods: {

      alert1(i) {
        let viewcollect = false;
        let _this = this;
        this.$ajax.post(
          "/core/collect",
          JSON.stringify({
            userId: localStorage.getItem('userId'),
            viewId: this.listObj[i].viewId,
            viewName: this.listObj[i].viewName,
            viewImage: this.listObj[i].viewImage,
            viewLocate: this.listObj[i].viewLocate,
            viewIntro: this.listObj[i].viewIntro
          }), {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(msg => {
            if (msg.data.code == 200) {
              _this.$messager.alert({
                title: "Alert",
                msg: "已收藏"
              });
            } else {
              alert("收藏失败或者已收藏");
            }
          })
          .catch(msg => {
            alert("收藏失败或者已收藏");
          });
      },
      toditu() {
        this.$router.push({
          path: '/ditu'
        })
      },
      towode() {
        this.$router.push({
          path: '/wode'
        })
      },
      xiangqing(id) {
        this.$router.push({
          path: '/xiangqingye',
          query: {
            viewId: id
          }
        })
      },
      searchName() {
        this.$ajax.get('/core/view/汕头/' + this.search)
          .then(response => {
            this.listObj = response.data.data;
          });
      },
      back(){
        this.$router.go(-1);
      },
    }
  }
</script>

