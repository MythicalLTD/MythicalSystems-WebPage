<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">MCUtils Blueprint Installation</h1>

                    <Card title="Prerequisites">
                        <p class="mb-4">
                            Before installing MCUtils, make sure you have Blueprint Framework installed on your system.
                            If you haven't installed Blueprint yet, please follow the
                            <a href="https://blueprint.zip" class="text-purple-400 hover:text-purple-300"
                                >Blueprint installation guide</a
                            >.
                        </p>
                    </Card>

                    <Card title="Installation">
                        <p class="mb-4">To install MCUtils using Blueprint, simply run the following command:</p>
                        <CodeBlock language="bash" :code="installCommand" />
                    </Card>
                    <Card title="Need Help?">
                        <p class="mb-4">
                            If you encounter any issues during installation, join our Discord community for support:
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
import CodeBlock from '@/components/docs/CodeBlock.vue';

const installCommand = `blueprint -i mcutils.blueprint`;
</script>
