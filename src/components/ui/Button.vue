<template>
    <component
        :is="linkComponent"
        :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
            variant === 'primary'
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10',
            'hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30',
            className,
        ]"
        :href="isExternal ? href : null"
        :to="!isExternal ? href : null"
    >
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
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

const isExternal = computed(() => {
    return props.href.startsWith('http') || props.href.startsWith('https');
});

const linkComponent = computed(() => {
    if (props.href === '/' || isExternal.value) {
        return 'a';
    } else {
        return 'router-link';
    }
});
</script>
