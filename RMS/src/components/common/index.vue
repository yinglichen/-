<template>
  <div class='homePage'>
    <el-container>
    <el-aside><asidePart :isCollapse='isCollapse' @menuItem='menuItem'/></el-aside>
   <el-container>
     <el-header><headerPart  @asideOnOff="asideOnOff" :menuData='menuData'/></el-header>
     <el-main><mainPart :contentKey='contentKey'/></el-main>
   </el-container>
</el-container>
  </div >
</template>
<script>
import headerPart from '@/components/common/header.vue'
import asidePart from '@/components/common/aside.vue'
import mainPart from '@/components/common/main.vue'
import '@/assets/style/homePage.css'
export default {
   components:{
     headerPart,
     asidePart,
     mainPart,
     
   },
   data(){
     return{
      isCollapse:'',
      menuData:null,
      contentKey:null,
     }
   },
   methods:{
     asideOnOff(data){
       this.isCollapse=data
     },
     menuItem(data){
       this.menuData=data
       this.contentKey=data
     }
   }
   
}
</script>
