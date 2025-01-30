<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">MCUtils Standalone Installation</h1>

                    <Card title="Important Note">
                        <p class="text-red-400 font-semibold mb-4">⚠️ READ THIS</p>
                        <p class="mb-4">
                            We do not recommend standalone installation. It's highly recommended to use the Blueprint
                            framework instead! However, if you proceed, we provide support for any issues through our
                            Discord server.
                        </p>
                        <div class="mt-4">
                            <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-700">
                                <MessageSquare class="inline-block mr-2" /> Join Support Server
                            </Button>
                        </div>
                    </Card>

                    <Card title="Prerequisites">
                        <p class="mb-4">
                            Before proceeding, make sure you have completed the Pterodactyl panel customization
                            prerequisites:
                        </p>
                        <Button
                            href="https://pterodactyl.io/community/customization/panel.html#install-dependencies"
                            class="bg-blue-500 hover:bg-blue-700"
                        >
                            <ExternalLink class="inline-block mr-2" /> View Prerequisites
                        </Button>
                    </Card>

                    <Card title="Backend Routes">
                        <p class="mb-4">Add the following imports to <code>routes/api-client.php</code>:</p>
                        <CodeBlock language="php" :code="backendImports" />

                        <p class="mt-6 mb-4">Then add these routes after the activity log route:</p>
                        <CodeBlock language="php" :code="backendRoutes" />
                    </Card>

                    <Card title="Frontend Routes">
                        <p class="mb-4">
                            Add the following import to <code>resources/scripts/routers/routes.ts</code>:
                        </p>
                        <CodeBlock language="typescript" :code="frontendImport" />

                        <p class="mt-6 mb-4">Then add the route configuration:</p>
                        <CodeBlock language="typescript" :code="frontendRoute" />
                    </Card>

                    <Card title="Server Icon Changer">
                        <p class="mb-4">
                            Add these modifications to
                            <code>resources/scripts/components/server/settings/SettingsContainer.tsx</code>:
                        </p>
                        <CodeBlock language="typescript" :code="iconChangerImport" />

                        <p class="mt-6 mb-4">Add the component before the closing ServerContentBlock:</p>
                        <CodeBlock language="typescript" :code="iconChangerComponent" />
                    </Card>

                    <Card title="Set Permissions">
                        <p class="mb-4">Set the correct file permissions:</p>
                        <CodeBlock language="bash" :code="permissions" />
                    </Card>

                    <Card title="Build Panel">
                        <p class="mb-4">Finally, build the panel with these commands:</p>
                        <CodeBlock language="bash" :code="buildCommands" />
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
import { MessageSquare, ExternalLink } from 'lucide-vue-next';

const backendImports = `use Pterodactyl\\MythicalSystems\\McUtils\\PlayerList\\MinecraftPlayerListController;
use Pterodactyl\\MythicalSystems\\McUtils\\ServerIcon\\MinecraftServerIconController;`;

const backendRoutes = `Route::get('/icon', [MinecraftServerIconController::class, 'index']);
Route::patch('/icon', [MinecraftServerIconController::class, 'update']);
Route::get('/playerlist', [MinecraftPlayerListController::class, 'index']);`;

const frontendImport = `import MinecraftUtils from '@/components/server/mcutils/McUtilsContainer';`;

const frontendRoute = `{
    path: '/mc-utils',
    permission: null,
    name: 'Minecraft Utils',
    component: MinecraftUtils,
}`;

const iconChangerImport = `import McIconButton from '@/components/server/mcutils/McIconButton';`;

const iconChangerComponent = `<McIconButton />`;

const permissions = `chmod -R 755 storage/* bootstrap/cache/
chown -R www-data:www-data /var/www/pterodactyl/*`;

const buildCommands = `yarn
export NODE_OPTIONS=--openssl-legacy-provider # for NodeJS v17+
yarn lint --fix
yarn build:production # Build panel`;
</script>
