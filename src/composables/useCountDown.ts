import dayjs from "dayjs"
import { computed, onUnmounted, ref } from "vue"

export const useCountDown = () => {
  const time = ref(0)
  let timer: number | null = null

  // 格式化时间 xx分xx秒
  const formatTime = computed(() => {
    const t = time.value > 0 ? time.value : 0
    return dayjs.unix(t).format('mm分ss秒')
  })

  const start = (currentTime: number) => {
    time.value = currentTime

    if (timer) clearInterval(timer)

    timer = setInterval(() => {
      if (time.value <= 0) {
        clearInterval(timer!)
        timer = null
        return
      }
      time.value--
    }, 1000)
  }

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return {
    formatTime,
    start
  }
}
