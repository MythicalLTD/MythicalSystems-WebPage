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
                        Why us?
                    </span>
                </h2>
                <p 
                    class="text-center text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed fade-in-text"
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    MythicalSystems takes great pride in offering a wide range of projects that are completely free for the
                    entire community to enjoy. Discover the magic of our cutting-edge solutions and join a thriving
                    ecosystem of developers and creators.
                </p>
            </div>

            <!-- Enhanced cards grid -->
            <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div 
                    v-for="(feature, index) in features" 
                    :key="index"
                    class="feature-card group"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 + (index * 150), ease: 'easeOut' } }"
                >
                    <Card class="h-full hover-lift-card">
                        <div class="relative">
                            <!-- Floating icon background -->
                            <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                            
                            <div class="flex items-center mb-6">
                                <div class="relative">
                                    <component 
                                        :is="feature.icon" 
                                        class="w-10 h-10 text-purple-400 mr-4 icon-bounce group-hover:text-pink-400 transition-colors duration-300" 
                                    />
                                    <div class="absolute inset-0 w-10 h-10 bg-purple-400/20 rounded-full blur-md group-hover:bg-pink-400/20 transition-colors duration-300"></div>
                                </div>
                                <h3 class="text-xl font-semibold text-purple-300 group-hover:text-white transition-colors duration-300">
                                    {{ feature.title }}
                                </h3>
                            </div>
                            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                {{ feature.description }}
                            </p>
                            
                            <!-- Hover effect overlay -->
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import { features } from '@/config/WhyUs';
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

/* Icon bounce animation */
.icon-bounce {
    animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-4px);
    }
}

/* Feature card animations */
.feature-card {
    transition: all 0.3s ease;
}

.feature-card:hover .icon-bounce {
    animation-duration: 0.6s;
}

/* Enhanced card styling */
.feature-card .hover-lift-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.feature-card:hover .hover-lift-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Particle animations */
@keyframes floatParticle {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .hover-lift-card:hover {
        transform: translateY(-4px) scale(1.01);
    }
    
    .feature-card .hover-lift-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
    }
}

/* Smooth transitions for all interactive elements */
* {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
</style>
