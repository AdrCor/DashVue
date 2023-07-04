<template>
    <Listbox
        v-model="selected"
        :class="{ 'text-sm': size == 'small', 'text-base': size == 'medium', 'text-lg': size == 'large' }"
        class="relative"
        as="div"
    >
            <DropdownButton :size="size" :color="color" :type="type">{{ selected.label }} </DropdownButton>
            <DropdownPanel :options="people" :size="size" :color="color"/>
    </Listbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Listbox } from '@headlessui/vue'
import DropdownButton from './DropdownButton.vue'
import DropdownPanel from './DropdownPanel.vue'
import { Color } from '@/types';

withDefaults(
    defineProps<{
        size?: 'small' | 'medium' | 'large'
        color?: Color
        type?: 'default' | 'outline'
    }>(),
    {
        size: 'medium',
        color: 'neutral',
        type: 'default'
    }
)

const people = [
    { label: 'Wade Cooper' },
    { label: 'Arlene Mccoy' },
    { label: 'Devon Webb' },
    { label: 'Tom Cook' },
    { label: 'Tanya Fox' },
    { label: 'Hellen Schmidt' },
]
const selected = ref(people[0])
</script>
