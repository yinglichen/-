<<template>
    <div class='homePage'>
        <!-- <control v-if='index=="2-1"'/>
        <homePage1 v-if='index == "2-2"'/>
        <homePage2 v-if='index == "2-3"'/> -->
        <component :is="currentTabComponent"></component>
    </div>
</template>
<script>
import control from '@/components/content/homePage/pages/control.vue'
import homePage1 from '@/components/content/homePage/pages/homePage1.vue'
import homePage2 from '@/components/content/homePage/pages/homePage2.vue'
export default {
 components:{
   control,
   homePage1,
   homePage2
  },
  props:{menuIndex:''},
  watch:{
      menuIndex(){
          this.index=this.$props.menuIndex
          if(this.index == "2-2"){
              this.currentTabComponent=homePage1
          }else if(this.index == "2-3"){
               this.currentTabComponent=homePage2
          }else{
               this.currentTabComponent=control
          }
      }
  },
  data(){
      return{
          index:null,
          currentTabComponent:control,
      }
  }
}
</script>
