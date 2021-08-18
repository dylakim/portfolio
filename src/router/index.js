import VueRouter from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';

export default new VueRouter({
    mode: 'history',
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
        {
            path: '*',
            redirect: '/',
            component: LandingPage,
        }
    ]
});
