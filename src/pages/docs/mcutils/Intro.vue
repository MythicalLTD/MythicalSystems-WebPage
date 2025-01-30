<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">MCUtils Installation</h1>

                    <Card title="Choose Installation Method">
                        <p class="mb-8 text-gray-300">
                            MCUtils can be installed either as a standalone addon or through the Blueprint framework.
                            Choose the installation method that best suits your needs.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Blueprint Installation -->
                            <div
                                class="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                            >
                                <h3 class="text-xl font-semibold text-purple-400 mb-4">Blueprint Framework</h3>
                                <p class="text-gray-300 mb-6">
                                    Recommended method. Install MCUtils using the Blueprint framework for easier
                                    management and updates.
                                </p>
                                <ul class="space-y-2 mb-6 text-gray-300">
                                    <li class="flex items-center">
                                        <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                                        Easier installation
                                    </li>
                                    <li class="flex items-center">
                                        <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                                        Automatic updates
                                    </li>
                                    <li class="flex items-center">
                                        <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                                        Better compatibility
                                    </li>
                                </ul>
                                <Button href="/docs/mcutils/blueprint" class="w-full bg-purple-500 hover:bg-purple-600">
                                    Install with Blueprint
                                </Button>
                            </div>

                            <!-- Standalone Installation -->
                            <div
                                class="bg-gray-800/50 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                            >
                                <h3 class="text-xl font-semibold text-yellow-400 mb-4">Standalone Installation</h3>
                                <p class="text-gray-300 mb-6">
                                    Manual installation directly on your Pterodactyl panel. Not recommended for most
                                    users.
                                </p>
                                <ul class="space-y-2 mb-6 text-gray-300">
                                    <li class="flex items-center">
                                        <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
                                        Manual updates required
                                    </li>
                                    <li class="flex items-center">
                                        <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
                                        More complex setup
                                    </li>
                                    <li class="flex items-center">
                                        <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
                                        Limited support
                                    </li>
                                </ul>
                                <Button
                                    href="/docs/mcutils/standalone"
                                    class="w-full bg-yellow-500 hover:bg-yellow-600"
                                >
                                    Standalone Installation
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Need Help?">
                        <p class="mb-4">
                            If you're unsure which method to choose or need assistance, join our Discord community:
                        </p>
                        <br />
                        <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-600">
                            Join Discord Support
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import Button from '@/components/ui/Button.vue';
import { CheckCircle, AlertTriangle } from 'lucide-vue-next';
</script>
