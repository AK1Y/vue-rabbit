import httpInstance from "@/utils/http"

//封装用户相关函数
//@ts-ignore
export function loginAPI({account,password}){
  return httpInstance({
    url:'/login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}
