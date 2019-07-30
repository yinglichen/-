<template>
    <div class="to-do-list bgW">
                 <div class="title">
                  <span>待办事项</span>
              <div class='indicator'>
                  <i class="iconfont">&#xe505;</i>
                  <i class="iconfont">&#xe505;</i>
              </div>
              </div>
               <ul class="main-card">
                   <li class='comment' v-for="(item,index) in todoList" :key='index'>
                       <router-link :to="item.path">
                       <h6>{{item.name}}</h6>
                       <strong>{{item.num}}</strong>
                       </router-link>
                   </li>
               </ul>
             </div>
</template>
<script>
import toDoList from '@/assets/data/schedule.json'
export default {
    data(){
        return{
todoList:null,
        }
    },
    methods:{

    },
    mounted(){
 this.todoList=toDoList
    }
}
</script>

