<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Our Products
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Explore our suite of innovative products and services designed to empower developers and businesses.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="product in products" :key="product.name">
                    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-t-lg" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-purple-300 mb-2">{{ product.name }}</h3>
                        <p class="text-gray-400 mb-4">{{ product.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span
                                v-for="tech in product.technologies"
                                :key="tech"
                                class="px-2 py-1 bg-purple-800 text-purple-200 rounded-full text-sm"
                            >
                                {{ tech }}
                            </span>
                        </div>
                        <Button :href="product.link" variant="secondary" class="w-full"> Learn More </Button>
                    </div>
                </Card>
            </div>
            <hr class="border-t-2 my-8" />
            <p class="text-center text-gray-300 mt-8">...and so many more.</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import Button from '@/components/ui/Button.vue';
import { products } from '@/config/Projects';
</script>
