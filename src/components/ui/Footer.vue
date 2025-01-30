<template>
    <footer class="relative pt-20 pb-10 overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute inset-0">
            <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px]"></div>
            <div class="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full filter blur-[100px]"></div>
        </div>

        <!-- Main Footer Content -->
        <div class="container mx-auto px-4 relative">
            <!-- Top Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <!-- Brand Section -->
                <div class="space-y-6">
                    <div class="flex items-center space-x-3">
                        <div class="relative group">
                            <img
                                src="https://github.com/mythicalltd.png"
                                alt="MythicalSystems Logo"
                                class="w-12 h-12 rounded-xl"
                            />
                            <div
                                class="absolute inset-0 bg-purple-500/20 rounded-xl filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                        </div>
                        <span
                            class="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent"
                        >
                            MythicalSystems
                        </span>
                    </div>
                    <p class="text-gray-400 leading-relaxed">
                        Empowering developers with magical solutions and innovative tools for a better digital future.
                    </p>
                    <div class="flex space-x-4">
                        <a
                            v-for="social in socials"
                            :key="social.name"
                            :href="social.href"
                            class="p-2 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <component
                                :is="social.icon"
                                class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300"
                            />
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a
                                :href="link.href"
                                class="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <ArrowRight class="w-4 h-4" />
                                <span>{{ link.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Resources -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-6">Resources</h3>
                    <ul class="space-y-3">
                        <li v-for="resource in resources" :key="resource.name">
                            <a
                                :href="resource.href"
                                class="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <ArrowRight class="w-4 h-4" />
                                <span>{{ resource.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                    <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates and announcements.</p>
                    <form @submit.prevent="handleSubscribe" class="space-y-3">
                        <input
                            v-model="email"
                            type="email"
                            placeholder="Enter your email"
                            :disabled="isLoading || isSubscribed"
                            class="w-full px-4 py-2 rounded-xl bg-purple-500/5 border border-purple-500/10 text-gray-300 focus:outline-none focus:border-purple-500/30 transition-colors duration-300 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            :disabled="isLoading || isSubscribed"
                            class="w-full px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                            :class="[
                                isSubscribed
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400',
                            ]"
                        >
                            <template v-if="isLoading">
                                <Loader2 class="w-4 h-4 animate-spin" />
                                <span>Subscribing...</span>
                            </template>
                            <template v-else-if="isSubscribed">
                                <Check class="w-4 h-4" />
                                <span>Subscribed!</span>
                            </template>
                            <template v-else>
                                <Send class="w-4 h-4" />
                                <span>Subscribe</span>
                            </template>
                        </button>
                    </form>

                    <!-- Success Animation -->
                    <transition
                        enter-active-class="transition-all duration-300"
                        enter-from-class="opacity-0 translate-y-2"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition-all duration-200"
                        leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 translate-y-2"
                    >
                        <div v-if="showSuccess" class="mt-3 text-sm text-green-400 flex items-center space-x-2">
                            <CheckCircle2 class="w-4 h-4" />
                            <span>Thank you for subscribing!</span>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

            <!-- Bottom Section -->
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="text-sm text-gray-400">
                    &copy; {{ new Date().getFullYear() }} MythicalSystems LTD. All rights reserved.
                </div>
                <div class="flex space-x-6">
                    <a
                        v-for="link in legalLinks"
                        :key="link.name"
                        :href="link.href"
                        class="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Github, Twitter, ChartArea as Discord, ArrowRight, Send, Loader2, Check, CheckCircle2 } from 'lucide-vue-next';
import { ref } from 'vue';

const socials = [
    { name: 'GitHub', href: 'https://github.com/mythicalltd', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/nayskutzu', icon: Twitter },
    { name: 'Discord', href: 'https://discord.mythical.systems', icon: Discord },
];

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Documentation', href: '/docs' },
];

const resources = [
    { name: 'Support', href: 'https://discord.mythical.systems' },
    { name: 'Status', href: 'https://status.mythical.systems' },
    { name: 'Contact', href: 'mailto:contact@mythical.systems' },
];

const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Branding', href: '/branding' },
];

const email = ref('');
const isLoading = ref(false);
const isSubscribed = ref(false);
const showSuccess = ref(false);

const handleSubscribe = async () => {
    if (!email.value) return;

    isLoading.value = true;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    isLoading.value = false;
    isSubscribed.value = true;
    showSuccess.value = true;

    // Reset after some time
    setTimeout(() => {
        email.value = '';
        isSubscribed.value = false;
        showSuccess.value = false;
    }, 5000);
};
</script>
