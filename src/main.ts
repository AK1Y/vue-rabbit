//引入初始化样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from './apis/testAPI'
// import { useIntersectionObserver } from '@vueuse/core'
import { en, et } from 'element-plus/es/locales.mjs'
import { LazyPlugin } from './directives/index.ts'
import { componentsPlugin } from './components/index.ts'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//测试接口函数
// getCategory().then(res=>{
//   console.log(res)
// })

const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(LazyPlugin)
app.use(componentsPlugin)

app.mount('#app')


// //定义全局指令
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     // 使用 useIntersectionObserver 监听图片是否进入视口
//     const { stop } = useIntersectionObserver(
//       el,
//       //监听的结果会返回一个数组 entries，里面包含元素的可见信息
//       (entries) => {
//         // 我们这里只监听了一个元素el，所以直接取第一个
//         const entry = entries[0]
//         // 如果元素存在，并且进入了视口（isIntersecting 为 true）
//         if (entry && entry.isIntersecting) {
//           //绑定图片地址给到 el 的 src 属性
//           el.src = binding.value
//           stop() // 停止监听
//         }
//       }
//     )
//   }
// })
