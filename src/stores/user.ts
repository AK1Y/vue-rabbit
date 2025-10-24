import { loginAPI } from "@/apis/User";
import { defineStore } from "pinia";
import { ref } from "vue";

// 管理用户相关
export const useUserStore = defineStore('user',()=>{
  //state用户数据
  const userInfo=ref({})
  //@ts-ignore
  const getUserInfo=async({account,password})=>{
    const res = await loginAPI({account,password})
    //@ts-ignore
    userInfo.value=res.result
  }

  //退出时清除用户信息
  const clearUserInfo =()=>{
    userInfo.value={}
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist:true
})
