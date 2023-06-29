<template>
    <div
        :class="{ 'dark theme-base-dark': theme.mode == 'dark', 'theme-base-light': theme.mode == 'light' }"
        class="fixed inset-0 bg-gradient-to-br from-grad-start to-grad-stop"
    >
        <div class="fixed inset-0 overflow-auto bg-back">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores'

const theme = useThemeStore()
</script>
