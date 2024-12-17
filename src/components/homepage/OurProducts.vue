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
                        <Button @click="openModal(product)" variant="secondary" class="w-full"> Learn More </Button>
                    </div>
                </Card>
            </div>
            <hr class="border-t-2 my-8" />
            <p class="text-center text-gray-300 mt-8">...and so many more.</p>
        </div>

        <Modal
            :is-open="isModalOpen"
            :title="selectedProduct?.name || ''"
            :description="selectedProduct?.description || ''"
            @close="closeModal"
        >
            <div v-if="selectedProduct" class="text-gray-300">
                <div class="mb-6">
                    <Carousel :images="selectedProduct.images" />
                </div>
                <h3 class="text-2xl font-bold text-purple-300 mb-3">{{ selectedProduct.name }}</h3>
                <p class="mb-6 text-lg">{{ selectedProduct.fullDescription }}</p>
                <h4 class="text-xl font-semibold text-purple-300 mb-3">Key Features:</h4>
                <ul class="list-disc list-inside mb-6">
                    <li v-for="feature in selectedProduct.features" :key="feature" class="mb-2">{{ feature }}</li>
                </ul>
                <h4 class="text-xl font-semibold text-purple-300 mb-3">Technologies Used:</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span
                        v-for="tech in selectedProduct.technologies"
                        :key="tech"
                        class="px-2 py-1 bg-purple-800 text-purple-200 rounded-full text-sm"
                    >
                        {{ tech }}
                    </span>
                </div>
                <div class="flex gap-4 mb-6">
                    <Button
                        v-if="selectedProduct.purchaseLink"
                        :href="selectedProduct.purchaseLink"
                        variant="primary"
                        class="flex-1"
                    >
                        Purchase ({{ selectedProduct.purchasePrice }}€)
                    </Button>
                    <Button
                        v-if="selectedProduct.demoLink"
                        :href="selectedProduct.demoLink"
                        variant="secondary"
                        class="flex-1"
                    >
                        Demo
                    </Button>
                </div>
            </div>
        </Modal>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '@/components/ui/Card.vue';
import Button from '@/components/ui/Button.vue';
import Modal from '@/components/ui/Modal.vue';
import Carousel from '@/components/ui/Carousel.vue';
import { products } from '@/config/Projects';

const isModalOpen = ref(false);
interface Product {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    fullDescription: string;
    features: string[];
    images: string[];
    demoLink?: string;
    purchaseLink?: string;
    purchasePrice?: number;
}

const selectedProduct = ref<Product | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const openModal = (product: any) => {
    selectedProduct.value = product;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedProduct.value = null;
};
</script>
