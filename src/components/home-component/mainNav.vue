<template>
    <div id='body'>
       <div class='mainNav'>
           <div class='item1'>
           <a href=""><span class='span1'>酒店</span></a>
           <a href=""><span>民宿·客栈</span></a>
           <a href=""><span>机票·火车票+酒店 </span></a>
           </div>
           <div class='item2'>
           <a href=""><span class='span2'>机场</span></a>
           <a href=""><span>火车票</span></a>
           <a href=""><span>汽车·船票</span></a>
           <a href=""><span>专车·租车</span></a>
           </div>
           <div class='item3'>
           <a href=""><span class='span3'>旅游</span></a>
           <a href=""><span>高铁游</span></a>
           <a href=""><span>游轮游</span></a>
           <a href=""><span>定制游</span></a>
           </div>
       </div>
    </div>
</template>

<script>

export default{
     
}
</script>

<style  scoped>
 #body {
     width: 100%;
     height: 12rem;
    
     margin-top: 33px;
     padding: 0 15px;
 }
 .mainNav {
   width: 100%;
   height: 100%;
 
   display: flex;
   flex-direction: column;
   

 }
 .mainNav .item1,.mainNav .item2,.mainNav .item3{
     height: 100%;
     width: 100%;
   flex: 1;
    text-align: center;
   
 
 }
  
 .item1 a:nth-child(1){
   width: 29%;
   height: 64px;
 
   display: block;
   float: left;
   border: 1px solid #fff;
   border-top-left-radius: 8px;
   background-size: 73px auto;
   background-repeat: no-repeat;
   background-position: 35px 30px;
   background-color: rgb(252, 101, 63);
   background-image: url(http://pic.c-ctrip.com/platform/h5/home/grid-nav-items-hotel@v7.15.png)
 }
 .item1 a:nth-child(2){
   width: 25%;
   height: 64px;
   background-color: green;
   display: block;
   float: left;
  border: 1px solid #fff;
   background-color: rgb(245, 113, 6);
 }
.item1 a:nth-child(3){
    width: 46%;
   height: 64px;
   background-color: hotpink;
   display: block;
   float: right;
   border: 1px solid #fff;
    border-top-right-radius: 8px;
    background-repeat: no-repeat;
    background-size: 86px auto;
         background-position: right bottom;
         background-color: rgb(250, 184, 3);
   background-image:  url(http://pic.c-ctrip.com/platform/h5/home/grid-nav-items-jhj@v7.15.png)
}
 a:nth-child(1){
     width: 29%;
   height: 64px;
   background-size: 79px auto;
   background-repeat: no-repeat;
   background-position: 35px 30px;
  background-image: url(http://pic.c-ctrip.com/platform/h5/home/grid-nav-items-flight@v7.15.png);
   display: block;
   float: left;
   border: 1px solid #fff;
   background-color: rgb(90, 152, 252);;
}
.item3 a:nth-child(1){
   border-bottom-left-radius: 8px;
      background-size: 94px auto;
   background-repeat: no-repeat;
   background-color: rgb(93, 218, 149);
   background-position: 18px 18px;
  background-image: url(http://pic.c-ctrip.com/platform/h5/home/grid-nav-items-travel@v7.15.png);
}
 a:nth-child(2){
     width: 25%;
   height: 64px;
   background-color: blue;
   display: block;
   float: left;
   border: 1px solid #fff;
  background-color: rgb(80, 161, 253);
}
 a:nth-child(3){
     width: 23%;
   height: 64px;
   background-color: blue;
   display: block;
   float: left;
   border: 1px solid #fff;
background-color: rgb(93, 173, 248);

}
 a:nth-child(4){
     width: 23%;
   height: 64px;
   background-color: blue;
   display: block;
   float: left;
   border: 1px solid #fff;
background-color: rgb(111, 186, 248);
}
.item3 a:nth-child(4){
    background-color: rgb(103, 228, 81);
    border-bottom-right-radius: 8px;
}
.item3 a:nth-child(2){
    background-color: rgb(95, 207, 145);
}
.item3 a:nth-child(3){
    background: rgb(93, 221, 110);
}

span{
    line-height: 64px;
    font-size: 14px;
    color:#fff;
}
 .span1,.span2,.span3{
   margin-right: 60px;
 } 











</style>