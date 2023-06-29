<template>
    <button
        @click="changeThemeMode"
        class="rounded-xl bg-layer bg-opacity-0 fill-on-neutral p-1 opacity-80 transition-all hover:bg-opacity-10 hover:opacity-100 hover:shadow-xl"
    >
        <Sun v-if="theme.mode == 'dark'" />
        <Moon v-if="theme.mode == 'light'" />
    </button>
</template>

<script setup lang="ts">
import Sun from '@/components/icons/solid/Sun.vue'
import { useThemeStore } from '@/stores'
import Moon from '@/components/icons/solid/Moon.vue'

const theme = useThemeStore()

function changeThemeMode() {
    theme.setMode(theme.mode == 'dark' ? 'light' : 'dark')
}
</script>
