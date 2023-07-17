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
import Header from '@/blocs/Header.vue'
import SearchBar from './components/SearchBar.vue'
</script>

'text-neutral text-primary text-secondary text-success text-warning text-danger'
'text-on-neutral text-on-primary text-on-secondary text-on-success text-on-warning text-on-danger'
'bg-neutral-bg bg-primary-bg bg-secondary-bg bg-success-bg bg-warning-bg bg-danger-bg'