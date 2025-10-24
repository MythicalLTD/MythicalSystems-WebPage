<template>
    <section class="py-20 relative overflow-hidden">
        <!-- Enhanced Background Effects -->
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
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px] animate-pulse"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full filter blur-[100px] animate-pulse" style="animation-delay: 2s;"></div>
            <div class="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Enhanced Section Header -->
            <div class="text-center mb-16">
                <h2 
                    class="text-5xl md:text-6xl font-bold mb-6 shimmer-title"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                >
                    <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                        Our Mythical Team
                    </span>
                </h2>
                <p 
                    class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed fade-in-text"
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    Meet the wizards behind MythicalSystems who make the magic happen.
                    Disclaimer: Not all employees want their identity to be public. So we removed their faces and social media links.
                </p>
            </div>

            <!-- Enhanced Carousel Container -->
            <div 
                class="relative"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, ease: 'easeOut' } }"
            >
                <!-- Enhanced Navigation Buttons -->
                <button
                    @click="prevSlide"
                    class="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 group"
                    :class="{ 'opacity-0 pointer-events-none': currentSlide === 0 }"
                >
                    <div class="nav-button-inner">
                        <ChevronLeft class="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                </button>

                <button
                    @click="nextSlide"
                    class="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 group"
                    :class="{ 'opacity-0 pointer-events-none': currentSlide >= maxSlide }"
                >
                    <div class="nav-button-inner">
                        <ChevronRight class="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                </button>

                <!-- Enhanced Team Grid with Carousel -->
                <div class="overflow-hidden rounded-2xl">
                    <div
                        class="flex transition-transform duration-700 ease-out"
                        :style="{ transform: `translateX(-${currentSlide * slidePercentage}%)` }"
                    >
                        <div
                            v-for="(member, index) in team"
                            :key="member.name"
                            class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                        >
                            <!-- Enhanced Team Member Card -->
                            <div 
                                class="team-card group relative"
                                v-motion
                                :initial="{ opacity: 0, y: 50 }"
                                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 + (index * 200), ease: 'easeOut' } }"
                            >
                                <!-- Enhanced Card Background -->
                                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl transition-all duration-500 group-hover:from-purple-500/10 group-hover:to-violet-500/10"></div>

                                <!-- Enhanced Card Content -->
                                <div class="relative p-8 rounded-2xl backdrop-blur-sm border border-purple-500/10 group-hover:border-purple-500/20 transition-all duration-500">
                                    <!-- Enhanced Avatar with Glow Effect -->
                                    <div class="relative w-36 h-36 mx-auto mb-6">
                                        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-500"></div>
                                        <img
                                            :src="member.avatar"
                                            :alt="member.name"
                                            class="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110 relative z-10"
                                        />
                                    </div>

                                    <!-- Enhanced Member Info -->
                                    <div class="text-center">
                                        <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-3 group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                                            {{ member.name }}
                                        </h3>
                                        <div class="text-purple-400 font-medium mb-4 group-hover:text-pink-400 transition-colors duration-300">{{ member.role }}</div>
                                        <p class="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{{ member.description }}</p>

                                        <!-- Enhanced Social Links -->
                                        <div class="flex justify-center space-x-4">
                                            <a
                                                v-for="social in member.socials"
                                                :key="social.platform"
                                                :href="social.url"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="social-link p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/social"
                                            >
                                                <component
                                                    :is="social.icon"
                                                    class="w-5 h-5 text-gray-400 group-hover/social:text-purple-400 group-hover/social:scale-110 transition-all duration-300"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <!-- Hover effect overlay -->
                                    <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Carousel Indicators -->
                <div class="flex justify-center mt-8 space-x-3">
                    <button
                        v-for="(_, index) in slideCount"
                        :key="index"
                        @click="goToSlide(index)"
                        class="dot-button relative group"
                        :class="currentSlide === index ? 'active' : ''"
                    >
                        <div class="dot-inner"></div>
                        <div class="dot-pulse"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Github, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-vue-next';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    avatar: string;
    socials: {
        platform: string;
        url: string;
        icon: unknown;
    }[];
}

const team: TeamMember[] = [
    {
        name: 'NaysKutzu',
        role: 'Founder & Lead Developer',
        description: 'Passionate about creating innovative solutions and leading the team towards excellence.',
        avatar: 'https://mc-heads.net/avatar/NaysKutzu',
        socials: [
            { platform: 'GitHub', url: 'https://github.com/nayskutzu', icon: Github },
            { platform: 'Twitter', url: 'https://twitter.com/nayskutzu', icon: Twitter }
        ]
    },
    {
      name: "Maria",
      role: "Founder & Ceo",
      description: "Passionate about creating innovative solutions and leading the team towards excellence.",
      avatar: "https://mc-heads.net/avatar/Maria_Int",
      socials: [
        {
          platform: "Email", url: "mailto:maria@mythical.systems", icon: Mail}
        ]
    },
    {
        name: 'Nyxalis',
        role: 'Owner & Lead Developer',
        description: 'Specializing in creating innovative solutions and leading the team towards excellence.',
        avatar: 'https://mc-heads.net/avatar/Nyxalis',
        socials: [
            { platform: 'GitHub', url: 'https://github.com/Nyxalis', icon: Github },
            { platform: 'Email', url: 'mailto:nyxalis@mythical.systems', icon: Mail }
        ]
    },
];

const currentSlide = ref(0);
const windowWidth = ref(window.innerWidth);

// Compute number of slides based on screen size
const slideCount = computed(() => {
    if (windowWidth.value >= 1024) { // lg breakpoint
        return Math.ceil(team.length / 3);
    } else if (windowWidth.value >= 768) { // md breakpoint
        return Math.ceil(team.length / 2);
    }
    return team.length;
});

const maxSlide = computed(() => slideCount.value - 1);

const slidePercentage = computed(() => {
    if (windowWidth.value >= 1024) return 33.333;
    if (windowWidth.value >= 768) return 50;
    return 100;
});

// Navigation methods
const nextSlide = () => {
    if (currentSlide.value < maxSlide.value) {
        currentSlide.value++;
    }
};

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--;
    }
};

const goToSlide = (index: number) => {
    currentSlide.value = index;
};

// Window resize handler
const handleResize = () => {
    windowWidth.value = window.innerWidth;
    currentSlide.value = 0; // Reset position when screen size changes
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
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

/* Enhanced navigation buttons */
.nav-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button-inner {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.nav-button:hover .nav-button-inner {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

/* Team card animations */
.team-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-card:hover {
    transform: translateY(-8px) scale(1.02);
}

/* Social link animations */
.social-link {
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px -5px rgba(139, 92, 246, 0.3);
}

/* Enhanced dots navigation */
.dot-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.dot-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.3);
    transition: all 0.3s ease;
}

.dot-button.active .dot-inner {
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    transform: scale(1.5);
}

.dot-button:hover .dot-inner {
    background: rgba(139, 92, 246, 0.6);
    transform: scale(1.2);
}

.dot-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.2);
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
}

.dot-button.active .dot-pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
}

/* Smooth transitions for all interactive elements */
* {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .nav-button-inner {
        width: 40px;
        height: 40px;
    }
    
    .team-card:hover {
        transform: translateY(-4px) scale(1.01);
    }
    
    .nav-button:hover .nav-button-inner {
        transform: scale(1.05);
    }
}

/* Optional: Add smooth scrolling for the entire section */
.scroll-smooth {
    scroll-behavior: smooth;
}
</style>
