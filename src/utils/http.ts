import axios from "axios";

const httpInstance = axios.create({
    // 后端由黑马提供
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // timeout: 10000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
  return config
},e=>Promise.reject(e))

//axis响应式拦截器
httpInstance.interceptors.response.use(
  res=> res.data,e=>{
    return Promise.reject(e)
  }
)

export default httpInstance
