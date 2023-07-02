<template>
    <div ref="" class="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <CardLayout class="flex flex-col gap-4">
            <CardHeader :header="revenues.header" :sub="revenues.headerSub"/>
            <BasicBar
                :key="width"
                class="min-h-48"
                :color="revenues.chartColor"
                :data="revenues.data"
                :labels="revenues.labels"
                :x-max-ticks="99"
            />
            <CardValue :value="revenues.value" :prefix="revenues.valuePrefix" :sub-value="revenues.valueSub" :sub-text="revenues.valueSubText" :gain="revenues.valueGain" />
        </CardLayout>
    </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'
import { CardLayout, CardHeader, CardValue } from '@/components/cards'
import BasicBar from '@/components/charts/BasicBar.vue'
import { Color } from '@/types'

const el = ref<HTMLElement>()

const { width } = useElementSize(el)

const revenues = {
    header: 'Revenues',
    headerSub: 'Last 30 days',

    data: [23843, 18932, 21935, 24093, 25934, 23945],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    chartColor: 'primary' as Color,

    value: 26834,
    valuePrefix: '$',
    valueColor: 'primary' as Color,
    valueGain: 4,
    valueSub: 934,
    valueSubText: 'vs previous period'
}
</script>
