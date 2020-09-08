import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../components/views/inicio'
import Sobre from '../components/views/sobre'
import Contato from '../components/views/contato'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        name: 'inicio',
        path: '/inicio',
        component: Inicio
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: Sobre
    },
    {
        name: 'contato',
        path: '/contato',
        component: Contato
    },
    {
        path: '*',
        redirect: '/inicio'
    }
]

const router = new VueRouter({ routes, mode: 'history' })

export default router