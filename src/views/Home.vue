<template>
    <div class="flex flex-wrap gap-2">
        <Card
            header="Money"
            :gain-value="10"
            :sub-value="123"
            sub-text="vs last 7 days"
            :value="1234"
            value-color="primary"
            value-prefix="$"
        >
            <template #icon>
                <Moon />
            </template>
        </Card>
        <Card
            header="Distance"
            :value-color="-4 >= 0 ? 'success' : 'danger'"
            :gain-value="-4"
            gain-text="vs last 7 days"
            :value="340"
            value-suffix="Km"
        >
            <template #icon>
                <Moon />
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/cards/Card.vue'
import Moon from '@/components/icons/outline/Moon.vue'

</script>
