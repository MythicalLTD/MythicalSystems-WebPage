<template>
    <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
    >
        <button
            v-show="isVisible"
            @click="scrollToTop"
            class="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition-all duration-300 hover:scale-110"
            :class="{ 'animate-bounce': isHovering }"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        >
            <div class="relative">
                <ArrowUpIcon class="w-6 h-6" />
                <div
                    class="absolute inset-0 bg-purple-400 rounded-full transform scale-110 animate-ping"
                    style="animation-duration: 2s"
                ></div>
            </div>
        </button>
    </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUpIcon } from 'lucide-vue-next';

const isVisible = ref(false);
const isHovering = ref(false);

const checkScroll = () => {
    isVisible.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

button {
    animation: float 3s ease-in-out infinite;
}
</style>
