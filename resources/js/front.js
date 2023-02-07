require('./bootstrap');

import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePost from './pages/PagePost';
import PagePosts from './pages/PagePosts';
import Page404 from './pages/Page404';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome,
    },
    {
        path: '/about',
        name: 'about',
        component: PageAbout,
    },
    {
        path: '/posts',
        name: 'postsIndex',
        component: PagePosts,
    },
    {
        path: '/posts/:slug',
        name: 'postsShow',
        component: PagePost,
        props: true,
    },
    {
        path: '*',
        name: 'page404',
        component: Page404,
    }
];

// personalizzazione del vue-router
const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    el: '#root',
    render: h => h(App),
    router
});
