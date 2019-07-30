<template>
    <div class="control">
        <el-row :gutter="20">
       <el-col :span="16">
           <div class="content" >
      <el-row :gutter="20">
         <el-col :span="12">
             <!-- 快捷方式 -->
             <fasterWay/>
             </el-col>
            <el-col :span="12">
                <!-- 待办事项 -->
             <tdList/>
             </el-col>
           </el-row>
<!-- 数据概览 -->
           <div class='echarts-view'>
            <dataView/>
           </div>
           <hotNews/>
           </div>
           </el-col>
       <el-col :span="8">
           <div>
               <versionInfo/>
               
           </div>
           <div>
               <progressList/>
           </div>
       </el-col>
       </el-row>
    </div>
</template>
<script>
import '@/assets/style/control.css'
import fasterWay from '@/components/content/homePage/pages/control/fasterWays.vue'
import tdList from '@/components/content/homePage/pages/control/toDoList.vue'
import dataView from '@/components/content/homePage/pages/control/dataView.vue'
import hotNews from '@/components/content/homePage/pages/control/hotNews.vue'
import versionInfo from '@/components/content/homePage/pages/control/versionInfo.vue'
import progressList from '@/components/content/homePage/pages/control/effectReport.vue'
export default {
    name:'control',
    components:{
      fasterWay,
      tdList,
      dataView,
      hotNews,
      versionInfo,
      progressList
    },
    data(){
    return{
        waysList:null,
        icontFont:null,
        
    }
    },
    methods:{
       
    },
    mounted(){
    }
}
</script>

