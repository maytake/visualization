export default [
    {
        path: '/',
        redirect: '/canku',
    },

    {
        path: '/canku',
        component: () =>
            import('@/views/index.vue'),
        hideInMenu: true,
        layout: false,
    },
];