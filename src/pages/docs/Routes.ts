import type { ComponentOptions } from 'vue';

export const MythicalDashDocs: Array<{ path: string; name: string; component: () => Promise<ComponentOptions> }> = [
    {
        name: 'MythicalDash Intro',
        path: '/docs/mythicaldash/intro',
        component: () => import('@/pages/docs/mythicaldash/Intro.vue'),
    },
    {
        name: 'MythicalDash Installation',
        path: '/docs/mythicaldash/installation',
        component: () => import('@/pages/docs/mythicaldash/Install.vue'),
    },
    {
        name: 'MythicalDash - Debian',
        path: '/docs/mythicaldash/os/debian',
        component: () => import('@/pages/docs/mythicaldash/os/debian.vue'),
    },
    {
        name: 'MythicalDash - Ubuntu',
        path: '/docs/mythicaldash/os/ubuntu',
        component: () => import('@/pages/docs/mythicaldash/os/ubuntu.vue'),
    },
    {
        name: 'MythicalDash - WebServer',
        path: '/docs/mythicaldash/webserver',
        component: () => import('@/pages/docs/mythicaldash/Webserver.vue'),
    },
    {
        name: 'MythicalDash - Congratulations',
        path: '/docs/mythicaldash/congratulations',
        component: () => import('@/pages/docs/mythicaldash/Congratulations.vue'),
    },
    {
        name: 'MythicalDash - Update',
        path: '/docs/mythicaldash/update',
        component: () => import('@/pages/docs/mythicaldash/Update.vue'),
    },
    {
        name: 'MythicalDash - Uninstall',
        path: '/docs/mythicaldash/uninstall',
        component: () => import('@/pages/docs/mythicaldash/Uninstall.vue'),
    },
    {
        name: 'MythicalDash - FAQ',
        path: '/docs/mythicaldash/faq',
        component: () => import('@/pages/docs/mythicaldash/FAQ.vue'),
    },
    {
        name: 'Quick Start - MythicalDash',
        path: '/docs',
        component: () => import('@/pages/docs/Intro.vue'),
    },
    {
        name: 'Generic - Create SSL',
        path: '/docs/general/create-ssl',
        component: () => import('@/pages/docs/general/create-ssl.vue'),
    },
    {
        name: 'Generic - Config MySQL',
        path: '/docs/general/config-mysql',
        component: () => import('@/pages/docs/general/setup-mysql.vue'),
    },
    {
        name: 'Generic - Config Date',
        path: '/docs/general/config-date',
        component: () => import('@/pages/docs/general/setup-date.vue'),
    },
    {
        name: 'Generic - Config SSH',
        path: '/docs/general/config-ssh',
        component: () => import('@/pages/docs/general/setup-ssh-key.vue'),
    },
    {
        name: 'MythicalAdmin - Intro',
        path: '/docs/mythicaladmin/intro',
        component: () => import('@/pages/docs/mythicaladmin/Intro.vue'),
    },
    {
        name: 'MythicalAdmin - Customize',
        path: '/docs/mythicaladmin/customize',
        component: () => import('@/pages/docs/mythicaladmin/Customize.vue'),
    },
    {
        name: 'MCUtils - Intro',
        path: '/docs/mcutils/intro',
        component: () => import('@/pages/docs/mcutils/Intro.vue'),
    },
    {
        name: 'MCUtils - Standalone',
        path: '/docs/mcutils/standalone',
        component: () => import('@/pages/docs/mcutils/Standalone.vue'),
    },
    {
        name: 'MCUtils - Blueprint',
        path: '/docs/mcutils/blueprint',
        component: () => import('@/pages/docs/mcutils/Blueprint.vue'),
    },
    {
        name: 'MythicalDash Remastered - Intro',
        path: '/docs/mythicaldash-remastered/intro',
        component: () => import('@/pages/docs/mythicaldash-remastered/Intro.vue'),
    },
    {
        name: 'MythicalDash Remastered - Installation',
        path: '/docs/mythicaldash-remastered/installation',
        component: () => import('@/pages/docs/mythicaldash-remastered/Install.vue'),
    },


];
