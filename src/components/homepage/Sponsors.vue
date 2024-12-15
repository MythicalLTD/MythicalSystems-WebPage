<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Project Sponsors
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                We are grateful for the support of our sponsors who help make our projects possible.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="sponsor in sponsors" :key="sponsor.name" class="glass-effect p-6 rounded-lg text-center">
                    <a :href="sponsor.url" target="_blank" rel="noopener noreferrer">
                        <img :src="sponsor.logo" :alt="sponsor.name" class="mx-auto mb-4 h-16 object-contain" />
                    </a>
                    <h3 class="text-xl font-semibold text-purple-300 mb-2">{{ sponsor.name }}</h3>
                    <p class="text-gray-400">{{ sponsor.description }}</p>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import { sponsors } from '@/config/Sponsors';
</script>
