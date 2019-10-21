let defaultCity='宿迁'
//用来测试localStorage是否可用，如被关闭等，会导致整个页面出错
try {
    if(localStorage.city){
        defaultCity=localStorage.city
    }
} catch (e){}

export default {
    city:defaultCity,
  
}