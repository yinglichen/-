<template>
  <div class="content-index">
    <a-layout style='height:100%;'>
      <a-layout-header style="background:#ffffff;" class="content-header">
        <ul >
          <li @click="goForward" class="forward">
            <a-icon type="double-left"/>
          </li>
          <!-- <li :class="active=='0'?'active':''"
           @click='key=1'>首页</li> -->
          <li v-for="(item,index) in navList" :key="index"
            :class="active==item.key?'active':''"
           >
           <span @click="showContain(item.key)">{{item.name}}</span>
            <a-icon type="close" v-if='item&&item.key !=1' @click='closeThisPage(index)'/>
          </li>
        </ul>
        <div class="right-btn">
          <ul>
            <li @click="goBack">
              <a-icon type="double-right"/>
            </li>
            <li>
              <a-dropdown v-model="visible" :trigger="['click']">
                <a class="ant-dropdown-link" href="#">
                  页面操作
                  <a-icon type="down"/>
                </a>
                <a-menu slot="overlay" @click="operatePage" class='operate-details'>
                  <a-menu-item key="1" @click="closePage(key)">关闭当前</a-menu-item>
                  <a-menu-item key="2" @click='keepCurPage'>关闭其他</a-menu-item>
                  <a-menu-item key="3" @click='closeAll'>关闭全部</a-menu-item>
                  <a-menu-item key="4">全屏显示</a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
            <li @click="reload">
              <a-icon type="sync"/>刷新
            </li>
          </ul>
        </div>
      </a-layout-header>
      <a-layout-content class='content'>
          <mainIndex v-if="key ==1"/>
          <manageUser v-if="key==2"/>
      </a-layout-content>

       <a-layout-footer class='footer'>
           © 2019 RuoYi Copyright 
       </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import mainIndex from '@/components/content/contain/index.vue';
import manageUser from '@/components/content/contain/manageUser.vue'
export default {
  props: {keyNum:''}, 
  data() {
    return {
      navList: [],
      visible: false,
      key:1,
      val:' ',
      active:1,
      keyList:[],
      navMenu:[{key:1,name:'首页'}],
      navKey:[],
    };
  },
  watch:{
    keyNum(val){
      this.val=this.$props    
      this.navKey.push(this.val.keyNum.key)
      this.keyList=[...new Set(this.navKey)]

    for(var i in this.keyList){
      if(this.val.keyNum.key == this.keyList[i]){
        this.key=this.val.keyNum.key
      }
    }
      this.navMenu.push(this.val.keyNum)
      this.navList=[...new Set(this.navMenu)]
        
    }
  },
  components:{
       mainIndex,
       manageUser,
    },
  methods: {
    //前
    goForward() {
      if(this.key == '1') return;
      if(this.key == this.navList[0].key) this.key = '1';
      for(var i =0;i<this.navList.length;i++){
        var _num=i-1
        if(this.key==this.navList[i].key){
             this.key=this.navList[_num].key
        } 
      }
    },
    //后
    goBack() {
      if(this.key=='1'){ this.key=this.navList[0].key;}else{
         for(var i=0;i<this.navList.length;i++){
          if(this.key==this.navList[i].key){
          var _num=i+1;
          this.key=this.navList[_num].key
        }
      }
      }
    },
    operatePage(e) {
      if (e.key) {
        this.visible = false;
      }
    },
    //刷新
    reload() {
        location.reload() 
    },
    //關閉其它
    keepCurPage(){
       for(var i =0;i<this.navMenu.length;i++){
        this.navList=this.navList.filter(item=>item.key == this.key)
         this.navMenu=this.navMenu.filter(item=>item.key == this.key)
       }
    },
    // 关闭当前页面
    closePage(index){  
      if(this.navList.length == 0) return;
       for(var i in this.navList){
         if(index == this.navList[i].key){
           this.closeFuc(i)
         }
       }
      
    },
    closeThisPage(index){
      if(this.navList.length !=0){
           for(var i in this.navList){
         if(index == i){
            this.closeFuc(i)
         }
       }
      } 
    },
    closeFuc(val){
            this.navList.splice(val,1)
            this.navMenu.splice(val,1)
            if(val-1>=0){
             this.key=this.navList[val-1].key
           }else{
              this.key=1
              this.navMenu=[]
           } 
    },
    // 显示内容
    showContain(key){
      this.key=key
    },
    //关闭全部
    closeAll(){
     
         this.navMenu=[]
      this.keyList=[]
      this.navList=[],
      this.key='1'
    },
     
  },
  mounted(){
     
  }
};
</script>
<style lang="less" scoped>
.content-index {
    height:100%;
  .content-header {
    border-bottom: solid 2px #e7eaec;
    height: 3.2308rem;
    line-height: 3.2308rem;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      margin-bottom:0;
      li {
          cursor: pointer;
        float: left;
        padding: 0 1.1538rem;
        border-right: solid 1px #eee;
      }
      .active {
        color: #23508e;
        background: #eaedf1;
      }
    }
    .right-btn {
      float: right;
      ul li:nth-child(1) {
        border-left: solid 1px #eee;
      }
      .ant-dropdown-link{
          color:#666666;
          text-decoration:none;
          }
    }
  }
  .content{ 
      overflow:hidden;
      max-height:cale(100% - 3.2308rem);
      overflow-y:auto;  
      text-align:left;
  }
  .footer{
      background-color:#ffffff;
      border-top:1px solid #e7eaec;
      height:2.7692rem;  
      overflow: hidden;
      padding: 0.7692rem 1.5385rem;
       margin: 0 -1.1538rem;
       text-align:right;
  }
}
</style>


