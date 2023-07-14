<template>
    <CardLayout class="flex flex-col gap-4 w-full ">
        <div class="flex flex-wrap items-center justify-between">
            <CardHeader :header="revenues.header" :sub="revenues.headerSub" />
            <Dropdown :options="options" class="w-40" size="small" />
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
                color="primary"
                prefix="$"
                :sub-value="revenues.valueSub"
                sub-text="vs previous period"
                :gain="revenues.valueGain"
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
import BasicBar from '@/components/charts/BasicBar.vue'
import Button from '@/components/buttons/Button.vue'
import ChevronRight from '@/components/icons/outline/ChevronRight.vue'
import Dropdown from '@/components/dropdown/Dropdown.vue'

const el = ref<HTMLElement>()

const { width } = useElementSize(el)

const options = [
    {label: 'Day', value: 'day' },
    {label: 'Week', value: 'week' },
    {label: 'Month', value: 'month' },
]

const revenues = {
    header: 'Revenues',
    headerSub: 'Last 30 days',

    data: [23843, 18932, 21935, 24093, 25934, 23945],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],

    value: 26834,
    valueGain: 4,
    valueSub: 934,
}</script>