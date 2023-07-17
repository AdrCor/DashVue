<template>
    <header ref="el" class="flex h-16 flex-row items-center">
        <h1 class="text-3xl capitalize text-neutral">{{ route.name }}</h1>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
