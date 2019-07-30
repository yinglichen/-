<template>
  <div class="contain">
     <homePage :menuIndex='key'/>
  </div>
</template>
<script>
import '@/assets/style/main.css'
import homePage from '@/components/content/homePage/homePage.vue'
export default {
  components:{
     homePage
  },
     data() {
      return {
         key:'2-1',
      }
    },
    props:{
      contentKey:''
    },
    watch:{
      contentKey(){
        this.key=this.$props.contentKey.index
      }
    },
    methods: {
      
    }
};
</script>
 


