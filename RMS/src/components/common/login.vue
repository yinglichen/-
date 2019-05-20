<template>
  <div class="login">
    <a-row type="flex" justify="center" class='login-main'>
      <a-col :span="8">
        <div class="left-part"> 
          <p class="logo">
            <img src="@/assets/images/sunrise.png">
          </p>
          <h5>欢迎使用若依后台管理系统</h5>
          <ul>
            <li>
              <a-icon type="play-circle"/>SpringBoot
            </li>
            <li>
              <a-icon type="play-circle"/>Mybatis
            </li>
            <li>
              <a-icon type="play-circle"/>Shiro
            </li>
            <li>
              <a-icon type="play-circle"/>Thymeleaf
            </li>
            <li>
              <a-icon type="play-circle"/>Bootstrap
            </li>
          </ul>
          <h5>
            还没有账号？
            <a>立即注册</a>
          </h5>
        </div>
      </a-col>
      
      <a-col :span="5">
        <div class="right-part">
          <h3>登录：</h3>
          <p>这是一段描述</p>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-input
                v-decorator="[
          'accoutn',
          {rules: [{ required: true, message: '请输入账号!' }]}
        ]"
              >
                <a-icon slot="prefix" type="user"/>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-input
                v-decorator="[
          'password',
          {rules: [{ required: true, message: '请输入密码!' }]}
        ]"
              >
                <a-icon type="lock" slot="prefix"/>
              </a-input>
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 24  }" class="verifi">
              <a-input
                v-decorator="[
          'verification',
            {rules: [{ required: true, message: '请输入验证码' }]}
            ]"
                @blur="checkVerification"
                ref="verifi"
              />
              <a-input type="button" id="code" @click="createCode" v-model="checkCode"/>
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
     <a-row class="footer">
      <a-col :span="14" :offset="5" class="footerPart">
        <div class="footerPart-text">
<p><a-icon type="copyright" /> 2019 ALL Rights Reserved.RuoYi</p>
        <a>粤ICP备18046899号</a>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      code: "",
      checkCode: Number,
      num1: Number,
      num2: Number,
      signArr: ["+", "-", "*"],
      cSign: Number,
      verifiNum: Number,
      countNum:Number,
    };
  },
  methods: {
    // 随机生成验证码
    createCode() {
      this.num1 = Math.floor(Math.random() * 9 + 1);
      this.num2 = Math.floor(Math.random() * 9 + 1);
      var _cSign = Math.floor(Math.random() * (this.signArr.length - 1) + 1);
      this.cSign = this.signArr[_cSign];
      this.compareMax(this.num1,this.num2,this.cSign)
    },
    // 验证码验证
    checkVerification() {
      this.verifiNum=this.$refs.verifi.value
      switch (this.cSign) {
        case "*":
          this.countNum = this.num1 * this.num2;
          break;
        case "-":
             this.compareMax(this.num1,this.num2,'-')
            //  this.countNum = this.num1 - this.num2;
          break;
        case "+":
          this.countNum = this.num1 + this.num2;
          break;
        default:
          break;   
      }
      if(this.verifiNum==this.countNum){
       this.handleSubmit(e)
      }else{
        alert('验证码输入错误')
      }
    },
    compareMax(val,val2,val3){
      if(val<val2 && val3 =='-'){
       var num;
       num=val2
       val2=val
       val=num
       }  
       this.checkCode = val + val3 + val2 + "=?";
       this.countNum =val - val2
    },
     handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push('/index')
        }
      });
    },
  },
  mounted() {
    this.createCode();
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("./../../assets/images/login-bg.jpg") center center;
  color: #ffffff;
  .login-main{
     display: flex;
     padding-top:10%;
  }
  h5 {
    font-weight: 600;
    font-size: 1.0769rem;
    color: #ffffff;
  }
  i {
    margin-right: 0.3846rem;
  }
  .left-part {
    text-align: left;
  }
  .right-part {
    border: 1px white solid;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.2);
    padding: 2.3077rem;
    text-align:left;
    color:#ffffff;
    h3{
      font-weight: 600;
      color:#ffffff;
    }
  }
  #code {
    display: inline-block;
    color: rgb(18, 13, 225);
    font-weight: 700;
    background-image: -webkit-gradient(
      linear,
      left 0,
      right 0,
      from(rgb(199, 197, 200)),
      to(rgb(255, 255, 255))
    );
    width:6.9231rem;
    margin-left:2.3077rem;
  }
  
  .footerPart{
    border-top:1px solid rgba(255,255,255,.3);
    text-align: left;
    margin-top: 1.1538rem;
    .footerPart-text{
      padding-top:1.5385rem;
      p{margin-bottom:0;}
    }
  }
}
</style>


