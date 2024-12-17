<template>
    <div class="relative">
        <div class="overflow-hidden rounded-lg">
            <div
                class="flex transition-transform duration-300 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
                <img
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    :alt="`Image ${index + 1}`"
                    class="w-full h-64 object-cover flex-shrink-0"
                />
            </div>
        </div>
        <button
            @click="prev"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
            <ChevronLeft class="w-6 h-6" />
        </button>
        <button
            @click="next"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
            <ChevronRight class="w-6 h-6" />
        </button>
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button
                v-for="(_, index) in images"
                :key="index"
                @click="goToSlide(index)"
                class="w-3 h-3 rounded-full transition-colors duration-200 ease-in-out"
                :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
            ></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const props = defineProps({
    images: {
        type: Array as PropType<string[]>,
        required: true,
    },
});

const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
};
</script>
