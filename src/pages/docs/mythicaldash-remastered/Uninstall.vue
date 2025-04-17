<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Uninstall MythicalDash</h1>

                    <Card title="Remove Database">
                        <p class="mb-4">First, remove the database and the MythicalDash user:</p>
                        <CodeBlock language="sql" :code="databaseCommands" />
                    </Card>

                    <Card title="Remove Directories">
                        <p class="mb-4">Next, delete the MythicalDash directory:</p>
                        <CodeBlock language="bash" :code="directoryCommand" />
                    </Card>

                    <Card title="Remove Crontab">
                        <p class="mb-4">Edit the crontab to remove MythicalDash jobs:</p>
                        <CodeBlock language="bash" :code="crontabCommand" />
                    </Card>

                    <Card title="Remove Nginx Config">
                        <p class="mb-4">Delete the Nginx configuration files:</p>
                        <CodeBlock language="bash" :code="nginxCommand" />
                    </Card>

                    <Card title="Restart Nginx">
                        <p class="mb-4">Finally, restart Nginx:</p>
                        <CodeBlock language="bash" :code="restartCommand" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const databaseCommands = `mysql -u root -p
DROP DATABASE mythicaldash;
DROP USER 'mythicaldash'@'127.0.0.1';
exit`;

const directoryCommand = `rm -rf /var/www/mythicaldash`;

const crontabCommand = `sudo crontab -e`;

const nginxCommand = `rm /etc/nginx/sites-available/MythicalDash.conf 
rm /etc/nginx/sites-enabled/MythicalDash.conf`;

const restartCommand = `systemctl restart nginx --now`;
</script>
