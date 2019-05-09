<template>
  <div class="basicInfo">

   <el-row :gutter="20">
  <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple">
          
         

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="出生年月" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="手机" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item label="居住地" prop="province">
        <el-select v-model="ruleForm.province">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="江苏" value="jiangsu"></el-option>
        </el-select>
        <el-select v-model="ruleForm.city">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="苏州" value="jiangsu"></el-option>
        </el-select>
        <el-select v-model="ruleForm.area">
          <el-option label="浦东新区" value="pudongxinqu"></el-option>
          <el-option label="吴江" value="wujiang"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式" prop="address">
        <el-input type="text" v-model="ruleForm.address"></el-input>
      </el-form-item>

      <el-form-item label="爱好" prop="like">
        <el-checkbox-group v-model="ruleForm.like">
          <el-checkbox label="编码" name="like"></el-checkbox>
          <el-checkbox label="画画" name="like"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
     </div>
     </el-col>
</el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        sex: "",
        tel: "",
        email: "",
        province:'',
        address:'',
        like:''
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        province: [
          { required: true, message: "请选择地区", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],

        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        sex: [{ required: true, message: "请选择", trigger: "change" }],
        tel: [
          { required: true, message: "请填写电话号码", trigger: "blur" },
          {
            pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        address:[{ required: true, message: "请选择", trigger: "blur" }],
        like:[{required: true, message: "请选择", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
