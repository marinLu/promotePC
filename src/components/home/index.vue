<template>
  <div>
    <h1>{{title}}</h1>
    <div style="margin-top: .3rem">
      <div class="searchPic">
        <div style="text-indent: 0">
          <div
            class="box"
            style="margin-left: .2rem;position: relative;width: 3.24rem;height: 3.98rem;border: 1px solid #009fe8;text-align: center">
            <input
              ref="picinputs"
              style="position: absolute;left: -9999px;"
              id="id"
              @change="handlechange"
              type="file">
            <label
              style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;"
              for="id"/>
            <i
              style="font-size: 1.14rem;margin-top: 45%;color: #009fe8"
              class="el-icon-circle-plus-outline"/>
            <div
              @mouseenter="overShow"
              @mouseleave="outHide"
              @click="cancelOldPic"
              v-if="oldPic"
              style="height: 100%;width: 100%;position: absolute;z-index: 11;top: 0;">
              <img
                width="100%"
                height="100%"
                :src="dataUrl"
                alt="">
              <div
                v-if="cancelBac"
                style="position: absolute;width: 100%;height: 100%;top: 0;background: rgba(51,51,51,.6);text-align: center;line-height: 3.98rem">取消</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
              title: '',
              dataUrl: '',
              oldPic: false,
              cancelBac: false
            }
        },
        created() {
        },
        mounted() {
          this.$store.commit('setHomeTitle','学习flex布局')
          this.title = this.$store.getters.getHomeTitle
        },
        methods: {
          imgPreview (file) {
            let self = this
            if (!file || !window.FileReader) return
            if (/^image/.test(file.type)) {
              // 创建一个reader
              let reader = new FileReader()
              // 将图片将转成 base64 格式
              reader.readAsDataURL(file)
              // 读取成功后的回调
              reader.onloadend = function () {
                self.dataUrl = this.result
              }
            }
          },
          handlechange (e) {
            let inputDOM = this.$refs.picinputs
            if (e.target.value !== '') {
              if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
                return this.$message('上传的图片格式不正确，请重新选择')
              }
              // 通过DOM取文件数据
              this.imgPreview(inputDOM.files[0])
              this.cancelBac = false
              this.oldPic = true
              e.target.value = ''
            }
          },
          cancelOldPic () {
            this.dataUrl = ''
            this.oldPic = false
            this.cancelBac = false
          },
          overShow () {
            this.cancelBac = true
          },
          outHide () {
            this.cancelBac = false
          },
        }
    }
</script>

<style scoped>

</style>
