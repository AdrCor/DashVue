<template>
    <CardLayout class="flex w-full flex-col gap-4" ref="el">
        <div class="flex flex-wrap items-center justify-between">
            <CardHeader :header="revenues.header" :sub="revenues.headerSub" />
            <Select v-model="timeframe" :options="options" class="w-24" size="small" />
        </div>

        <BasicBar
            :key="width"
            class="min-h-32"
            color="primary"
            :data="revenues.data"
            :labels="revenues.labels"
            :x-max-ticks="99"
        />

        <div class="flex flex-wrap items-center justify-between gap-4">
            <CardValue
                class="self-start"
                :value="revenues.value"
                prefix="$"
                color="primary"
                :sub-value="revenues.valueSub"
                sub-text="vs previous period"
                :gain="revenues.valueGain"
            />
            <Button color="neutral" size="small" class="self-end">
                <template #icon>
                    <ChevronRightIcon />
                </template>
                More
            </Button>
        </div>
    </CardLayout>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref, computed } from 'vue'
import { CardLayout, CardHeader, CardValue } from '@/components/cards'
import BasicBar from '@/components/charts/BasicBar.vue'
import Button from '@/components/buttons/Button.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Select from '@/components/selects/Select.vue'

const el = ref<HTMLElement>()

const { width } = useElementSize(el)

const timeframe = ref('Week')

const options = ['Day', 'Week', 'Month']

interface Revenues {
    header: string
    headerSub: string

    data: number[]
    labels: string[]

    value: number
    valueGain: number
    valueSub: number
}

const revenues = computed<Revenues>(() => {
    if (timeframe.value == 'Day') {
        return revenuesDay
    } else if (timeframe.value == 'Week') {
        return revenuesWeek
    } else {
        return revenuesMonth
    }
})

const revenuesDay: Revenues = {
    header: 'Revenues',
    headerSub: 'Last 24 hours',

    data: [1023, 983, 893, 1259, 1192, 1399, 958],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    value: 1295,
    valueGain: 4,
    valueSub: 52,
}

const revenuesWeek: Revenues = {
    header: 'Revenues',
    headerSub: 'Last 7 days',

    data: [7042, 5904, 7490, 6350, 8493, 7900],
    labels: ['22', '23', '24', '25', '26', '27'],

    value: 8130,
    valueGain: -3,
    valueSub: -244,
}

const revenuesMonth: Revenues = {
    header: 'Revenues',
    headerSub: 'Last 30 days',

    data: [33843, 28932, 31935, 34093, 25934, 33945],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],

    value: 31834,
    valueGain: 5,
    valueSub: 1592,
}
</script>
