<template>
    <Teleport to="body">
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <Card v-if="isVisible" :style="{ top: `${y}px`, left: `${x}px` }" class="fixed z-50 w-56 py-1">
                <div class="px-1 py-1">
                    <button
                        v-for="item in menuItems"
                        :key="item.label"
                        @click="handleItemClick(item.action)"
                        class="w-full text-left px-2 py-2 text-sm text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-200 rounded-md"
                    >
                        <component :is="item.icon" class="inline-block w-4 h-4 mr-2" />
                        {{ item.label }}
                    </button>
                </div>
            </Card>
        </transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Card from './Card.vue';
import { Copy, ArrowLeftRight, Printer } from 'lucide-vue-next';

const isVisible = ref(false);
const x = ref(0);
const y = ref(0);

const menuItems = [
    { label: 'Copy', icon: Copy, action: () => document.execCommand('copy') },
    { label: 'Print', icon: Printer, action: () => window.print() },
    { label: 'Reload', icon: ArrowLeftRight, action: () => window.location.reload() },
];

const show = (event: MouseEvent) => {
    event.preventDefault();
    isVisible.value = true;
    x.value = event.clientX;
    y.value = event.clientY;
    document.addEventListener('scroll', hide);
};

const hide = () => {
    isVisible.value = false;
};

const handleItemClick = (action: () => void) => {
    action();
    hide();
};

onMounted(() => {
    document.addEventListener('contextmenu', show);
    document.addEventListener('click', hide);
});

onUnmounted(() => {
    document.removeEventListener('contextmenu', show);
    document.removeEventListener('click', hide);
});
</script>
