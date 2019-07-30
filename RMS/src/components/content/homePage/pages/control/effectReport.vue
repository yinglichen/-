<template>
    <div class="effectReport">
       <div class="title">
            <span>效果报告</span>
        </div>
        <div class="progress">
              <div class="progress-1">
                  <h3>{{percentage}}%</h3>
                  <span>转化率（日同比28%
                      <el-tooltip content="增长" placement="top">
               <el-button><i class="el-icon-caret-top"></i></el-button>
             </el-tooltip>）</span>
              <el-progress :percentage="percentage" :color="customColor"></el-progress>
              </div>
               <div class="progress-2">
                  <h3>{{percentage1}}%</h3>
                  <span>签到率（日同比28%
                      <el-tooltip content="下降" placement="top">
               <el-button><i class="el-icon-caret-bottom"></i></el-button>
             </el-tooltip>）</span>
              <el-progress :percentage="percentage1" :color="customColor"></el-progress>
              </div>
              
        </div>
    </div>
</template>
<script>
import '@/assets/style/effectReport.css'
export default {
    data(){
        return{
percentage:65,
customColor: '#409eff',
percentage1:32,
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

