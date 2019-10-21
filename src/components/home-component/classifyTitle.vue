<template>
    <div class='body'>
         
        <div class='rec' @click='recClick'>热销推荐</div>
       <div class='famous' @click='famousClick'>著名景点</div>
    </div>
</template>

<script>
export default {
    methods:{
        famousClick(){
            this.$emit('famousClick') 
        },
        recClick(){
            this.$emit('recClick')
        }
    }
}
</script>

<style   scoped>
.body {
    width: 100%;
    height: 2rem;
   display: flex;
     padding: 0 15px;
}
.body div {
   height: 2rem;
     background-color: rgb(159, 210, 252);
   line-height: 2rem;
   text-align: center;
    flex:1;
   color: aliceblue;
}
.rec {
     border-top-left-radius: 8px;
    
}
.famous {
    border-top-right-radius: 8px;
     
}
</style>