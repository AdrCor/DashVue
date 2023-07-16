<template>
    <div class="border-front flex flex-row gap-3 border-b border-neutral-tx/60 p-2 text-neutral-tx/60">
        <h3 v-for="{ label, size } in cols" class="basis-0 min-w-0" :class="size && size != 1 ? `grow-[${size}]` : 'grow'">
            {{ label }}
        </h3>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    cols: { label: string, size?: number }[]
}>()
</script>
