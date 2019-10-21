<template>
  
    <div class='nav  ' :class='{active:isChange}' >
      <div class='menu'><span class="mui-icon mui-icon-bars"></span></div>
      <div class='ss'><input type="text" placeholder="输入城市/景点/游玩主题"></div>
     <router-link to='/city'>
     <div class='position'><span>{{this.$store.state.city}}</span><i class="mui-icon mui-icon-location"></i></div>
</router-link>
    </div>
    
</template>

<script>

export default {
    name:'home',
    props:{
      isChange:{
          type:Boolean,
          default(){
              return true
          }
      }
    }
}
</script>

<style  scoped  >

.nav {
    height:40px;
   background-color: rgba(0,0,0,0.6);
    padding: 4px 0;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
}
.menu  {
     height: 100%;
    width: 3rem;
   
}
.menu span {
  line-height: 32px;
  font-size: 1.5rem;
  margin-left: 5px;
  color:#fff;
}
.ss{
    flex: 1;
}
.ss input {
  height: 32px;
  border-radius: 15px;
  border:0;
}
input::-webkit-input-placeholder{
    color:#ccc;
    font-size: 14px;
}
.position {
   min-width: 4rem;
       text-align: center;
}
.position span,.position i{
    line-height: 32px;
    font-size: 0.85rem;
    color:#fff;
}
   .active{
       background: #fff;
   opacity:1; 
transition:all 0.7s;
    
}
.active span ,.active i{
color:black!important;
}
.active input::-webkit-input-placeholder {
    
    color:rgb(90, 90, 90);
}
.active input{
background-color: rgb(224, 223, 223);
}
</style>