import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage,
        },
        {
            path: '/project/:project',
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
