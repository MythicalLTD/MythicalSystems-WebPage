<template>
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
        <div v-for="i in 3" :key="i" class="nebula"></div>
        <div v-for="i in 100" :key="`star-${i}`" class="star"></div>
        <div v-for="i in 20" :key="`comet-${i}`" class="comet"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const nebulas = document.querySelectorAll('.nebula');
    const stars = document.querySelectorAll('.star');
    const comets = document.querySelectorAll('.comet');

    nebulas.forEach((nebula, index) => {
        (nebula as HTMLElement).style.top = `${Math.random() * 100}%`;
        (nebula as HTMLElement).style.left = `${Math.random() * 100}%`;
        (nebula as HTMLElement).style.animationDelay = `${index * 10}s`;
    });

    stars.forEach((star) => {
        (star as HTMLElement).style.top = `${Math.random() * 100}%`;
        (star as HTMLElement).style.left = `${Math.random() * 100}%`;
        (star as HTMLElement).style.animationDuration = `${Math.random() * 3 + 2}s`;
        (star as HTMLElement).style.animationDelay = `${Math.random() * 3}s`;
    });

    comets.forEach((comet) => {
        (comet as HTMLElement).style.top = `${Math.random() * 100}%`;
        (comet as HTMLElement).style.left = `${Math.random() * 100}%`;
        (comet as HTMLElement).style.animationDuration = `${Math.random() * 10 + 10}s`;
        (comet as HTMLElement).style.animationDelay = `${Math.random() * 20}s`;
    });
});
</script>

<style scoped>
.nebula {
    @apply absolute w-96 h-96 rounded-full opacity-20 blur-3xl;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.2) 70%, transparent 100%);
    animation: float 20s ease-in-out infinite;
}

.star {
    @apply absolute w-1 h-1 bg-white rounded-full;
    animation: twinkle 3s infinite;
}

.comet {
    @apply absolute w-1 h-1 bg-white rounded-full;
    box-shadow: 0 0 20px 2px white;
    animation: comet 20s linear infinite;
}

@keyframes float {
    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(50px, 50px);
    }
}

@keyframes twinkle {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.5);
    }
}

@keyframes comet {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        transform: translateX(1000px) translateY(1000px);
        opacity: 0;
    }
}
</style>
