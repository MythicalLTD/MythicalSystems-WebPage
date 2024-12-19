<template>
    <aside :class="[
        'fixed top-16 bottom-0 left-0 z-40 w-64 bg-gray-900/40 backdrop-blur-lg border-r border-gray-800/30',
        'transform transition-transform duration-300 ease-in-out',
        'md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
    ]">
        <!-- Sidebar content -->
        <div class="h-full overflow-y-auto">
            <nav class="p-4">
                <div class="mb-6">
                    <h3 class="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
                        Home
                    </h3>
                    <ul class="space-y-2">
                        <li>
                            <router-link to="/"
                                class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                                :class="{ 'bg-purple-500/20 text-white': isActive('/') }" @click="$emit('close')">
                                Main Page
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs"
                                class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                                :class="{ 'bg-purple-500/20 text-white': isActive('/docs') }" @click="$emit('close')">
                                Main Documentation
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-for="section in sections" :key="section.title" class="mb-6">
                    <h3 class="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 cursor-pointer flex items-center justify-between"
                        @click="toggleSection(section.title)">
                        {{ section.title }}
                        <span :class="{ 'rotate-180': isSectionActive(section) }"
                            class="transition-transform duration-300">
                            ▼
                        </span>
                    </h3>
                    <ul v-show="isSectionActive(section)" class="space-y-2">
                        <li v-for="item in section.items" :key="item.title">
                            <router-link :to="item.path"
                                class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                                :class="{ 'bg-purple-500/20 text-white': isActive(item.path) }" @click="$emit('close')">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>

    <!-- Backdrop for mobile -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-30 md:hidden" @click="$emit('close')"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { sections } from '@/pages/docs/Sidebar';

const route = useRoute();

defineProps<{
    isOpen: boolean;
}>();

defineEmits(['close']);

const activeSection = ref<string | null>(null);

const isActive = (path: string) => route.path === path;

const isSectionActive = (section: { title: string; items: { path: string }[] }) => {
    return section.items.some(item => isActive(item.path)) || activeSection.value === section.title;
};

const toggleSection = (title: string) => {
    activeSection.value = activeSection.value === title ? null : title;
};
</script>
