<template>
    <div class="flex flex-row items-center gap-2">
        <div class="h-8 w-8 rounded-full p-1" :class="`stroke-${iconColor}-tx`">
            <slot></slot>
        </div>
        <h2 class="text-xl" :class="`text-${textColor}-tx`">
            {{ header }}
        </h2>
    </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'

withDefaults(defineProps<{
    header: string
    iconColor?: Color
    textColor?: Color
}>(), {
    iconColor: 'neutral',
    textColor: 'neutral'
})

</script>

'stroke-neutral-tx stroke-primary-tx stroke-secondary-tx stroke-success-tx stroke-warning-tx stroke-danger-tx'
'text-neutral-tx text-primary-tx text-secondary-tx text-success-tx text-warning-tx text-danger-tx'