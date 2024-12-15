<template>
    <div
        :class="[
            'glass-effect p-6 rounded-lg transform transition-all duration-300',
            'hover:bg-purple-800/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105',
            className,
        ]"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    className: {
        type: String,
        default: '',
    },
});
</script>
