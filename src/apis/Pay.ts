import httpInstance from "@/utils/http";

//支付页面
export function getOderAPI(id:any){
  return httpInstance({
    url:`/member/order/${id}`,
  })
}
