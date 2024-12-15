<template>
    <div class="min-h-screen bg-[#0a0a0f] py-20 px-4">
        <div class="container mx-auto max-w-4xl">
            <h1
                class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Terms & Conditions
            </h1>
            <Card class="p-8">
                <div class="space-y-6 text-gray-300">
                    <div v-html="terms"></div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import { terms } from '@/config/Terms'

</script>