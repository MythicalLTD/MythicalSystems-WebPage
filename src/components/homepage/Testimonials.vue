<template>
    <section class="py-16 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                What Our Clients Say
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Hear from our satisfied clients and discover the impact of our services on their businesses.
            </p>

            <!-- Testimonials Slider -->
            <div class="relative max-w-7xl mx-auto">
                <!-- Navigation Buttons -->
                <button
                    @click="prevSlide"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                    <ChevronLeft class="w-6 h-6 text-purple-400" />
                </button>
                <button
                    @click="nextSlide"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                    <ChevronRight class="w-6 h-6 text-purple-400" />
                </button>

                <!-- Testimonials Container -->
                <div class="overflow-hidden px-4">
                    <div
                        class="flex transition-transform duration-500 ease-out gap-6"
                        :style="{ transform: `translateX(-${currentSlide * 33.33}%)` }"
                    >
                        <div v-for="testimonial in testimonials" :key="testimonial.name" class="w-1/3 flex-shrink-0">
                            <Card class="h-full transform transition-all duration-300 hover:scale-105">
                                <div class="p-6">
                                    <p class="text-gray-300 italic text-lg mb-6 line-clamp-4">
                                        "{{ testimonial.quote }}"
                                    </p>
                                    <div class="flex items-center mt-auto">
                                        <img
                                            :src="testimonial.avatar"
                                            :alt="testimonial.name"
                                            class="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/30"
                                        />
                                        <div>
                                            <h3 class="text-lg font-semibold text-purple-300">
                                                {{ testimonial.name }}
                                            </h3>
                                            <p class="text-sm text-gray-400">{{ testimonial.position }}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                <!-- Dots Navigation -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button
                        v-for="index in Math.ceil(testimonials.length / 3)"
                        :key="index"
                        @click="goToSlide(index - 1)"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="currentSlide === index - 1 ? 'bg-purple-500 w-4' : 'bg-purple-500/30'"
                    ></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Card from '@/components/ui/Card.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { testimonials } from '@/config/FeedBacks';

const currentSlide = ref(0);
const maxSlides = Math.ceil(testimonials.length / 3);
let autoplayInterval: ReturnType<typeof setInterval>;

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % maxSlides;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + maxSlides) % maxSlides;
};

const goToSlide = (index: number) => {
    currentSlide.value = index;
};

const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 5000);
};

const stopAutoplay = () => {
    clearInterval(autoplayInterval);
};

onMounted(() => {
    startAutoplay();
});

onUnmounted(() => {
    stopAutoplay();
});
</script>

<style scoped>
.container {
    max-width: 1400px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.overflow-hidden::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-hidden {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
