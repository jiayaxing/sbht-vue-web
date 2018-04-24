<template>
  <div class="client-list-container">
    <div class="client-btn-container">
        <el-date-picker
          v-model="searchDate"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small">
        </el-date-picker>
        <div>
          <el-select v-model="value" placeholder="请选择" size="small" style="width:120px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              size="small">
            </el-option>
          </el-select><el-input v-model="input" placeholder="请输入查询内容" style="width:400px" size="small"></el-input>
        </div>
        <el-button type="primary" size="small">搜索</el-button>
    </div>
    <div class="client-list-type">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="已发起" name="start"></el-tab-pane>
        <el-tab-pane label="会诊中" name="going"></el-tab-pane>
        <el-tab-pane label="已完成" name="done"></el-tab-pane>
        <el-tab-pane label="已超时" name="failed"></el-tab-pane>
      </el-tabs>
    </div>
      <el-table
        v-loading="loading"
        :data="clientList"
        size="small"
        align="center"
        style="width: 100%;"
        height="100%">
        <el-table-column
          align="center"
          prop="name"
          label="患者姓名"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          align="center"
          prop="age"
          label="年龄"
          width="50">
        </el-table-column>
        <el-table-column
          align="center"
          label="联系电话">
          <template slot-scope="scope">
            <span class="case-phone">
              {{scope.row.phone}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="cureItem"
          label="治疗项目">
        </el-table-column>
        <el-table-column
          align="center"
          label="病历号">
          <template slot-scope="scope">
            <span class="case-id" @click="handleCaseOpen(scope.row)">
              {{scope.row.caseId}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="consultationTime"
          label="会诊时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="状态">
          <template slot-scope="scope">
            <el-tag
              :type="stateTagType(scope.row.state)"
              size="mini">{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-badge is-dot class="item">
              <el-button size="mini" type="primary" :disabled="scope.row.state==='已超时'"
              @click="handleEdit(scope.row)">进入会诊</el-button>
            </el-badge>
          </template>
        </el-table-column>
      </el-table>
    <div class="client-list-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[10, 20]"
        layout="sizes, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getClientList } from "@/api/client"
export default {
  name: "clientList",
  data() {
    return {
      searchDate: null,
      input: "",
      activeName: "all",
      currentPage2: 1, // 分页 当前页数
      clientList: null,
      loading:true, // 表格加载 loading
      value: "1",      
      options: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "正畸"
        },
        {
          value: "3",
          label: "种植"
        },
        {
          value: "4",
          label: "二期种植"
        },
        {
          value: "5",
          label: "术前"
        },
        {
          value: "6",
          label: "美容"
        },
        {
          value: "7",
          label: "儿科"
        }
      ],
    };
  },
  created() {
    getClientList().then((res)=>{
      this.clientList=res.data.clientList;
      this.loading=false;
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(){ // pageSize 改变时会触发

    },
    handleCurrentChange(){ // currentPage 改变时会触发

    },
    handleEdit(item) {
      this.$confirm('此操作将进入会诊房间, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('SET_CASEDETAIL', item)
          this.$router.push({path:'/consultation'})
          this.$message({
            type: 'success',
            message: '进入会诊房间成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消进入该会诊'
          });          
        });
    },
    handleCaseOpen(item) {
      this.$store.commit('TOGGLE_CASELAYER', true)
      this.$store.commit('SET_CASEDETAIL', item)
    },
    stateTagType(type) {
      if(type == "已发起") {
        return "warning"
      }else if(type == "已超时") {
        return "danger"
      }else if(type == "已完成") {
        return "success"
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.client-list-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .client-btn-container {
    display: flex;
    justify-content: space-between;
  }
  .client-list-pagination{
    text-align: right;
    padding-top: 10px;
  }
  .case-id , .case-phone{
    padding: 5px;
    color: $linkColor;
    cursor: pointer;
  }
}
</style>
