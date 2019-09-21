import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Find from '@/components/Find.vue'
import Order from '@/components/Order.vue'
import My from '@/components/My.vue'
import Headpic from '@/components/headpic.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: 'Home'  //设置页面一进来就显示的页面，即重定向到Home组件，这里写的内容是对应组将的component的值
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/find',
            component: Find
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/headpic',
            component: Headpic
        }
    ]
})