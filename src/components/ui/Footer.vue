<template>
    <footer class="py-8 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-2 mb-4 md:mb-0">
                    <SparklesIcon class="w-6 h-6 text-purple-500" />
                    <span
                        class="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                    >
                        MythicalSystems
                    </span>
                </div>
                <nav class="flex flex-wrap justify-center gap-4">
                    <a
                        v-for="link in links"
                        :key="link.name"
                        :href="link.href"
                        class="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                        {{ link.name }}
                    </a>
                </nav>
            </div>
            <div class="mt-4 text-center text-sm text-gray-500">
                &copy; {{ new Date().getFullYear() }} MythicalSystems LTD. All rights reserved.
            </div>
        </div>
        <div
            class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
        ></div>
    </footer>
</template>

<script setup lang="ts">
import { SparklesIcon } from 'lucide-vue-next';
import { links } from '@/config/Footer';
</script>
