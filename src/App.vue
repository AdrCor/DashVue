<template>
    <Background>
        <NavRail />
        <div class=" flex flex-wrap gap-8 ml-20 p-2">
            <div v-for="_ in Array.from(Array(36))" class="bg-primary w-32 h-32"></div>
        </div>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue'
import NavRail from '@/components/navigation/NavRail.vue'
</script>
