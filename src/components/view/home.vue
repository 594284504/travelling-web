<template>
    <div id='home' ref='aaa'>
    
       <nav-bar :isChange='isChange' /> 
        <scroll class='scroll' @scroll='currentPos' :probeType='3' >
       <swipe :imgList='lunboImg' />
       <local-nav />
        <main-nav />
        <sub-nav :subNav='subNavImg' />
        <classify-title  @famousClick='famousClick' @recClick='recClick' /> 
        <!-- <component :is='comName'   />  -->
         
        <rec v-show='isRecShow' :rec='recList' @click.native='Rec' />
         <famous  v-show='isFamShow' :fam='famousList' />
          
        </scroll>
      
    </div>
</template>

<script>
import navBar from '../home-component/navBar';
import swipe from '../home-component/Swipe';
import localNav from '../home-component/localNav';
import subNav from '../home-component/subNav'
import mainNav from '../home-component/mainNav'
import classifyTitle from '../home-component/classifyTitle';
import rec from '../home-component/recomend';
import famous from '../home-component/famous'
import axios from 'axios'
import  scroll from '../common/btscroll';
import {mapState} from 'vuex'
export default{
    name:'home',
    components:{
        navBar,
        swipe,
        localNav,
        subNav,
        mainNav,
        classifyTitle,
        rec,
        famous,
        scroll
    },
    data(){
return {
     lunboImg:null,
     subNavImg:[],
     comName:'rec',
     famousList:null,
     recList:null,
     isRecShow:true,
     isFamShow:false,
     isChange:false,
     lastCity:null
    }
    },
     created(){
       this.getHomeInf()
       //this.$bus.$emit('aa',this.famousList)
      
      },
    
     computed:{
      ...mapState(['city'])
     },
      
    methods:{
        Rec(){
            setTimeout(()=>{   this.$bus.$emit('aaa',this.recList) },200)
        }, 
        famousClick(){
          this.comName='famous'
          console.log(this.famousList)
       //this.$nextTick(()=>this.$bus.$emit('famous',this.famousList) ) 
          this.isRecShow=false
          this.isFamShow=true
          
        },
        recClick(){
            this.comName='rec'
            console.log(this.comName)
            //this.$nextTick(()=>this.$bus.$emit('aa',this.famousList))
            
            this.isFamShow=false
            this.isRecShow=true
        },
        getHomeInf(){
            
           axios.get('/index.json?city='+this.city).then(this.getInfList)
        },
         getInfList(res){
            res=res.data
            console.log(res)
            if(res.ret&&res.data){
                const data=res.data
                this.subNavImg= data.iconList
               this.lunboImg= data.swiperList 
               this.famousList=data.weekendList 
               this.recList=data.recommendList
            }
                 
        },
        currentPos(position){
       
        if((-position.y)>30){
            this.isChange=true
        }else {
            this.isChange=false
        }
        }
    } ,
    mounted(){
       this.lastCity=this.city
        
       
      },
      activated(){
       if(this.lastCity !== this.city){
           this.lastCity=this.city
           this.getHomeInf()
           console.log(this.lastCity)
       }
      }
}
   
 
</script>

<style  scoped>
#home {
    height: 100vh;
}
 .scroll{
width: 100%;
 
top: 0;
left: 0;
height: calc(100%);
overflow: hidden;
}

</style>