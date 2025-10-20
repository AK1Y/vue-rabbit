import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from '@/apis/Layout';

export const useCategoryStore=defineStore('category',()=>{
  //state导航列表数据
  const categoryList = ref([])
  //action获取方法
  const getCategory = async()=>{
  const res =await getCategoryAPI()
  //@ts-ignore
  categoryList.value=res.result
  }

  return{
    categoryList,
    getCategory
  }
})
