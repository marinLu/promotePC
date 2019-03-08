<template>
  <div id="app">
    <el-container style="width: 100%;height: 100%">
      <el-aside width="300px" v-show="$route.meta.Aside">
        <div class="imgBox">
          <img class="" src="./assets/image/111.png" alt="">
        </div>
        <el-menu class="side-menu"
                 mode="vertical"
                 :default-active="$route.path"
                 active-text-color="#000"
                 unique-opened
                 router>
          <template v-for="item in $router.options.routes">
            <el-menu-item :index="item.path" v-if="!item.hidden">{{item.name}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header  v-show="$route.meta.header">
            固定的头部
        </el-header>
        <el-main style="background: #d3d3d3;height: 100%">
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
    console.log(this.$router)
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
    background: #303133;
  }
  .el-header{
    color: #ddd;
    background:  #2c3e50;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    height: 102px !important;
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
