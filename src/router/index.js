import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rigister from '../views/single-page/Rigister.vue'
import AddBrand from '../views/Brand/AddBrand.vue'
import Login from '../views/single-page/Login.vue'
import productdetails from '../views/product/productdetails'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login 
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/rigister',
    name:'Rigister',
    component:Rigister
  },
  {
    path:'/admin/brand/add',
    name:'AddBrand',
    component:AddBrand
  },
 
  {
    path:'/product/product-details/:id',
    name:'product-details',
    component:productdetails
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
