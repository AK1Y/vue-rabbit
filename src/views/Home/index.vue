<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import Homenew from './components/Homenew.vue';
import HomeProduct from './components/HomeProduct.vue';
// import HomePanel from './components/HomePanel.vue';

</script>
<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <Homenew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试组件复用
  <HomePanel title="新鲜好物" subtitle="为你精选好物">

  </HomePanel>
  <HomePanel title="人气推荐" subtitle="每天10点上新">

  </HomePanel> -->
</template>
