import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'Test', component: () => import('../components/pages/Home-Page/Home') },
        { path: '/test', name: 'Test', component: () => import('../components/pages/Test-Page/Test') },

    ]
});
export default router;