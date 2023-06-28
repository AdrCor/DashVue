<template>
    <div :class="{ 'dark theme-base-dark': theme.mode == 'dark', 'theme-base-light': theme.mode == 'light' }" class="">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores'

const theme = useThemeStore()
</script>
