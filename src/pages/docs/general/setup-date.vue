<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <Card title="Configuring Timezones and Date Sync">
                        <p class="mb-4">
                            To ensure that your MySQL server is using the correct timezone and that the date is synced
                            correctly, follow the steps below:
                        </p>
                        <p class="mb-4">1. Set the system timezone:</p>
                        <CodeBlock language="bash" :code="setTimezone" />
                        <br />
                        <p class="mb-4">
                            2. Install and configure NTP (Network Time Protocol) to keep the system time in sync:
                        </p>
                        <CodeBlock language="bash" :code="installNtp" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const setTimezone = `# Replace 'Region/City' with your timezone, e.g., 'America/New_York'
sudo timedatectl set-timezone Region/City`;

const installNtp = `# Install NTP
sudo apt-get update
sudo apt-get install ntp

# Start and enable NTP service
sudo systemctl start ntp
sudo systemctl enable ntp`;
</script>
