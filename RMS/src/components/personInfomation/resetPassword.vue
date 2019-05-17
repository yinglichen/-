<template>
    <div class="resetPassword">
     <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="旧密码"
    prop="oldPassword"
    :rules="[
      { required: true, message: '密码不能为空'},
      { type: 'number', message: '密码必须为数字值'}
    ]"
  >
    <el-input type="oldPassword" v-model.number="numberValidateForm.oldPassword" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item
    label="新密码"
    prop="newPassword"
    :rules="[
      { required: true, message: '密码不能为空'},
      { type: 'number', message: '密码必须为数字值'}
    ]"
  >
    <el-input type="newPassword" v-model.number="numberValidateForm.newPassword" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item
    label="确认密码"
    prop="cfmNewPassword"
    :rules="[
      { required: true, message: '密码不能为空'},
      { type: 'number', message: '密码必须为数字值'}
    ]"
  >
    <el-input type="cfmNewPassword" v-model.number="numberValidateForm.cfmNewPassword" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">保存</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
     data() {
      return {
        numberValidateForm: {
          oldPassword: '',
          cfmNewPassword:'',
          newPassword:''
        },
        onOff:true,
      };
    },
    
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('listenToChildEvent',
            this.onOff=false)
            alert('修改成功!!')
             
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       
    }
}
</script>

