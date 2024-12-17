<template>
    <div class="min-h-screen bg-[#0a0a0f] py-20 px-4">
        <div class="container mx-auto max-w-4xl">
            <h1
                class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
            >
                Branding Guidelines
            </h1>
            <Card class="p-8">
                <div class="space-y-12 text-gray-300">
                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Logo</h2>
                        <div class="flex justify-center mb-4">
                            <img
                                src="https://github.com/mythicalltd.png"
                                alt="MythicalSystems Logo"
                                class="w-32 h-32"
                            />
                        </div>
                        <p>
                            Our logo represents the magical and innovative nature of MythicalSystems. Always use the
                            official logo files and never alter the logo's colors or proportions.
                        </p>
                    </section>

                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Color Palette</h2>
                        <ColorPalette :colors="colorPalette" />
                    </section>

                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Typography</h2>
                        <p class="mb-4">We use the following fonts in our branding:</p>
                        <ul class="list-disc list-inside">
                            <li>Headings: Inter, sans-serif</li>
                            <li>Body: Roboto, sans-serif</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Brand Voice</h2>
                        <p>Our brand voice is:</p>
                        <ul class="list-disc list-inside">
                            <li>Magical and enchanting</li>
                            <li>Professional and trustworthy</li>
                            <li>Innovative and forward-thinking</li>
                            <li>Friendly and approachable</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Usage Guidelines</h2>
                        <p>When using MythicalSystems branding elements:</p>
                        <ul class="list-disc list-inside">
                            <li>Always use the official logo, colors, and fonts</li>
                            <li>Maintain appropriate clear space around the logo</li>
                            <li>Do not alter, rotate, or distort the logo</li>
                            <li>Use the brand voice consistently across all communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-3xl font-semibold text-purple-300 mb-4">Contact</h2>
                        <p>
                            For any questions regarding the use of MythicalSystems branding, please contact our
                            marketing team at hello@mythicalsystems.xyz.
                        </p>
                    </section>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import ColorPalette from '@/components/branding/ColorPalette.vue';

const colorPalette = [
    { name: 'Primary Purple', hex: '#a855f7' },
    { name: 'Secondary Violet', hex: '#8b5cf6' },
    { name: 'Accent Blue', hex: '#3b82f6' },
    { name: 'Background Dark', hex: '#0a0a0f' },
    { name: 'Text Light', hex: '#e2e8f0' },
    { name: 'Text Dark', hex: '#1e293b' },
    { name: 'Success Green', hex: '#22c55e' },
    { name: 'Error Red', hex: '#ef4444' },
];
</script>
