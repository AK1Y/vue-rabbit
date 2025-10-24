// 轮播图
import { getHomeBannerAPI } from "@/apis/Home"
import { defineStore } from "pinia"
import { ref } from "vue"
export const useBannerStore = defineStore('banner', () => {
  const bannerList = ref([])

  // 支持传 params
  const getBanner = async (params = { distributionSite: '1' }) => {
    const res = await getHomeBannerAPI(params)
    //@ts-ignore
    bannerList.value = res.result
  }
  return {
    bannerList,
    getBanner
  }
})
