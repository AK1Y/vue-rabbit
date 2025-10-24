//基础思想：如果已经添加过相同的商品，就在其数量count上加一，如果没有添加过，就直接push到购物车列表中
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { delCartAPI, findNewCartListAPI, insertCartAPI } from "@/apis/Cart";
import { useRouter } from "vue-router";

//购物车模块
export const useCartStore = defineStore('cart',()=>{
  //拿用户token判断是否登录，未登录则不让加购
  const router = useRouter()
  const userStore = useUserStore()
  //@ts-ignore
  const isLogin = computed(()=>userStore.userInfo.token)

  //定义state
  const cartList=ref([])

  //定义action
  //获取最新购物车
  const updateNewList = async()=>{
    const res = await findNewCartListAPI()
    //@ts-ignore
    cartList.value=res.result
  }

  //添加购物车
  const addCart = async(goods:any)=>{
    const {skuId,count} = goods
    //登陆后的加购物车逻辑
    if(isLogin.value){
      await insertCartAPI(skuId,count)
      updateNewList()
    }
    //本地加入购物车逻辑
    else{
      //通过匹配传过来的SkuID能否在cartList中找到
      //@ts-ignore
      // const item = cartList.value.find((item)=>goods.skuId === item.skuId)
      // if(item){
      //   //找到了
      //   //@ts-ignore
      //   item.count++
      //   //@ts-ignore
      //   console.log(item.count)
      // }
      // else{
      //   //@ts-ignore
      //   cartList.value.push(goods)
      //   console.log(cartList.value)
      // }
        router.push('/login')
    }
  }

  //删除购物车
  //@ts-ignore
  const delCart = async(skuId)=>{
    if(isLogin.value){
      //接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    }
    else{
      //@ts-ignore
      cartList.value = cartList.value.filter(item=>item.skuId !== skuId)
    }
  }

  //清除购物车
  const clearCart = ()=>{
    cartList.value=[]
  }


  //计算属性
  //1.总数
  //@ts-ignore
  const allCount = computed(()=>cartList.value.reduce((total,item)=>total+item.count,0))
  //2.总价
  //@ts-ignore
  const allPrice = computed(()=>cartList.value.reduce((total,item)=>total + item.count * item.price,0))


  // //单选功能
  // const singleCheck = (skuId,selected)=>{
  //   const item = cartList.value.find((item)=>item.skuId === skuId)
  //   item.selected=selected
  // }

  // //判断是否全选
  // const isAll = computed(()=>{
  //   return cartList.value.every(item=>item.selected)
  // })

  // //全选功能
  // const allCheck = (selected)=>{
  //   cartList.value.forEach(item=>item.selected=selected)
  // }


  // v-model 全选
  const isAll = computed({
    get:()=>cartList.value.every(item=>item.selected),
    set:(val:boolean)=>{
      cartList.value.forEach(item=>item.selected=val)
    }
  })

  //已选数量
  const selectedCount = computed(
    ()=>cartList.value.filter(item=>item.selected).reduce((total,item)=>total+item.count,0)
  )
  //已选价钱合计
  const selectedPrice = computed(
    ()=>cartList.value.filter(item=>item.selected).reduce((total,item)=>total+ item.count * item.price,0)
  )


return{
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    clearCart
    // singleCheck,
    // allCheck
  }
},
{
  persist:true
})
