<template>
    <router-link
        :to="to"
        class="rounded-xl bg-layer p-1 text-neutral opacity-80 transition-all duration-200 hover:cursor-pointer hover:bg-opacity-10 hover:opacity-100 hover:shadow-xl"
        :class="{
            'bg-opacity-20 opacity-100 shadow-xl': selected,
            'bg-opacity-0': !selected,
        }"
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
