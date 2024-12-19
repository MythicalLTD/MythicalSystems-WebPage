<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white pt-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
                class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                MythicalSystems Documentation
            </h1>
            <p class="text-xl text-gray-300 text-center mb-12">
                Choose the documentation you're looking for:
            </p>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <router-link v-for="doc in documentationTypes" :key="doc.title" :to="doc.path" class="block">
                    <div
                        class="bg-gray-900/40 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800/30 shadow-xl hover:bg-gray-900/60 transition-colors p-6 h-full flex flex-col">
                        <component :is="doc.icon" class="w-12 h-12 text-purple-400 mb-4" />
                        <h2 class="text-xl font-semibold text-purple-300 mb-2">{{ doc.title }}</h2>
                        <p class="text-gray-400 flex-grow">{{ doc.description }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Box } from 'lucide-vue-next'

const documentationTypes = [
    {
        title: 'MythicalDash',
        description: 'Learn how to use and configure MythicalDash for your projects.',
        path: '/docs/mythicaldash/intro',
        icon: Box
    }
]
</script>