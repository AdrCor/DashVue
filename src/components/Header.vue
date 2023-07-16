<template>
    <header ref="el" class="flex flex-row h-16 justify-between pr-4 items-center bg-red-300">
        <h1 class="text-3xl text-neutral-tx capitalize">{{route.name}}</h1>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()


</script>