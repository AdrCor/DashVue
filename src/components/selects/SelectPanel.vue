<template>
    <ListboxOptions
        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral bg-on-neutral bg-opacity-20 text-neutral shadow-xl backdrop-blur-xl"
    >
        <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="typeof option == 'string' ? option : option.label"
            :value="option"
            as="template"
        >
            <li
                class="flex cursor-default select-none flex-row items-center gap-1 px-2 py-1"
                :class="active ? `bg-layer bg-opacity-10` : ''"
            >
                <div
                    class="flex text-neutral"
                    :class="{
                        'h-4 w-4': size == 'small',
                        'h-5 w-5': size == 'medium',
                        'h-6 w-6': size == 'large',
                    }"
                >
                    <CheckIcon v-if="selected" class="h-full w-full" aria-hidden="true" />
                </div>
                <div class="truncate">
                    {{ typeof option == 'string' ? option : option.label }}
                </div>
            </li>
        </ListboxOption>
    </ListboxOptions>
</template>

<script setup lang="ts">
import { ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { Color, Option } from '@/types'

withDefaults(
    defineProps<{
        options: Option[] | string[]
        size: 'small' | 'medium' | 'large'
        color: Color
    }>(),
    {
        size: 'medium',
        color: 'neutral',
    }
)
</script>

bg-neutral-bg bg-primary-bg bg-secondary-bg bg-success-bg bg-warning-bg bg-danger-bg text-on-neutral text-on-primary
text-on-secondary text-on-success text-on-warning text-on-danger text-neutral text-primary text-secondary text-success
text-warning text-danger
