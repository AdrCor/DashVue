import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export function useBreakpoints() {
    const { width } = useWindowSize()
    const breakpoint = computed(() => {
        if (width.value < 640) {
            return 'xs'
        } else if (width.value < 768) {
            return 'sm'
        } else if (width.value < 1024) {
            return 'md'
        } else if (width.value < 1280) {
            return 'lg'
        } else if (width.value < 1536) {
            return 'xl'
        } else {
            return '2xl'
        }
    })
    return breakpoint
}
