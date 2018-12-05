<template>
  <div>
    <el-table :data="allData" :row-style="showTr">
      <el-table-column width="120" align="center" alt="选择框"></el-table-column>
      <el-table-column prop="department" label="部门">
        <template slot-scope="scope">
          <div class="tableCon" @click="toggle(scope.row)">
            <div v-if="scope.row._level == 1">
              <span v-for="(space, levelIndex) of scope.row._level" class="" :key="levelIndex"></span>
              <span v-if="toggleIconShow(scope.$index,scope.row)">
            <i v-if="scope.row._expanded==false" class="el-icon-caret-right" aria-hidden="true"></i>
            <i v-if="scope.row._expanded==true" class="el-icon-caret-bottom" aria-hidden="true"></i>
            {{scope.row.department}}
          </span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="numbers" label="工号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="numberNum" label="人数(汇总)"></el-table-column>
      <el-table-column prop="wages" label="基本工资(平均)"></el-table-column>
      <el-table-column prop="attendance" label="全勤(汇总)"></el-table-column>
    </el-table>
  </div>

</template>

<script>
  import formatTreeTable from './tree'
  import {allData} from './data'

  export default {
    name: '',
    data () {
      return {
        allData: allData
      }
    },
    computed: {},
    methods: {
      // 显示行
      showTr (row, index) {
        let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
        row.row._show = show
        return show ? '' : 'display:none;'
      },
      // 展开下级
      toggle (row) {
        let record = row
        record._expanded = !record._expanded
      },
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow (index, record) {
        if (record.children && record.children.length > 0) {
          return true
        }
        return false
      }
    },
    created () {

    },
    mounted () {
      this.allData = formatTreeTable.treeToArray(this.allData, null, null, false)
      // 处理数据
      let allData = this.allData.filter(item => {
        return item._level == 1
      })
      allData.map(item => {
        if (item.children) {
          let temp1 = item.children.map(item1 => {
            return parseInt(item1.numberNum)
          })
          let temp2 = item.children.map(item1 => {
            return parseInt(item1.wages)
          })
          let temp3 = item.children.map(item1 => {
            return parseInt(item1.attendance)
          })
          item.numberNum = temp1.reduce((a,b) => {  // 人数汇总
            return a+b
          })
          item.wages = temp2.reduce((a,b) => {  // 工资汇总
            return a+b
          })
          item.attendance = temp3.reduce((a,b) => {  // 全勤平均
            return a+b
          })
          item.attendance = (item.attendance / item.children.length).toFixed(2)
        }
      })
      console.log(allData)
    }
  }
</script>
<style scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
  }
  .ms-tree-space::before {
    content: "";
  }
  table td {
    line-height: 26px;
  }

  .iconOperation {
    margin-right: 0.3rem;
    cursor: pointer;
  }

  .iconOperation img {
    width: 0.42rem;
  }

  .iconOperation:nth-of-type(2) img {
    width: 0.42rem;
  }
</style>
