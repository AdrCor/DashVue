<template>
    <p class="mb-0.5 text-center text-xl text-front text-opacity-60">{{ rank }}.</p>
</template>

<script setup lang="ts">
defineProps<{
    rank: number
}>()
</script>
