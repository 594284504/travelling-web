import axios from 'axios';
import service from './contactApi';
import {Toast} from 'vant';
//service 循环遍历输出contactAPI里的请求方法

let instance=axios.create({
    baseURL:'http://localhost:9000/api',
    timeout:1000
})

const Http={};

for(let key in service){
    let api =service[key]
    Http[key]=async function(params,isFormData=false,config={}){
         
         let newParams={}
         //content-type是不是form-data的判断
         if(params&&isFormData){
             newParams=new FormData()
                 for(let i in params){
                      newParams.append(i,params[i])
             }
             }else {
                 newParams=params
         }
         let response={} //请求的返回值
         if(api.method==='put'||api.method==='post'||
         api.method==='patch'){
             try{
               response=await instance[api.method](api.url,newParams,config)
             }catch(err){
               response=err
             }
         }else if(api.method==='delete'||api.method==='get'){
             config.params=newParams
             try{
                response=await instance[api.method](api.url,config)
             }catch(err){
                response=err
             }
         }
         return response
         }
    }

    //拦截器添加
    instance.interceptors.request.use(config=>{
//发请求前做点什么
      Toast.loading({
          mask:false,
          duration:0,
          forbidClick:true,
          message:'加载中...'
      })
      return config 
    },err=>{
       Toast.clear()
       Toast('请求错误')
       console.log(err)
    })

    instance.interceptors.response.use(res=>{
         Toast.clear()
         return res.data
    },()=>{
         Toast.clear()
         Toast('响应失败')
    })

    export default Http