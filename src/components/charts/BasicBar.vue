<template>
    <div ref="el" class="w-full h-full">
        <Bar class="w-full h-full" :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'vue-chartjs'
import type { ChartOptions, ChartData } from 'chart.js'
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores'
import { Color } from '@/types'

ChartJS.register(Title, Tooltip, CategoryScale, LinearScale, BarElement)


const props = withDefaults(defineProps<{
    data: number[]
    labels?: string[]
    color?: Color
    xMaxTicks?: number
    yMaxTicks?: number
}>(), {
    xMaxTicks: 0,
    yMaxTicks: 0,
    color: 'neutral'
})

const el = ref<HTMLLIElement | null>(null)

const theme = useThemeStore()

const lineColor = computed(() => getStyle(`--twc-${props.color}-tx`, 1))
const textColor = computed(() => getStyle('--twc-neutral-tx', .6))

function getStyle(cssVar: string, opacity: number) {
    theme.mode
    theme.name
    if (el.value) {
        return `hsl(${getComputedStyle(el.value).getPropertyValue(cssVar).replace(/\s/g, ',')},${opacity})`
    } else {
        return '#00000000'
    }
}

const chartData = computed<ChartData<'bar'>>(() => {
    return {
        labels: props.labels ? props.labels : props.data.map(() => ''),
        datasets: [
            {
                label: 'value',
                data: props.data,
                borderRadius: 5,
                backgroundColor: lineColor.value, 
                barPercentage: .5
            }
        ]
    }
})

const chartOptions = computed<ChartOptions<'bar'>>(() => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest',
            intersect: false
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
                ticks: { maxTicksLimit: props.xMaxTicks, color: textColor.value },
                
            }
        },
        elements: {
            line: {
                tension: .5
            }
        }
    }
})

</script>