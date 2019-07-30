<template>
    <div class="vesion">
        <div class="title">
            <span>版本信息</span>
        </div>
        <div class="table">
        <table class="version-table" border="1" 
          cellspacing="0">
           <tr>
               <th>当前版本</th>
               <td>1.0.0</td>
           </tr>
           <tr>
               <th>基于框架</th>
               <td>VUE + elementUI</td>
           </tr>
           <tr>
               <th>主要特色</th>
               <td>单页面/响应式/清爽/极简</td>
           </tr>
           <tr>
               <th>获取渠道</th>
               <td>
                   <button @click="getOriginCode" class="addressBtn">gitHub地址</button>
               </td>
           </tr>
        </table>
        </div>
    </div>

</template>
<script>
import "@/assets/style/versionInfo.css"
export default {
    data(){
        return{

        }
    },
    methods:{
        getOriginCode(){
            window.location.hre="https://github.com/yinglichen/RMS"
        }

    },
    mounted(){

    }
}
</script>
 


