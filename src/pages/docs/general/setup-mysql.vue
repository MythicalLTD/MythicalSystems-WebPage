<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <Card title="Configuring MySQL">
                        <p class="mb-4">
                            This section covers creating a MySQL user that has permission to create and modify users.
                        </p>
                    </Card>

                    <Card title="Creating a user">
                        <p class="mb-4">
                            Firstly we have to create a database user to be able to access and manage the server via any
                            ip!
                        </p>
                        <CodeBlock language="sql" :code="createUser" />
                    </Card>

                    <Card title="Assigning permissions">
                        <p class="mb-4">
                            The command below will give your newly created user the ability to create additional users,
                            as well as create and destroy databases.
                        </p>
                        <CodeBlock language="sql" :code="assignPermissions" />
                    </Card>

                    <Card title="Allowing external database access">
                        <p class="mb-4">
                            Chances are you'll need to allow external access to this MySQL instance in order to allow
                            servers to connect to it. To do this, open my.cnf, which varies in location depending on
                            your OS and how MySQL was installed. You can type
                            <code class="bg-gray-800 text-white p-1 rounded">find /etc -iname my.cnf</code> to locate
                            it.
                        </p>
                        <p class="mb-4">Open my.cnf, add text below to the bottom of the file and save it:</p>
                        <CodeBlock language="ini" :code="myCnfConfig" /><br />
                        <p class="mb-4">
                            Restart MySQL/MariaDB to apply these changes. This will override the default MySQL
                            configuration, which by default will only accept requests from localhost. Updating this will
                            allow connections on all interfaces, and thus, external connections. Make sure to allow the
                            MySQL port (default 3306) in your firewall.
                        </p>
                        <p class="mb-4">
                            For MariaDB, the process is similar. Open the MariaDB configuration file, which is usually
                            located at
                            <code class="bg-gray-800 text-white p-1 rounded"
                                >/etc/mysql/mariadb.conf.d/50-server.cnf</code
                            >. Add the following lines to the file:
                        </p>
                        <CodeBlock language="ini" :code="mariadbConfig" /><br />
                        <p class="mb-4">
                            Restart MariaDB to apply these changes. This will allow connections on all interfaces,
                            enabling external connections. Ensure that the MariaDB port (default 3306) is allowed in
                            your firewall.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';

const createUser = `# You should change the username and password below to something unique.
CREATE USER 'mythicalsystems'@'%' IDENTIFIED BY 'somepassword';`;

const assignPermissions = `GRANT ALL PRIVILEGES ON *.* TO 'mythicalsystems'@'%' WITH GRANT OPTION;`;

const myCnfConfig = `[mysqld]
bind-address=0.0.0.0
default_time_zone = SYSTEM
`;

const mariadbConfig = `bind-address = 127.0.0.1 # Comment this line out!!!!!!!

bind-address = 0.0.0.0 # Add this line
`;
</script>
