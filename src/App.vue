<template>
  <div id="app">
    <el-container style="width: 100%;height: 100%">
      <el-aside width="300px" v-show="$route.meta.Aside">
        <div class="imgBox">
          <img class="" src="./assets/image/111.png" alt="">
        </div>
        <ul>
          <li>树形表格</li>
          <li>多选框</li>
        </ul>
      </el-aside>
      <el-container>
        <el-header  v-show="$route.meta.header">
            固定的头部
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
}
  .el-aside {
    background: lightpink;
  }
  .el-header{
    background: deeppink;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    height: 100px !important;
    line-height: 100px;
  }
.imgBox{
  margin: 0 auto;
  width: 100px;
}
.imgBox img{
  width:100%;
}
</style>
