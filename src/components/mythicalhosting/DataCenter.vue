<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0 }"
                >
                    State-of-the-Art Data Centers
                </h2>
                <p
                    class="text-gray-400 max-w-2xl mx-auto"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
                >
                    Powered by enterprise-grade hardware and protected by advanced security measures
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-6" v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }">
                    <div
                        v-for="feature in features"
                        :key="feature.title"
                        class="glass-effect p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        <div class="flex items-start space-x-4">
                            <component :is="feature.icon" class="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                                <p class="text-gray-400">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative" v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0 }">
                    <div class="glass-effect p-8 rounded-lg relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 animate-pulse-slow"
                        ></div>
                        <h3 class="text-2xl font-semibold mb-6">Global Infrastructure</h3>
                        <div class="space-y-4">
                            <div v-for="location in locations" :key="location.city" class="flex items-center space-x-4">
                                <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                <div>
                                    <div class="font-semibold">{{ location.city }}</div>
                                    <div class="text-sm text-gray-400">
                                        Latency: {{ location.latency }} | Uptime: {{ location.uptime }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div
                            v-for="stat in networkStats"
                            :key="stat.label"
                            class="glass-effect p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                        >
                            <div class="text-2xl font-bold text-purple-400">{{ stat.value }}</div>
                            <div class="text-sm text-gray-400">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ShieldIcon, ZapIcon, ServerIcon, NetworkIcon } from 'lucide-vue-next';

const features = [
    {
        icon: ShieldIcon,
        title: 'Advanced Security',
        description: 'Enterprise-grade firewall and DDoS protection up to 14 TBPS filtering capacity',
    },
    {
        icon: ZapIcon,
        title: 'High Performance',
        description: 'Latest AMD EPYC & Intel Xeon processors with NVMe SSDs for maximum speed',
    },
    {
        icon: NetworkIcon,
        title: 'Network Redundancy',
        description: 'Multiple 100 Gbps connections with automatic failover systems',
    },
    {
        icon: ServerIcon,
        title: 'Hardware Reliability',
        description: 'Enterprise-grade hardware with 24/7 monitoring and instant replacement',
    },
];

const locations = [
    {
        city: 'Frankfurt, Germany',
        latency: '<20ms',
        uptime: '99.99%',
    },
    {
        city: 'Bucharest, Romania',
        latency: '<25ms',
        uptime: '99.99%',
    },
    {
        city: 'India, Mumbai [SOON]',
        latency: '<00ms',
        uptime: '0%',
    },
];

const networkStats = [
    { value: '100 Gbps', label: 'Network Capacity' },
    { value: '14 TBPS', label: 'DDoS Protection' },
    { value: '<20ms', label: 'Average Latency' },
    { value: '99.99%', label: 'Network Uptime' },
];
</script>
