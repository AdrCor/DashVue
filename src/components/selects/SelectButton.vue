<template>
    <ListboxButton
        class="relative flex w-full cursor-default flex-row items-center justify-between gap-1 rounded-lg py-1 pl-2 pr-1"
        :class="[type == 'outline' ? `border border-${color}-tx` : '', `text-${color}-tx`]"
    >
        <span class="block grow truncate" :class="type == 'outline' ? 'text-center' : 'text-right'">
            <slot></slot>
        </span>
        <span class="pointer-events-none right-0 flex items-center pr-2">
            <ChevronDownIcon
                :class="[{
                    'h-4 w-4': size == 'small',
                    'h-5 w-5': size == 'medium',
                    'h-6 w-6': size == 'large',   
                }, `text-${color}-tx`]"
                aria-hidden="true"
            />
        </span>
    </ListboxButton>
</template>

<script setup lang="ts">
import { ListboxButton } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { Color } from '@/types';

withDefaults(
    defineProps<{
        size: 'small' | 'medium' | 'large'
        color: Color
        type: 'default' | 'outline'
    }>(),
    {
        size: 'medium',
        color: 'neutral',
        type: 'default'
    }
)
</script>
