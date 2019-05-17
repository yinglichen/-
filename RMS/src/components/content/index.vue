<template>
    <div class='content-index'>
    <a-layout>
      <a-layout-header style='background:#ffffff;'>
          <ul v-for='(item,value) in navList' :key='value'>
              <li @click="goForward"><a-icon type="double-left" /></li>
              <li>{{item.name}}</li>
              <li @click="goBack"><a-icon type="double-right" /></li>
              <li @click="operatePage">页面操作<a-icon type="caret-down" /></li>
              <li @click="reload"><a-icon type="sync" />刷新</li>
          </ul>
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
       
    </a-layout>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navList:[
                {name:'首页',value:1}
            ]
        }
    },
    methods:{
        goForward(){

        },
        goBack(){

        },
        operatePage(){

        },
        reload(){

        }


    }
}
</script>
<style lang="less" scoped>

</style>


