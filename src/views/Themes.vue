<template>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <CardTheme name="dash" mode="dark" />
        <CardTheme name="dash" mode="light" />
        <CardTheme name="miami" mode="dark" />
        <CardTheme name="miami" mode="light" />
        <CardTheme name="shadow" mode="dark" />
        <CardTheme name="shadow" mode="light" />
    </div>
</template>

<script setup lang="ts">
import CardTheme from '@/blocs/CardTheme.vue'
</script>
