<template>
    <p class="mb-0.5 text-center text-xl text-front">{{ formatNumber(count) }}</p>
</template>

<script setup lang="ts">
defineProps<{
    count: number
    gain?: number
}>()

function formatNumber(value: number) {
    return Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
        maximumSignificantDigits: 3
    }).format(value)
}

</script>
