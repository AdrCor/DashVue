<template>
    <div>
        <span
            :class="{
                'text-success-tx': value > 0,
                'text-danger-tx': value < 0,
                'text-neutral-tx text-opacity-60': value == 0,
            }"
        >
            {{ prefix }}{{ value }}{{ suffix }}
        </span>
        <span class="text-sm text-neutral-tx text-opacity-60">&nbsp;{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: number
    prefix?: string
    suffix?: string
    text?: string
}>()
</script>
