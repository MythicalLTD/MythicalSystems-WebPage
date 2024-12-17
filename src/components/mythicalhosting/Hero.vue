<template>
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div class="container mx-auto px-4 text-center z-10">
            <div class="max-w-4xl mx-auto space-y-8">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                    v-motion :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }">
                    Unleash the Power of Next-Gen Hosting
                </h1>

                <p class="text-xl text-gray-300" v-motion :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }">
                    Experience lightning-fast performance, unparalleled security, and 24/7 expert support.
                    From game servers to enterprise solutions, we've got you covered.
                </p>

                <div class="flex flex-wrap justify-center gap-4" v-motion :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, ease: 'easeOut' } }">
                    <a href="/"
                        class="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                        Get Started
                    </a>
                    <a href="/"
                        class="px-8 py-4 glass-effect rounded-lg hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                        Explore Plans
                    </a>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12" v-motion :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 1000, delay: 600, ease: 'easeOut' } }">
                    <div v-for="stat in stats" :key="stat.label" class="text-center">
                        <div class="text-3xl font-bold text-purple-400 mb-2">{{ stat.value }}</div>
                        <div class="text-gray-400">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDownIcon class="w-8 h-8 text-purple-400" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next'

const stats = [
    { value: '99.99%', label: 'Uptime' },
    { value: '24/7', label: 'Expert Support' },
    { value: '14 TBPS', label: 'DDoS Protection' },
    { value: '100 Gbps', label: 'Network Speed' }
]
</script>