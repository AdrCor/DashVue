<template>
    <Background>
        <NavRail />
        <SearchBar placeholder="Search.." class="fixed top-4 right-4 h-10 m-1 w-64"/>
        <div class="ml-20 flex flex-col py-4 pr-4" ref="el">
            <Header />
            <router-view />
        </div>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue'
import NavRail from '@/components/navigation/NavRail.vue'
import Header from '@/components/Header.vue'
import SearchBar from './components/SearchBar.vue';

</script>
