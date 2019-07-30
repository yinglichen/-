<template>
<div>
 <div class="title">
              <span>快捷方式</span>
              <div class='indicator'>
                  <i class="iconfont">&#xe505;</i>
                  <i class="iconfont">&#xe505;</i>
              </div>
              </div>
    <div id="dataView">
        
    </div>
    </div>
</template>
<script>
import '@/assets/style/dataView.css'
export default {
    data(){
     return{
       date:[],
       base:null,
       month:null,
       day:null,
       dayArry:[],
       yData:[100,300,300,500,400,200,400,600,700,100,400,300,0,700,650,300,240,330,400,450,440,500,700,340,560 ],
     }
    },
    methods:{
      showEcharts(){
          this.base=new Date()
          this.month=this.base.getMonth()

          this.base.setMonth(this.month+1);
          this.base.setDate(0)
          this.day=this.base.getDate()
          
          for(var k=1;k<=this.day;k++){
            this.date.push([this.month+1,k].join('/'))
          }

           

        var echarts=require('echarts');
         var myChart = echarts.init(document.getElementById("dataView"),null)
         myChart.setOption({
              title: {
                  left:'center',
                text: '今日流量趋势'
            },
            tooltip: {
                 trigger:'axis', 
                //   position: function (pt) {
                //     return [pt[0], '10%'];
                // }   //lable标签位置
        //          axisPointer: {
        //          type: 'cross',
        //          label: {
        //               backgroundColor: 'red'
        //         }
        // }  
                // formatter:function(parmas){
                //     return parmas.marker+parmas.name+'<br/>'+parmas.value
                // }
            },
            legend: {
                data:['最新流量','预估流量']
            },
            xAxis: {
                type:'category',
                boundaryGap: false,
                // axisLabel:{
                //     formatter:function(val){
                //         return{}
                //     }
                // },
                data:this.date
                //data: ["06:00","07:30","09:00","11:30","13:00","14:30","16:00","17:30","19:00","20:30","22:00","23:30"]
            },
            yAxis: {
                type:'value',
                scale:false,
                boundaryGap: [0.2, 0.2]
            },
            dataZoom:[{
                type:'inside',
                start:0,
                end:31,
            }],
            series: [{
                type: 'line',
                color:'#7b9ce1',
                smooth:true,
                renderItem:function(parmas,api){

                },
                data:this.yData
               // data: [200, 300,400,300,500, 600,700,300,200, 800]
            }]
         })
      }
    },
    mounted(){
      this.showEcharts()
    }
}
</script>
