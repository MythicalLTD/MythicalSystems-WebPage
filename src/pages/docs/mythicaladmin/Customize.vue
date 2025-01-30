<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Customize MythicalAdmin</h1>

                    <Card title="Adding New Items">
                        <p class="mb-4">
                            To add a new item, copy the structure below and add it to the navigation array:
                        </p>
                        <CodeBlock language="php" :code="newItemExample" />

                        <div class="mt-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                            <p class="text-yellow-300 font-semibold">⚠️ Note</p>
                            <p class="text-yellow-200 mt-2">
                                Make sure to create the corresponding route and controller for your new page.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const newItemExample = `@include('admin.partials.sidebar-section', [
    'title' => 'Addons', // The title of the section
            'items' => [
                [
                    'title' => 'Free Servers', // The title of the item
                    'icon' => 'fa-calendar', // The icon name from font awesome
                    'route' => 'admin.freeservers' // The route name in routes/admin.php
                ]
            ]
        ]);`;
</script>
