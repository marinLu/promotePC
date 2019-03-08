<template>
    <div>
        <multi-cascader :options='optionArea' v-model='isp'  @change='ispChange'></multi-cascader>
      <div></div>
    </div>
</template>

<script>
  import multiCascader from '@/public/multi-cascader'
  import {area} from '../../util/datas'
  import * as three from 'three'
    export default {
        name: "cascader",
        data() {
            return {
              optionArea: area,
              isp:[],
            }
        },
        created() {
        },
        mounted() {
          console.log(this.optionArea)
        },
        methods: {
          ispChange() {

          }
        },
      components: {
        multiCascader
      }
    }
</script>

<style scoped>

</style>
