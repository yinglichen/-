<template>
    <div class="hotNews">
       <div class="title">    
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">今日热搜</el-menu-item>
   <el-menu-item index="2">今日热帖</el-menu-item>
               </el-menu>
              </div>

              <div class='dataForm'>
                  <component :is="currentTabComponent"></component>
              
              </div>
    </div>
</template>
<script>
import '@/assets/style/hotNews.css'
import dataTable from  '@/components/content/homePage/pages/control/dataTable.vue'
import hotPost from '@/components/content/homePage/pages/control/hotPost.vue'
export default {
    data(){
        return{
        activeIndex:'1',
        table1:null,
        currentTabComponent:dataTable
        
        }
    },
    components:{
      dataTable,hotPost
    },
    methods:{
     handleSelect(key,keyPath){
         if(key == 2){
             this.currentTabComponent=hotPost
         }else{
             this.currentTabComponent=dataTable
         }
     }
    },
    mounted(){
    }
}
</script>
