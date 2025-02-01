<template>
    <section class="py-20 relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute inset-0">
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px]"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full filter blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-4 relative">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-6">
                    <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                        Our Mythical Team
                    </span>
                </h2>
                <p class="text-gray-300 max-w-2xl mx-auto text-lg">
                    Meet the wizards behind MythicalSystems who make the magic happen.
                    Disclaimer: Not all employees want their identity to be public. So we removed their faces and social media links.
                </p>
            </div>

            <!-- Carousel Container -->
            <div class="relative">
                <!-- Navigation Buttons -->
                <button
                    @click="prevSlide"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300"
                    :class="{ 'opacity-0 pointer-events-none': currentSlide === 0 }"
                >
                    <ChevronLeft class="w-6 h-6 text-purple-400" />
                </button>

                <button
                    @click="nextSlide"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300"
                    :class="{ 'opacity-0 pointer-events-none': currentSlide >= maxSlide }"
                >
                    <ChevronRight class="w-6 h-6 text-purple-400" />
                </button>

                <!-- Team Grid with Carousel -->
                <div class="overflow-hidden">
                    <div
                        class="flex transition-transform duration-500 ease-out"
                        :style="{ transform: `translateX(-${currentSlide * slidePercentage}%)` }"
                    >
                        <div
                            v-for="member in team"
                            :key="member.name"
                            class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                        >
                            <!-- Team Member Card -->
                            <div class="group relative">
                                <!-- Card Background with Hover Effect -->
                                <div class="absolute inset-0 bg-purple-500/5 rounded-2xl transition-all duration-300 group-hover:bg-purple-500/10"></div>

                                <!-- Card Content -->
                                <div class="relative p-6 rounded-2xl backdrop-blur-sm border border-purple-500/10">
                                    <!-- Avatar with Glow Effect -->
                                    <div class="relative w-32 h-32 mx-auto mb-6">
                                        <div class="absolute inset-0 bg-purple-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <img
                                            :src="member.avatar"
                                            :alt="member.name"
                                            class="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    <!-- Member Info -->
                                    <div class="text-center">
                                        <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                                            {{ member.name }}
                                        </h3>
                                        <div class="text-purple-400 font-medium mb-4">{{ member.role }}</div>
                                        <p class="text-gray-400 mb-6">{{ member.description }}</p>

                                        <!-- Social Links -->
                                        <div class="flex justify-center space-x-4">
                                            <a
                                                v-for="social in member.socials"
                                                :key="social.platform"
                                                :href="social.url"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="p-2 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 group"
                                            >
                                                <component
                                                    :is="social.icon"
                                                    class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Carousel Indicators -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button
                        v-for="(_, index) in slideCount"
                        :key="index"
                        @click="goToSlide(index)"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="[
                            currentSlide === index
                                ? 'bg-purple-400 w-4'
                                : 'bg-purple-400/30 hover:bg-purple-400/50'
                        ]"
                    />
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
        avatar: 'https://github.com/CassianGherman.png',
        socials: [
            { platform: 'GitHub', url: 'https://github.com/nayskutzu', icon: Github },
            { platform: 'Twitter', url: 'https://twitter.com/nayskutzu', icon: Twitter }
        ]
    },
    {
        name: 'Nyxalis',
        role: 'Owner & Lead Developer',
        description: 'Specializing in creating innovative solutions and leading the team towards excellence.',
        avatar: 'https://github.com/Nyxalis.png',
        socials: [
            { platform: 'GitHub', url: 'https://github.com/Nyxalis', icon: Github },
            { platform: 'Email', url: 'mailto:nyxalis@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Helen K Worley',
        role: 'Accounting & Finance',
        description: 'Specializing in accounting and finance, ensuring accurate financial records and compliance.',
        avatar: 'https://github.com/HelenKWorley.png',
        socials: [
            { platform: 'GitHub', url: 'https://github.com/HelenKWorley', icon: Github },
            { platform: 'Email', url: 'mailto:helen@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Alexia Urso',
        role: 'Marketing & Sales',
        description: 'Specializing in marketing and sales, ensuring accurate financial records and compliance.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:alexia@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Markus Edison',
        role: 'Security Engineer',
        description: 'Specializing in security engineering, ensuring accurate financial records and compliance.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:markus@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Sophia Chen',
        role: 'Frontend Architect',
        description: 'Expert in creating seamless user experiences and modern web interfaces.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:sophia@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Marcus Rodriguez',
        role: 'Cloud Infrastructure Engineer',
        description: 'Specializing in scalable cloud solutions and infrastructure automation.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:marcus@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Emma Thompson',
        role: 'Full Stack Developer',
        description: 'Dedicated to understanding user needs and improving product experiences.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:emma@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Alexander Wright',
        role: 'Backend Developer',
        description: 'Building robust and scalable server-side solutions.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:alex@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Isabella Martinez',
        role: 'Product Manager',
        description: 'Driving product vision and coordinating development efforts.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:isabella@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Lucas Kim',
        role: 'System Administrator',
        description: 'Streamlining deployment processes and maintaining infrastructure.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:lucas@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Olivia Parker',
        role: 'Full Stack Developer',
        description: 'Ensuring product quality and implementing testing strategies.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:olivia@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'James Wilson',
        role: 'Security Engineer',
        description: 'Protecting systems and implementing security measures.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:james@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Victoria Kumar',
        role: 'Project Manager',
        description: 'Coordinating teams and ensuring project success.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:victoria@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Oscar Nguyen',
        role: 'Full Stack Developer',
        description: 'Creating engaging and innovative solutions.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:oscar@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Lily Brooks',
        role: 'Full Stack Developer',
        description: 'Developing and implementing content strategies.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:lily@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Max Powell',
        role: 'Security Engineer',
        description: 'Specializing in security engineering, ensuring accurate financial records and compliance.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:max@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Elena Santos',
        role: 'Full Stack Developer',
        description: 'Developing machine learning models and solutions.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:elena@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Xavier Reed',
        role: 'Full Stack Developer',
        description: 'Building robust and scalable APIs.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:xavier@mythical.systems', icon: Mail }
        ]
    },
    {
        name: 'Aria Cooper',
        role: 'Frontend Designer',
        description: 'Creating intuitive and engaging user experiences.',
        avatar: 'https://github.com/mythicalltd.png',
        socials: [
            { platform: 'Email', url: 'mailto:aria@mythical.systems', icon: Mail }
        ]
    }
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
/* Optional: Add smooth scrolling for the entire section */
.scroll-smooth {
    scroll-behavior: smooth;
}
</style>
