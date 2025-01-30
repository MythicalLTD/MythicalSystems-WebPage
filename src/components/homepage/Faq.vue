<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-8 animate-fade-in">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </span>
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Find answers to common questions about MythicalSystems and our services.
            </p>
            <div class="max-w-3xl mx-auto">
                <Card
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="mb-4 cursor-pointer hover:bg-purple-800/20 transition-colors duration-300"
                    @click="toggleFaq(index)"
                >
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-semibold text-purple-300">{{ faq.question }}</h3>
                        <ChevronDownIcon
                            :class="{ 'transform rotate-180': faq.isOpen }"
                            class="w-6 h-6 text-purple-400 transition-transform duration-300"
                        />
                    </div>
                    <transition
                        enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0 overflow-hidden"
                        enter-to-class="opacity-100 max-h-[500px] overflow-hidden"
                        leave-active-class="transition-all duration-300 ease-in"
                        leave-from-class="opacity-100 max-h-[500px] overflow-hidden"
                        leave-to-class="opacity-0 max-h-0 overflow-hidden"
                    >
                        <div v-if="faq.isOpen" class="mt-4 text-gray-300">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </transition>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from 'lucide-vue-next';
import Card from '@/components/ui/Card.vue';
import { FaqList } from '@/config/Faq';

const faqs = ref(FaqList);

const toggleFaq = (index: number) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.3s ease,
        max-height 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    max-height: 500px;
}
</style>
