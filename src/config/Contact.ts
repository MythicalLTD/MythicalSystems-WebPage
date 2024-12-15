import { Instagram, Mail, MessageSquare } from 'lucide-vue-next';

export const contacts = [
    {
        platform: 'Instagram',
        icon: Instagram,
        description: 'Follow us for updates and behind-the-scenes content',
        link: 'https://www.instagram.com/nayskutzu.official/',
        buttonText: 'Follow on Instagram',
    },
    {
        platform: 'Discord',
        icon: MessageSquare,
        description: 'Join our community for support and discussions',
        link: 'https://discord.mythical.systems',
        buttonText: 'Join Discord Server',
    },
    {
        platform: 'Email',
        icon: Mail,
        description: 'Reach out to us directly for inquiries',
        link: 'mailto:hello@mythicalsystems.com',
        buttonText: 'Send an Email',
    },
];
