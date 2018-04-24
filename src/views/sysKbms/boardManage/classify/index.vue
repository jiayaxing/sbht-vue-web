<template>
  <div class="app-container">
    <el-table
      :data="classifyList"
      size="mini"
      style="width: 100%;">
      <el-table-column
      prop="name"
      label="分类"
      align="center">
      </el-table-column>
      <el-table-column
      prop="name"
      label="创建人"
      align="center">
      </el-table-column>
      <el-table-column
      prop="createTime"
      label="创建时间"
      :formatter="formatCreateTime"
      align="center">
      </el-table-column>
      <el-table-column
      prop="address"
      label="操作"
      align="center">
        <template slot-scope="scope">
          <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="classify-Pagination">
      <el-pagination
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
  </div>
  </div>
</template>

<script>
import { categoryQuery } from '@/api/kbms/index.js'
import { dateFormat } from '@/utils/validate.js'
export default {
  name:'classifyManage',
  data() {
    return {
      pageSize:10,
      scene:'doc',
      // currPage:'0'
      classifyList:null,
      total:'',
      pageNum:'',
      pageSize:10,
      total:0
    }
  },
  created() {
    this.getClassifyList(0)
  },
  methods:{
    getClassifyList(currPage) {
      const param = {
            "categoryId": "",
            "ifPage": true,
            "pageNum": currPage,
            "pageSize": this.pageSize,
            "scene": this.scene,
            "sortList": [
              {
                "code": "createTime", // 排序条件
                "value": "desc" // "asc"  升序    desc 降序
              }
            ]
          }
      categoryQuery(param).then((res)=>{
        this.classifyList = res.data.categories
        this.total = res.data.total
        this.pageSize = res.data.pageSize
      })
    },
    handleEdit() {

    },
    formatCreateTime(row, column, cellValue) {
      return dateFormat(cellValue,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-container{
    display: flex;
    flex-direction: column;
  }
  .classify-Pagination{
    padding-top: 10px;
    text-align:right;
    padding-right: 20px;
  }
</style>
