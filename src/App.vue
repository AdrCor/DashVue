<template>
    <Background>
        <div class="bg-back text-front text-center">Hello world!</div>
        <button @click="changeTheme" class="bg-back text-front rounded-full px-4 py-1">Change Theme</button>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue';
import { useThemeStore } from '@/stores'

const theme = useThemeStore()

function changeTheme() {
    theme.setMode(theme.mode == 'dark' ? 'light' : 'dark')
}

</script>