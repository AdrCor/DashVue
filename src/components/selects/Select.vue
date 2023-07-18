<template>
    <Listbox
        v-model="selected"
        :class="{ 'text-sm': size == 'small', 'text-base': size == 'medium', 'text-lg': size == 'large' }"
        class="relative"
        as="div"
    >
        <SelectButton :size="size" :color="color" :type="type"
            >{{ typeof selected == 'string' ? selected : selected ? selected.label : '' }}
        </SelectButton>
        <SelectPanel :options="options" :size="size" :color="color" />
    </Listbox>
</template>

<script setup lang="ts">
import { Listbox } from '@headlessui/vue'
import SelectButton from './SelectButton.vue'
import SelectPanel from './SelectPanel.vue'
import { Color, Option } from '@/types'

withDefaults(
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
        type: 'default',
    }
)

const selected = defineModel<Option | string>({ required: false })
</script>
