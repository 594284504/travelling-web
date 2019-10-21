<template>
    <div class='body'>
         <detail-image @bigImg='img_click' v-show="isShow"/>
         <div class='headerNav' :style='Opacity' v-if="navIsShow">景点详情</div>
        <scroll class='scroll' @scroll='currentPos' :probeType='3'>
        <div class='bannar' @click='imgClick'>
        <img :src="url" >
        <div class='bannar_content'>
        <p>{{title}}</p>
         <span class="mui-icon mui-icon-image">12</span>
        </div>
        </div>
     
      <div class='back' v-show="backIsShow" @click='back'>
          <span class="mui-icon mui-icon-undo"></span>
      </div>
       <goods-list :goods='goods' />
       
        <span @click='cc($event)'>kkkkkkkkkk</span>
      <!-- <div class='asas'></div> -->
      </scroll>
    </div>
   
</template>

<script>
import detailImage from '../common/detailImg';
import scroll from '../common/btscroll';
import axios from 'axios'
import goodsList from '../detailComp/goodsList'
 
export default {
    name:'detail',
    components:{
       detailImage,
       scroll,
       goodsList 
        
    },
    data(){
return {
    url:null,
    title:null,
    isShow:false,
    backIsShow:true,
    navIsShow:false,
    Opacity:{
        opacity:0
    },
    goods:null,
    
}
    },
    methods:{
        cc(e){

             console.log(e.target.innerHTML)
        },
        getdetailList(){
          axios.get('/detail.json').then(res=>{this.goods=res.data.data.categoryList})
        },
        back(){
            this.$router.back()
        },
      img_click(){
       this.isShow=false
      },
      imgClick(){
          this.isShow=true
          this.navIsShow=false
      },
      currentPos(position){
          const top=-(position.y);
          this.backIsShow=top<30
         if(top<30){
             this.navIsShow=false
         };
          if(top>30 && top<120){
              this.navIsShow=true
              const opacity=top/120
              this.Opacity={opacity}
                  };
    }
    },
    created(){
        this.$nextTick(()=>{
            this.$bus.$on('img',(res)=>  { 
         this.url=res.imgUrl
         this.title=res.desc
 })   
        this.getdetailList()
        })
    }
}
</script>

<style   scoped>
.bannar {
    position: relative;
}
.bannar img {
    width: 100%;
    height: 14rem; 
}
.bannar_content{
  position: absolute;
 height: 2.3rem;
 
 width: 100%;
  top:11.7rem;
    background-image: linear-gradient(top,rgba(0,0,0,0),
    rgba(0,0,0,0.8) );
}
.bannar_content p {
    float: left;
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
    width: 82%;
    margin: 0.6rem 0 0 0.2rem;
  
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.bannar_content span {
     float: right;
     font-weight: 600;
     font-size: 1rem;
     color: #fff;
     margin :0.6rem 0.7rem 0 0;
}
.back {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 100%;
    padding: 2px 0 0 2px;
}
.back span {
    color:rgb(228, 227, 227);
    font-size: 2rem;
}
.asas{
    height: 50rem;
}
.body {
    height: 100vh;
}
.scroll {
    width: 100%;
 
top: 0;
left: 0;
height: calc(100%);
overflow: hidden;
}
.headerNav{
    height: 2.6rem;
    width: 100%;
    background-color: rgb(101, 189, 248);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3333;
    text-align: center;
    line-height: 2.6rem;
    font-size: 1.4rem;
    font-weight:600;
    color: #fff;
}

</style>