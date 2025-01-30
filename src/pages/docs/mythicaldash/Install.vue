<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Installing MythicalDash</h1>

                    <Card title="Important Note">
                        <p class="text-red-400 font-semibold mb-4">READ THIS</p>
                        <p class="mb-4">
                            MythicalDash does not support any type of migration from other client areas! Please do not
                            install it on your panel if you have more than 5 users due to panel desync! Also, please do
                            not modify any data from inside the panel due to the dash not being able to sync with the
                            panel! Every change you want to make, please make it from inside the dash!
                        </p>
                    </Card>

                    <Card title="Picking a Server OS">
                        <p class="mb-4">
                            MythicalDash runs on a small range of operating systems, so pick whichever you are most
                            comfortable using.
                        </p>
                        <table class="w-full text-left">
                            <thead>
                                <tr>
                                    <th class="py-2">Operating System</th>
                                    <th class="py-2">Version</th>
                                    <th class="py-2">Supported</th>
                                    <th class="py-2">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="os in operatingSystems" :key="os.name + os.version">
                                    <td class="py-2">
                                        <span v-if="os.supported">
                                            <a
                                                :href="`/docs/mythicaldash/os/${os.name.toLowerCase()}`"
                                                class="text-blue-500 underline"
                                                >{{ os.name }}</a
                                            >
                                        </span>
                                        <span v-else>{{ os.name }}</span>
                                    </td>
                                    <td class="py-2">{{ os.version }}</td>
                                    <td class="py-2">
                                        <span v-if="os.supported" class="text-green-500">✅</span>
                                        <span v-else class="text-red-500">❌</span>
                                    </td>
                                    <td class="py-2">{{ os.notes }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                    <Card title="Installing Composer">
                        <p class="mb-4">
                            Composer is a dependency manager for PHP that allows us to ship everything you'll need code
                            wise to operate the dash. You'll need composer installed before continuing in this process.
                        </p>
                        <CodeBlock language="bash" :code="composerInstallation" />
                    </Card>

                    <Card title="Download Files">
                        <p class="mb-4">
                            The first step in this process is to create the folder where the dashboard will live and
                            then move ourselves into that newly created folder. Below is an example of how to perform
                            this operation.
                        </p>
                        <CodeBlock language="bash" :code="downloadFiles" />
                        <p class="mt-4">
                            Once it is downloaded you'll need to unpack the archive and then set the correct permissions
                            on the core/ and tmp/ directories. These directories allow us to store files as well as keep
                            a speedy cache available to reduce load times.
                        </p>
                        <br />
                        <CodeBlock language="bash" :code="setPermissions" />
                    </Card>

                    <Card title="Composer Installation">
                        <p class="mb-4">
                            After you've downloaded all of the files you will need to upgrade the core components of the
                            client. To do this, simply run the commands below and follow any prompts.
                        </p>
                        <CodeBlock language="bash" :code="composerInstall" />
                    </Card>

                    <Card title="Fixing MariaDB">
                        <p class="mb-4">
                            Since MariaDB added a new setting in the latest version, you have to switch the MariaDB UTF
                            to the default one:
                        </p>
                        <CodeBlock language="bash" :code="fixMariaDB" />
                    </Card>

                    <Card title="Database Setup">
                        <p class="mb-4">
                            Now that all of the files have been downloaded we need to configure some core aspects of the
                            Dashboard. You will need a database setup and a user with the correct permissions created
                            for that database before continuing any further.
                        </p>
                        <CodeBlock language="sql" :code="databaseSetup" />
                    </Card>

                    <Card title="Environment Configuration">
                        <p class="mb-4">
                            MythicalDash's core environment is easily configured using a few different CLI commands
                            built into the app. This step will cover setting up things such as settings and database
                            credentials.
                        </p>
                        <CodeBlock language="bash" :code="environmentSetup" />
                    </Card>

                    <Card title="Crontab Configuration">
                        <p class="mb-4">
                            Setting up cron jobs will be really important; this is not an optional step: the cron jobs
                            will allow the dashboard to process data internally, and manage the queue system. First,
                            check if crontab is installed by typing "crontab -e" in your terminal. Or, if you are using
                            a hosting service, check if your host supports crontab. If you are on a terminal, run:
                        </p>
                        <CodeBlock language="bash" :code="crontabSetup" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const operatingSystems = [
    {
        name: 'Ubuntu',
        version: '20.04',
        supported: true,
        notes: 'Documentation written assuming Ubuntu 20.04 as the base OS.',
    },
    {
        name: 'Ubuntu',
        version: '>=22.04',
        supported: true,
        notes: 'MariaDB can be installed without the repo setup script.',
    },
    {
        name: 'Debian',
        version: '11',
        supported: true,
        notes: 'It can run, but we recommend using 12 for long-term usage!',
    },
    { name: 'Debian', version: '>=12', supported: true, notes: 'The dash is developed on this OS!' },
    { name: 'CentOS', version: '7', supported: false, notes: "It can run, but we don't provide support for it." },
    { name: 'CentOS', version: '8', supported: false, notes: "It can run, but we don't provide support for it." },
    { name: 'AlamaLinux', version: '9', supported: false, notes: "It can run, but we don't provide support for it." },
    { name: 'AlamaLinux', version: '8', supported: false, notes: "It can run, but we don't provide support for it." },
];

const composerInstallation = `curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer`;

const downloadFiles = `mkdir -p /var/www/mythicaldash
  cd /var/www/mythicaldash
  curl -Lo MythicalDash.zip https://github.com/MythicalLTD/MythicalDash/releases/download/3.2.3/MythicalDash.zip
  unzip -o MythicalDash.zip -d /var/www/mythicaldash`;

const setPermissions = `chown -R www-data:www-data /var/www/mythicaldash/*`;

const composerInstall = `cd /var/www/mythicaldash
  composer install --no-dev --optimize-autoloader`;

const fixMariaDB = `sudo sed -i '/^#collation-server/a collation-server = utf8mb4_general_ci' /etc/mysql/mariadb.conf.d/50-server.cnf
  sudo sed -i '/^character-set-server/s/^/#/g' /etc/mysql/mariadb.conf.d/50-server.cnf
  sudo sed -i '/^#character-set-server/a character-set-server = utf8mb4' /etc/mysql/mariadb.conf.d/50-server.cnf

  sudo sed -i '/^character-set-collations/s/^/#/g' /etc/mysql/mariadb.conf.d/50-server.cnf
  sudo sed -i '/^#character-set-collations/a character-set-collations = utf8mb4' /etc/mysql/mariadb.conf.d/50-server.cnf`;

const databaseSetup = `mysql -u root -p
  CREATE USER 'mythicaldash'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
  CREATE DATABASE mythicaldash;
  GRANT ALL PRIVILEGES ON mythicaldash.* TO 'mythicaldash'@'127.0.0.1' WITH GRANT OPTION;
  exit`;

const environmentSetup = `cd /var/www/mythicaldash
  dos2unix arch.bash
  bash arch.bash
  chmod +x ./MythicalDash
  ./MythicalDash -environment:newconfig # Generate a custom config file
  ./MythicalDash -key:generate # Reset the encryption key
  ./MythicalDash -environment:database # Setup the database connection
  ./MythicalDash -migrate # Migrate the database
  ./MythicalDash -environment:setup # Start a custom setup for the dash`;

const crontabSetup = `sudo crontab -e
  # Paste this in the first line
  * * * * * php /var/www/mythicaldash/crons/server.php >> /dev/null 2>&1`;
</script>
