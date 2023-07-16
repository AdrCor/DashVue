<template>
    <div :key="width" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardVisits />
        <CardVisits class="lg:row-start-2"/>
        <CardRevenue class="lg:row-span-2"/>
        <CardSales class="lg:row-span-2"/>
        <CardPayments class="md:col-span-2 lg:col-span-3 overflow-auto"/>
    </div>
</template>

<script setup lang="ts">
import CardRevenue from '@/blocs/CardRevenue.vue';
import CardPayments from '@/blocs/CardPayments.vue'
import { useWindowSize } from '@vueuse/core';
import CardSales from '@/blocs/CardSales.vue';
import CardVisits from '@/blocs/CardVisits.vue';

const { width } = useWindowSize()

</script>
