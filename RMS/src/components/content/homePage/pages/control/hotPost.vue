<template>
    <div class="hotPost">
        <el-table
      :border="brShow"
    :data="postList"
    style="width: 100%">
     <el-table-column
       prop="index"
       label=""
      width="60"
      align='center'
      >
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="300">
    </el-table-column>
    <el-table-column
      prop="postUser"
      label="发帖者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类别">
    </el-table-column>
      <el-table-column
      prop="clickNum"
      sortable
      label="点击率">
    </el-table-column>
  </el-table>
     <div class="block"  v-if='pageShow=="true"'>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout=" prev, pager, next, jumper,total, sizes"
      :total="totalNum"
     >
    </el-pagination>
    </div>
    </div>
</template>
<script>
import postList from '@/assets/data/hotPost.json'
export default {
    data(){
        return{
         postList:null,
         currentPage: 1,
          totalNum:null,
          currentHotList:null,
          pageSize:10,
          pageShow:false,
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
        this.postList=postList
        if(this.postList.length>this.pageSize){
            this.pageShow=true
        }
    }
}
</script>

