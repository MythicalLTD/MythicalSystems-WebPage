<template>
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div class="container mx-auto px-4 text-center z-10">
            <div class="max-w-4xl mx-auto space-y-8">
                <h1
                    class="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                >
                    MythicalSystems LTD
                </h1>

                <p
                    class="text-xl text-gray-300"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    Welcome to the enchanting realm where magic begins! Since our inception in 2021, we have garnered
                    the trust of over 12 million users and continue to captivate their imaginations with our innovative
                    solutions and magical experiences.
                </p>

                <div
                    class="flex flex-wrap justify-center gap-4"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, ease: 'easeOut' } }"
                >
                    <Button href="/docs" variant="primary"> Documentation </Button>
                    <Button :href="Config.discord_invite" variant="secondary"> Join Discord </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { Config } from '@/config/Global';
</script>
