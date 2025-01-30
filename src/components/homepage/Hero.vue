<template>
    <section class="relative min-h-screen flex items-center overflow-hidden">
        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <!-- Left side content -->
            <div class="z-10 space-y-6">
                <h1
                    class="text-5xl md:text-6xl lg:text-7xl font-bold"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                >
                    <span
                        class="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Mythical
                    </span>
                    <span class="block text-white">Systems</span>
                </h1>

                <p
                    class="text-xl text-gray-400"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
                >
                    Crafting digital experiences that push the boundaries of innovation and build systems that scale.
                    With a focus on quality and user experience, we are dedicated to delivering excellence in all that
                    we do.
                </p>

                <div
                    class="flex flex-wrap gap-4"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, ease: 'easeOut' } }"
                >
                    <Button href="/docs" variant="primary" class="px-8 py-4"> Innovate with Mythical </Button>
                    <Button href="/docs" variant="secondary" class="px-8 py-4">Sponsor Us</Button>
                </div>
            </div>

            <!-- Updated right side code editor -->
            <div
                class="hidden md:block relative"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
            >
                <div class="editor-container bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden">
                    <!-- Editor header -->
                    <div class="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-800">
                        <div class="flex space-x-2">
                            <div class="w-3 h-3 rounded-full bg-red-500/90 shadow-inner"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/90 shadow-inner"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/90 shadow-inner"></div>
                        </div>
                        <div class="ml-4 text-sm text-gray-400">mythical.tsx</div>
                    </div>
                    <!-- Code content -->
                    <div class="p-6 font-mono text-sm editor-content">
                        <div class="text-blue-400">function <span class="text-yellow-300">MythicalApp</span>() {</div>
                        <div class="pl-4 text-purple-400">
                            const <span class="text-blue-300">[project, setProject]</span> = useState({
                        </div>
                        <div class="pl-8 text-gray-400">name: <span class="text-green-300">"Mythical"</span>,</div>
                        <div class="pl-8 text-gray-400">status: <span class="text-green-300">"innovating"</span></div>
                        <div class="pl-4 text-purple-400">});</div>
                        <div class="pl-4 text-blue-400">return (</div>
                        <div class="pl-8 text-purple-300">
                            &lt;div className=<span class="text-green-300">"mythical-app"</span>&gt;
                        </div>
                        <div class="pl-12 text-purple-300">Mythical Systems</div>
                        <div class="pl-8 text-purple-300">&lt;/div&gt;</div>
                        <div class="pl-4 text-blue-400">);</div>
                        <div class="text-blue-400">}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
            </svg>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>

<style scoped>
.container {
    max-width: 1400px;
}

.editor-container {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
    transition: transform 0.3s ease;
    box-shadow:
        0 20px 25px -5px rgba(0, 0, 0, 0.5),
        0 10px 10px -5px rgba(0, 0, 0, 0.04),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
}

.editor-container:hover {
    transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
}

.editor-content {
    background: linear-gradient(to bottom right, #1e1e1e, #2d2d2d);
}

@keyframes float {
    0% {
        transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(0px);
    }
    50% {
        transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(-20px);
    }
    100% {
        transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(0px);
    }
}
</style>
