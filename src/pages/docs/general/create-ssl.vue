<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

                <div class="space-y-8">
                    <h1 class="text-4xl font-bold mb-6 text-purple-400">Creating SSL Certificates</h1>

                    <Card title="Installing Certbot">
                        <p class="mb-4">To begin, we will install certbot, a simple script that automatically renews our certificates and allows much easier creation of them. The command below is for Ubuntu distributions, but you can always check Certbot's official site for installation instructions. We have also included a command below to install certbot's Apache plugin so you won't have to stop your webserver.</p>
                        <CodeBlock language="bash" :code="installCertbot" />
                    </Card>

                    <Card title="Oracle Cloud Setup">
                        <p class="mb-4">Run this on your server if you use Oracle Cloud:</p>
                        <CodeBlock language="bash" :code="oracleCloudSetup" />
                    </Card>

                    <Card title="Creating a Certificate">
                        <p class="mb-4">After installing the certbot, we need to generate a certificate. There are a couple of ways to do that, but the easiest is to use the web server-specific certbot plugin you just installed. For Wings-only machines that don't need a web server, use the standalone or DNS method of the certbot as you don't need a web server for it.</p>
                        <p class="mb-4">Then, in the command below, you should replace example.com with the domain you would like to generate a certificate for. When you have multiple domains you would like certificates for, simply add more -d anotherdomain.com flags to the command. You can also look into generating a wildcard certificate but that is not covered in this tutorial.</p>
                        <p class="mb-4">HTTP challenge requires you to expose port 80 for the challenge verification.</p>
                        <CodeBlock language="bash" :code="httpChallenge" />
                        <p class="mt-4">DNS challenge requires you to create a new TXT DNS record to verify domain ownership, instead of having to expose port 80. The instructions are displayed when you run the certbot command below.</p>
                        <br><CodeBlock language="bash" :code="dnsChallenge" />
                    </Card>

                    <Card title="Auto Renewal">
                        <p class="mb-4">You'll also probably want to configure the automatic renewal of certificates to prevent unexpected certificate expirations. You can open crontab with sudo crontab -e and add the line from below to the bottom of it for attempting renewal every day at 23 (11 PM).</p>
                        <CodeBlock language="bash" :code="autoRenewal" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue'
import CodeBlock from '@/components/docs/CodeBlock.vue'

const installCertbot = `sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx`

const oracleCloudSetup = `sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -t nat -F
sudo iptables -t mangle -F
sudo iptables -F
sudo iptables -X
iptables-save > /etc/iptables/rules.v4`

const httpChallenge = `# Nginx
certbot certonly --nginx -d example.com
# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.
certbot certonly --standalone -d example.com`


const dnsChallenge = `certbot -d example.com --manual --preferred-challenges dns certonly`

const autoRenewal = `0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"`
</script>
