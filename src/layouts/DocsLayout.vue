<template>
    <div class="min-h-screen bg-[#0a0a0f]">
        <DocsNavbar @toggleSidebar="toggleSidebar" />
        <DocsSidebar :isOpen="isSidebarOpen" @close="closeSidebar" />

        <!-- Main content -->
        <main class="pt-16">
            <slot></slot>
        </main>

        <DocsFooter />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocsNavbar from '@/components/docs/DocsNavbar.vue';
import DocsSidebar from '@/components/docs/DocsSidebar.vue';
import DocsFooter from '@/components/docs/DocsFooter.vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};
</script>
