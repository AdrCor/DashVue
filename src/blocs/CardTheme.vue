<template>
    <button @click="setTheme" class="h-64 w-full bg-gradient-to-br from-grad-start to-grad-stop rounded-3xl p-4 hover:opacity-90 active:opacity-80 transition-all" :class="`theme-${name}-${mode}`">
        <div class="flex flex-col h-full w-full bg-back text-center p-4 rounded-3xl gap-2 overflow-auto">
            <h2 class="text-primary text-2xl font-medium capitalize">{{ name }} {{ mode }}</h2>
            <div class="flex flex-row grow gap-2">
                <Layout class="flex h-full w-full flex-col items-center justify-around">
                    <h2 class="text-neutral">Neutral</h2>
                    <h2 class="text-primary">Primary</h2>
                    <h2 class="text-secondary">Secondary</h2>
                </Layout>
                <Layout class="flex h-full w-full flex-col items-center justify-around">
                    <div class="rounded-full bg-neutral-bg text-on-neutral w-32 py-1 shadow-xl">Neutral</div>
                    <div class="rounded-full bg-primary-bg text-on-primary w-32 py-1 shadow-xl">Primary</div>
                    <div class="rounded-full bg-secondary-bg text-on-secondary w-32 py-1 shadow-xl">Secondary</div>
                </Layout>
            </div>
        </div>
    </button>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue'
import Layout from '@/components/global/Layout.vue';
import { useThemeStore } from '@/stores';

const theme = useThemeStore()

const props = defineProps<{
    name: string
    mode: 'dark' | 'light'
}>()

function setTheme() {
    theme.setName(props.name)
    theme.setMode(props.mode)
    console.log(theme.name, theme.mode)
}

</script>
