<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Best Hosting Plans
            </h2>
            <p class="text-lg text-center text-gray-400 mb-4">
                Here are some of our best plans for your hosting needs!
            </p>
            <br />
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="plan in plans"
                    :key="plan.name"
                    class="glass-effect rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 hover:shadow-lg hover:bg-purple-500/10 bg-opacity-50 flex flex-col justify-between"
                    :class="{ 'border-2 border-purple-500': plan.popular }"
                >
                    <div>
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
                            <p class="text-gray-400">{{ plan.description }}</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-4xl font-bold">€{{ plan.price }}</span>
                            <span class="text-gray-400">/month</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                                <CheckIcon class="w-5 h-5 text-purple-400 mr-2" />
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center mt-auto">
                        <button
                            @click="redirectToPlan(plan)"
                            class="w-full py-3 rounded-lg font-semibold transition-colors duration-300 bg-opacity-70"
                            :class="
                                plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 hover:bg-gray-600'
                            "
                        >
                            Choose Plan
                        </button>
                        <div
                            v-if="plan.popular"
                            class="absolute top-4 right-4 bg-purple-600 text-xs font-semibold px-2 py-1 rounded-full"
                        >
                            Popular
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next';

const plans = [
    {
        name: 'VPS Starter',
        description: 'Perfect for small projects',
        price: '4.50',
        features: ['1 vCPU', '2 GB RAM', '20 GB NVMe SSD', '1 TB Transfer', '1 Gbps Network'],
        href: '#',
        popular: false,
    },
    {
        name: 'VPS Pro',
        description: 'Ideal for growing businesses',
        price: '9.99',
        features: ['2 vCPU', '4 GB RAM', '50 GB NVMe SSD', '2 TB Transfer', '1 Gbps Network', 'DDoS Protection'],
        href: '#',
        popular: true,
    },
    {
        name: 'VPS Enterprise',
        description: 'For high-performance needs',
        price: '19.99',
        features: [
            '4 vCPU',
            '8 GB RAM',
            '100 GB NVMe SSD',
            '5 TB Transfer',
            '1 Gbps Network',
            'DDoS Protection',
            'Dedicated IP',
        ],
        href: '#',
        popular: false,
    },
];

const redirectToPlan = (plan: { href: string }) => {
    window.location.href = plan.href;
};
</script>
