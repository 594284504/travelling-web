<template>
   <div class='body' ref='wrapper'>
 
         
           <div>
          <div class='title'>
              <span>当前城市</span>
              </div>
            <div class='area' >
                <span>{{this.city}}</span>
            </div>
        </div>
        <div>
            <div class='title' ref='aa' ><span>热门城市</span></div>
            <div class='area'>
                <span v-for='item in hotCities' :key='item.id'
                      @click='CityClick(item.name)'>
                    {{item.name}}
                     </span>
                 
            </div>
        </div>
        <div v-for='(item,key) in cities' :key='key' 
                    :ref='key'  >
            <div class='title' >
                <span >{{key}}</span>
            </div>

            <div class='city_list'>
                <span v-for='it in item' :key='it.id'  @click='CityClick(it.name)'>{{it.name}}</span>
            </div>
            </div>
 </div>

 
   

  

</template>

<script>
 
import { mapState ,mapMutations } from 'vuex'
export default {
    props:{
        cities:Object,
        hotCities:Array,
        msg:String,
        aaa:null
    },
    
   computed:{
       ...mapState(['city'])
   },
   methods:{
   CityClick(city){
    // this.$store.commit('changeCity',city)
    this.changeCity(city)
    
    this.$router.back()
  },
  ...mapMutations(['changeCity'])
   },
   watch:{
        msg(){
            if(this.msg){
              const element=this.$refs[this.msg][0]
               this.$emit('hehe',element)   
                
            }
        }
   }
}
</script>

<style   scoped>
.title {
height :1.3rem;
 background-color :rgb(226, 226, 226);
 height: 1.5rem;
 line-height: 1.5rem;
}
 .title span {
     margin-left:10px;
 }
   .area {
    overflow: hidden;
     padding:15px 26px 0 6px ;
   } 
  .area span {
      width:30%;
      border: 1px solid rgb(122, 121, 121);
      display: block;
      text-align: center;
      border-radius: 4px;
      float:left;
      margin:0 5px 15px; 
  }
  .city_list span{
      display:  block;
      height: 3rem;
      line-height: 3rem;
      border-bottom: 1px solid rgb(163, 163, 163);
      padding-left: 10px;
  }

</style>