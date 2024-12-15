<template>
    <div class="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
        <Card class="w-full max-w-6xl text-center p-8">
            <div class="space-y-6">
                <h1
                    class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
                >
                    404
                </h1>
                <h2 class="text-3xl md:text-4xl font-semibold text-purple-300">
                    Oops! The page has vanished into thin air.
                </h2>
                <p class="text-xl text-gray-400">
                    It seems you've stumbled upon a magical portal that leads nowhere. Don't worry, even the best
                    wizards get lost sometimes!
                </p>
                <div class="flex justify-center space-x-4">
                    <Button @click="goBack" variant="secondary"> Go Back </Button>
                    <Button @click="goHome" variant="primary"> Return Home </Button>
                </div>
                <div class="mt-8">
                    <MagicalPortal />
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Card from '@/components/ui/Card.vue';
import Button from '@/components/ui/Button.vue';
import MagicalPortal from '@/components/errors/MagicalPortal.vue';

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const goHome = () => {
    router.push('/');
};
</script>
