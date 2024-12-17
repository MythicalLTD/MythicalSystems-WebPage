<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="color in colors" :key="color.name" class="text-center">
            <div class="w-full h-20 rounded-lg shadow-lg mb-2" :style="{ backgroundColor: color.hex }"></div>
            <p class="font-semibold text-purple-300">{{ color.name }}</p>
            <p class="text-gray-400">{{ color.hex }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Color {
    name: string;
    hex: string;
}

defineProps<{
    colors: Color[];
}>();
</script>
