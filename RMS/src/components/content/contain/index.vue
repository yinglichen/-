<template>
  <div class="contain-index">
    <!-- 优惠券 -->
    <div class="bgW P20">
      <div class="discount-cou-list orange f14 lH">
        <ul>
          <li v-for="(item,index) in discountCouList" :key="index">
            <p>{{item.name}}</p>
            <a class="aB">{{item.url}}</a>
          </li>
          <li>
            <h4 class="red fW">云产品通用红包，可叠加官网常规优惠使用。(仅限新用户)</h4>
          </li>
        </ul>
      </div>
      <!-- 系统简介 -->
      <div class="bT mT20 brief">
        <a-row class="mT20">
          <a-col :span="6">
            <h1>Hello,Gust</h1>
            <p>移动设备访问请扫描以下二维码：</p>
            <p>
              <img src="@/assets/images/qr_code.png">
            </p>
          </a-col>
          <a-col :span="10" :offset="2">
            <h1>若依后台管理框架</h1>
            <p
              class="brief-text"
            >一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。于是利用空闲休息时间开始自己写一套后台系统。如此有了若依管理系统。，她可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。同时支持移动客户端访问。系统会陆续更新一些实用功能</p>
            <p class="mTB10">
              <span class="fW7">当前版本:</span>
              {{versions}}
            </p>
            <p class="mB10">
              <button class="orangeBg fCF f10 bR3s">￥免费开源</button>
            </p>
            <div class="aTeam mT20 mB10">
              <a-button class="aB aBrC">
                <a-icon type="cloud"/>访问码云
              </a-button>
              <a-button>
                <a-icon type="home"/>访问主页
              </a-button>
            </div>
          </a-col>
          <a-col :span="4" :offset="2">
            <h1>技术选型</h1>
            <ol>
              <li
                v-for="item in techList"
                :key="item.index"
              >{{item.key}}.{{item.title}}:{{item.tech}}</li>
            </ol>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 联系/日志/捐赠 -->
    <a-row class="RyInfo P20">
      <a-col :span="7" class="bT4 bgW">
        <h5>联系信息</h5>
        <div class="contact-info P20">
          <ul>
            <li>
              <a-icon type="dribbble"/>官网:
              <a>http://www.ruoyi.vip</a>
            </li>
            <li>
              <a-icon type="qq"/>QQ群:
              <span v-for="item in QQClub" :key="item.value">
                <span
                  :class="item.desc=='满'?'line-through':''"
                  style="margin:0 0.3846rem;"
                >{{item.desc}}{{item.QQ}}</span>
              </span>
            </li>
            <li>
              <a-icon type="wechat"/>
              微信:{{weChat}}
            </li>
            <li>
              <a-icon type="alipay"/>
              支付宝:{{aliPay}}
            </li>
          </ul>
        </div>
      </a-col>
      <a-col :span="8" :offset="1" class="bT4 bgW">
        <h5>更新日志</h5>
        <div class="daily-list P20 fW6">
          <a-collapse :bordered="false" accordion>
            <a-collapse-panel :style="customStyle" v-for="item in versionsList" :key="item.key">
              <template slot="header">
                {{item.verNum}}
                <span class="date">{{item.date}}</span>
              </template>
              <p v-for="item in item.text" :key="item.index">{{item.step}}.{{item.text}}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </a-col>
      <a-col :span="7" :offset="1" class="bT4 bgW">
        <h5>捐赠</h5>
        <div class="qr-code P20">
          <div class="dia-btn" >请作者喝杯咖啡（点击图片放大）</div>
          <ul style="display:flex;cursor: pointer;" @click="digShow">
            <li style="flex:1">
              <img src="@/assets/images/qr_code.png" style="width:100%">
            </li>
            <li style="flex:1">
              <img src="@/assets/images/qr_code.png" style="width:100%">
            </li>
          </ul>
        </div>
      </a-col>
    </a-row>
    <!-- 对话框 -->
    <a-modal
      centered
      v-model="modalVisible"
      class='modal-qrcode'
    >
       <ul style="display:flex;padding:1.5385rem;">
            <li style="flex:1">
              <img src="@/assets/images/qr_code.png" style="width:100%">
            </li>
            <li style="flex:1">
              <img src="@/assets/images/qr_code.png" style="width:100%">
            </li>
          </ul>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discountCouList: [
        {
          name: "领取阿里云通用云产品1888优惠券",
          url:
            "https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=brki8iof"
        },
        {
          name: "领取腾讯云通用云产品2860优惠券 ",
          url:
            "https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=brki8iof"
        },
        {
          name: "阿里云Hi拼购 限量爆款 低至199元/年 ",
          url: "https://www.aliyun.com/acts/hi-group-buying?userCode=brki8iof"
        }
      ],
      techList: [
        { key: "1", title: "核心框架", tech: "Spring Boot" },
        { key: "2", title: "安全框架", tech: "Apache Shiro" },
        { key: "3", title: "模板引擎", tech: "Thymeleaf" },
        { key: "4", title: "持久层框架", tech: "MyBatis" },
        { key: "5", title: "定时任务", tech: "Quartz" },
        { key: "6", title: "数据库连接池", tech: "Druid" },
        { key: "7", title: "工具类", tech: "Fastjson" },
        { key: "8", title: "更多", tech: "..." }
      ],
      versions: "v3.3.0",
      QQClub: [
        { value: "1", QQ: "1389287", desc: "满" },
        { value: "2", QQ: "1389288", desc: "满" },
        { value: "3", QQ: "1389289", desc: "满" },
        { value: "4", QQ: "1389285", desc: "" }
      ],
      weChat: 2346783267687,
      aliPay: 386767,
      versionsList: [
        {
          verNum: "V1.0.0",
          date: "2019.01.01",
          key: "1",
          text: [
            { step: "1", text: "新增页签右操作" },
            { step: "2", text: "新增页签右操作" },
            { step: "3", text: "新增页签右操作" },
            { step: "4", text: "新增页签右操作" },
            { step: "5", text: "新增页签右操作" },
            { step: "6", text: "新增页签右操作" },
            { step: "7", text: "新增页签右操作" },
            { step: "8", text: "新增页签右操作" },
            { step: "9", text: "新增页签右操作" },
            { step: "10", text: "新增页签右操作" }
          ]
        },
        { verNum: "V2.0.0", date: "2019.02.01", key: "2" },
        { verNum: "V3.0.0", date: "2019.03.01", key: "3" },
        { verNum: "V4.0.0", date: "2019.04.01", key: "4" },
        { verNum: "V4.0.1", date: "2019.05.01", key: "5" },
        { verNum: "V4.0.2", date: "2019.06.01", key: "6" },
        {
          verNum: "V4.1.1",
          date: "2019.07.01",
          key: "7",
          text: [
            { step: "1", text: "新增页签右操作" },
            { step: "2", text: "新增页签右操作" },
            { step: "3", text: "新增页签右操作" },
            { step: "4", text: "新增页签右操作" },
            { step: "5", text: "新增页签右操作" },
            { step: "6", text: "新增页签右操作" },
            { step: "7", text: "新增页签右操作" },
            { step: "8", text: "新增页签右操作" },
            { step: "9", text: "新增页签右操作" },
            { step: "10", text: "新增页签右操作" }
          ]
        },
        {
          verNum: "V5.2.0",
          date: "2019.08.01",
          key: "8",
          text: [
            { step: "1", text: "新增页签右操作" },
            { step: "2", text: "新增页签右操作" },
            { step: "3", text: "新增页签右操作" },
            { step: "4", text: "新增页签右操作" },
            { step: "5", text: "新增页签右操作" },
            { step: "6", text: "新增页签右操作" },
            { step: "7", text: "新增页签右操作" },
            { step: "8", text: "新增页签右操作" },
            { step: "9", text: "新增页签右操作" },
            { step: "10", text: "新增页签右操作" }
          ]
        }
      ],
      text: "djaskdhfksdjhfadsg",
      customStyle:
        "background: #f5f5f5;border-radius: 4px;margin-bottom: 10px;border:1px solid #ddd;overflow: hidden",
    modalVisible:false
   };
  },
  methods: {
    verListSort() {
      var _obj = [];
      var _arr = [];
      var min = 1;
      for (var i = 0; i < this.versionsList.length; i++) {
        _arr.push(this.versionsList[i].key);
        _arr.sort(function(ele1, ele2) {
          if (ele1 > ele2) return -1;
          else if (ele1 < ele2) return 1;
          else return 0;
        });
      }
      for (var j in _arr) {
        var num = _arr[j] - 1;
        _obj.push(this.versionsList[num]);
      }
      this.versionsList = _obj;
    },
    digShow() {
        this.modalVisible=true
    }
  },
  mounted() {
    this.verListSort();
  }
};
</script>
<style lang="less" scoped>
.contain-index {
  .discount-cou-list {
    padding: 0.7692rem 1.5385rem;
    border-left: 0.3846rem solid #eee;
  }
  .brief {
    h1 {
      margin-top: 0.7692rem;
    }
  }
  .RyInfo {
    h5 {
      font-size: 1.0769rem;
      font-weight: 600;
      border-bottom: 1px solid #e7eaec;
      padding: 1.0769rem 1.1538rem 0.5385rem;
      min-height: 3.6923rem;
    }
    .contact-info {
      li {
        margin-bottom: 0.7692rem;
        line-height: 1.42857143;
      }
    }
    .date {
      color: #ca4440;
      float: right;
      padding: 0.1538rem 0.3077rem;
    }
  }
  .dia-btn {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
    padding: 1.1538rem;
    margin-bottom: 1.5385rem;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>


