<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Frequently Asked Questions
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Find answers to common questions about MythicalSystems and our services.
            </p>
            <div class="max-w-3xl mx-auto">
                <Card v-for="(faq, index) in faqs" :key="index" class="mb-4">
                    <div @click="toggleFaq(index)" class="flex justify-between items-center cursor-pointer">
                        <h3 class="text-xl font-semibold text-purple-300">{{ faq.question }}</h3>
                        <ChevronDownIcon
                            :class="{ 'transform rotate-180': faq.isOpen }"
                            class="w-6 h-6 text-purple-400 transition-transform duration-300"
                        />
                    </div>
                    <div v-show="faq.isOpen" class="mt-4 text-gray-300">
                        <p>{{ faq.answer }}</p>
                    </div>
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
