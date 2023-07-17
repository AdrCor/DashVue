<template>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <CardTheme name="base" mode="dark" />
        <CardTheme name="base" mode="light" />
        <CardTheme name="miami" mode="dark" />
        <CardTheme name="miami" mode="light" />
        <CardTheme name="shadow" mode="dark" />
        <CardTheme name="shadow" mode="light" />
    </div>
</template>

<script setup lang="ts">
import CardTheme from '@/blocs/CardTheme.vue'
</script>

'theme-base dark'
