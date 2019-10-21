<template>
    <div class='city' >
      
        <Header  />
        <search :cities='cities'  />

 
 <scroll class='scroll' ref='scroll'>
        <city-list :cities='cities' :hotCities='hotCities' 
                   :msg='Choose' class='list'  @hehe='cityJump'  />
 </scroll>
 <aside-choose :cities='cities' @choose='asideClick'/>
       
    </div>
</template>

<script>
import axios from 'axios';
import Header from '../city-comonpent/Header'
import search from '../city-comonpent/search';
import cityList from '../city-comonpent/cityList';
import scroll from '../common/btscroll';
import asideChoose from '../city-comonpent/asideChoose';
export default {
    name:'city',
    components:{
        Header,
        search,
        cityList,
        scroll,
        asideChoose
    },
    data(){
        return {
            cities:null,
            hotCities:[],
            Choose:null,
           
        }
    },
    mounted(){
       this.getCityInf()
    },
     
    methods:{
       cityJump(res){
           console.log(res)
           this.$refs.scroll.scroll.scrollToElement(res)
       },
        asideClick(res){
 
        this.Choose=res
        },
        getCityInf(){
            axios.get('/city.json').then(this.getCityList)
        },
        getCityList(res){
         
            res=res.data
            if(res.ret&&res.data){
                const data=res.data
                this.cities=data.cities
                this.hotCities=data.hotCities
            }
        }
    }
}
</script>

<style   scoped>
 .city {
     height: 97vh;
 }
 .scroll {
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     top:81px;
 }
</style>