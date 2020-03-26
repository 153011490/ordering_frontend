import Vue from 'vue'
import VueRouter from 'vue-router'
import SellerPage from '../views/SellerPage.vue'
import BuyerPage from '../views/BuyerPage.vue'
import Login from '../components/common/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sellerpage',
    name: 'SellerPage',
    component: SellerPage
  },
  {
    path: '/buyerpage',
    name: 'BuyerPage',
    component: BuyerPage
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/ordering',
  routes
})

export default router
