<template>
    <div id='subNav'>
      <mt-swipe  :auto="0"  >
  <mt-swipe-item v-for='(page,index) of pages' :key='index'>
     <div v-for='item of page' :key='item.id'>
         <div class='img'>
      <img :src="item.imgUrl" alt="">
          </div>
      <p>{{item.desc}}</p>
  </div>
       
      </mt-swipe-item>
      <span class="mui-icon mui-icon-arrowright"></span>
</mt-swipe>

    </div>
</template>

<script>
 
export default {
   props:{
       subNav:{
           type:Array,
           default(){
               return []
           }
       }
   },

    computed:{
       
      pages(){
       const pages=[] 
       this.subNav.forEach((item,index)=>{
           const page=Math.floor(index/8)
           if(!pages[page]){
               pages[page]=[]
           }
           pages[page].push(item)
       })
       return pages
      }
    }
    
}
</script>

<style  scoped>
#subNav {
     width: 100%;
    height:8rem;
     padding:0 15px 0 15px;
    
    margin:10px auto;
}

.mint-swipe {
  height:100%;
   
  border-radius: 8px;
}
.mint-swipe-item p{
    font-size: 0.7rem;
}
.mint-swipe-item  div{
     width: 25%;
     height: 50%;
     text-align: center;
     float: left;
     padding: 4px 10px 4px 10px;
 }
 div .img{
       width: 100%;
       height: 70%;
   
      padding: 0;
       display: flex;
       justify-content: center;
 }
 div .img img{
    
     height: 38px;

 }
span {
    position: absolute;
    right: -5px;
    top: 42%;
    color:rgb(158, 159, 160);
}
#subNav >>> .mint-swipe-indicator{
   display: none;
}
</style>