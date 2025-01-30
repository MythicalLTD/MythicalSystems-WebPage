<template>
    <main>
        <Hero />
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <WhyChoose />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <OurProducts />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <Statistics />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <Testimonials />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <Faq />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <ReachUs />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
            <Sponsors />
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/components/homepage//Hero.vue';
import WhyChoose from '@/components/homepage/WhyChoose.vue';
import OurProducts from '@/components/homepage/OurProducts.vue';
import Statistics from '@/components/homepage/Statistics.vue';
import Testimonials from '@/components/homepage/Testimonials.vue';
import Faq from '@/components/homepage/Faq.vue';
import ReachUs from '@/components/homepage/ReachUs.vue';
import Sponsors from '@/components/homepage/Sponsors.vue';

onMounted(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-out',
        once: false,
        mirror: true,
    });
});
</script>

<style>
html {
    scroll-behavior: smooth;
}

/* Add smooth transition for all transformations */
[data-aos] {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
