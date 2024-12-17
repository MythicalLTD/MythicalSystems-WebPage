<template>
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
        <div
            v-if="isOpen"
            class="fixed inset-0 z-50 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    @click="close"
                ></div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                    class="inline-block align-bottom hover:bg-purple-800/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
                >
                    <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 class="text-2xl leading-6 font-bold text-purple-300" id="modal-title">
                                    {{ title }}
                                </h3>
                                <p v-if="description" class="text-sm text-gray-400 mt-2">
                                    {{ description }}
                                </p>
                                <div class="mt-4 max-h-[70vh] overflow-y-auto pr-4">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button @click="close" variant="secondary"> Close </Button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Button from '@/components/ui/Button.vue';

defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>

<style scoped>
/* Custom scrollbar styles */
.max-h-70vh {
    scrollbar-width: thin;
    scrollbar-color: #4a5568 #2d3748;
}

.max-h-70vh::-webkit-scrollbar {
    width: 8px;
}

.max-h-70vh::-webkit-scrollbar-track {
    background: #2d3748;
}

.max-h-70vh::-webkit-scrollbar-thumb {
    background-color: #4a5568;
    border-radius: 4px;
}
</style>
