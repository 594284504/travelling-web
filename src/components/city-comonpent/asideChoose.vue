<template>
    <div class='choose_city'>
               <ul>
                   <li v-for='item in letter' :ref='item'
                    :key='item' @click='chooseClick'
                    @touchstart.prevent='handleTouchStart'
                    @touchmove='handleTouchMove'
                    @touchend='handleTouchEnd'
                    >{{item}}</li>
                   
                    
               </ul>
          </div>
</template>

<script>
export default {
    props:{
        cities:Object
    },
    data(){
        return {
            touchStatus:false,
            timer:null,
            startY:null
        }
    },
    computed:{
        letter(){
            const letter=[]
            for(let i in this.cities){
                letter.push(i)
            }
            return letter
        }
    },
    updated(){
      this.startY=this.$refs['A'][0].offsetTop
    },
    methods:{
        chooseClick(e){
          
         this.$emit('choose',e.target.innerText)
        },
          handleTouchStart(){
            this.touchStatus=true
          },
          handleTouchMove(e){
           if(this.touchStatus){
              if(this.timer){
                  clearTimeout(this.timer)
              }
              //节流，防止高频率触发调用
              this.timer=setTimeout(()=>{
               const touchY=e.touches[0].clientY-82
               const index=Math.floor((touchY-this.startY)/21)
               if(index>=0 && index<this.letter.length){
                   this.$emit('choose',this.letter[index])
               }
              },11)
               
           }
          },
          handleTouchEnd(){
              this.touchStatus=false
          }
    }
}
</script>

<style  scoped>
 .choose_city{
      position: absolute;
      bottom: 0;
      
      right:0;
      top:5.1rem;
      width: 24px;
      height: calc(100% - 5.1rem  );
      display: flex;
        flex-direction: column;
     justify-content: center;
  }
  ul    {
      list-style: none;
     margin: 0;
     padding:0;
      text-align: center;
  }
  li {
      color:skyblue;
      font-weight: 600;
  }
</style>