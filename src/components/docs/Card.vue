<template>
    <div class="bg-gray-900/40 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800/30 shadow-xl">
        <div class="px-6 py-5">
            <h2 class="text-xl font-semibold text-purple-300 mb-4">{{ title }}</h2>
            <div class="text-gray-300">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>
