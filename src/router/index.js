import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';

export default createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        const timeoutDuration = savedPosition ? 380 : 350;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(savedPosition || { top: 0 });
            }, timeoutDuration)
        });
    },
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
        },
        {
            path: '/project/:projectID',
            component: ProjectPage,
            props: true,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        }
    ]
});
