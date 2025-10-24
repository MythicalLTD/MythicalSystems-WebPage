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
                        Our Impact in Numbers
                    </span>
                </h2>
                <p 
                    class="text-center text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed fade-in-text"
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    See how MythicalSystems is making a difference in the developer community. Revenue is calculated in EUR
                    and updates every year!
                </p>
            </div>

            <!-- Enhanced statistics grid -->
            <div class="grid md:grid-cols-4 gap-8 mb-12">
                <div 
                    v-for="(value, key, index) in stats" 
                    :key="key"
                    class="stat-card group"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 + (index * 150), ease: 'easeOut' } }"
                >
                    <Card class="h-full hover-lift-card">
                        <div class="relative">
                            <!-- Floating icon background -->
                            <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                            
                            <!-- Stat content -->
                            <div class="text-center">
                                <h3 class="text-xl font-semibold text-purple-300 capitalize mb-4 group-hover:text-white transition-colors duration-300">
                                    {{ key }}
                                </h3>
                                <div class="relative">
                                    <p class="text-4xl font-bold text-purple-100 counter-text">
                                        <span class="counter-number" :data-target="key === 'uptime' ? value.toFixed(2) : value">
                                            {{ key === 'uptime' ? value.toFixed(2) + '%' : value.toLocaleString() }}
                                        </span>
                                    </p>
                                    <!-- Animated underline -->
                                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </div>
                            
                            <!-- Hover effect overlay -->
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </Card>
                </div>
            </div>
            <!--<Card>
                <ResourceUsage />
            </Card>-->
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
//import ResourceUsage from './ResourceUsage.vue';
import { stats } from '@/config/Stats';
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

/* Card hover effects */
.hover-lift-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.hover-lift-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 20px 40px -10px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Stat card animations */
.stat-card {
    transition: all 0.3s ease;
}

.stat-card:hover .counter-text {
    transform: scale(1.05);
}

/* Counter animation */
.counter-text {
    transition: all 0.3s ease;
}

.counter-number {
    display: inline-block;
    transition: all 0.3s ease;
}

/* Enhanced card styling */
.stat-card .hover-lift-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.stat-card:hover .hover-lift-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Animated underline */
.stat-card:hover .counter-text::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    animation: underlineExpand 0.5s ease-out;
}

@keyframes underlineExpand {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

/* Pulse animation for numbers */
.stat-card:hover .counter-number {
    animation: numberPulse 0.6s ease-out;
}

@keyframes numberPulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

/* Smooth transitions for all interactive elements */
* {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .hover-lift-card:hover {
        transform: translateY(-4px) scale(1.01);
    }
    
    .stat-card .hover-lift-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
    }
    
    .counter-text {
        font-size: 2rem;
    }
}

/* Additional visual enhancements */
.stat-card .hover-lift-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.stat-card:hover .hover-lift-card::before {
    transform: translateX(100%);
}
</style>
