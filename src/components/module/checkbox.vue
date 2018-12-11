<template>
  <ul>
    <li v-for="item in ceshi" style="margin: 50px">
      <el-checkbox v-model="item.isChecked"  @change="chooseVillage()">{{item.value}}</el-checkbox>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "checkbox",
        data() {
            return {
              ceshi:[{id:1,value:'北京',isChecked:false},{id:2,value:'上海',isChecked:false},{id:3,value:'广州',isChecked:false},{id:4,value:'深圳',isChecked:false},{id:5,value:'郑州',isChecked:false},]
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
          chooseVillage () {
            console.log(this.ceshi)
          }
        }
    }
</script>

<style scoped>

</style>
