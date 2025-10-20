import { useIntersectionObserver } from '@vueuse/core'
import { install } from 'element-plus'


export const LazyPlugin ={
  //@ts-ignore
  install(app) {
    //懒指令加载
    app.directive('img-lazy', {
    //@ts-ignore
    mounted(el, binding) {
    // 使用 useIntersectionObserver 监听图片是否进入视口
    const { stop } = useIntersectionObserver(
      el,
      //监听的结果会返回一个数组 entries，里面包含元素的可见信息
      (entries) => {
        // 我们这里只监听了一个元素el，所以直接取第一个
        const entry = entries[0]
        // 如果元素存在，并且进入了视口（isIntersecting 为 true）
        if (entry && entry.isIntersecting) {
          //绑定图片地址给到 el 的 src 属性
          // console.log('指令被触发')
          el.src = binding.value
          stop() // 停止监听
            }
          }
        )
      }
    })
  }
}
