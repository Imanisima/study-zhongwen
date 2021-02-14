import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: () => import('../components/pages/Home-Page/Home') },
        { path: '/test', name: 'Test', component: () => import('../components/pages/Test-Page/Test') },

        { path: '/Vocabulary', name: 'Vocabulary', component: () => import('../components/pages/Vocab-Page/VocabPage') },
        { path: '/TOCFL1', name: 'VocabL1View', component: () => import('../components/pages/Vocab-Page/VocabLvl1/VocabView') },

        { path: '/Wiki', name: 'GramPage', component: () => import('../components/pages/Grammar-Page/GrammarPage') },
        { path: '/Zhuyin', name: 'Zhuyin', component: () => import('../components/pages/Zhuyin-Page/Zhuyin') },
        

    ]
});
export default router;