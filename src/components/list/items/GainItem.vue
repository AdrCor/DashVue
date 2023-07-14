<template>
    <div class="flex flex-row items-center justify-center gap-2">
        <div
            class="rounded-full bg-opacity-100 px-2 py-0.5 text-xs text-opacity-100 dark:bg-opacity-40 dark:text-opacity-80"
            :class="{
                'bg-success text-on-success': gain > 0 ,
                'bg-front text-back dark:text-front': gain == 0,
                'bg-danger text-on-danger': gain < 0
            }"
        >
            {{ gain >= 0 ? '+' : '' }}{{ Number.isFinite(gain) ? Math.ceil(gain * 100) : '∞'}}%
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    gain: number
}>()
</script>
