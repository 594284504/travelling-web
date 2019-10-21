<template>
     <div class='body' >
       
        <div v-for='item in rec' 
                    :key='item.id'   
                    :to="'/detail/'+item.id"
                    @click='imgClick(item)'
                     >
        
        <img :src="item.imgUrl" >
        <p>{{item.title}}</p>
        <span>{{item.desc}}</span>
       <router-link :to="'/detail/'+item.id"> <i>查看详情</i></router-link>
             
        </div>
   
    </div>
</template>

<script>
 
export default {
    
    
     props:{
         rec:Array
     },
     methods:{
         imgClick(item){
                 setTimeout(()=>{
 this.$bus.$emit('img',item)
            console.log('222')
         },200)
     }
   
    
     }
}
</script>

<style  scoped>
*{
    margin:0;
    padding: 0;
}
.body{
    width: 100%;
     
    padding: 0 15px;
    
    
}
.body div {
    height: 130px;
    padding: 10px 0 10px 0;
    background-color: #fff;
    border-bottom: 1px solid gray;
    position: relative;
}
.body div img{
    
    height: 100%;
    width: 140px;
    float: left;
    border-radius: 5px;
        margin:0 10px 0 3px;
}
.body div p {
    font-weight: 600;
    font-size: 19px;
    margin-bottom: 10px;
}
.body div span {
    display: block;
    color:gray;
}
.body div i{
    font-style: normal;
  position: absolute;
   bottom:8px;
   left: 150px;
   display: block;
    color:#fff;
   background-color: rgb(248, 82, 32);
   width: 5rem;
   height: 24px;
  padding-top: 2px;
  border-radius: 8px;
  text-align: center;
}
</style>