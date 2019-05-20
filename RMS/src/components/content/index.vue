<template>
  <div class="content-index">
    <a-layout style='height:100%;'>
      <a-layout-header style="background:#ffffff;" class="content-header">
        <ul v-for="(item,value) in navList" :key="value">
          <li @click="goForward" class="forward">
            <a-icon type="double-left"/>
          </li>
          <li :class="active==index?'active':''">{{item.name}}</li>
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
                  <a-menu-item key="1">关闭当前</a-menu-item>
                  <a-menu-item key="2">关闭其他</a-menu-item>
                  <a-menu-item key="3">关闭全部</a-menu-item>
                  <a-menu-item key="4">全屏显示</a-menu-item>
                </a-menu>
              </a-dropdown>

              <!-- 页面操作<a-icon type="caret-down" /> -->
            </li>
            <li @click="reload">
              <a-icon type="sync"/>刷新
            </li>
          </ul>
        </div>
      </a-layout-header>
      <a-layout-content class='content'>
          <mainIndex/>
      </a-layout-content>
       <a-layout-footer class='footer'>
           © 2019 RuoYi Copyright 
       </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import mainIndex from '@/components/content/contain/index.vue';
export default {
    
  data() {
    return {
      navList: [{ name: "首页", value: 1 }],
      visible: false,
      active:null,
    };
  },
  components:{
       mainIndex
    },
  methods: {
    goForward() {},
    goBack() {},
    operatePage(e) {
      if (e.key) {
        this.visible = false;
      }
    },
    reload() {
        location.reload() 
    }
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


