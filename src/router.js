import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/cats',
            component: () => import('./components/Cats.vue')
        },
        {
            path: '/dogs',
            component: () => import('./components/Dogs.vue')
        },
        {
            path: '/pets',
            component: () => import('./components/Pets.vue')
        },
        {
            path: '/game',
            component: () => import('./components/CanvasComp.vue')
        }
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }

})