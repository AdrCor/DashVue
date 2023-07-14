<template>
    <div class="flex flex-row rounded-full px-2 p-0.5 items-center gap-0.5 text-sm shadow-xl font-medium"
    :class="{
        'text-on-success bg-success-bg': status == 'success',
        'text-on-warning bg-warning-bg': status == 'warning',
        'text-on-danger bg-danger-bg': status == 'danger',
        'text-on-neutral bg-neutral-bg': status == 'neutral',
    }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    status: 'success' | 'warning' | 'danger' | 'neutral'
}>()
</script>