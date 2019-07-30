<template>
    <div class='tableList'>
      <el-table
      :border="brShow"
    :data="hotSearchData"
    style="width: 100%">
     <el-table-column
       prop="index"
       label=""
      width="60"
      align='center'

      >
    </el-table-column>
    <el-table-column
      prop="keyWords"
      label="关键词"
      width="300">
    </el-table-column>
    <el-table-column
      prop="searchNum"
      label="搜索次数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="userNum"
      sortable
      label="用户数">
    </el-table-column>
  </el-table>
     <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout=" prev, pager, next, jumper,total, sizes"
      :total="totalNum">
    </el-pagination>
  </div>
    </div>
</template>
<script>
import hotSearch from '@/assets/data/hotSearch.json'
export default {
    data(){
      return{
          hotSearchData:null,
          currentPage: 1,
          totalNum:null,
          currentHotList:null,
          pageSize:10,
          brShow:true,
      }
    },
    methods:{
      indexMethod(index) {
        return index * 2;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted(){
       this.hotSearchData=hotSearch;
       this.totalNum=this.hotSearchData.length
    }
}
</script>

