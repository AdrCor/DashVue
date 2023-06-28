<template>
    <Background>
        <NavRail />
        <div class="ml-20 flex flex-wrap gap-8 p-2">
            <div v-for="_ in Array.from(Array(36))" class="h-32 w-32 bg-primary"></div>
        </div>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue'
import NavRail from '@/components/navigation/NavRail.vue'
</script>
