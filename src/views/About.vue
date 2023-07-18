<template>
    <CardLayout class="flex flex-col gap-4">
        <div>
            <h2 class="text-2xl font-medium text-primary">DashVue</h2>
            <p class="text-justify text-neutral">
                DashVue is an open-source template that allows you to create responsive and modern-looking dashboards
                using Vue.js and TailwindCSS.
            </p>
        </div>
        <div>
            <h2 class="text-2xl font-medium text-primary">What's included?</h2>
            <ol class="mx-2">
                <li>
                    - Custom design system that supports dark and light modes out of the box and can be easily
                    customized and expanded.
                </li>
                <li>- Responsive navigation bars for desktop and mobile.</li>
                <li>- Basic routing system using vue-router.</li>
                <li>- Basic store setup using Pinia.</li>
                <li>- Multiple components and example cards.</li>
            </ol>
        </div>
    </CardLayout>
</template>

<script setup lang="ts">
import { CardLayout } from '@/components/cards'
</script>
