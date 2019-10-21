export default {
    changeCity(state,city){
        state.city=city
        try {
        localStorage.city=city
        //本地储存，本地缓存数据，cookie
         } catch(e){}
    } 
    
}