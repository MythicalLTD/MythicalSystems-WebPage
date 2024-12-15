<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Our Impact in Numbers
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                See how MythicalSystems is making a difference in the developer community. Revenue is calculated in EUR
                and updates every year!
            </p>
            <div class="grid md:grid-cols-4 gap-8 mb-12">
                <Card v-for="(value, key) in stats" :key="key">
                    <h3 class="text-xl font-semibold text-purple-300 capitalize mb-2">{{ key }}</h3>
                    <p class="text-3xl font-bold text-purple-100">
                        {{ key === 'uptime' ? value.toFixed(2) + '%' : value.toLocaleString() }}
                        {{ key === 'revenue' ? ' EUR' : '' }}
                    </p>
                </Card>
            </div>
            <Card>
                <ResourceUsage />
            </Card>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import ResourceUsage from './ResourceUsage.vue';
import { stats } from '@/config/Stats';
</script>
