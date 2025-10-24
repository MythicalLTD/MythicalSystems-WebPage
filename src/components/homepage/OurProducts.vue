<template>
    <section class="py-20 relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Floating particles -->
            <div class="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style="animation-delay: 0s;"></div>
            <div class="absolute top-40 right-20 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style="animation-delay: 1s; animation-duration: 3s;"></div>
            <div class="absolute bottom-32 left-1/4 w-2 h-2 bg-violet-400/30 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-20 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce" style="animation-delay: 0.5s; animation-duration: 4s;"></div>
            <div class="absolute top-1/2 left-20 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" style="animation-delay: 3s;"></div>
            <div class="absolute top-1/3 right-1/4 w-3 h-3 bg-violet-400/40 rounded-full animate-bounce" style="animation-delay: 1.5s; animation-duration: 2.5s;"></div>
            
            <!-- Geometric shapes -->
            <div class="absolute top-1/4 right-10 w-16 h-16 border border-purple-400/20 rotate-45 animate-spin" style="animation-duration: 20s;"></div>
            <div class="absolute bottom-1/4 left-16 w-12 h-12 border border-pink-400/20 rotate-12 animate-pulse"></div>
            <div class="absolute top-1/2 right-1/3 w-8 h-8 border border-violet-400/20 rotate-45 animate-spin" style="animation-duration: 15s;"></div>
            
            <!-- Gradient orbs -->
            <div class="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Enhanced header with animations -->
            <div class="text-center mb-16">
                <h2 
                    class="text-5xl md:text-6xl font-bold mb-6 shimmer-title"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                >
                    <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                        Our Products
                    </span>
                </h2>
                <p 
                    class="text-center text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed fade-in-text"
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    Explore our suite of innovative products and services designed to empower developers and businesses.
                </p>
            </div>

            <!-- Enhanced Products Gallery -->
            <div 
                class="relative max-w-7xl mx-auto"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, ease: 'easeOut' } }"
            >
                <!-- Enhanced Navigation Buttons -->
                <button
                    @click="prevSlide"
                    class="nav-button absolute left-4 top-1/2 -translate-y-1/2 z-10 group"
                >
                    <div class="nav-button-inner">
                        <ChevronLeft class="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                </button>
                <button
                    @click="nextSlide"
                    class="nav-button absolute right-4 top-1/2 -translate-y-1/2 z-10 group"
                >
                    <div class="nav-button-inner">
                        <ChevronRight class="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                </button>

                <!-- Enhanced Products Container -->
                <div class="overflow-hidden rounded-2xl">
                    <div
                        class="flex transition-transform duration-700 ease-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                    >
                        <div v-for="product in products" :key="product.name" class="w-full flex-shrink-0 px-4">
                            <div class="max-w-5xl mx-auto">
                                <div class="product-card bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                                    <!-- Enhanced Product Header -->
                                    <div class="relative h-[400px] group overflow-hidden">
                                        <img
                                            :src="product.image"
                                            :alt="product.name"
                                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <!-- Enhanced overlay -->
                                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent flex items-end p-8">
                                            <div class="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                                <h3 class="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{{ product.name }}</h3>
                                                <p class="text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{{ product.description }}</p>
                                            </div>
                                        </div>
                                        <!-- Floating elements -->
                                        <div class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                    </div>

                                    <!-- Enhanced Product Content -->
                                    <div class="p-8 relative">
                                        <!-- Technologies -->
                                        <div class="flex flex-wrap gap-2 mb-6">
                                            <span
                                                v-for="tech in product.technologies"
                                                :key="tech"
                                                class="tech-tag px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 hover:text-white transition-all duration-300"
                                            >
                                                {{ tech }}
                                            </span>
                                        </div>

                                        <!-- Full Description -->
                                        <p class="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {{ product.fullDescription }}
                                        </p>

                                        <!-- Enhanced Features -->
                                        <div class="mb-8">
                                            <h4 class="text-xl font-semibold text-purple-300 mb-4 group-hover:text-pink-300 transition-colors duration-300">Key Features</h4>
                                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <li
                                                    v-for="feature in product.features"
                                                    :key="feature"
                                                    class="feature-item flex items-start gap-2 text-gray-300 hover:text-gray-200 transition-colors duration-300"
                                                >
                                                    <span class="text-purple-400 mt-1 feature-icon">
                                                        <CheckCircle class="w-5 h-5" />
                                                    </span>
                                                    {{ feature }}
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- Enhanced Actions -->
                                        <div class="flex gap-4">
                                            <Button
                                                v-if="product.purchaseLink"
                                                :href="product.purchaseLink"
                                                variant="primary"
                                                class="action-button flex-1 max-w-xs hover-lift-effect"
                                            >
                                                <span class="relative z-10">Purchase Now ({{ product.purchasePrice }}€)</span>
                                                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                            </Button>
                                            <Button
                                                v-if="product.demoLink"
                                                :href="product.demoLink"
                                                variant="secondary"
                                                class="action-button flex-1 max-w-xs hover-lift-effect"
                                            >
                                                Try Demo
                                            </Button>
                                        </div>
                                        
                                        <!-- Hover effect overlay -->
                                        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Dots Navigation -->
                <div class="flex justify-center mt-8 space-x-3">
                    <button
                        v-for="index in products.length"
                        :key="index"
                        @click="goToSlide(index - 1)"
                        class="dot-button relative group"
                        :class="currentSlide === index - 1 ? 'active' : ''"
                    >
                        <div class="dot-inner"></div>
                        <div class="dot-pulse"></div>
                    </button>
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

/* Shimmer title effect */
.shimmer-title {
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

/* Fade in text effect */
.fade-in-text {
    animation: fadeInUp 1s ease-out 0.3s both;
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

/* Enhanced navigation buttons */
.nav-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button-inner {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.nav-button:hover .nav-button-inner {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

/* Product card enhancements */
.product-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Tech tags */
.tech-tag {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.tech-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px -5px rgba(139, 92, 246, 0.3);
}

/* Feature items */
.feature-item {
    transition: all 0.3s ease;
}

.feature-icon {
    transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
    transform: scale(1.2);
    color: #ec4899;
}

/* Action buttons */
.action-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.hover-lift-effect {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

/* Enhanced dots navigation */
.dot-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.dot-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.3);
    transition: all 0.3s ease;
}

.dot-button.active .dot-inner {
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    transform: scale(1.5);
}

.dot-button:hover .dot-inner {
    background: rgba(139, 92, 246, 0.6);
    transform: scale(1.2);
}

.dot-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.2);
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
}

.dot-button.active .dot-pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
}

/* Smooth transitions for all interactive elements */
* {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .nav-button-inner {
        width: 50px;
        height: 50px;
    }
    
    .product-card:hover {
        transform: translateY(-2px);
    }
    
    .nav-button:hover .nav-button-inner {
        transform: scale(1.05);
    }
}
</style>
