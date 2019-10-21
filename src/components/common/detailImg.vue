<template>
    <div class='bg' @click='bigImgClick'>
          <mt-swipe   :auto="4000">
  <mt-swipe-item v-for="item in imgList" :key='item.id'>
    <img  :src="item.imgUrl" >
    </mt-swipe-item>
 
</mt-swipe>
    </div>
</template>

<script>
 
export default {
     
    data(){
        return {
            imgList:null
        }
    },
    methods:{
        bigImgClick(){
            this.$emit('bigImg')
        }
    },
   mounted(){
         this.$bus.$on('aaa',res=>this.imgList=res)  
   }
}
</script>

<style   scoped>
.bg {
    background: #000;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.mint-swipe {
    display: block;
    background-color: #fff;
      height: 24rem;
}
img {
    width: 100%;
    height: 24rem;
}
.bg >>> .mint-swipe-indicator{
 background-color: rgb(201, 199, 199);
}
.bg >>> .mint-swipe-indicators{
  position: fixed;
  bottom:4rem;
   height: 3rem;
   left: 60%;
 
  z-index: 2222;
   
}
</style>