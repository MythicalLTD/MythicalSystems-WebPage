<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <Card title="Congratulations!">
                    <h1 class="text-3xl font-bold mb-4">Installation Complete</h1>
                    <p>
                        Congratulations! You have successfully installed MythicalDash. You can now start managing your
                        servers and resources.
                    </p>
                    <p>
                        If you encounter any issues, feel free to join our Discord server and use one of the dedicated
                        support channels to ask your questions.
                    </p>
                </Card>
                <br />
                <Card title="Next Steps">
                    <div class="mt-8 flex justify-center space-x-4 items-center">
                        <Button href="/docs/mythicaldash/update" class="bg-blue-500 hover:bg-blue-700">
                            <List class="inline-block mr-2" /> Upgrade MythicalDash
                        </Button>
                        <Button
                            href="https://github.com/mythicalltd/mythicaldash"
                            class="bg-yellow-500 hover:bg-yellow-700"
                        >
                            <Star class="inline-block mr-2" /> Star Us on GitHub
                        </Button>
                        <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-700">
                            <Ticket class="inline-block mr-2" /> Support Server
                        </Button>
                        <Button href="https://github.com/sponsors/nayskutzu" class="bg-green-500 hover:bg-green-700">
                            <DollarSign class="inline-block mr-2" /> Donate
                        </Button>
                        <Button href="/docs/mythicaldash/uninstall" class="bg-red-500 hover:bg-red-700">
                            <Trash class="inline-block mr-2" /> Remove MythicalDash
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import Button from '@/components/ui/Button.vue';
import { List, Star, Ticket, DollarSign, Trash } from 'lucide-vue-next';
</script>
