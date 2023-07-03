<template>
    <div class="flex flex-wrap" :class="[
        type == 'outline' ? `border rounded-full border-${color}-tx` : '',
    ]">
        <SelectButton
            v-for="option in options"
            :type="type"
            :color="color"
            :selected="option == selected"
            @click="() => select(option)"
            capitalize
        >
            {{ option }}
        </SelectButton>
    </div>
</template>

<script setup lang="ts">
import { Color } from '@/types'
import SelectButton from './SelectButton.vue'
import { ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        options: string[]
        color?: Color
        type?: 'default' | 'outline'
        modelValue?: string | null
        capitalize?: boolean
        nullable?: boolean
        size?: 'small' | 'medium' | 'large'
    }>(),
    {
        color: 'neutral',
        type: 'default',
        size: 'medium'
    }
)

const emit = defineEmits(['update:modelValue'])

const selected = ref<string | null>(props.modelValue ? props.modelValue : null)

watch(
    () => props.modelValue,
    (value) => {
        if (typeof value == 'undefined') {
            return
        }
        selected.value = value
    }
)

function select(value: string) {
    if (selected.value == value) {
        if (props.nullable) {
            selected.value = null
            emit('update:modelValue', null)
        }
    } else {
        selected.value = value
        emit('update:modelValue', value)
    }
}
</script>
