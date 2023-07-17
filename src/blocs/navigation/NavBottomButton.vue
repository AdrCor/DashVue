<template>
    <router-link 
        :to="to"
        class="rounded-full p-2 bg-layer h-10 w-10" :class="selected ? 'bg-opacity-20' : 'bg-opacity-0'">
        <slot></slot>
    </router-link>
</template>

<script setup lang="ts">
defineProps<{
    to: string
    selected: boolean
}>()
</script>
