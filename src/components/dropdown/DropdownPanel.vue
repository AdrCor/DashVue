<template>
    <ListboxOptions
        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-tx bg-on-neutral bg-opacity-20 text-neutral-tx shadow-xl backdrop-blur-xl"
    >
        <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option.label"
            :value="option"
            as="template"
        >
            <li
                class="flex cursor-default select-none flex-row items-center gap-1 px-2 py-1"
                :class="active ? `bg-layer bg-opacity-10` : ''"
            >
                <div
                    class="flex stroke-neutral-tx"
                    :class="{
                        'h-4 w-4': size == 'small',
                        'h-5 w-5': size == 'medium',
                        'h-6 w-6': size == 'large',
                    }"
                >
                    <Check v-if="selected" class="h-full w-full" aria-hidden="true" />
                </div>
                <div class="truncate">
                    {{ option.label }}
                </div>
            </li>
        </ListboxOption>
    </ListboxOptions>
</template>

<script setup lang="ts">
import { ListboxOption, ListboxOptions } from '@headlessui/vue'
import Check from '@/components/icons/outline/Check.vue'
import { Color } from '@/types'

withDefaults(
    defineProps<{
        options: any[]
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
text-on-secondary text-on-success text-on-warning text-on-danger text-neutral-tx text-primary-tx text-secondary-tx
text-success-tx text-warning-tx text-danger-tx
