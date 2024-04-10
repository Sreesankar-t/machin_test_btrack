import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/class',
    name: 'about',
  
    component: () => import( '../views/class/Class.vue')
  },
  {
    path: '/students',
    name: 'students',
  
    component: () => import( '../views/Students/Students.vue')
  },
  {
    path: '/find-student',
    name: 'findStudent',
  
    component: () => import( '../components/FindStudent.vue')
  },
  {
    path: '/find-student2',
    name: 'findStudent2',
  
    component: () => import( '../components/FindingWithStandard.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
