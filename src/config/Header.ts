import { ref } from 'vue';

export const navItems = ref([
    {
        name: 'Products & Demos',
        link: '#',
        submenu: [
            { name: 'FeatherPanel', link: 'https://featherpanel.com' },
            { name: 'MythicalDash V3', link: 'https://mythicaldash-v3.mythical.systems' },
            { name: 'MythicalDash Legacy', link: 'https://mythicaldash.mythical.systems' },
            { name: 'MythicalPics', link: 'https://i.mythical.systems' }
        ],
        open: false,
    },
    {
        name: 'Links',
        link: '#',
        submenu: [
            { name: 'Docs', link: '/docs' },
            { name: 'Status Page', link: 'https://status.mythical.systems' },
        ],
        open: false,
    },
    {
        name: 'Contact',
        link: '#',
        submenu: [
            { name: 'Discord', link: 'https://discord.mythical.systems' },
            { name: 'Email', link: 'mailto:hello@mythical.systems' },
        ],
        open: false,
    },
    {
        name: 'Legal',
        link: '#',
        submenu: [
            { name: 'Terms', link: '/terms' },
            { name: 'Privacy', link: '/privacy' },
            { name: 'Branding', link: '/branding' },
        ],
        open: false,
    },
    {
        name: 'Donate',
        submenu: [
            { name: 'Stripe', link: 'https://donate.stripe.com/00gcO2epX5yj2ysfYY' },
            { name: 'PayPal', link: 'https://paypal.me/nayskutzu' },
        ],
        open: false,
    },
]);
