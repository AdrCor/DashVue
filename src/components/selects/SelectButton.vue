<template>
    <button
        class="rounded-full px-2 transition-all"
        :class="[
            type == 'default' ? `bg-${color}-bg text-${color}-tx` : '',
            type == 'default' && !selected ? 'bg-opacity-0 text-opacity-60' : '',
            type == 'default' && selected ? 'bg-opacity-20 text-opacity-100' : '',

            type == 'outline' ? `bg-${color}-bg` : '',
            type == 'outline' && !selected ? `bg-opacity-0 text-${color}-tx` : '',
            type == 'outline' && selected ? `bg-opacity-100 text-on-${color}` : '',

            capitalize ? 'capitalize' : ''
        ]"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { Color } from '@/types'

withDefaults(
    defineProps<{
        selected: boolean
        type: 'default' | 'outline'
        color: Color
        capitalize?: boolean
    }>(),
    {
        type: 'outline',
        color: 'neutral',
    }
)
</script>
