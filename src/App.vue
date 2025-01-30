<template>
    <Preloader :loading="isLoading" @fade-complete="onPreloaderFadeComplete" />

    <div
        class="min-h-screen bg-[#0a0a0f] text-white overflow-hidden transition-opacity duration-500"
        :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
    >
        <AnimatedBackground />
        <div id="glowing-cursor"></div>
        <component :is="layout">
            <router-view></router-view>
        </component>
        <CustomContextMenu />
        <BackToTop />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import AnimatedBackground from '@/components/ui/AnimatedBackground.vue';
import CustomContextMenu from '@/components/ui/CustomContextMenu.vue';
import BackToTop from '@/components/ui/BackToTop.vue';
import Preloader from '@/components/Preloader.vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
import DocsLayout from '@/layouts/DocsLayout.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => {
    if (route.path.startsWith('/docs')) {
        return DocsLayout;
    }
    return BaseLayout;
});

const isLoading = ref(true);
const mainContentVisible = ref(false);

const onPreloaderFadeComplete = () => {
    mainContentVisible.value = true;
};

// Set loading to false when your content is ready
setTimeout(() => {
    isLoading.value = false;
}, 2000);

onMounted(() => {
    document.documentElement.classList.add('dark');
    window.scrollTo(0, 0);
    const cursor = document.getElementById('glowing-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});
</script>

<style>
:root {
    --purple-glow: 0 0 80px rgba(168, 85, 247, 0.2);
}

.glass-effect {
    @apply bg-gray-900/40 backdrop-blur-lg border border-gray-700/50;
}

#glowing-cursor {
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(88, 28, 135, 0.8) 0%, rgba(88, 28, 135, 0.4) 50%, transparent 70%);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: 0.1s ease;
    mix-blend-mode: normal;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
    background: #7c3aed;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #6d28d9;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h1 {
        font-size: 2.5rem !important;
    }

    h2 {
        font-size: 2rem !important;
    }

    .grid {
        grid-template-columns: 1fr !important;
    }
}

/* Custom Text Selection */
::selection {
    background-color: rgba(168, 85, 247, 0.3);
    color: #ffffff;
}

::-moz-selection {
    background-color: rgba(168, 85, 247, 0.3);
    color: #ffffff;
}

/* Text Selection Animation */
@keyframes selectionPulse {
    0% {
        background-color: rgba(168, 85, 247, 0.3);
    }

    50% {
        background-color: rgba(168, 85, 247, 0.5);
    }

    100% {
        background-color: rgba(168, 85, 247, 0.3);
    }
}

::selection {
    animation: selectionPulse 2s infinite;
}

::-moz-selection {
    animation: selectionPulse 2s infinite;
}
</style>
