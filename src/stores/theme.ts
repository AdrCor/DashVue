import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
    const name = useLocalStorage<string>('theme-name', 'dash')
    const mode = useLocalStorage<'dark' | 'light'>('theme-mode', 'dark')

    function setName(value: string) {
        name.value = value
    }

    function setMode(value: 'dark' | 'light') {
        mode.value = value
    }

    return { name, mode, setName, setMode }
})
