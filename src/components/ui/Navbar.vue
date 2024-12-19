<template>
    <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <router-link to="/" class="flex items-center space-x-2">
                        <img src="https://github.com/mythicalltd.png" alt="MythicalSystems Logo" class="w-8 h-8" />
                        <span
                            class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                            >MythicalSystems</span
                        >
                    </router-link>
                </div>
                <div class="hidden md:block">
                    <div class="flex items-center space-x-4">
                        <div
                            v-for="item in navItems"
                            :key="item.name"
                            class="relative"
                            @mouseenter="item.open = true"
                            @mouseleave="item.open = false"
                        >
                            <button
                                class="text-gray-300 hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                            >
                                {{ item.name }}
                                <svg v-if="item.submenu" class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <transition
                                enter-active-class="transition ease-out duration-200"
                                enter-from-class="opacity-0 translate-y-1"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition ease-in duration-150"
                                leave-from-class="opacity-100 translate-y-0"
                                leave-to-class="opacity-0 translate-y-1"
                            >
                                <Card v-if="item.submenu && item.open" class="absolute left-0 mt-2 w-48 py-2">
                                    <component
                                        v-for="subItem in item.submenu"
                                        :key="subItem.name"
                                        :is="(subItem.link ?? '').startsWith('http') ? 'a' : 'router-link'"
                                        :href="(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                        :to="!(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                        class="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-200 rounded-full"
                                    >
                                        {{ subItem.name }}
                                    </component>
                                </Card>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <button @click="toggleMobileMenu" class="text-gray-300 hover:text-white focus:outline-none">
                        <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
                        <XIcon v-else class="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
        >
            <div v-if="mobileMenuOpen" class="md:hidden backdrop-blur-lg">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div v-for="item in navItems" :key="item.name">
                        <button @click="item.open = !item.open" class="text-gray-300 hover:text-white block px-3 py-2 rounded-full text-base font-medium transition-colors duration-300 w-full text-left">
                            {{ item.name }}
                            <svg v-if="item.submenu" class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <transition
                            enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 -translate-y-1"
                            enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0"
                            leave-to-class="opacity-0 -translate-y-1"
                        >
                            <div v-if="item.submenu && item.open" class="pl-4">
                                <component
                                    v-for="subItem in item.submenu"
                                    :key="subItem.name"
                                    :is="(subItem.link ?? '').startsWith('http') ? 'a' : 'router-link'"
                                    :href="(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                    :to="!(subItem.link ?? '').startsWith('http') ? subItem.link : undefined"
                                    class="text-gray-300 hover:text-white block px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-full"
                                >
                                    {{ subItem.name }}
                                </component>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuIcon, XIcon } from 'lucide-vue-next';
import Card from './Card.vue';
import { navItems } from '@/config/Header';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
