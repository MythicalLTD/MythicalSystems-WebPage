<template>
    <div class="min-h-screen bg-[#0a0a0f] text-white">
        <div class="md:pl-64 transition-all duration-300 ease-in-out">
            <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <Card title="Frequently Asked Questions">
                    <h1 class="text-3xl font-bold mb-4">MythicalDash FAQ</h1>
                    <p class="mb-4">
                        Here you'll find answers to common questions and issues about MythicalDash. If you can't find
                        what you're looking for, feel free to join our Discord support server.
                    </p>

                    <!-- FAQ Questions -->
                    <div class="space-y-6">
                        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-700 pb-4">
                            <h2 class="text-xl font-semibold mb-2">{{ faq.question }}</h2>
                            <div class="prose prose-invert" v-html="faq.answer"></div>
                        </div>
                    </div>
                </Card>

                <br />

                <Card title="Need More Help?">
                    <div class="mt-8 flex justify-center space-x-4 items-center">
                        <Button href="https://discord.mythical.systems" class="bg-purple-500 hover:bg-purple-700">
                            <MessageSquare class="inline-block mr-2" /> Join Discord Support
                        </Button>
                        <Button href="https://docs.mythical.systems" class="bg-blue-500 hover:bg-blue-700">
                            <Book class="inline-block mr-2" /> Documentation
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/docs/Card.vue';
import Button from '@/components/ui/Button.vue';
import { MessageSquare, Book } from 'lucide-vue-next';

const faqs = [
    {
        question: 'How do I migrate from another platform?',
        answer: 'We do not support migration from another platform or importing users and servers from Pterodactyl. This is due to Pterodactyl encrypting the passwords. While there are workarounds like creating scripts, this would require manual implementation.',
    },
    {
        question: 'How can I rebuild the dash?',
        answer: `<div class="text-red-500 font-bold mb-2">WARNING: DO NOT RUN THIS IF YOU DO NOT KNOW WHAT IT DOES!</div>
                 <p>This will rebuild your database and delete everything! Make sure you first delete all Ptero users and Ptero servers before running this command:</p>
                 <pre class="bg-gray-800 p-2 mt-2">cd /var/www/mythicaldash
./MythicalDash -environment:rebuild</pre>`,
    },
    {
        question: 'What should I do if I have registration issues / error pages?',
        answer: `Common causes for registration issues include:
                <ul class="list-disc pl-5 mt-2">
                    <li>Using a 3rd party panel (Pelican/Jexactyl/Wisp)</li>
                    <li>Incorrect CloudFlare configuration</li>
                    <li>Trailing slash in panel URL</li>
                    <li>Incorrect API key permissions</li>
                    <li>Using duplicate username/email as Pterodactyl panel</li>
                    <li>Insufficient RAM (less than 1GB)</li>
                </ul>`,
    },
    {
        question: 'How can I fix servers not creating?',
        answer: `<ol class="list-decimal pl-5">
                    <li>Check if MythicalDash is in crontab</li>
                    <li>Check logs using CTRL+D and entering ID: 106</li>
                    <li>Contact support with any error messages from cron</li>
                </ol>`,
    },
    {
        question: 'What are the available page IDs?',
        answer: `<div class="grid grid-cols-2 gap-4">
                    <div>0: Logout (/auth/logout)</div>
                    <div>1: Dashboard (/dashboard)</div>
                    <div>2: Create Server (/server/create)</div>
                    <div>3: AFK (/earn/afk)</div>
                    <div>4: Redeem (/earn/redeem)</div>
                    <div>5: Linkvertise (/earn/linkvertise)</div>
                    <div>6: Store (/store)</div>
                    <div>7: Help Center (/help-center)</div>
                    <div>8: Tickets (/help-center/tickets)</div>
                    <div>9: Terms Of Service (/help-center/tos)</div>
                    <div>10: Privacy Policy (/help-center/pp)</div>
                    <div>11: Leaderboard (/leaderboard)</div>
                    <div>12: User List (/users/list)</div>
                    <div>13: Account (/user/list)</div>
                    <div>14: Connections (/user/connections)</div>
                    <div>15: Payments (/user/payments)</div>
                    <div>100: Admin Overview (/admin/overview)</div>
                    <div>101: Admin Health (/admin/health)</div>
                    <div>102: Admin API (/admin/api)</div>
                    <div>103: Admin Users (/admin/users)</div>
                    <div>104: Admin Servers List (/admin/servers/list)</div>
                    <div>105: Admin Servers Queue List (/admin/servers/queue/list)</div>
                    <div>106: Admin Servers Queue Logs (/admin/servers/queue/logs)</div>
                    <div>107: Admin Redeem (/admin/redeem)</div>
                    <div>108: Admin Locations (/admin/locations)</div>
                    <div>109: Admin Eggs List (/admin/eggs/list)</div>
                    <div>110: Admin Eggs Config (/admin/eggs/config)</div>
                    <div>111: Admin Settings (/admin/settings)</div>
                    <div>112: Admin Tickets (/admin/tickets)</div>
                </div>`,
    },
    {
        question: 'How do I change the default theme?',
        answer: `To change the default theme, you can edit the <code>/view</code> file located in the MythicalDash directory.`,
    },
    {
        question: 'How do I change the/add default language?',
        answer: `To change the default language, you can edit the <code>/lang</code> file located in the MythicalDash directory.`,
    },
    {
        question: 'Is there a youtube video on how to install MythicalDash?',
        answer: `Yes, you can find a video on how to install MythicalDash on YouTube. <a href="https://www.youtube.com/watch?v=8lsBegNFBbE" target="_blank" class="text-blue-500">Watch now</a>`,
    },
];
</script>
