<template>
    <div :class="{ 'text-sm': size == 'small', 'text-base': size == 'medium', 'text-lg': size == 'large' }">
        <Listbox v-model="selectedPerson">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative flex w-full cursor-default flex-row items-center justify-between gap-1 rounded-lg py-1 pl-3 pr-1"
                    :class="[`border border-primary-tx text-primary-tx`]"
                >
                    <span class="block grow truncate text-left">{{ selectedPerson.name }}</span>
                    <span class="pointer-events-none right-0 flex items-center pr-2">
                        <ChevronDown
                            :class="{
                                'h-4 w-4': size == 'small',
                                'h-5 w-5': size == 'medium',
                                'h-6 w-6': size == 'large',
                            }"
                            class="stroke-primary-tx"
                            aria-hidden="true"
                        />
                    </span>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md shadow-xl"
                        :class="['border-0 bg-on-neutral']"
                    >
                        <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="person in people"
                            :key="person.name"
                            :value="person"
                            as="template"
                        >
                            <li
                                :class="[
                                    active ? 'bg-primary-bg text-on-primary' : 'text-primary-tx',
                                    'relative cursor-default select-none px-2 py-1',
                                ]"
                            >
                                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                    {{ person.name }}
                                </span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 right-0 flex items-center pl-3"
                                >
                                    <Check
                                        :class="{
                                            'h-4 w-4': size == 'small',
                                            'h-5 w-5': size == 'medium',
                                            'h-6 w-6': size == 'large',
                                            'stroke-primary-tx': !active,
                                            'stroke-on-primary': active

                                        }"
                                        class="h-4 w-4 stroke-primary-tx"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import ChevronDown from '@/components/icons/outline/ChevronDown.vue'
import Check from '@/components/icons/outline/Check.vue'

withDefaults(
    defineProps<{
        size: 'small' | 'medium' | 'large'
    }>(),
    {
        size: 'medium',
    }
)

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]
const selectedPerson = ref(people[0])
</script>
