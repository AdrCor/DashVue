<template>
    <CardLayout class="flex flex-col gap-4 w-full min-h-96">
        <div class="flex flex-wrap items-center justify-between">
            <CardHeader :header="sales.header" :sub="sales.headerSub" />
        </div>

        <BasicLine
            :key="width"
            class="min-h-32"
            color="primary"
            :data="sales.data"
            :data-secondary="sales.previousData"
            :labels="sales.labels"
            :x-max-ticks="3"
            :y-max-ticks="2"
        />

        <div class="flex flex-wrap items-center justify-between gap-4">
            <CardValue
                class="self-start"
                :value="sales.value"
                prefix="$"
                color="primary"
                :sub-value="sales.valueSub"
                sub-text="vs previous period"
                :gain="sales.valueGain"
            />
            <Button color="neutral" size="medium" class="self-end">
                <template #icon>
                    <ChevronRight />
                </template>
                More
            </Button>
        </div>
    </CardLayout>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'
import { CardLayout, CardHeader, CardValue } from '@/components/cards'
import Button from '@/components/buttons/Button.vue'
import ChevronRight from '@/components/icons/outline/ChevronRight.vue'
import BasicLine from '@/components/charts/BasicLine.vue'

const el = ref<HTMLElement>()

const { width } = useElementSize(el)

interface Sales {
    header: string
    headerSub: string

    data: number[]
    previousData: number[]
    labels: string[]

    value: number,
    valueGain: number,
    valueSub: number,
}


const sales: Sales = {
    header: 'Number of sales',
    headerSub: 'Last 7 days',

    data: [132, 140, 130, 154, 149, 122, 93],
    previousData: [112, 104, 120, 158, 130, 89, 65],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    value: 920,
    valueGain: 18,
    valueSub: 142,
}

</script>