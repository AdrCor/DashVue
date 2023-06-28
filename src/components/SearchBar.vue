<template>
    <Layout class="flex flex-row rounded-full px-2">
        <Loop class="mr-1 h-6 w-6 self-center stroke-front" />
        <input
            @keypress.enter="emit('on-input')"
            v-model="userInput"
            :placeholder="placeholder"
            class="bg-transparent text-front outline-none placeholder:text-front placeholder:text-opacity-40"
        />
    </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loop from '@/components/icons/outline/Loop.vue'
import Layout from './global/Layout.vue';

const userInput = ref('')

const emit = defineEmits([
    'on-input'
])

defineProps<{
    placeholder: string
}>()

</script>
