import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home')
  },  
  {
    path: '/mkApmt',
    name: 'mkApmt',
    component: () => import('../components/MakeAppointment')
  },  
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ViewAppointment')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditAppointment')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../components/Contacts')
  }, 
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../components/Reviews')
  }, 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router