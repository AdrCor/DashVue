<template>
    <Layout class="flex flex-col gap-2 px-6 py-4">
        <CardHeader :header="header" :iconColor="iconColor" :textColor="headerColor">
            <slot name="icon"></slot>
        </CardHeader>

        <div class="flex grow flex-row items-center gap-6">
            <div class="text-2xl font-medium" :class="`text-${valueColor}-tx`">
                {{ valuePrefix }}{{ value }}{{ valueSuffix }}
            </div>
            <CardGainText v-if="typeof gainValue == 'number' && gainText" :value="gainValue" :text="gainText" />
            <GainTag v-if="typeof gainValue == 'number' && !gainText" :value="gainValue" />
        </div>

        <CardSub
            v-if="subValue"
            :value="subValue"
            :text="subText"
            :prefix="subPrefix ? subPrefix : valuePrefix"
            :suffix="subSuffix ? subSuffix : valueSuffix"
        />
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/global/Layout.vue'
import GainTag from '../GainTag.vue'
import CardHeader from './CardHeader.vue'
import { Color } from '@/types'
import CardGainText from './CardGainText.vue'
import CardSub from './CardSub.vue'

withDefaults(
    defineProps<{
        header: string
        iconColor: Color
        headerColor: Color

        value: number | string
        valuePrefix: string
        valueSuffix: string
        valueColor: Color

        gainValue?: number
        gainText?: string

        subValue?: number
        subPrefix?: string
        subSuffix?: string
        subText?: string
    }>(),
    {
        iconColor: 'neutral',
        headerColor: 'neutral',
        valueColor: 'neutral',
        valuePrefix: '',
        valueSuffix: '',
    }
)
</script>

'text-neutral-tx text-primary-tx text-secondary-tx text-success-tx text-warning-tx text-danger-tx'
