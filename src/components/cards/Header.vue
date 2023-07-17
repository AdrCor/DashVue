<template>
    <div class="flex flex-col">
        <div>
            <slot></slot>
            <h2 class="text-xl" :class="`text-${color}`">
                {{ header }}
            </h2>
        </div>
        <h3 v-if="sub" class="text-sm text-neutral text-opacity-60" :class="`text-${color}`">{{ sub }}</h3>
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

'text-neutral text-primary text-secondary text-success text-warning text-danger'
