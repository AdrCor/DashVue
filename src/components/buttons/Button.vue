<template>
    <button
        class="flex flex-row items-center rounded-full transition-all hover:opacity-80 active:opacity-60 disabled:opacity-40"
        :class="[
            type == 'outline' ? `text-${color} border-${color} border` :
            `bg-${color}-bg text-on-${color} shadow-xl`, // prettier-ignore

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
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

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
