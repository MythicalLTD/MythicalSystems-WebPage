<template>
    <section class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Floating background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Animated circles -->
            <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce" style="animation-delay: 1s; animation-duration: 3s;"></div>
            <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce" style="animation-delay: 0.5s; animation-duration: 4s;"></div>
            
            <!-- Geometric shapes -->
            <div class="absolute top-1/3 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin" style="animation-duration: 20s;"></div>
            <div class="absolute bottom-1/3 left-16 w-12 h-12 border-2 border-violet-400/30 rotate-12 animate-pulse"></div>
            
            <!-- Grid pattern overlay -->
            <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 50px 50px;"></div>
        </div>

        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <!-- Left side content -->
            <div class="z-10 space-y-6">
                <h1
                    class="text-5xl md:text-6xl lg:text-7xl font-bold"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                >
                    <span
                        class="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent shimmer-text"
                    >
                        Mythical
                    </span>
                    <span class="block text-white fade-in-text">Systems</span>
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
                    <Button href="/docs" variant="primary" class="px-8 py-4 hover-lift-effect"> 
                        <span class="relative z-10">Innovate with Mythical</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button href="https://donate.stripe.com/00gcO2epX5yj2ysfYY" variant="secondary" class="px-8 py-4 hover-lift-effect"
                        >Sponsor Us</Button
                    >
                </div>
            </div>

            <!-- Enhanced code editor with typing animation -->
            <div
                class="hidden md:block relative"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
            >
                <div class="editor-container bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                    <!-- Editor header -->
                    <div class="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-800">
                        <div class="flex space-x-2">
                            <div class="w-3 h-3 rounded-full bg-red-500/90 shadow-inner hover:bg-red-400 transition-colors"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/90 shadow-inner hover:bg-yellow-400 transition-colors"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/90 shadow-inner hover:bg-green-400 transition-colors"></div>
                        </div>
                        <div class="ml-4 text-sm text-gray-400 flex items-center">
                            <svg class="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            mythical.tsx
                        </div>
                    </div>
                    <!-- Code content with typing animation -->
                    <div class="p-6 font-mono text-sm editor-content">
                        <div class="text-blue-400 typing-line" style="animation-delay: 0s;">function <span class="text-yellow-300">MythicalApp</span>() {</div>
                        <div class="pl-4 text-purple-400 typing-line" style="animation-delay: 0.5s;">
                            const <span class="text-blue-300">[project, setProject]</span> = useState({
                        </div>
                        <div class="pl-8 text-gray-400 typing-line" style="animation-delay: 1s;">name: <span class="text-green-300">"Mythical"</span>,</div>
                        <div class="pl-8 text-gray-400 typing-line" style="animation-delay: 1.5s;">status: <span class="text-green-300">"innovating"</span></div>
                        <div class="pl-4 text-purple-400 typing-line" style="animation-delay: 2s;">});</div>
                        <div class="pl-4 text-blue-400 typing-line" style="animation-delay: 2.5s;">return (</div>
                        <div class="pl-8 text-purple-300 typing-line" style="animation-delay: 3s;">
                            &lt;div className=<span class="text-green-300">"mythical-app"</span>&gt;
                        </div>
                        <div class="pl-12 text-purple-300 typing-line" style="animation-delay: 3.5s;">Mythical Systems</div>
                        <div class="pl-8 text-purple-300 typing-line" style="animation-delay: 4s;">&lt;/div&gt;</div>
                        <div class="pl-4 text-blue-400 typing-line" style="animation-delay: 4.5s;">);</div>
                        <div class="text-blue-400 typing-line" style="animation-delay: 5s;">}</div>
                        <div class="typing-cursor">|</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enhanced scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
            <div class="flex flex-col items-center space-y-2">
                <span class="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
                <svg class="w-6 h-6 text-gray-400 scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                </svg>
            </div>
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

/* Shimmer text effect */
.shimmer-text {
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

/* Fade in text effect */
.fade-in-text {
    animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button hover effects */
.hover-lift-effect {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.hover-lift-effect:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

/* Enhanced editor container */
.editor-container {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow:
        0 20px 25px -5px rgba(0, 0, 0, 0.5),
        0 10px 10px -5px rgba(0, 0, 0, 0.04),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
}

.editor-container:hover {
    transform: perspective(1000px) rotateY(-2deg) rotateX(1deg) scale(1.02);
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.editor-content {
    background: linear-gradient(to bottom right, #1e1e1e, #2d2d2d);
    position: relative;
}

/* Typing animation */
.typing-line {
    opacity: 0;
    animation: typeIn 0.5s ease-out forwards;
}

@keyframes typeIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Typing cursor */
.typing-cursor {
    display: inline-block;
    animation: blink 1s infinite;
    color: #60a5fa;
    font-weight: bold;
}

@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}

/* Scroll indicator */
.scroll-indicator {
    animation: floatUpDown 2s ease-in-out infinite;
}

.scroll-arrow {
    animation: bounce 2s ease-in-out infinite;
}

@keyframes floatUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Floating animation */
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .editor-container {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
    }
    
    .editor-container:hover {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
    }
}
</style>
