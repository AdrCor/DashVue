<template>
    <div
        class="flex flex-row items-center gap-0.5 rounded-full p-0.5 px-1 text-sm font-medium"
        :class="{
            'bg-success-bg stroke-on-success text-on-success': value > 0,
            'bg-neutral-bg/60 stroke-on-neutral text-on-neutral': value == 0,
            'bg-danger-bg stroke-on-danger text-on-danger': value < 0,
        }"
    >
        <ArrowTrendingUpIcon class="h-4 w-4" v-if="value >= 0" />
        <ArrowTrendingDownIcon class="h-4 w-4" v-if="value < 0" />
        {{ value >= 0 ? '+' : '' }}{{ value }}%
    </div>
</template>

<script setup lang="ts">
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/outline'

defineProps<{
    value: number
    icon?: boolean
}>()
</script>
