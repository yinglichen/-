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

        <a-menu theme="dark" mode="vertical"  
        v-for='item in menuList'
        :key='item.index'>
          <a-sub-menu :key="item.key">
            <span slot="title">
             <a-icon type="home" />
              <span class="main-page">{{item.name}}</span>
            </span>
            <a-menu-item  
            v-for='menu in item.menu' 
            :key='menu.key'
             @click="handleClick(menu)"
             :selectable='selectable'
             multiple='false'
            >{{menu.name}}</a-menu-item>
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
          :style="{ background: '#fff', height: '100%' }"
        >
        <contentIndex :keyNum='keyNum'/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import contentIndex from '@/components/content/index.vue'
export default {
  data() {
    return {
      collapsed: false,
      keyNum:1,
      selectable:true,
      menuList:[
        {key:'sub1',name:'主页',menu:[{key:1,name:'了解若依'}]},
        {key:'sub2',name:'系统管理',menu:[{key:2,name:'用户管理'},{
          key:3,name:'角色管理'
        },{
          key:4,name:'菜单管理'
        },{
          key:5,name:'部门管理'
        },{
          key:6,name:'岗位管理'
        },{
          key:7,name:'字典管理'
        },{
          key:8,name:'参数设置'
        },{
          key:9,name:'通知公告'
        },{
          key:10,name:'日志管理',logList:[{
            key:11,name:'操作日志'
          },{
            key:12,name:'登录日志'
          }]
        }]},{
          key:'sub3',name:'系统监控',menu:[{key:13,name:'在线用户'},{key:14,name:'定时任务'},{
            key:15,name:'数据监控'
          },{
            key:16,name:'服务监控'
          }]
        },{
          key:'sub4',name:'系统工具',menu:[{key:17,name:'表单构建'},{
            key:18,name:'代码生成'},
            {key:19,name:'系统接口'}]
        }
      ]
    };
  },
  components:{
    contentIndex
  },
  methods: {
    handleClick(item) { 
      this.keyNum=item
      this.selectable=false;
     // this.keyNum=item.key
    }
  }
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 1.3846rem;
    line-height: 3.8462rem;
    padding: 0 1.8462rem;
    cursor: pointer;
    transition: color 0.3s;
    float: left;
  }

  .logo {
    height: 3.8462rem;
    color: #ffffff;
    background-color: #367fa9;
    font-size: 1.5385rem;
    line-height: 3.8462rem;
  }
  .main-page {
    margin-right: 1.9231rem;
  }
  .admin-info {
    display: flex;
    padding: 1.1538rem;
    overflow: hidden;
    font-size: 0.9231rem;
    img {
      height: auto;
      max-width: 3.4615rem;
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
      padding-left: 0.3846rem;
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
      li{padding:0 0.7692rem;line-height: 3.8462rem;
      img {
      height: auto;
      max-width: 3.4615rem;
      flex: 1;
      border-radius: 50%;
    }
      a{
        color: #ffffff;
      i{margin:0.3846rem;}
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


