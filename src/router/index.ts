import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import SearchPage from '@/views/SearchPage.vue';
import LibraryPage from '@/views/LibraryPage.vue';

const routes: Array<RouteRecordRaw> = [
{
path: '/',
redirect: '/tabs/tab1'
},
{
path: '/tabs/',
component: TabsPage,
children: [
{
path: '',
redirect: '/tabs/tab1'
},
{
path: 'tab1',
component: () => import('@/views/Tab1Page.vue')
},
{
path: 'tab2',
component: () => import('@/views/Tab2Page.vue')
},
{
path: 'tab3',
component: () => import('@/views/Tab3Page.vue')
},
{
path:'tab5',
component:LibraryPage
}
]
},
{
path:'/search',
name:'search',
component:SearchPage
}











]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router
