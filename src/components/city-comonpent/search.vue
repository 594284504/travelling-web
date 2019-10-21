<template>
<div>
        <div class='search'>
            <input v-model="keyword" class='search-input' type="text" placeholder="输入城市名或拼音">
            </div>

        <div class='searchRes' v-show='isShow' ref='wrapper'>
          <ul  >
            <li v-for="item in list" :key='item.id' class='item' @click='CityClick(item.name)'>
              {{item.name}}
              </li>
              <li v-show='isHasRes' class='item'>没有找到您输入的城市</li>
          </ul>
        </div>

        </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex'
export default {
    data(){
      return {
        keyword:'',
        list:[],
        timer:null,
        isShow:false,
        resIsTrue:false
      }
    },
    props:{
      cities:Object 
     
    },
    methods:{
      CityClick(city){
        // this.$store.commit('changeCity',city)
        this.changeCity(city)
        this.keyword=''
        this.$router.go(-1)
       
      },
      ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll=new Bscroll((this.$refs.wrapper),{

        probeType:2,
          
           click:true
        } )
    },
    computed:{
       isHasRes(){
         return !this.list.length
       }
    },
    watch:{
      keyword(){
         if(this.timer){
           clearTimeout(this.timer)
         }
         this.timer=setTimeout(()=>{
           const res=[]
           for(let i in this.cities){
             this.cities[i].forEach((val)=>{
               if(val.spell.indexOf(this.keyword)>-1||
                 val.name.indexOf(this.keyword)>-1){
                   res.push(val)
                 }
             })
           }
           this.list=res
         },100)
         this.isShow=this.keyword.length?true:false
       
          
      }
    }
}
</script>

<style lang="stylus" scoped>
 
.search 
    height: 2.6rem
    background-color : rgb(114, 162, 252);
    padding:0.3rem
    margin-top :-3px
    
    .search-input 
      height: 2rem
      width:100%
      box-sizing :border-box
      padding :3px
      line-height :2rem
      text-align :center
      border-radius :6px
  .searchRes
      position absolute
      bottom :0
      top: 5rem
      left:0
      right:0
      overflow :hidden
      background-color #eee
      z-index :10
   
  .item 
   background-color #fff
   line-height 2.4rem
   font-size 1.2rem
   border-bottom 1px solid gray
 
</style>