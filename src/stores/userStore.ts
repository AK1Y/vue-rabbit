import { loginAPI } from "@/apis/User";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cartStore";

// 管理用户相关
export const useUserStore = defineStore('user',()=>{
  const cartStore = useCartStore()
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
    //清除购物车action
    cartStore.clearCart()
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist:true
})
