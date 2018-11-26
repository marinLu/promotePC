<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
              title:''
            }
        },
        created() {
        },
        mounted() {
          this.$store.commit('setHomeTitle','学习flex布局')
          this.title = this.$store.getters.getHomeTitle
        },
        methods: {}
    }
</script>

<style scoped>

</style>
