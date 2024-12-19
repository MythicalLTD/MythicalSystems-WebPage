<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div class="space-y-8">

                    <Card title="Generating SSH Keys">
                        <p class="mb-4">To generate a new SSH key pair, follow the steps below:</p>
                        <p class="mb-4">1. Open a terminal and run the following command:</p>
                        <CodeBlock language="bash" :code="generateSshKey" />
                        <br>
                        <p class="mb-4">2. When prompted, specify the file where you want to save the key (default is <code>~/.ssh/id_rsa</code>):</p>
                        <CodeBlock language="bash" :code="specifyKeyFile" />
                        <br>
                        <p class="mb-4">3. Enter a passphrase for added security (optional)!</p>


                    </Card>

                    <Card title="Saving and Using SSH Keys">
                        <p class="mb-4">To use the generated SSH keys, follow the steps below:</p>
                        <p class="mb-4">1. Copy the public key to the remote server:</p>
                        <CodeBlock language="bash" :code="copyPublicKey" />
                        <br>
                        <p class="mb-4">2. Verify that the key has been added to the <code>~/.ssh/authorized_keys</code> file on the remote server:</p>
                        <CodeBlock language="bash" :code="verifyKey" />
                    </Card>

                    <Card title="Configuring SSH to Use SSH Keys Only and Disable Root Password Login">
                        <p class="mb-4">To configure SSH to use SSH keys only and disable root login with a password, follow the steps below:</p>
                        <p class="mb-4">1. Open the SSH configuration file:</p>
                        <CodeBlock language="bash" :code="openSshConfig" />
                        <br>
                        <p class="mb-4">2. Find and modify the following settings:</p>
                        <CodeBlock language="bash" :code="modifySshConfig" />
                        <br>
                        <p class="mb-4">3. Restart the SSH service to apply the changes:</p>
                        <CodeBlock language="bash" :code="restartSsh" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue'
import CodeBlock from '@/components/docs/CodeBlock.vue'

const generateSshKey = `# Generate a new SSH key pair
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

const specifyKeyFile = `# Specify the file to save the key
Enter file in which to save the key (/home/you/.ssh/id_rsa):`

const copyPublicKey = `# Copy the public key to the remote server
ssh-copy-id user@remote_host`

const verifyKey = `# Verify the key on the remote server
cat ~/.ssh/authorized_keys`

const openSshConfig = `# Open the SSH configuration file
sudo nano /etc/ssh/sshd_config`

const modifySshConfig = `# Modify or add the following lines
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM yes
PubkeyAuthentication yes`

const restartSsh = `# Restart the SSH service
sudo systemctl restart sshd`
</script>
