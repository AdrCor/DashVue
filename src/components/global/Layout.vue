<template>
    <div class="text-on-neutral bg-layer shadow-xl" :class="[
        round ? 'rounded-full' : 'rounded-xl',
        blur ? 'backdrop-blur-md' : '',
        `bg-opacity-${opacity}`
    ]">
        <slot></slot>
    </div>
</template>


<script setup lang="ts">

defineProps({
    round: { type: Boolean, default: false },
    blur: { type: Boolean, default: true },
    opacity: { type: Number, default: 10 }
})

</script>