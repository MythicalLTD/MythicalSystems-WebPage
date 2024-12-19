<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">
                    <div class="mt-8">
                        <router-link to="/docs/mythicaldash/installation" class="text-purple-400 hover:underline">
                            ← Back 
                        </router-link>
                    </div>
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Ubuntu Installation</h1>

                    <Card title="Update and Install Dependencies">
                        <p class="mb-4">The commands below are an example of how you might install these dependencies.
                            Please
                            consult with your operating system's package manager to determine the correct packages to
                            install.</p>
                        <CodeBlock language="bash" :code="ubuntuInstallation" />
                    </Card>
                    <br>
                    <Card title="Next Steps">
                        <p class="mb-4">Now that you have finished installing everything, you can proceed to the next
                            steps
                            in the
                            <router-link to="/docs/mythicaldash/installation"
                                class="text-purple-400 hover:underline">main
                                installation guide</router-link>.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue'
import CodeBlock from '@/components/docs/CodeBlock.vue'

const ubuntuInstallation = `# Update the server
  apt update && apt upgrade -y
  # Add "add-apt-repository" command
  apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
  # Add additional repositories for PHP, Redis, and MariaDB
  LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
  # MariaDB repo setup script can be skipped on Ubuntu 22.04
  curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
  # Update repositories list
  apt update
  # Add universe repository if you are on Ubuntu 18.04
  apt-add-repository universe
  # Install Dependencies
  apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip zip git redis-server dos2unix`
</script>