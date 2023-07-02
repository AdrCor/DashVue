<template>
    <header ref="el" class="flex flex-row h-14 justify-between pr-4 items-center">
        <h1 class="text-3xl text-on-neutral capitalize">{{route.name}}</h1>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()


</script>