<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Why chose us?
            </h2>
            <p class="text-lg text-center text-gray-400 mb-4">
                Here are some reasons why you should choose us for your hosting needs!
            </p>
            <br />
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="feature in features"
                    :key="feature.title"
                    class="glass-effect rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                    <div class="flex flex-col items-center text-center">
                        <component :is="feature.icon" class="w-12 h-12 text-purple-400 mb-4" />
                        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                        <p class="text-gray-400">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ServerIcon, ShieldIcon, ClockIcon, ZapIcon, HeadphonesIcon, RocketIcon } from 'lucide-vue-next';

const features = [
    {
        icon: ServerIcon,
        title: 'High-Performance Hardware',
        description: 'Latest AMD EPYC & Intel Xeon processors with NVMe SSDs for blazing-fast performance.',
    },
    {
        icon: ShieldIcon,
        title: 'Advanced Security',
        description: 'Enterprise-grade drive encryption using Lucks and proxmox backup server encryption!.',
    },
    {
        icon: ClockIcon,
        title: '99.99% Uptime',
        description: 'Our robust infrastructure ensures your services are always available.',
    },
    {
        icon: ZapIcon,
        title: 'Daily Backups',
        description: 'We take backups of all our services daily incase of a hardware failure or datacenter failure.',
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Expert Support',
        description: 'Our team of experts is always ready to assist you with any issues.',
    },
    {
        icon: RocketIcon,
        title: 'Instant Activation',
        description: 'Get your server up and running in minutes with our automated provisioning.',
    },

];
</script>
