<template>
    <div :key="breakpoints" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardRevenue />
        <CardRevenue />
        <CardRevenue />
        <CardRevenue />
        <CardPayments class="md:col-span-2 overflow-auto"/>
        {{ breakpoints }}
    </div>
</template>

<script setup lang="ts">
import CardRevenue from '@/blocs/CardRevenue.vue';
import CardPayments from '@/blocs/CardPayments.vue'
import { useBreakpoints } from '@/composables';

const breakpoints = useBreakpoints()

</script>
