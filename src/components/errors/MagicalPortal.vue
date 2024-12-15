<template>
    <div class="relative w-48 h-48 mx-auto">
        <div
            class="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-full animate-spin-slow"
        ></div>
        <div class="absolute inset-2 bg-[#0a0a0f] rounded-full"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-4xl">✨</span>
        </div>
        <div class="absolute inset-0 flex items-center justify-center animate-ping-slow opacity-50">
            <span class="text-6xl">⚡</span>
        </div>
    </div>
</template>

<style scoped>
@keyframes spin-slow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes ping-slow {
    0% {
        transform: scale(0.2);
        opacity: 0;
    }

    50% {
        transform: scale(1);
        opacity: 0.5;
    }

    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

.animate-spin-slow {
    animation: spin-slow 10s linear infinite;
}

.animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
