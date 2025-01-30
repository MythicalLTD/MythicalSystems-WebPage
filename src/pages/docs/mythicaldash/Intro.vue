<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <Card title="Introduction">
                    <h1 class="text-3xl font-bold mb-4">MythicalDash Introduction</h1>
                    <p>
                        MythicalDash is a client area control dashboard that allows users to view and manage their
                        resources for their servers. They can create as many servers as they are given, with
                        customizable RAM, Disk, CPU limits and controls. The client area uses Pterodactyl as the game
                        panel and utilizes its API to create the servers and users.
                    </p>
                    <p>
                        If you encounter any issues installing MythicalDash, join the Discord and use one of the
                        dedicated support channels to ask your question.
                    </p>
                </Card>
                <br />
                <Card title="Get Started">
                    <div class="mt-8 flex justify-center space-x-4 items-center">
                        <Button href="/docs/mythicaldash/installation" class="bg-blue-500 hover:bg-blue-700">
                            <List class="inline-block mr-2" /> Get Started
                        </Button>
                        <Button
                            href="https://github.com/mythicalltd/mythicaldash"
                            class="bg-yellow-500 hover:bg-yellow-700"
                        >
                            <Star class="inline-block mr-2" /> Star Us on GitHub
                        </Button>
                        <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-700">
                            <Ticket class="inline-block mr-2" /> Support Server
                        </Button>
                        <Button href="https://github.com/sponsors/nayskutzu" class="bg-green-500 hover:bg-green-700">
                            <DollarSign class="inline-block mr-2" /> Donate
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import Button from '@/components/ui/Button.vue';
import { List, Star, Ticket, DollarSign } from 'lucide-vue-next';
</script>
