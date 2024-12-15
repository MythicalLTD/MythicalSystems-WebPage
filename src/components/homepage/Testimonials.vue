<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                What Our Clients Say
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Hear from our satisfied clients and discover the impact of our services on their businesses.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="testimonial in testimonials" :key="testimonial.name">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img
                                :src="testimonial.avatar"
                                :alt="testimonial.name"
                                class="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 class="text-lg font-semibold text-purple-300">{{ testimonial.name }}</h3>
                                <p class="text-sm text-gray-400">{{ testimonial.position }}</p>
                            </div>
                        </div>
                        <p class="text-gray-300 italic">"{{ testimonial.quote }}"</p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import { testimonials } from '@/config/FeedBacks';
</script>
