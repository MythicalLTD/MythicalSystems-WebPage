<template>
    <div class="min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <slot></slot>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/ui/Navbar.vue';
import Footer from '@/components/ui/Footer.vue';
</script>
