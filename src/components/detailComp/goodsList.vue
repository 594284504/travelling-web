<template>
    <div>
  <div class='detailGoods' v-for="item in goods" :key='item.id'>
      <div  @click='showChild'><i class="mui-icon-extra mui-icon-extra-new">
          </i><span>{{item.title}}</span>
          </div>
      <div v-if='item.children' class='children' v-show='isShow'>
       <goods-list :goods='item.children'></goods-list>
      </div>
  </div>
    </div>
</template>

<script>
export default {
    name:'goodsList',
    props:{
        goods:Array
    },
    data(){
     return {
         isShow:false
     }
    },
    methods:{
     showChild(){
         this.isShow=!this.isShow
     }
    }
}
</script>

<style  scoped>
.detailGoods{
    width: 100%;
   
    
   padding-left: 1rem;
}
.detailGoods span {
  
 font-size: 1.2rem;
 margin-left: 0.6rem;

}
.detailGoods .children {
     background-color:red;
}
</style>