<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardTheme name="base" mode="dark"/>
        <CardTheme name="base" mode="light"/>
    </div>
</template>

<script setup lang="ts">
import CardTheme from '@/blocs/CardTheme.vue';

</script>

'theme-base dark'