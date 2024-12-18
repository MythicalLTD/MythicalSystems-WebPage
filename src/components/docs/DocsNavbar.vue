<template>
    <nav class="fixed top-0 right-0 left-0 z-50 bg-gray-900/40 backdrop-blur-lg border-b border-gray-800/30">
        <div class="h-16 px-4 flex items-center justify-between md:justify-start md:pl-64">
            <!-- Mobile menu button -->
            <button
                @click="$emit('toggleSidebar')"
                class="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
                <Menu class="h-6 w-6" />
            </button>

            <!-- Logo and title - hidden on mobile when menu is closed -->
            <div class="flex items-center gap-3 md:ml-4">
                <img src="https://github.com/mythicalltd.png" alt="MythicalSystems Logo" class="w-8 h-8" />
                <span class="text-xl font-semibold text-white">MythicalSystems</span>
            </div>

            <!-- Return to main site button -->
            <router-link
                to="/"
                class="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
                <ArrowLeft class="w-4 h-4" />
                <span>Return to Main Site</span>
            </router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Menu, ArrowLeft } from 'lucide-vue-next';

defineEmits(['toggleSidebar']);
</script>
