<template>
    <div class="flex flex-col gap-1">
        <div class="flex grow flex-wrap items-center gap-x-6">
            <p class="text-2xl font-medium" :class="`text-${color}`">
                {{ formatNumber(value, { prefix: prefix, suffix: suffix }) }}
            </p>
            <CardGainText v-if="typeof gain == 'number' && gainText" :value="gain" :text="gainText" />
            <GainTag v-if="typeof gain == 'number' && !gainText" :value="gain" />
        </div>

        <CardSub v-if="subValue" :value="subValue" :text="subText" :prefix="prefix" :suffix="suffix" />
    </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'
import CardGainText from './GainText.vue'
import GainTag from '@/components/GainTag.vue'
import CardSub from './Sub.vue'
import { formatNumber } from '@/composables'

withDefaults(
    defineProps<{
        value: number
        prefix?: string
        suffix?: string
        color?: Color

        gain?: number
        gainText?: string

        subValue?: number
        subText?: string
    }>(),
    {
        color: 'neutral',
    }
)
</script>
