<template>
  <div class="index">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo">RuoYi</div>
        <div class="admin-info">
          <div class="admin-header">
            <router-link to="/personCenter">
              <img src="@/assets/images/header.jpg">
            </router-link>
          </div>
          <div class="admin-status" style="margin-left:20px;">
            <h3>admin</h3>
            <p>
              <a class="logIn">
                <a-icon type="user"/>在线
              </a>
              <router-link to="/login" class="logOut">
                <a-icon type="logout"/>注销
              </router-link>
            </p>
          </div>
        </div>
        <a-menu theme="dark" mode="vertical" :defaultSelectedKeys="['1']" @click="handleClick">
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="dashboard"/>
              <span class="main-page">主页</span>
            </span>
            <a-menu-item key="1">了解若依</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="setting"/>
              <span>系统管理</span>
            </span>
            <a-menu-item key="2">用户管理</a-menu-item>
            <a-menu-item key="3">角色管理</a-menu-item>
            <a-menu-item key="4">菜单管理</a-menu-item>
            <a-menu-item key="5">部门管理</a-menu-item>
            <a-menu-item key="6">岗位管理</a-menu-item>
            <a-menu-item key="7">字典管理</a-menu-item>
            <a-menu-item key="8">参数设置</a-menu-item>
            <a-menu-item key="9">通知公告</a-menu-item>
            <a-menu-item key="10">日志管理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="video-camera"/>
              <span>系统监控</span>
            </span>
            <a-menu-item key="11">在线用户</a-menu-item>
            <a-menu-item key="12">定时任务</a-menu-item>
            <a-menu-item key="13">数据监控</a-menu-item>
            <a-menu-item key="14">服务监控</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="tool"/>
              <span>系统工具</span>
            </span>
            <a-menu-item key="15">表单构建</a-menu-item>
            <a-menu-item key="16">代码生成</a-menu-item>
            <a-menu-item key="17">系统接口</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background:rgb(60,141,188);height:50px; padding: 0;color:#ffffff;">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <div class="operate-study">
            <ul>
              <li>
                <router-link to="http://doc.ruoyi.vip/#/standard/spjc">
                  <a-icon type="video-camera"/>视频教程
                </router-link>
              </li>
              <li>
                <router-link to="http://doc.ruoyi.vip/">
                  <a-icon type="question-circle"/>视频教程
                </router-link>
              </li>
              <li class="fullScreen">
                <a-icon type="fullscreen"/>全屏显示
              </li>
              <li>
                <router-link to="/personCenter">
                  <img src="@/assets/images/header.jpg">若依
                </router-link>
              </li>
            </ul>
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{ background: '#fff', minHeight: '280px' }"
        ><contentIndex/></a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import contentIndex from '@/components/content/index.vue'
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components:{
    contentIndex
  },
  methods: {
    handleClick(e) {
      console.log("click ", e);
    }
  }
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 50px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    float: left;
  }

  .logo {
    height: 50px;
    color: #ffffff;
    background-color: #367fa9;
    font-size: 20px;
    line-height: 50px;
  }
  .main-page {
    margin-right: 25px;
  }
  .admin-info {
    display: flex;
    padding: 15px;
    overflow: hidden;
    font-size: 12px;
    img {
      height: auto;
      max-width: 45px;
      flex: 1;
      border-radius: 50%;
    }
    h3,
    a {
      color: #ffffff;
    }
    .logIn {
      i {
        color: rgb(24, 144, 245);
      }
    }
    .logOut {
      padding-left: 5px;
      i {
        color: red;
      }
    }
  }
  ul {
    text-align: left;
  }
  //  头部右边
  .operate-study {
    float: right;
    ul{
      display: flex;
      li{padding:0 10px;line-height: 50px;
      img {
      height: auto;
      max-width: 45px;
      flex: 1;
      border-radius: 50%;
    }
      a{
        color: #ffffff;
      i{margin:5px;}
      }
      .fullScreen{
        cursor: pointer;
      } 
      }
      li:hover{
        background:#367fa9
      }
    }
    
  }
}
</style>


