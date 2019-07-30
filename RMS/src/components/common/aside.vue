<template>
    <div class="asidePart">
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isShow">
   <el-menu-item index="1" class='menu-title'>
    <i class="el-icon-date"></i>
    <span slot="title" class="aside-title">后台系统管理</span>
  </el-menu-item>

  <el-submenu :index='item.index' v-for='(item,index) in menuList' :key='index'>
    <template slot="title">
      <i :class='item.i'></i>
      <span slot="title">{{item.title}}</span>
    </template>
    <el-menu-item-group v-for='(item,index) in item.menu' :key='index'>
      <el-menu-item :index="item.index" @click="meunItem(item)">{{item.name}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
    </div>
</template>
<script>
import '@/assets/style/aside.css'
import menuData from '@/assets/data/menu.json'
export default {
    components:{
        menuData
    },
    data(){
     return{
         isShow:{
             type:Boolean
         },
         menuList:[],
         menuItem:{},
     }
   },
   props:{
     isCollapse:{
         type:Boolean
     }
   },
   watch:{
      isCollapse(val){
          this.isShow=this.$props.isCollapse
      }
   },
   methods:{
      meunItem(item){
        this.menuItem=item;
        this.$emit('menuItem',this.menuItem)
      },
   },
   mounted(){
       this.menuList=menuData
   }
}
</script>

