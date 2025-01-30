<template>
    <nav class="fixed top-0 left-0 w-full z-50">
        <!-- Navbar Background with Blur and Gradient -->
        <div class="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-[#0a0a0f]/80 to-transparent"></div>

        <!-- Main Navbar Content -->
        <div class="container mx-auto px-4 relative">
            <div class="flex items-center justify-between h-20">
                <!-- Logo Section -->
                <router-link to="/" class="flex items-center space-x-3 group">
                    <div class="relative">
                        <img
                            src="https://github.com/mythicalltd.png"
                            alt="MythicalSystems Logo"
                            class="w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
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
                </router-link>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-1">
                    <div
                        v-for="item in navItems"
                        :key="item.name"
                        class="relative group"
                        @mouseenter="item.open = true"
                        @mouseleave="item.open = false"
                    >
                        <button
                            class="px-4 py-2 rounded-xl text-gray-300 hover:text-white relative overflow-hidden group"
                        >
                            <span class="relative z-10 flex items-center space-x-1">
                                {{ item.name }}
                                <ChevronDown
                                    v-if="item.submenu"
                                    class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                />
                            </span>
                            <div
                                class="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                        </button>

                        <!-- Dropdown Menu -->
                        <transition
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <div
                                v-if="item.submenu && item.open"
                                class="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden"
                            >
                                <div class="relative">
                                    <!-- Dropdown Background -->
                                    <div
                                        class="absolute inset-0 backdrop-blur-xl bg-[#0a0a0f]/90 border border-purple-500/20"
                                    ></div>

                                    <!-- Dropdown Items -->
                                    <div class="relative py-2">
                                        <component
                                            v-for="subItem in item.submenu"
                                            :key="subItem.name"
                                            :is="(subItem.link ?? '').startsWith('http') ? 'a' : 'router-link'"
                                            :href="(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                            :to="!(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                            class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors duration-200"
                                        >
                                            {{ subItem.name }}
                                        </component>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMobileMenu" class="md:hidden relative group p-2 rounded-xl">
                    <div
                        class="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                    <Menu v-if="!mobileMenuOpen" class="w-6 h-6 text-gray-300 relative z-10" />
                    <X v-else class="w-6 h-6 text-gray-300 relative z-10" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-10"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-10"
        >
            <div v-if="mobileMenuOpen" class="md:hidden">
                <div class="relative">
                    <!-- Mobile Menu Background -->
                    <div class="absolute inset-0 backdrop-blur-xl bg-[#0a0a0f]/95"></div>

                    <!-- Mobile Menu Items -->
                    <div class="relative px-4 pt-2 pb-4 space-y-1">
                        <div v-for="item in navItems" :key="item.name" class="space-y-2">
                            <button
                                @click="item.open = !item.open"
                                class="w-full px-4 py-2 rounded-xl text-gray-300 hover:text-white flex items-center justify-between group"
                            >
                                <span>{{ item.name }}</span>
                                <ChevronDown
                                    v-if="item.submenu"
                                    class="w-4 h-4 transition-transform duration-300"
                                    :class="{ 'rotate-180': item.open }"
                                />
                            </button>

                            <transition
                                enter-active-class="transition-all duration-300 ease-out"
                                enter-from-class="opacity-0 max-h-0"
                                enter-to-class="opacity-100 max-h-[400px]"
                                leave-active-class="transition-all duration-200 ease-in"
                                leave-from-class="opacity-100 max-h-[400px]"
                                leave-to-class="opacity-0 max-h-0"
                            >
                                <div v-if="item.submenu && item.open" class="overflow-hidden">
                                    <component
                                        v-for="subItem in item.submenu"
                                        :key="subItem.name"
                                        :is="(subItem.link ?? '').startsWith('http') ? 'a' : 'router-link'"
                                        :href="(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                        :to="!(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                        class="block pl-8 pr-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-colors duration-200"
                                    >
                                        {{ subItem.name }}
                                    </component>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X, ChevronDown } from 'lucide-vue-next';
import { navItems } from '@/config/Header';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
/* Prevent layout shift during transitions */
.transition-all {
    backface-visibility: hidden;
    transform: translateZ(0);
}
</style>
