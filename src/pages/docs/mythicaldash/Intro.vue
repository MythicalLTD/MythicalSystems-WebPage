<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1
                    class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                >
                    MythicalDash Client Installation Guide
                </h1>

                <div class="grid gap-6 md:grid-cols-2">
                    <Card title="Prerequisites">
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>Node.js (v14 or later)</li>
                            <li>npm (v6 or later) or yarn</li>
                            <li>Git</li>
                        </ul>
                    </Card>

                    <Card title="Step 1: Clone the Repository">
                        <p class="mb-4 text-gray-300">
                            First, clone the MythicalDash client repository to your local machine:
                        </p>
                        <CodeBlock
                            language="bash"
                            code="git clone https://github.com/mythicalsystems/mythicaldash-client.git
  cd mythicaldash-client"
                        />
                    </Card>

                    <Card title="Step 2: Install Dependencies">
                        <p class="mb-4 text-gray-300">Install the required dependencies using npm or yarn:</p>
                        <CodeBlock
                            language="bash"
                            code="npm install
  # or
  yarn install"
                        />
                    </Card>

                    <Card title="Step 3: Configure Environment Variables">
                        <p class="mb-4 text-gray-300">
                            Create a .env file in the root directory and add the following variables:
                        </p>
                        <CodeBlock
                            language="env"
                            code="VUE_APP_API_URL=https://api.mythicaldash.com
  VUE_APP_SOCKET_URL=wss://socket.mythicaldash.com"
                        />
                    </Card>

                    <Card title="Step 4: Run the Development Server">
                        <p class="mb-4 text-gray-300">Start the development server:</p>
                        <CodeBlock
                            language="bash"
                            code="npm run serve
  # or
  yarn serve"
                        />
                        <p class="mt-4 text-gray-300">
                            The client should now be running at
                            <code class="bg-gray-800 px-2 py-1 rounded">http://localhost:8080</code>
                        </p>
                    </Card>

                    <Card title="Step 5: Building for Production">
                        <p class="mb-4 text-gray-300">To build the client for production, run:</p>
                        <CodeBlock
                            language="bash"
                            code="npm run build
  # or
  yarn build"
                        />
                        <p class="mt-4 text-gray-300">
                            The built files will be in the <code class="bg-gray-800 px-2 py-1 rounded">dist</code>
                            directory.
                        </p>
                    </Card>

                    <Card title="Troubleshooting" class="md:col-span-2">
                        <p class="mb-4 text-gray-300">
                            If you encounter any issues during installation or setup, please check our
                            <router-link to="/mythicaldash/faq" class="text-purple-400 hover:underline"
                                >FAQ</router-link
                            >
                            or reach out to our
                            <router-link to="/contact" class="text-purple-400 hover:underline">support team</router-link
                            >.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/docs/CodeBlock.vue';
import Card from '@/components/docs/Card.vue';
</script>
