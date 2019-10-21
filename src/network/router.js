import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/view/home.vue'
import city from '../components/view/city.vue';
 import detail from '../components/view/detail.vue';
 import demo from '../components/view/demo.vue';
Vue.use(Router)

export default new Router({
    routes:[
        {path:'/' ,component:home},
        {path:'/home'  ,component:home},
        {path:'/city',component:city},
        {path:'/detail/:id',component:detail},
         
    ],
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}
    }
})