<template>
    <button
        @click="setTheme"
        class="h-64 w-full rounded-3xl bg-gradient-to-br from-grad-start to-grad-stop p-4 transition-all hover:opacity-90 active:opacity-80"
        :class="`theme-${name}-${mode}`"
    >
        <div class="flex h-full w-full flex-col gap-2 overflow-auto rounded-3xl bg-back p-4 text-center">
            <h2 class="text-2xl font-medium capitalize text-primary">{{ name }} {{ mode }}</h2>
            <div class="flex grow flex-row gap-2">
                <Layout class="flex h-full w-full flex-col items-center justify-around">
                    <h2 class="text-neutral">Neutral</h2>
                    <h2 class="text-primary">Primary</h2>
                    <h2 class="text-secondary">Secondary</h2>
                </Layout>
                <Layout class="flex h-full w-full flex-col items-center justify-around">
                    <div class="w-32 rounded-full bg-neutral-bg py-1 text-on-neutral shadow-xl">Neutral</div>
                    <div class="w-32 rounded-full bg-primary-bg py-1 text-on-primary shadow-xl">Primary</div>
                    <div class="w-32 rounded-full bg-secondary-bg py-1 text-on-secondary shadow-xl">Secondary</div>
                </Layout>
            </div>
        </div>
    </button>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue'
import Layout from '@/components/global/Layout.vue'
import { useThemeStore } from '@/stores'

const theme = useThemeStore()

const props = defineProps<{
    name: string
    mode: 'dark' | 'light'
}>()

function setTheme() {
    theme.setName(props.name)
    theme.setMode(props.mode)
}
</script>
