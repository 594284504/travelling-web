<template>
    <div id='swipe'>
      <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in imgList" :key='item.id'>
    <img :src="item.imgUrl" >
    </mt-swipe-item>
 
</mt-swipe>

    </div>
</template>

<script>

export default {
    props:{
      imgList:{
        type:Array,
        default(){
          return []
        }
      }
    } 
}
</script>

<style  scoped>


.mint-swipe {
  height:12rem;
 position: relative;
 margin:0 auto;
}

img {
  width: 100%;
  height: 12rem;
  
}
.mint-swipe-indicators {
    position: absolute!important;
     bottom: 10px!important;
    left: 20%!important;
}
.mint-swipe{
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
</style>