<template>
    <Layout class="flex flex-row w-fit px-2 z-50" :round="true" :blur="true">
        <Loop class="mr-1 h-6 w-6 self-center stroke-neutral-tx" />
        <input
            @keypress.enter="emit('on-input')"
            v-model="userInput"
            :placeholder="placeholder"
            class="bg-transparent text-neutral-tx outline-none placeholder:text-neutral-tx placeholder:text-opacity-40"
        />
    </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loop from '@/components/icons/outline/Loop.vue'
import Layout from './global/Layout.vue'

const userInput = ref('')

const emit = defineEmits(['on-input'])

defineProps<{
    placeholder: string
}>()
</script>
