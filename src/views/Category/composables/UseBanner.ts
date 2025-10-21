import { useBannerStore } from '@/stores/banner';
import { computed } from 'vue';
export function useBanner(){
  //轮播图数据
  const Bannerstore = useBannerStore()
  Bannerstore.getBanner({ distributionSite: '2' })
  const BannerList = computed(()=>Bannerstore.bannerList)
  return {
    BannerList
  }
}
