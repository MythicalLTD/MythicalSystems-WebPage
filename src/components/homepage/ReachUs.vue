<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-8 animate-fade-in">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                    Reach Us
                </span>
            </h2>
            <p class="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                Connect with us on social media, join our community, or send us an email for inquiries.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="contact in contacts" :key="contact.platform">
                    <div class="flex flex-col items-center text-center">
                        <component :is="contact.icon" class="w-12 h-12 text-purple-400 mb-4" />
                        <h3 class="text-xl font-semibold text-purple-300 mb-2">{{ contact.platform }}</h3>
                        <p class="text-gray-400 mb-4">{{ contact.description }}</p>
                        <Button :href="contact.link" variant="secondary" target="_blank" rel="noopener noreferrer">
                            {{ contact.buttonText }}
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import Button from '@/components/ui/Button.vue';
import { contacts } from '@/config/Contact';
</script>
