<template>
    <div>
        <span
            :class="{
                'text-success': value > 0,
                'text-danger': value < 0,
                'text-neutral text-opacity-60': value == 0,
            }"
        >
            {{ formatNumber(value, { prefix: prefix, suffix: suffix, showSign: true }) }}
        </span>
        <span class="text-sm text-neutral text-opacity-60">&nbsp;{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/composables'
defineProps<{
    value: number
    prefix?: string
    suffix?: string
    text?: string
}>()
</script>
