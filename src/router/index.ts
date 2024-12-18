import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Index.vue'),
    },
    {
        path: '/terms',
        name: 'Terms & Conditions',
        component: () => import('@/pages/legal/Terms.vue'),
    },
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: () => import('@/pages/legal/Privacy.vue'),
    },
    {
        path: '/eula',
        name: 'End User License Agreement',
        component: () => import('@/pages/legal/Eula.vue'),
    },
    {
        path: '/branding',
        name: 'Branding Guidelines',
        component: () => import('@/pages/Branding.vue'),
    },
    {
        path: '/mythicalhosting',
        name: 'MythicalHosting',
        component: () => import('@/pages/MythicalHosting.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/errors/NotFound.vue'),
    },
];

import { MythicalDashDocs } from '@/pages/docs/Routes';

routes.push(
    ...MythicalDashDocs.map((route) => ({
        ...route,
        component: () => route.component().then((module) => module.default || module),
    })),
);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
