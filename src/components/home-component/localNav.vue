<template>
    <div id='nav'>
       <ul>
           <li><a href=""><p></p><span> 攻略·景点</span></a></li>
           <li><a href=""><p></p><span> 门票·玩乐</span></a></li>
           <li><a href=""><p></p><span> 美食林</span></a></li>
           <li><a href=""><p></p><span> 周边游</span></a></li>
           <li><a href=""><p></p><span> 一日游</span></a></li>
       </ul>
    </div>
</template>

<script>

export default {
  
}
</script>

<style   scoped>
#nav {
    width: 100%;
    height:4.5rem;
      position: absolute;
     padding:2px 15px 5px 15px;
    margin: -45px 0 0px 0;
}
ul {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   padding-top: 5px
}
ul li {
    flex:1;
    
    
    text-align: center;
}
ul li a{
    color:black;
}
ul li span{
    font-size: 0.75rem;
    margin-top: -9px;
}

li p {
    
    width: 40px;
    height: 34px;
    margin: 0 auto;
    background: url(http://pic.c-ctrip.com/platform/h5/home/home-fivemain-sprite2x@v7.15.png);
    background-position: 0 0;
        background-repeat: no-repeat;
    background-size: 40px auto;
    display: block;
}
ul li:nth-child(2) p {
    background-position: 0 -40px;
}
ul li:nth-child(3) p {
    background-position: 0 -80px;
}
ul li:nth-child(4) p {
    background-position: 0 -120px;
}
ul li:nth-child(5) p {
    background-position: 0 -160px;
}

</style>