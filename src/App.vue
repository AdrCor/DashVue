<template>
    <Background>
        <NavRail />
        <SearchBar placeholder="Search.." round class="fixed right-4 top-6 m-1 h-10 w-64" />
        <main class="ml-20 flex flex-col py-4 pr-4" ref="el">
            <Header />
            <router-view />
        </main>
    </Background>
</template>

<script setup lang="ts">
import Background from './components/global/Background.vue'
import NavRail from '@/blocs/navigation/NavRail.vue'
import Header from '@/components/Header.vue'
import SearchBar from './components/SearchBar.vue'
</script>

'stroke-neutral-tx stroke-primary-tx stroke-secondary-tx stroke-success-tx stroke-warning-tx stroke-danger-tx'
'text-neutral-tx text-primary-tx text-secondary-tx text-success-tx text-warning-tx text-danger-tx'