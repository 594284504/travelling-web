<template>
    <div class='body'>
       <router-link to='/home'>
       <i class="mui-icon mui-icon-arrowleft" ></i>
     </router-link>
       <span>城市选择</span>
        
    </div>
</template>

<script>
export default {
    methods:{
        
    }
}
</script>

<style   scoped>
div {
    height: 2.5rem;
    background-color: rgb(114, 162, 252);
    text-align: center;
}
div span {
    line-height: 2.5rem;
    font-size: 20px;
    color:#fff;
}
div i {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 1.9rem;
    color:#fff;
}
 
</style>