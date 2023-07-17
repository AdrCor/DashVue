<template>
    <div
        :class="`theme-${theme.name}-${theme.mode} ${theme.mode == 'dark' ? 'dark' : ''}`"
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
