<template>
    <nav class="fixed z-20 h-full w-20 p-4">
        <Layout class="flex h-full flex-col bg-opacity-20 px-1 py-2 gap-2">
            <RailButton to="/" :selected="currentRouteName == 'home'">
                <Home />
            </RailButton>
            <RailButton to="/about" :selected="currentRouteName == 'about'">
                <Home />
            </RailButton>
            <div class="flex-grow"></div>
            <ThemeButton />
        </Layout>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '../global/Layout.vue'
import Home from '@/components/icons/outline/Home.vue'
import RailButton from './RailButton.vue'
import ThemeButton from './ThemeButton.vue'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
