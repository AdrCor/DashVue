<template>
    <div class="flex flex-row rounded-full px-1 p-0.5 items-center gap-0.5 text-sm"
    :class="{
        'text-on-success stroke-on-success bg-success-bg': value > 0,
        'text-on-neutral': value == 0,
        'text-danger-tx': value < 0
    }">
        <ChevronUp class="h-4 w-4"/>
        <ChevronDown v-if="value < 0"/>
        {{ value >= 0 ? '+' : '' }}{{ value }}%
    </div>
</template>

<script setup lang="ts">
import ChevronDown from './icons/outline/ChevronDown.vue';
import ChevronUp from './icons/outline/ChevronUp.vue';


defineProps<{
    value: number
    icon?: boolean
}>()

</script>