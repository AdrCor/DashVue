<template>
    <router-link
        :to="to"
        class="h-10 w-10 rounded-full bg-layer p-2"
        :class="selected ? 'bg-opacity-20' : 'bg-opacity-0'"
    >
        <slot></slot>
    </router-link>
</template>

<script setup lang="ts">
defineProps<{
    to: string
    selected: boolean
}>()
</script>
