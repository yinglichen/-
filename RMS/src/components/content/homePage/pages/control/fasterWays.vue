<template>
      <div class="easy-ways bgW">
              <div class="title">
                  <span>快捷方式</span>
              <div class='indicator'>
                  <i class="iconfont">&#xe505;</i>
                  <i class="iconfont">&#xe505;</i>
              </div>
              </div>
              <ul class='main-card'>
                <li v-for='item in waysList' :key='item.index' >
                <router-link :to="item.path">
                 <img :src='item.iconfont'/> 
                <span>{{item.name}}</span>
                </router-link>
                </li>
              </ul>
             </div>
</template>
<script>
import eaWaysList from '@/assets/data/easyWays.json'
export default {
    name:'fasterWays',
    data(){
        return{
         waysList:null,
        }
    },
    mounted(){
  this.waysList=eaWaysList
  for(var i=0;i< this.waysList.length;i++){
            this.icontFont=this.waysList[i].iconfont
         }
    }
}
</script>

