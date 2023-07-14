<template>
    <Listbox
        v-model="selected"
        :class="{ 'text-sm': size == 'small', 'text-base': size == 'medium', 'text-lg': size == 'large' }"
        class="relative"
        as="div"
    >
            <DropdownButton :size="size" :color="color" :type="type">{{ typeof selected == 'string' ? selected : selected.label }} </DropdownButton>
            <DropdownPanel :options="options" :size="size" :color="color"/>
    </Listbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Listbox } from '@headlessui/vue'
import DropdownButton from './DropdownButton.vue'
import DropdownPanel from './DropdownPanel.vue'
import { Color, Option } from '@/types';

const props = withDefaults(
    defineProps<{
        options: Option[] | string[]
        default?: Option | string
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

const selected = ref(props.default ? props.default : props.options[0])
</script>
