<template>
    <component
        :is="href ? 'a' : 'button'"
        :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
            variant === 'primary'
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10',
            'hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30',
            className,
        ]"
        :href="href"
    >
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value: string) => ['primary', 'secondary'].includes(value),
    },
    href: {
        type: String,
        default: '',
    },
    className: {
        type: String,
        default: '',
    },
});
</script>
