//封装购物车接口

import httpInstance from "@/utils/http";

//加入购物车接口
//@ts-ignore
export function insertCartAPI(skuId,count){
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data:{
      skuId,
      count
    }
  })
}


//获取购物车列表
export function findNewCartListAPI(){
  return httpInstance({
    url:'/member/cart'
  })
}

//删除购物车
//@ts-ignore
export function delCartAPI(ids){
  return httpInstance({
    url:'/member/cart',
    method: 'DELETE',
    data:{
      ids
    }
  })
}
