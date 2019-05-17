<template>
  <div class="index">
    <el-container style='width:100%;height:100%;'>
      <el-aside style='width:200px !important;background-color:rgb(47,64,80)'>
        <el-menu
          default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :unique-opened="flag"
        >
          <el-menu-item index="1" class="aside-header">
            <i>
              <img src='@/assets/images/logo.png'/>
            </i>
            <span slot="title" class='text'>管理系统</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">基础管理</span>
            </template>
              <el-menu-item index="1-1" @click="addTab('选项1')">选项1</el-menu-item>
              <el-menu-item index="1-2" @click="addTab('选项2')">选项2</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder-checked"></i>
              <span slot="title">高级管理</span>
            </template>
              <el-menu-item index="1-1" @click="addTab('用户管理')">用户管理</el-menu-item>
              <el-menu-item index="1-2" @click="addTab('角色管理')">角色管理</el-menu-item>
              <el-menu-item index="1-3" @click="addTab('系统菜单')">系统菜单</el-menu-item>
              <el-menu-item index="1-4" @click="addTab('部门管理')">部门管理</el-menu-item>
          </el-submenu>
          
            <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">内容维护</span>
            </template>
              <el-menu-item index="1-1">文章列表</el-menu-item>
              <el-menu-item index="1-2">商品列表</el-menu-item>
           </el-submenu>

             <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">问题反馈</span>
            </template>
              <el-menu-item index="1-1">问题反馈列表</el-menu-item>
           </el-submenu>
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
        <el-main><contain :avtiveValue='avtiveValue'/></el-main>
      </el-container>
    </el-container>

    <!-- 个人信息弹框 -->
    <div class="messageBox-personInfo" v-if="isMessageBox==true || isLogin==false">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18" :class="isMax==true?'max-width':''">
          <!-- 登錄 -->
          <div class="login mb-main" v-if="isLogin==false">
            <h3>登录</h3>
            <p>
              账号:
              <input placeholder="请输入账号" v-model="account">
            </p>
            <p>
              密码:
              <input placeholder="请输入密码" v-model="password">
            </p>
            <el-button @click="login">登录</el-button>
            <div class="register">
              <span>
                <a href>注册</a>
              </span>
              <span>
                <a href>忘记密码？</a>
              </span>
            </div>
          </div>
          <div class="mb-main" v-if="isMessageBox==true" :class="isMax==true?'mb-main-max':''">
            <div class="mB-nav">
              <span>个人信息</span>
              <div class="right-opera">
                <!-- 最小化
                <a @click="isMessageBox=false">
                  <i class="el-icon-minus"></i>
                </a>-->
                <!-- 最大化 -->
                <a @click="changeSize">
                  <i class="el-icon-copy-document"></i>
                </a>
                <!-- 关闭 -->
                <a @click="isMessageBox=false">
                  <i class="el-icon-close"></i>
                </a>
              </div>
            </div>
            <!-- 内容 -->

            <el-row :gutter="20">
              <el-col :span="22" :offset="1">
                <div class="personInfo-center">
                  <h3>个人资料中心</h3>
                  <div class="personInfo-contain">
                    <el-tabs type="border-card">
                      <el-tab-pane label="基本资料">
                        <basicInfor/>
                      </el-tab-pane>
                      <el-tab-pane label="更改头像">
                        <!-- <headImgReset/> -->
                      </el-tab-pane>
                      <el-tab-pane label="重置密码">
                        <resetPassword v-on:listenToChildEvent="isClose"/>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import basicInfor from "@/components/personInfomation/basicInfor.vue";
import headImgReset from "@/components/personInfomation/headImgReset.vue";
import resetPassword from "@/components/personInfomation/resetPassword.vue";
import contain from "@/components/common/main.vue"
import axios from "axios";
export default {
  data() {
    return {
      isCollapse: false,
      isMessageBox: false,
      account: null,
      password: null,
      isLogin: false,
      isMax: false,
      activeIndex:0,
      flag:true,
      avtiveValue:''
    };
  },
  components: {
    basicInfor,
    headImgReset,
    resetPassword,
    contain
  },
  methods: {
    handleOpen(key, keyPath,e) {
      this.activeIndex=key 
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath,'close');
    },
    //个人-弹框个人信息
    isClose(data) {
      this.isMessageBox = data;
    },
    addTab(val){
      console.log(val,'index')
    },
    // 登录
    login() {
      let params = {
        account: this.account,
        password: this.password
      };

      this.api
        .loginIn(params)
        .then(res => {
          if (res.code == 200) {
            this.isLogin = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //登录框弹出
    showLoginBox() {
      this.$confirm("");
    },
    //尺寸变大
    changeSize() {
      this.isMax = !this.isMax;
    }
  },
  mounted() {
    //this.login();
  }
};
</script>
<style scoped>
.max-width {
  width: 100%;
  overflow-x: hidden;
}
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
  max-height: 600px;
}
.mb-main-max {
  margin: 0;
}
.mB-nav {
  display: flex;
  height: 50px;
  line-height: 50px;
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
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.personInfo-contain {
  margin-top: 30px;
}
.login {
  min-width: 200px;
  min-height: 200px;
  margin: 30% 35%;
  line-height: 30px;
}
.register a {
  color: red;
}
/* 左侧导航栏 */
.aside-header {
  height: 200px;
  background:rgb(38, 57, 73);
  color:#ffffff;
  text-align: center;
  vertical-align: middle;
}
.aside-header img{
  width:60px;
  height:60px;
  margin-top:50px;
}
.aside-header .text{
  display:block;
}

</style>


