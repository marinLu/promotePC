<template>
  <div class="login-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="loginBox ">
        <div class="imgBox">
          <img class="" src="../../assets/image/111.png" alt="">
        </div>
      <div class="userMessage">
        <el-row :gutter="20" class="first">
          <el-col :span="7" class="userName">用户名：</el-col>
          <el-col :span="12">
            <el-input
            placeholder="请输入用户名"
            v-model="userName">
          </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7" class="password">密码：</el-col>
          <el-col :span="12">
            <el-input
              placeholder="请输入用户名"
              v-model="password">
            </el-input>
          </el-col>
        </el-row>
      </div>
      <el-button class="button" @click="toHome">登录</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
              userName:'',
              password:''
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
          toHome(){
            this.$router.push('/treeTable')
          },
          test(){
            console.log(this.$http)
          }
        }
    }
</script>

<style scoped>
  #particles-js {
    background: #10100F;
  }
  .login-container{
    position: relative;
  }
  .loginBox{
    text-align: center;
    width: 600px;
    height: 300px;
    position: absolute;
    top:30%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .imgBox{
    margin: 0 auto;
    width: 100px;
  }
  .imgBox img{
    width:100%;
  }
  .first{
    margin: 30px 0;
  }
  .userName, .password{
    color: #F8D818;
    text-align: right;
    height: 40px;
    line-height: 40px;
  }
  .button{
    color: #fff;
    margin-top: 50px;
    width: 30%;
    background-image:linear-gradient(to right, #F8D818 50% ,   deeppink 100%);
  }
</style>
