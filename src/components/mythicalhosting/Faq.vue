<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2
                class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Frequently Asked Questions
            </h2>
            <p class="text-lg text-center text-gray-400 mb-4">
                Have a question? Check out our FAQs to find answers to common inquiries. If you can't find what you're
                looking for, feel free to contact our support team.
            </p>
            <br />
            <div class="max-w-3xl mx-auto">
                <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
                    <button
                        @click="toggleFaq(index)"
                        class="flex justify-between items-center w-full text-left glass-effect p-4 rounded-lg focus:outline-none"
                    >
                        <span class="font-semibold">{{ faq.question }}</span>
                        <ChevronDownIcon
                            :class="{ 'transform rotate-180': faq.isOpen }"
                            class="w-5 h-5 transition-transform duration-300"
                        />
                    </button>
                    <transition name="faq">
                        <div v-show="faq.isOpen" class="mt-2 p-4 glass-effect rounded-lg">
                            <p class="text-gray-300">{{ faq.answer }}</p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from 'lucide-vue-next';

const faqs = ref([
    {
        question: 'How quickly can I get my server set up?',
        answer: 'Our automated provisioning system allows for instant activation. In most cases, your server will be ready within minutes of completing your order.',
        isOpen: false,
    },
    {
        question: 'Do you offer DDoS protection?',
        answer: 'Yes, we provide advanced DDoS protection with up to 14 TBPS filtering capacity for all our hosting plans.',
        isOpen: false,
    },
    {
        question: 'Can I upgrade my plan later?',
        answer: 'You can easily upgrade your plan at any time through our control panel. The changes will be applied instantly.',
        isOpen: false,
    },
    {
        question: 'What kind of support do you offer?',
        answer: 'We offer 24/7 expert support via ticket system, live chat, and phone. Our team is always ready to assist you with any technical or account-related issues.',
        isOpen: false,
    },
    {
        question: 'Do you offer a money-back guarantee?',
        answer: "Yes, we offer a 7-day money-back guarantee for all our hosting plans. If you're not satisfied with our service, you can request a full refund within the first week.",
        isOpen: false,
    },
    {
        question: 'Can I host multiple websites on one server?',
        answer: 'Yes, you can host multiple websites on a single server by setting up virtual hosts. Our control panel makes it easy to manage multiple domains and websites from one account.',
    },
    {
        question: 'Can I install custom software on my server?',
        answer: 'Yes, you have full root access to your server, so you can install any software or applications you need. Our support team is available to help you with any installation or configuration tasks.',
    },
]);

const toggleFaq = (index: number) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
    transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
