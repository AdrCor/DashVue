<template>
    <div ref="el" class="w-full h-full">
        <Line class="w-full h-full" :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'vue-chartjs'
import type { ChartOptions, ChartData } from 'chart.js'
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores'
import { Color } from '@/types'

ChartJS.register(Title, Tooltip, CategoryScale, LinearScale, PointElement, LineElement)


const props = withDefaults(defineProps<{
    data: number[]
    labels?: string[]
    color?: Color
    xMaxTicks?: number
    yMaxTicks?: number
}>(), {
    xMaxTicks: 0,
    yMaxTicks: 0,
    color: 'success'
})

const el = ref<HTMLLIElement | null>(null)

const theme = useThemeStore()

const lineColor = computed(() => getStyle(`--twc-${props.color}-tx`, 1))

function getStyle(cssVar: string, opacity: number) {
    theme.mode
    theme.name
    if (el.value) {
        return `hsl(${getComputedStyle(el.value).getPropertyValue(cssVar).replace(/\s/g, ',')},${opacity})`
    } else {
        return '#00000000'
    }
}

const chartData = computed<ChartData<'line'>>(() => {
    return {
        labels: props.labels ? props.labels : props.data.map(() => ''),
        datasets: [
            {
                label: 'value',
                data: props.data,
                pointBorderWidth: 1,
                borderWidth: 4,
                pointRadius: 1,
                pointHoverRadius: 8,
                borderColor: lineColor.value,
                backgroundColor: lineColor.value
            }
        ]
    }
})

const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'nearest',
        intersect: false
    },
    animation: {
        delay: 1000,
    },
    scales: {
        y: {
            display: props.yMaxTicks > 0,
            grid: { display: false },
            border: { display: false },
            ticks: { maxTicksLimit: props.yMaxTicks }
        },
        x: {
            display: props.xMaxTicks > 0,
            grid: { display: false },
            border: { display: false },
            ticks: { maxTicksLimit: props.xMaxTicks }
        }
    },
    elements: {
        line: {
            tension: .5
        }
    }
}

</script>