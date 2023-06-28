<template>
    <Background>
        <NavRail />
        <div class="ml-20 flex flex-col">
            <header class="h-12 text-front text-xl my-4 bg-layout bg-opacity-10">HEADER</header>
            <router-view />
        </div>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue'
import NavRail from '@/components/navigation/NavRail.vue'
</script>
