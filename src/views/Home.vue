<template>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <CardRevenue />
        <CardPayments class="md:col-span-2 overflow-auto"/>
    </div>
</template>

<script setup lang="ts">
import CardRevenue from '@/blocs/CardRevenue.vue';
import CardPayments from '@/blocs/CardPayments.vue'
</script>
