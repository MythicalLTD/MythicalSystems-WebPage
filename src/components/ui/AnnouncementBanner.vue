<template>
    <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-full"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-full"
    >
        <div
            v-if="isVisible"
            class="fixed top-20 left-0 right-0 z-40 px-4 pt-4"
        >
            <div class="container mx-auto max-w-7xl">
                <div
                    class="relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-pink-900/50 backdrop-blur-xl shadow-2xl"
                >
                    <!-- Animated background gradient -->
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-violet-600/20"
                    ></div>

                    <!-- Content -->
                    <div class="relative px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
                        <!-- Left side - Content -->
                        <div class="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                            <!-- Icon/Sparkle -->
                            <div class="flex-shrink-0 hidden sm:block">
                                <div
                                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                                >
                                    <Sparkles class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                            </div>

                            <!-- Text Content -->
                            <div class="flex-1 min-w-0">
                                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                    <span class="text-white font-semibold text-sm sm:text-base md:text-lg">
                                        Introducing our new project:
                                    </span>
                                    <a
                                        href="https://featherpanel.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-1.5 sm:gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-violet-300 font-bold text-base sm:text-lg md:text-xl hover:from-purple-200 hover:via-pink-200 hover:to-violet-200 transition-all duration-300 group whitespace-nowrap"
                                    >
                                        <span class="relative">
                                            FeatherPanel
                                            <span
                                                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                            ></span>
                                        </span>
                                        <ExternalLink class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                                    </a>
                                </div>
                                <p class="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                                    Check out featherpanel.com for more information
                                </p>
                            </div>
                        </div>

                        <!-- Right side - Close button -->
                        <button
                            @click="closeBanner"
                            class="flex-shrink-0 p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            aria-label="Close banner"
                        >
                            <X class="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    <!-- Bottom border glow effect -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"
                    ></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sparkles, ExternalLink, X } from 'lucide-vue-next';

const isVisible = ref(false);

onMounted(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('featherpanel-banner-dismissed');
    if (!dismissed) {
        // Small delay for smooth entrance animation
        setTimeout(() => {
            isVisible.value = true;
        }, 300);
    }
});

const closeBanner = () => {
    isVisible.value = false;
    // Remember dismissal for this session
    sessionStorage.setItem('featherpanel-banner-dismissed', 'true');
};
</script>

<style scoped>
@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

