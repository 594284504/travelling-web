import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import router from './network/router'
import store from './store/index';

import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.config.productionTip = false

import '../mui-master/dist/css/mui.min.css';
import '../mui-master/examples/hello-mui/css/icons-extra.css'
import './assets/initStyle.css'

import {Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'
Vue.use(Swipe, SwipeItem)
 
Vue.prototype.$bus=new Vue()

import Http from './network/http';
Vue.prototype.$Http=Http




new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
