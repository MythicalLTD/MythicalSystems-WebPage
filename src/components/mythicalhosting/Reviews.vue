<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                What our customers say
            </h2>
            <p class="text-lg text-center text-gray-400 mb-4">Read the reviews from our satisfied customers</p>
            <br />
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="review in reviews"
                    :key="review.name"
                    class="glass-effect rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                    <div class="flex flex-col h-full">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold mr-4"
                            >
                                {{ review.name.charAt(0) }}
                            </div>
                            <div>
                                <h3 class="font-semibold">{{ review.name }}</h3>
                                <p class="text-gray-400 text-sm">{{ review.company }}</p>
                            </div>
                        </div>
                        <p class="text-gray-300 flex-grow">{{ review.comment }}</p>
                        <div class="flex items-center mt-4">
                            <StarIcon
                                v-for="i in 5"
                                :key="i"
                                :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-600'"
                                class="w-5 h-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { StarIcon } from 'lucide-vue-next';

const reviews = [
    {
        name: 'John D.',
        company: 'GameDevPro',
        comment:
            'NextHost provides exceptional game server hosting. The performance is unmatched, and their support team is always ready to help.',
        rating: 5,
    },
    {
        name: 'Sarah L.',
        company: 'TechStartup',
        comment:
            "We've been using NextHost for our web applications, and the speed is incredible. The VPS plans offer great value for money.",
        rating: 4,
    },
    {
        name: 'Michael R.',
        company: 'DataCrunch',
        comment:
            'The dedicated servers from NextHost have been a game-changer for our data processing needs. Reliable and powerful!',
        rating: 5,
    },
];
</script>
