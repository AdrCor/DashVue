<template>
    <button
        @click="changeThemeMode"
        class="rounded-xl bg-layer bg-opacity-0 fill-neutral p-1 opacity-80 transition-all hover:bg-opacity-10 hover:opacity-100 hover:shadow-xl"
    >
        <SunIcon v-if="theme.mode == 'dark'" />
        <MoonIcon v-if="theme.mode == 'light'" />
    </button>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useThemeStore } from '@/stores'

const theme = useThemeStore()

function changeThemeMode() {
    theme.setMode(theme.mode == 'dark' ? 'light' : 'dark')
}
</script>
