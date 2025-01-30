<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-8 animate-fade-in">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                    Why us?
                </span>
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                MythicalSystems takes great pride in offering a wide range of projects that are completely free for the
                entire community to enjoy. Discover the magic of our cutting-edge solutions and join a thriving
                ecosystem of developers and creators.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="(feature, index) in features" :key="index">
                    <div class="flex items-center mb-4">
                        <component :is="feature.icon" class="w-8 h-8 text-purple-400 mr-3" />
                        <h3 class="text-xl font-semibold text-purple-300">{{ feature.title }}</h3>
                    </div>
                    <p class="text-gray-400">{{ feature.description }}</p>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import { features } from '@/config/WhyUs';
</script>
