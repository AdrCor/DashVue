<template>
    <CardLayout class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
            <h2 class="text-2xl font-medium text-primary">DashVue</h2>
            <p class="text-justify text-neutral">
                DashVue is an open-source template that allows you to create responsive and modern-looking dashboards
                using Vue.js, Typescript and TailwindCSS.
            </p>
        </div>
        <div class="flex flex-col gap-1">
            <h2 class="text-2xl font-medium text-primary">What's included?</h2>
            <ol class="mx-2">
                <li>
                    - A custom design system that supports dark and light modes out of the box and can be easily
                    customized and expanded.
                </li>
                <li>- A responsive navigation bars for desktop and mobile.</li>
                <li>- A basic routing system using vue-router.</li>
                <li>- A basic store setup using Pinia.</li>
                <li>- Multiple components and example cards.</li>
            </ol>
        </div>
        <div class="flex flex-col gap-1">
            <h2 class="text-2xl font-medium text-primary">How to use?</h2>
            <p class="text-justify text-neutral">
                We recommend using <a class="text-secondary" href="https://github.com/Rich-Harris/degit">degit</a> in order to not download the whole project git history.
            </p>
            <CardLayout class="text-neutral font-mono">
                <p><span class="text-secondary">npm</span> install -g degit</p>
                <br>
                <p><span class="text-secondary">degit</span> AdrCor/DashVue new-project-name</p>
                <p><span class="text-secondary">cd</span> new-project-name</p>
                <p><span class="text-secondary">npm</span> install</p>
                <p><span class="text-secondary">npm</span> run dev</p>
            </CardLayout>
        </div>
    </CardLayout>
</template>

<script setup lang="ts">
import { CardLayout } from '@/components/cards'
</script>
