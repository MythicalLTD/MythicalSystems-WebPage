<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Install MythicalAdmin</h1>

                    <Card title="Important Note">
                        <p class="text-red-400 font-semibold mb-4">⚠️ READ THIS</p>
                        <p class="mb-4">
                            This is not a Blueprint addon! Please follow the installation steps carefully to ensure
                            proper setup.
                        </p>
                    </Card>

                    <Card title="Upload and Extract Files">
                        <p class="mb-4">
                            Upload the MythicalUI.zip file to your Pterodactyl installation directory at:
                        </p>
                        <CodeBlock language="bash" :code="uploadPath" />

                        <p class="mt-4">Extract and replace the existing files using the unzip command:</p>
                        <p class="mb-4"></p>
                        <CodeBlock language="bash" :code="unzipCommand" />
                    </Card>

                    <Card title="Run Migrations">
                        <p class="mb-4">Execute the following command to run the necessary database migrations:</p>
                        <CodeBlock language="bash" :code="migrationCommand" />
                    </Card>

                    <Card title="Add Routes">
                        <p class="mb-4">
                            Navigate to <code>routes/admin.php</code> and add the following routes at the bottom of the
                            file:
                        </p>
                        <CodeBlock language="php" :code="routesConfig" />
                    </Card>

                    <Card title="Clear Cache">
                        <p class="mb-4">Finally, clear the application cache by running these commands:</p>
                        <CodeBlock language="bash" :code="cacheCommands" />
                    </Card>

                    <Card title="Next Steps">
                        <div class="mt-8 flex justify-center space-x-4 items-center">
                            <Button
                                href="https://www.sourcexchange.net/products/mythicalui-v2-pterodactyl-admin"
                                class="bg-yellow-500 hover:bg-yellow-700"
                            >
                                <Star class="inline-block mr-2" /> Buy on SourceXchange
                            </Button>
                            <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-700">
                                <Ticket class="inline-block mr-2" /> Support Server
                            </Button>
                            <Button
                                href="https://github.com/sponsors/nayskutzu"
                                class="bg-green-500 hover:bg-green-700"
                            >
                                <DollarSign class="inline-block mr-2" /> Donate
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import Button from '@/components/ui/Button.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';
import { Star, Ticket, DollarSign } from 'lucide-vue-next';

const uploadPath = `/var/www/pterodactyl`;

const unzipCommand = `unzip -o MythicalUI.zip`;

const migrationCommand = `php artisan migrate --seed --force`;

const routesConfig = `/*
|--------------------------------------------------------------------------
| Mythical Systems Controller Routes
|--------------------------------------------------------------------------
|
| Endpoint: /admin/mythicalsystems
|
*/
Route::group(['prefix' => 'mythicalsystems'], function () {
    Route::get('/', [Admin\\MythicalSystems\\LogsController::class, 'index'])
        ->name('admin.mythicalsystems');
    Route::get('/logs', [Admin\\MythicalSystems\\LogsController::class, 'index'])
        ->name('admin.mythicalsystems.logs');
    Route::post('/logs/clear', [Admin\\MythicalSystems\\LogsController::class, 'clearLogs'])
        ->name('admin.mythicalsystems.logs.clear');
    Route::get('/logs/download', [Admin\\MythicalSystems\\LogsController::class, 'downloadLogs'])
        ->name('admin.mythicalsystems.logs.download');
    Route::get('/stats', [Admin\\MythicalSystems\\StatsController::class, 'index'])
        ->name('admin.mythicalsystems.stats');
    Route::get('/health', [Admin\\MythicalSystems\\HealthController::class, 'index'])
        ->name('admin.mythicalsystems.health');
});`;

const cacheCommands = `php artisan view:clear
php artisan config:clear`;
</script>

<style scoped>
.prose {
    --tw-prose-invert-headings: theme('colors.white');
    --tw-prose-invert-body: theme('colors.gray.300');
    --tw-prose-invert-pre-bg: theme('colors.gray.800');
    --tw-prose-invert-pre-code: theme('colors.gray.200');
}

.prose code {
    color: theme('colors.purple.300');
    background-color: theme('colors.purple.900 / 0.2');
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
}

.prose pre code {
    color: theme('colors.gray.200');
    background-color: transparent;
    padding: 0;
}
</style>
