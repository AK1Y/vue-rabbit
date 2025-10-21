<!-- 轮播图Banner组件 -->
<script setup>
import { useBannerStore } from '@/stores/banner';
import { onMounted } from 'vue';

// import { getHomeBannerAPI } from '@/apis/Home';
// import { ref,onMounted } from 'vue';
// const HomeBannerList = ref([])
// const getHomeBanner = async()=>{
//   const res = await getHomeBannerAPI()
//   HomeBannerList.value=res.result
// }

// onMounted(()=>{
//   getHomeBanner()
// })

const Bannerstore = useBannerStore()
// console.log(Bannerstore.bannerList)

//挂载getBanner方法
onMounted(()=>{
  Bannerstore.getBanner()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in Bannerstore.bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
