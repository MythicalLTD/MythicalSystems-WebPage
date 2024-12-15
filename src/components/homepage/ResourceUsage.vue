<template>
    <h3 class="text-2xl font-bold text-purple-300 text-center mb-6">Infrastructure Status</h3>
    <p class="mb-8 text-gray-300 text-center">
        Here is a real-time overview of the resource usage on our servers. Our cutting-edge infrastructure ensures
        optimal performance.
    </p>
    <div class="space-y-6">
        <div v-for="(resource, key) in resources" :key="key">
            <div class="flex justify-between mb-2">
                <span class="text-purple-200">{{ resource.label }} ({{ resource.capacity }})</span>
                <span class="text-purple-300 font-semibold">{{ usage[key] }}%</span>
            </div>
            <div class="w-full bg-purple-900/50 rounded-full h-4">
                <div
                    class="bg-purple-500 h-4 rounded-full transition-all duration-500 ease-out"
                    :style="{ width: `${usage[key]}%` }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { resources } from '@/config/Resources';
import { ref, onMounted, onUnmounted } from 'vue';

const usage = ref({
    cpu: 0,
    ram: 0,
    disk: 0,
});

let ws: WebSocket;

onMounted(() => {
    ws = new WebSocket('wss://pvews.mythical.systems');

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        usage.value = {
            cpu: parseFloat(data.cpuUsage),
            ram: parseFloat(data.memoryUsage),
            disk: parseFloat(data.diskUsage),
        };
    };
});

onUnmounted(() => {
    if (ws) ws.close();
});
</script>
