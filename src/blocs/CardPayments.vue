<template>
    <CardLayout class="flex min-h-0 grow basis-0 flex-col p-2">
        <CardHeader header="Payments" sub="Last payments" />
        <List class="my-2 min-w-[500px] grow justify-around gap-2 text-neutral-tx">
            <ListHeader :cols="header" />
            <ListRow v-for="row in rows" class="">
                <div class="flex grow-[2] flex-row items-center gap-2">
                    <img :src="row.picture" class="h-10 rounded-full" />
                    <div class="flex w-full flex-col truncate">
                        <a class="truncate text-xl text-neutral-tx">{{ row.name }}</a>
                        <a class="truncate text-sm text-neutral-tx/60">{{ row.email }}</a>
                    </div>
                </div>
                <a class="grow text-sm">{{ row.date }}</a>
                <div class="grow">
                    <StatusTag
                        class="w-min"
                        :status="row.status == 'done' ? 'success' : row.status == 'pending' ? 'warning' : 'danger'"
                    >
                        {{ row.status }}
                    </StatusTag>
                </div>
                <a class="grow text-xl font-medium">${{ row.amount }}</a>
                <div class="grow">
                    <Button size="small">
                        <template #icon>
                            <ChevronRight />
                        </template>
                        Details
                    </Button>
                </div>
            </ListRow>
        </List>
    </CardLayout>
</template>

<script setup lang="ts">
import { List, ListHeader, ListRow } from '@/components/list'
import Button from '@/components/buttons/Button.vue'
import ChevronRight from '@/components/icons/outline/ChevronRight.vue'
import StatusTag from '@/components/StatusTag.vue'
import { CardLayout, CardHeader } from '@/components/cards'

const header = [
    { label: 'Client', size: 2 },
    { label: 'Date', size: 1 },
    { label: 'Status', size: 1 },
    { label: 'Amount', size: 1 },
    { label: 'Details', size: 1 },
]

const rows = [
    {
        name: 'Alexina Liddiard',
        picture: 'src/assets/pics/pf1.jpg',
        email: 'alexina.liddiard@google.com',
        amount: 299,
        status: 'done',
        date: 'July 9th, 2023',
    },
    {
        name: 'Granger Hassen',
        picture: 'src/assets/pics/pf2.jpg',
        email: 'granger.hassen@netflix.com',
        amount: 599,
        status: 'done',
        date: 'July 7th, 2023',
    },
    {
        name: 'Vevay Wanderschek',
        picture: 'src/assets/pics/pf3.jpg',
        email: 'vevay.wanderschek@facebook.com',
        amount: 599,
        status: 'cancelled',
        date: 'July 7th, 2023',
    },
    {
        name: 'Durward McEttigen',
        picture: 'src/assets/pics/pf4.jpg',
        email: 'durward.mcettigen@microsoft.com',
        amount: 299,
        status: 'pending',
        date: 'July 3rd, 2023',
    },
    {
        name: 'Berkie Jevons',
        picture: 'src/assets/pics/pf5.jpg',
        email: 'berkie.jevons@amazon.com',
        amount: 1299,
        status: 'done',
        date: 'June 29th, 2023',
    },
]
</script>
