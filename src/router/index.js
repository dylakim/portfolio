import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';

export default createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            path: '/',
            component: LandingPage,
        },
        {
            path: '/project/:projectID',
            component: ProjectPage,
            props: true,
        },
        // {
        //     path: '*',
        //     redirect: '/',
        //     component: LandingPage,
        // }
    ]
});
