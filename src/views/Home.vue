<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardVisits />
        <CardRoi class="lg:row-start-2" />
        <CardRevenue class="lg:row-span-2" />
        <CardSales class="lg:row-span-2" />
        <CardPayments class="overflow-auto md:col-span-2 lg:col-span-3" />
    </div>
</template>

<script setup lang="ts">
import CardRevenue from '@/blocs/cards/Revenues.vue'
import CardPayments from '@/blocs/cards/Payments.vue'
import { useWindowSize } from '@vueuse/core'
import CardSales from '@/blocs/cards/Sales.vue'
import CardVisits from '@/blocs/cards/Visits.vue'
import CardRoi from '@/blocs/cards/Roi.vue'

const { width } = useWindowSize()
</script>
