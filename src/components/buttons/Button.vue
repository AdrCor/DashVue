<template>
    <button
        class="flex flex-row items-center rounded-full transition-all hover:opacity-80 active:opacity-60 disabled:opacity-40"
        :class="[
            type == 'outline' ? `text-${color}-tx stroke-${color}-tx border-${color}-tx border` :
            `bg-${color}-bg stroke-on-${color} text-on-${color} shadow-xl`, // prettier-ignore

            slots.icon && slots.default ? 
            (size == 'small' ? 'gap-0.5 pl-2 pr-3' : size == 'medium' ? 'gap-0.5 pl-3 pr-4' : 'gap-1 pl-4 pr-5') : 
            (size == 'small' ? 'px-3' : size == 'medium' ? 'px-4' : 'px-5'), // prettier-ignore

            size == 'small' ? 'h-6 text-sm' : 
            size == 'medium' ? 'text-md h-7' :
            'h-8 text-lg', // prettier-ignore

            loading ? 'animate-pulse' : '',
        ]"
        :disabled="loading"
    >
        <div v-if="slots.icon" :class="[size == 'small' ? 'h-4 w-4' : size == 'medium' ? 'h-5 w-5' : 'h-6 w-6']">
            <slot v-if="!loading" name="icon"></slot>
            <ArrowPathIcon v-else="" class="animate-spin" />
        </div>
        <slot name="default"></slot>
    </button>
</template>

<script setup lang="ts">
import { Color } from '@/types'
import { useSlots } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/outline';

const slots = useSlots()

withDefaults(
    defineProps<{
        type?: 'default' | 'outline'
        color?: Color
        loading?: boolean
        size?: 'small' | 'medium' | 'large'
    }>(),
    {
        type: 'default',
        color: 'neutral',
        size: 'medium',
        loading: false,
    }
)
</script>

'bg-neutral-bg bg-primary-bg bg-secondary-bg bg-success-bg bg-warning-bg bg-danger-bg /// stroke-on-neutral
stroke-on-primary stroke-on-secondary stroke-on-success stroke-on-warning stroke-on-danger /// text-on-neutral
text-on-primary text-on-secondary text-on-success text-on-warning text-on-danger /// border-neutral-tx border-primary-tx
border-secondary-tx border-success-tx border-warning-tx border-danger-tx'
