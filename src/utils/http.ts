import router from "@/router";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'


const httpInstance = axios.create({
    // 后端由黑马提供
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // timeout: 10000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
  //1.从pinia拿到token
  const userStore = useUserStore()
  //@ts-ignore
  const token =userStore.userInfo.token
  //传token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
},e=>Promise.reject(e))

//axis响应式拦截器
httpInstance.interceptors.response.use(
  res=> res.data,
  e=>{
    const userStore = useUserStore()
    //错误提示
    ElMessage({
      type:'warning',
      message:e.response.data.message
    })
    //401token失效处理
    if(e.response.status === 401){
      //1.清除本地用户数据
      userStore.clearUserInfo()
      //2.跳转登录页
      router.replace('/login')
    }
    return Promise.reject(e)
  }
)

export default httpInstance
