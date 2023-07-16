<template>
    <div :key="width" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardRevenue />
        <CardSales />
        <CardRevenue />
        <CardRevenue />
        <CardPayments class="md:col-span-2 overflow-auto"/>
    </div>
</template>

<script setup lang="ts">
import CardRevenue from '@/blocs/CardRevenue.vue';
import CardPayments from '@/blocs/CardPayments.vue'
import { useWindowSize } from '@vueuse/core';
import CardSales from '@/blocs/CardSales.vue';

const { width } = useWindowSize()

</script>
