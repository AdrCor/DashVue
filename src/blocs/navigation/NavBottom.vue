<template>
    <nav class="fixed bottom-2 left-2 right-2 z-20 h-12">
        <div
            class="flex h-full flex-row items-center justify-between gap-2 rounded-full bg-neutral-bg/40 px-2 text-on-neutral backdrop-blur-md"
            :blur="true"
        >
            <a href="https://github.com/AdrCor/DashVue" target=”_blank” class="h-10 w-10 rounded-full bg-layer bg-opacity-0 p-2">
                <CodeBracketIcon />
            </a>
            <NavBottomButton to="/about" :selected="currentRouteName == 'about'">
                <QuestionMarkCircleIcon />
            </NavBottomButton>
            <NavBottomButton to="/" :selected="currentRouteName == 'home'">
                <HomeIcon />
            </NavBottomButton>
            <NavBottomButton to="/themes" :selected="currentRouteName == 'themes'">
                <PaintBrushIcon />
            </NavBottomButton>
            <ThemeButton class="h-10 w-10" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeIcon, QuestionMarkCircleIcon, PaintBrushIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import ThemeButton from './ThemeButton.vue'
import NavBottomButton from './NavBottomButton.vue'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
