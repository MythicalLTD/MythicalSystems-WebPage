<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Update MythicalDash</h1>

                    <Card title="Create Backup">
                        <p class="mb-4">First, create a backup of your database and files:</p>
                        <CodeBlock language="bash" :code="backupCommands" />
                    </Card>

                    <Card title="Download Update">
                        <p class="mb-4">Download and extract the latest version:</p>
                        <CodeBlock language="bash" :code="downloadCommands" />
                    </Card>

                    <Card title="Update Dependencies">
                        <p class="mb-4">Update the core components:</p>
                        <CodeBlock language="bash" :code="dependencyCommand" />
                    </Card>

                    <Card title="Database Updates">
                        <p class="mb-4">Update the database schema:</p>
                        <CodeBlock language="bash" :code="databaseCommand" />
                    </Card>

                    <Card title="Set Permissions">
                        <p class="mb-4">Set proper file permissions:</p>
                        <CodeBlock language="bash" :code="permissionsCommand" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const backupCommands = `cd /var/www/mythicaldash
mariadb-dump -p mythicaldash > mythicaldash_backup.sql
cd /var/www
zip -r clientbackup.zip mythicaldash/`;

const downloadCommands = `cd /var/www/mythicaldash
curl -Lo MythicalDash.zip https://github.com/MythicalLTD/MythicalDash/releases/download/3.2.3/MythicalDash.zip
unzip -o MythicalDash.zip -d /var/www/mythicaldash
dos2unix arch.bash
sudo bash arch.bash
rm /var/www/mythicaldash/public/FIRST_USER`;

const dependencyCommand = `composer install --no-dev --optimize-autoloader`;

const databaseCommand = `./MythicalDash -migrate`;

const permissionsCommand = `chown -R www-data:www-data /var/www/mythicaldash/*`;
</script>
