<template>
    <div class="flex flex-col">
        <div class="flex flex-row items-center self-center" :class="{
                'text-success-tx stroke-success-tx': value > 0,
                'text-neutral-tx stroke-neutral-tx': value == 0,
                'text-danger-tx stroke-danger-tx': value < 0
            }">
            <TrendUp v-if="value >= 0" class="h-4 w-4" />
            <TrendDown v-if="value < 0" class="h-4 w-4" />
            <div class="text-sm">{{ value >= 0 ? '+' : '' }}{{ value }}%</div>
        </div>
        <div class="text-center text-xs opacity-60">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
import TrendUp from '../icons/outline/TrendUp.vue';
import TrendDown from '../icons/outline/TrendDown.vue';

defineProps<{
    value: number
    text: string
}>()
</script>