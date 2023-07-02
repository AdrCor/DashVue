<template>
    <Layout class="flex flex-row gap-2 px-6 py-4">
        <div class="flex flex-col gap-4 grow justify-between">
            <CardHeader :header="header" :sub="subHeader" :iconColor="iconColor" :textColor="headerColor" />

            <CardValue
                class="grow"
                :value="value"
                :color="valueColor"
                :prefix="prefix"
                :suffix="suffix"
                :gain="gainValue"
                :gainText="gainText"
                :subValue="subValue"
                :subText="subText"
            />
        </div>

        <div class="">
            <slot name="chart"></slot>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/global/Layout.vue'
import CardValue from './sub/Value.vue'
import CardHeader from './sub/Header.vue'
import { Color } from '@/types'

withDefaults(
    defineProps<{
        header: string
        subHeader?: string
        iconColor?: Color
        headerColor?: Color

        value: number | string
        prefix?: string
        suffix?: string
        valueColor?: Color

        gainValue?: number
        gainText?: string

        subValue?: number
        subText?: string
    }>(),
    {
        iconColor: 'neutral',
        headerColor: 'neutral',
        valueColor: 'neutral',
        prefix: '',
        suffix: '',
    }
)
</script>

'text-neutral-tx text-primary-tx text-secondary-tx text-success-tx text-warning-tx text-danger-tx'
