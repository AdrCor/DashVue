<template>
    <CardLayout class="min-h-96 flex w-full flex-col justify-between gap-4">
        <CardHeader header="Return on Investment" sub="Last 7 days" />

        <div class="flex flex-row items-center justify-between gap-4">
            <CardValue
                class="self-start"
                :value="48"
                suffix="%"
                color="primary"
                :gain="3"
                gain-text="vs previous period"
            />
            <Button color="neutral" size="small" class="self-end">
                <template #icon>
                    <ChevronRight />
                </template>
                More
            </Button>
        </div>
    </CardLayout>
</template>

<script setup lang="ts">
import { CardLayout, CardHeader, CardValue } from '@/components/cards'
import Button from '@/components/buttons/Button.vue'
import ChevronRight from '@/components/icons/outline/ChevronRight.vue';
</script>
