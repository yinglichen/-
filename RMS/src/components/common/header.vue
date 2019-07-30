<template>
    <div >
      <div class="headerPart">
       <div class="leftPart">
      <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click='asideOnOff()'><i class='el-icon-caret-left'></i></el-menu-item>
      <el-menu-item index="2"><i class="el-icon-refresh"></i></el-menu-item>
      <el-menu-item index="4"> <input placeholder="搜索..."/></el-menu-item>
    </el-menu>
       </div>
       <div class='rightPart'>
  <el-menu class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="5"><i class='el-icon-bell'></i></el-menu-item>
  <el-menu-item index="6"><i class="el-icon-tickets"></i></el-menu-item>
  <el-submenu index="7">
    <template slot="title">姓名</template>
    <el-menu-item index="7-1">基本资料</el-menu-item>
    <el-menu-item index="7-2">修改密码</el-menu-item>
    <el-menu-item index="7-3">退出</el-menu-item>
  </el-submenu>
  <el-menu-item index="8"> <i class="el-icon-more"></i></el-menu-item>
</el-menu>
       </div>
</div>
  <div class='breadCrumb' v-if='menuIndex != "2-1"'>
   <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
  <el-breadcrumb-item v-if='menuName!=""'>{{menuName}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{menuList.name}}</el-breadcrumb-item>
</el-breadcrumb>
     </div>
    </div>
</template>
<script>
import '@/assets/style/header.css'
export default {
    name:'headerPart',
     data(){
        return{
           isCollapse: true,
           menuList:'',
           menuIndex:'2-1',
           index:null,
           menuName:'',
        }
     },
     props:{
      menuData:'',
     },
      watch:{
      menuData(val){
          this.menuList=this.$props.menuData
          this.menuIndex=this.menuList.index
          var _arr
          _arr=this.menuIndex.split('-')
          this.index=_arr[0]
           if(this.index == 3){
            this.menuName='个人中心'
          }else if(this.index == 4){
            this.menuName= '角色管理'
          }else if (this.index ==5){
            this.menuName ='高级'
          }else if (this.index == 6){
            this.menuName ='设置'
          }
      }
   },
     methods:{
       asideOnOff(){
         this.isCollapse= !this.isCollapse
         this.$emit('asideOnOff',this.isCollapse)
       }
     }
}
</script>

 
 

