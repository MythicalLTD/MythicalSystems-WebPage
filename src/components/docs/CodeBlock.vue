<template>
    <div class="relative group">
        <div class="bg-gray-900/50 rounded-t-lg px-4 py-2 flex justify-between items-center border-b border-gray-700">
            <span class="text-sm text-gray-400">{{ language }}</span>
            <button
                @click="copyToClipboard"
                class="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                :class="{ 'text-green-400': copied }"
            >
                <Copy v-if="!copied" class="w-4 h-4" />
                <Check v-else class="w-4 h-4" />
            </button>
        </div>
        <pre
            class="m-0 p-4 bg-gray-900/50 rounded-b-lg overflow-x-auto"
        ><code class="text-gray-200 text-sm font-mono">{{ code }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Copy, Check } from 'lucide-vue-next';

const props = defineProps<{
    code: string;
    language?: string;
}>();

const copied = ref(false);

const copyToClipboard = async () => {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
};
</script>
