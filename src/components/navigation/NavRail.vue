<template>
    <nav class="fixed z-20 h-full w-20 p-4">
        <Layout class="flex h-full flex-col bg-opacity-20 px-1 py-2">
            <div class="flex-grow"></div>
            <ThemeButton />
        </Layout>
    </nav>
</template>

<script setup lang="ts">
import Layout from '../global/Layout.vue'
import ThemeButton from './ThemeButton.vue';
</script>
