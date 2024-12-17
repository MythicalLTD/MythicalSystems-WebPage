<template>
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-semibold text-center mb-8 text-gray-300">Trusted by Industry Leaders</h2>
            <div class="flex flex-wrap justify-center items-center gap-8">
                <div v-for="partner in partners" :key="partner.name" class="w-32 h-16 flex items-center justify-center">
                    <img
                        :src="partner.logo"
                        :alt="partner.name"
                        class="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300 w-32 h-16 object-contain"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const partners = [
    { name: 'AMD', logo: '/amd.webp' },
    { name: 'Intel', logo: '/intel.webp' },
    { name: 'NVIDIA', logo: '/nv.png' },
];
</script>
