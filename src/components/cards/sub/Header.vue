<template>
    <div class="flex flex-col">
        <div>
            <slot></slot>
            <h2 class="text-xl" :class="`text-${color}-tx`">
                {{ header }}
            </h2>
        </div>
        <h3 v-if="sub" class="text-sm text-neutral-tx text-opacity-60" :class="`text-${color}-tx`">{{ sub }}</h3>
    </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'

withDefaults(
    defineProps<{
        header: string
        color?: Color
        sub?: string
        subColor?: Color
    }>(),
    {
        color: 'neutral',
        subColor: 'primary',
    }
)
</script>

'text-neutral-tx text-primary-tx text-secondary-tx text-success-tx text-warning-tx text-danger-tx'
