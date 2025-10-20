<!-- 面包屑模板 -->
<script setup>
import { useBannerStore } from '@/stores/banner';
import { useCategoryStore } from '@/stores/category';
import { onMounted, ref, watch} from 'vue';
import { useRoute } from 'vue-router';

// url :/category黑马接口挂掉了，改用首页接口获取分类数据
// const route = useRoute();
// const CategoryData = ref([])
// const categoryName = ref('')     // 用于存放面包屑里的名字
// const getCategoryData = async () => {
//   const res = await getCategoryAPI()
//   CategoryData.value=res.result
//   // console.log(CategoryData.value)
//   // 根据路由 id 查找对应分类的 name
//   const current = CategoryData.value.find(item => item.id === route.params.id)
//   if (current) {
//     categoryName.value = current.name
//   }
// }

const categoryStore = useCategoryStore()
const route = useRoute();
const categoryName = ref('')     // 用于存放面包屑里的名字
const getCategoryData=async()=>{
    // 如果 store 里还没数据，就调接口
  if (categoryStore.categoryList.length === 0) {
    await categoryStore.getCategory()
  }
  // 根据路由参数查找对应分类
  const current = categoryStore.categoryList.find(
    (item) => item.id === route.params.id
  )
  if (current) {
    categoryName.value = current.name
  }
}

watch(
  ()=>route.params.id,
  async()=>{
    await getCategoryData()
  }
)
//轮播图数据
const Bannerstore = useBannerStore()
Bannerstore.getBanner({ distributionSite: '2' })


onMounted((()=>{
  getCategoryData()
}))


</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->

    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
