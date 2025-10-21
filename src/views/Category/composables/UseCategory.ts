//封装分类数据业务
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/Category'
export function useCategory(){
  const categoryData=ref({})
  const route = useRoute()
  const getCategory = async(id=route.params.id)=>{
    const res = await getCategoryAPI(id)
    //@ts-ignore
    categoryData.value = res.result
  }

  onMounted(()=>{
    getCategory()
  })

  //路由参数变化时把分类数据接口重新发送
  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })
  return{
    categoryData
  }
}
