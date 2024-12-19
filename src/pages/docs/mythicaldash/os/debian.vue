<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 class="text-4xl font-bold mb-6 text-purple-400">Debian Installation</h1>
                <div class="mt-8">
                    <router-link to="/docs/mythicaldash/installation" class="text-purple-400 hover:underline">
                        ← Back
                    </router-link>
                </div>
                <Card title="Update and Install Dependencies">
                    <p class="mb-4">The commands below are an example of how you might install these dependencies.
                        Please consult with your operating system's package manager to determine the correct packages to
                        install.</p>
                    <CodeBlock language="bash" :code="debianInstallation" />
                </Card>
                <br>
                <Card title="Next Steps">
                    <p class="mb-4">Now that you have finished installing everything, you can proceed to the next steps
                        in the <router-link to="/docs/mythicaldash/installation"
                            class="text-purple-400 hover:underline">main installation guide</router-link>.</p>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue'
import CodeBlock from '@/components/docs/CodeBlock.vue'

const debianInstallation = `# Update the server
  apt update && apt upgrade -y
  # Install necessary packages
  apt -y install software-properties-common curl ca-certificates gnupg2 sudo lsb-release
  
  # Add additional repositories for PHP, Redis, and MariaDB
  echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
  curl -fsSL https://packages.sury.org/php/apt.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg
  
  # Update repositories list
  apt update
  
  # Install PHP and required extensions
  apt install -y php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}
  
  # MariaDB repo setup script
  curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
  
  # Install the rest of dependencies
  apt install -y mariadb-server nginx tar unzip git redis-server zip dos2unix`
</script>