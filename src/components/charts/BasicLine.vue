<template>
    <div ref="el" class="h-full w-full">
        <Line class="h-full w-full" :data="chartData" :options="chartOptions" />
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

const props = withDefaults(
    defineProps<{
        data: number[]
        dataSecondary?: number[]
        labels?: string[]
        color?: Color
        colorSecondary?: Color
        xMaxTicks?: number
        yMaxTicks?: number
    }>(),
    {
        xMaxTicks: 0,
        yMaxTicks: 0,
        color: 'primary',
        colorSecondary: 'secondary',
    }
)

const el = ref<HTMLLIElement | null>(null)

const theme = useThemeStore()

const lineColor = computed(() => getStyle(`--twc-${props.color}`, 1))
const lineColorSecondary = computed(() => getStyle(`--twc-${props.colorSecondary}`, 1))

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
                label: 'current',
                data: props.data,
                pointBorderWidth: 1,
                borderWidth: 3,
                pointRadius: 1,
                pointHoverRadius: 8,
                borderColor: lineColor.value,
                backgroundColor: lineColor.value,
            },
            {
                label: 'previous',
                data: props.dataSecondary ? props.dataSecondary : [],
                pointBorderWidth: 1,
                borderWidth: 3,
                pointRadius: 1,
                pointHoverRadius: 8,
                borderColor: lineColorSecondary.value,
                backgroundColor: lineColorSecondary.value,
            },
        ],
    }
})

const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    animation: {
        delay: 100,
    },
    scales: {
        y: {
            display: props.yMaxTicks > 0,
            min: 50,
            grid: { display: false },
            border: { display: false },
            ticks: { maxTicksLimit: props.yMaxTicks },
        },
        x: {
            display: props.xMaxTicks > 0,
            grid: { display: false },
            border: { display: false },
            ticks: { maxTicksLimit: props.xMaxTicks },
        },
    },
    elements: {
        line: {
            tension: 0.4,
        },
    },
}
</script>
