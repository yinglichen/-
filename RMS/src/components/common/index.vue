<template>
  <div class="index">
    <el-container>
      <el-aside>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="index-header">
          <div class="header-onOff">
            <el-button
              @click="isCollapse=false"
              type="primary"
              icon="el-icon-s-unfold"
              v-if="isCollapse==true"
            ></el-button>
            <el-button
              @click="isCollapse=true"
              v-if="isCollapse==false"
              type="primary"
              icon="el-icon-s-fold"
            ></el-button>
          </div>
          <div class="aboutInfo">
            <a class="index-notice">
              <i class="el-icon-message"></i>通知
            </a>
            <a class="index-personInfo" @click="isMessageBox=true">
              <i class="el-icon-s-custom"></i>个人
            </a>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- 个人信息弹框 -->
    <div class="messageBox-personInfo" v-if="isMessageBox==true">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18">
          <div class="mb-main">
            <div class="mB-nav">
              <span>个人信息</span>
              <div class="right-opera">
                <!-- 最小化 -->
                <a>
                  <i class="el-icon-minus"></i>
                </a>
                <!-- 最大化 -->
                <a>
                  <i class="el-icon-copy-document"></i>
                </a>
                <!-- 关闭 -->
                <a @click="isMessageBox=false">
                  <i class="el-icon-close"></i>
                </a>
              </div>
            </div>
            <!-- 内容 -->
            <!-- <div class="personInfo-center"> -->
            <el-row :gutter="20">
              <el-col :span="22" :offset="1">
                <div class="personInfo-center">
                  <h3>个人资料中心</h3>
                  <div class="personInfo-contain">
                    <el-tabs type="border-card">
                      <el-tab-pane label="基本资料"><basicInfor/></el-tab-pane>
                      <el-tab-pane label="更改头像"><headImgReset/></el-tab-pane>
                      <el-tab-pane label="重置密码"><resetPassword/></el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </el-col>
            </el-row>
            <!-- </div> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import basicInfor from '@/components/personInfomation/basicInfor.vue'
import headImgReset from '@/components/personInfomation/headImgReset.vue'
import resetPassword from '@/components/personInfomation/resetPassword.vue'

export default {
  data() {
    return {
      isCollapse: false,
      isMessageBox: false
    };
  },
  components:{
      basicInfor,headImgReset,resetPassword
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    //个人-弹框个人信息
  }
};
</script>
<style scoped>
.index-header {
  background-color: #f3f3f4;
}
.header-onOff {
  float: left;
  line-height: 60px;
}
.aboutInfo {
  float: right;
  line-height: 60px;
}
.aboutInfo a {
  margin-right: 10px;
}
.aboutInfo a i {
  margin-right: 5px;
}
.messageBox-personInfo {
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}
.mb-main {
  background-color: #f3f3f4;
  z-index: 2;
  margin: 30px auto;
  height: auto;
}
.mB-nav {
  display: flex;
  height: 50px;
  line-height: 50px;
  /* background-color: #f8f8f8; */
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}
.mB-nav span {
  margin-left: 15px;
}
.right-opera {
  margin-right: 15px;
}
.personInfo-center {
  background: #ffffff;
  border-top: 2px solid #cccccc;
  margin: 20px 0;
}
.personInfo-contain{margin-top:30px;}
</style>


