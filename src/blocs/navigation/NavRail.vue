<template>
    <nav class="fixed z-20 h-full w-20 p-4">
        <Layout class="flex h-full flex-col gap-2 bg-opacity-20 px-1 py-2" :blur="true">
            <RailButton to="/" :selected="currentRouteName == 'home'">
                <HomeIcon />
            </RailButton>
            <RailButton to="/themes" :selected="currentRouteName == 'themes'">
                <PaintBrushIcon />
            </RailButton>
            <RailButton to="/about" :selected="currentRouteName == 'about'">
                <QuestionMarkCircleIcon />
            </RailButton>
            <div class="flex-grow"></div>
            <a href="https://github.com/AdrCor/DashVue" target=”_blank” class="h-10 w-10 rounded-full bg-layer bg-opacity-0 p-2">
                <CodeBracketIcon />
            </a>
            <ThemeButton />
        </Layout>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '@/components/global/Layout.vue'
import { HomeIcon, QuestionMarkCircleIcon, PaintBrushIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import RailButton from './RailButton.vue'
import ThemeButton from './ThemeButton.vue'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
