<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-8 animate-fade-in">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                    Our Products
                </span>
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up">
                Explore our suite of innovative products and services designed to empower developers and businesses.
            </p>

            <!-- Products Gallery -->
            <div class="relative max-w-7xl mx-auto">
                <!-- Navigation Buttons -->
                <button
                    @click="prevSlide"
                    class="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                    <ChevronLeft class="w-8 h-8 text-purple-400" />
                </button>
                <button
                    @click="nextSlide"
                    class="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                    <ChevronRight class="w-8 h-8 text-purple-400" />
                </button>

                <!-- Products Container -->
                <div class="overflow-hidden">
                    <div
                        class="flex transition-transform duration-500 ease-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                    >
                        <div v-for="product in products" :key="product.name" class="w-full flex-shrink-0 px-4">
                            <div class="max-w-5xl mx-auto">
                                <div class="bg-gray-800/50 rounded-xl overflow-hidden">
                                    <!-- Product Header -->
                                    <div class="relative h-[400px] group">
                                        <img
                                            :src="product.image"
                                            :alt="product.name"
                                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-8"
                                        >
                                            <div>
                                                <h3 class="text-3xl font-bold text-white mb-2">{{ product.name }}</h3>
                                                <p class="text-lg text-gray-300">{{ product.description }}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Product Content -->
                                    <div class="p-8">
                                        <!-- Technologies -->
                                        <div class="flex flex-wrap gap-2 mb-6">
                                            <span
                                                v-for="tech in product.technologies"
                                                :key="tech"
                                                class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                                            >
                                                {{ tech }}
                                            </span>
                                        </div>

                                        <!-- Full Description -->
                                        <p class="text-gray-300 mb-8 leading-relaxed">
                                            {{ product.fullDescription }}
                                        </p>

                                        <!-- Features -->
                                        <div class="mb-8">
                                            <h4 class="text-xl font-semibold text-purple-300 mb-4">Key Features</h4>
                                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <li
                                                    v-for="feature in product.features"
                                                    :key="feature"
                                                    class="flex items-start gap-2 text-gray-300"
                                                >
                                                    <span class="text-purple-400 mt-1">
                                                        <CheckCircle class="w-5 h-5" />
                                                    </span>
                                                    {{ feature }}
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- Actions -->
                                        <div class="flex gap-4">
                                            <Button
                                                v-if="product.purchaseLink"
                                                :href="product.purchaseLink"
                                                variant="primary"
                                                class="flex-1 max-w-xs"
                                            >
                                                Purchase Now ({{ product.purchasePrice }}€)
                                            </Button>
                                            <Button
                                                v-if="product.demoLink"
                                                :href="product.demoLink"
                                                variant="secondary"
                                                class="flex-1 max-w-xs"
                                            >
                                                Try Demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dots Navigation -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button
                        v-for="index in products.length"
                        :key="index"
                        @click="goToSlide(index - 1)"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="currentSlide === index - 1 ? 'bg-purple-500 w-6' : 'bg-purple-500/30'"
                    ></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-vue-next';
import { products } from '@/config/Projects';

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % products.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + products.length) % products.length;
};

const goToSlide = (index: number) => {
    currentSlide.value = index;
};
</script>

<style scoped>
.container {
    max-width: 1400px;
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
