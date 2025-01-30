<template>
    <div class="preloader-container" :class="{ 'fade-out': !loading }">
        <div class="mythical-loader">
            <div class="mythical-core"></div>
            <div class="mythical-ring outer"></div>
            <div class="mythical-ring inner"></div>
            <div class="mythical-particles"></div>
        </div>
        <div class="loading-text">Entering the Mythical Realm...</div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    loading: {
        type: Boolean,
        default: true,
    },
});
</script>

<style scoped>
.preloader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
    transition:
        opacity 0.5s ease-out,
        visibility 0.5s ease-out;
}

.preloader-container.fade-out {
    opacity: 0;
    visibility: hidden;
}

.mythical-loader {
    position: relative;
    width: 120px;
    height: 120px;
}

.mythical-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: #a855f7;
    border-radius: 50%;
    box-shadow:
        0 0 20px #a855f7,
        0 0 40px #a855f7,
        0 0 60px #8b5cf6;
    animation: pulse 2s infinite;
}

.mythical-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #a855f7;
    border-bottom-color: #8b5cf6;
}

.mythical-ring.outer {
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
    animation: spin 3s linear infinite;
}

.mythical-ring.inner {
    width: 60px;
    height: 60px;
    margin-left: -30px;
    margin-top: -30px;
    animation: spin 2s linear infinite reverse;
}

.mythical-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.mythical-particles::before,
.mythical-particles::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #a855f7;
    border-radius: 50%;
    box-shadow: 0 0 10px #8b5cf6;
    animation: particles 2s infinite;
}

.mythical-particles::after {
    animation-delay: -1s;
}

.loading-text {
    margin-top: 2rem;
    background: linear-gradient(to right, #a855f7, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    animation: glow 2s infinite;
}

@keyframes pulse {
    0%,
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.8;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes particles {
    0% {
        transform: rotate(0deg) translateX(35px);
        opacity: 1;
    }
    100% {
        transform: rotate(360deg) translateX(35px);
        opacity: 0;
    }
}

@keyframes glow {
    0%,
    100% {
        opacity: 0.8;
        text-shadow: 0 0 10px #a855f7;
    }
    50% {
        opacity: 1;
        text-shadow:
            0 0 20px #a855f7,
            0 0 30px #8b5cf6;
    }
}
</style>
