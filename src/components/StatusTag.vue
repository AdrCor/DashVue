<template>
    <div
        class="flex flex-row items-center gap-0.5 rounded-full p-0.5 px-2 text-sm font-medium shadow-xl"
        :class="{
            'bg-success-bg text-on-success': status == 'success',
            'bg-warning-bg text-on-warning': status == 'warning',
            'bg-danger-bg text-on-danger': status == 'danger',
            'bg-neutral-bg text-on-neutral': status == 'neutral',
        }"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    status: 'success' | 'warning' | 'danger' | 'neutral'
}>()
</script>
