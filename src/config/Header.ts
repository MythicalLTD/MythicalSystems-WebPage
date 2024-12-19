import { ref } from 'vue';

export const navItems = ref([
    {
        name: 'Products',
        link: '#',
        submenu: [
            { name: 'MythicalDash V3', link: 'https://www.mythical.systems/docs/mythicaldash-v3/install' },
            { name: 'MythicalClient', link: 'https://mythicalclient.mythical.systems' },
            {
                name: 'MythicalUI - Pterodactyl Admin Theme',
                link: 'https://www.sourcexchange.net/products/mythicalui-pterodactyl-theme',
            },
            {
                name: 'MythicalUI - Uptime Kuma',
                link: 'https://www.sourcexchange.net/products/mythicalui-uptime-kuma-8-theme-pack',
            },
            { name: 'MythicalLogin', link: 'https://www.sourcexchange.net/products/mythicallogin-full-srccompiled' },
            { name: 'PylexWatch', link: 'https://pylex.watch' },
            { name: 'Gamster.org', link: 'https://gamster.org' },
            { name: 'MythicalPics', link: 'https://i.mythical.systems' },
        ],
        open: false,
    },
    {
        name: 'Links',
        link: '#',
        submenu: [
            { name: 'Docs', link: '/docs'},
            { name: 'Status Page', link: 'https://status.mythical.systems' },
            { name: 'Pterodactyl Panel', link: 'https://panel.mythical.systems' },
            { name: 'Billing Area', link: 'https://billing.mythical.systems' },
            { name: 'Plesk Panel', link: 'https://webhost.mythicalsystems.xyz' },
            { name: 'PhpMyAdmin', link: 'https://pma.mythical.systems' },
            { name: 'MythicalPics', link: 'https://i.mythical.systems' },
            { name: 'Order', link: 'https://billing.mythical.systems' },
        ],
        open: false,
    },
    {
        name: 'MythicalHosting',
        link: '#',
        submenu: [
            { name: 'Home', link: '/mythicalhosting' },
            { name: 'VPS Hosting', link: 'https://billing.mythical.systems/docker-vms' },
            { name: 'Web Hosting', link: 'https://billing.mythical.systems/webhosting' },
            { name: 'Minecraft Hosting', link: 'https://billing.mythical.systems/minecraft-paper' },
            { name: 'Discord Bot Hosting', link: 'https://billing.mythical.systems/discord-bot' },
            { name: 'Dedicated Servers', link: 'https://billing.mythical.systems/dedicated' },
        ],
        open: false,
    },
    {
        name: 'Contact',
        link: '#',
        submenu: [
            { name: 'Instagram', link: 'https://www.instagram.com/nayskutzu.official/' },
            { name: 'Discord', link: 'https://discord.mythical.systems' },
            { name: 'Email', link: 'mailto:hello@mythicalsystems.xyz' },
        ],
        open: false,
    },
    {
        name: 'Legal',
        link: '#',
        submenu: [
            { name: 'Terms', link: '/terms' },
            { name: 'Privacy', link: '/privacy' },
            { name: 'EULA', link: '/eula' },
        ],
        open: false,
    },
]);
