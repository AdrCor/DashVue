<template>
    <Layout class="z-50 flex w-fit flex-row px-2" :round="true" :blur="true">
        <MagnifyingGlassIcon class="mr-1 h-6 w-6 self-center text-neutral" />
        <input
            @keypress.enter="emit('on-input')"
            v-model="userInput"
            :placeholder="placeholder"
            class="bg-transparent text-neutral outline-none placeholder:text-neutral placeholder:text-opacity-40"
        />
    </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Layout from './global/Layout.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const userInput = ref('')

const emit = defineEmits(['on-input'])

defineProps<{
    placeholder: string
}>()
</script>
