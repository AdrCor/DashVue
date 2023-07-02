<template>
    <Layout class="flex flex-row px-2" :round="true" :blur="true">
        <Loop class="mr-1 h-6 w-6 self-center stroke-on-neutral" />
        <input
            @keypress.enter="emit('on-input')"
            v-model="userInput"
            :placeholder="placeholder"
            class="bg-transparent text-on-neutral outline-none placeholder:text-on-neutral placeholder:text-opacity-40"
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
