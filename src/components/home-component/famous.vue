<template>
    <div class='body' >
       
        <div v-for='item in fam' :key='item.id' >
            <img :src="item.imgUrl" alt="">
        <h2>{{item.title}}</h2>
        <span>{{item.desc}}</span>
        </div>
    </div>
</template>

<script>
       import axios from 'axios'
export default {

    data(){
        return {
            list:[]
        }
    },
    props:{
        fam:Array
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
    
    background-color: #fff;
    border-bottom: 1px solid gray;
}
.body div img{
    height: 120px;
    width: 100%;
}
.body div h2 {
    margin: 0.5rem 0 0 3px;
    font-size: 20px;
}
.body div span {
    margin-left: 3px;
    margin-bottom: 0.4rem;
    color:gray;
}
</style>