import httpInstance from "@/utils/http";

//获取详情接口
export function getCheckInfoAPI(){
  return httpInstance({
    url:'/member/order/pre'
  })
}

//提交订单
export function createOrderAPI(orderData:any){
  return httpInstance({
    url:'/member/order',
    method: 'POST',
    data:orderData
  })
}
