<template>
    <div class="text-neutral-tx bg-layer shadow-xl" :class="[
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
    blur: { type: Boolean, default: false },
    opacity: { type: Number, default: 10 }
})

</script>