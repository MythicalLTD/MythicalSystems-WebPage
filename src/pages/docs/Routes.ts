import type { ComponentOptions } from 'vue';

export const MythicalDashDocs: Array<{ path: string; name: string; component: () => Promise<ComponentOptions> }> = [
    {
        name: 'MythicalDash',
        path: '/docs/mythicaldash',
        component: () => import('@/pages/docs/mythicaldash/Intro.vue'),
    },
    {
        name: 'Quick Start',
        path: '/docs',
        component: () => import('@/pages/docs/Intro.vue'),
    }
];
