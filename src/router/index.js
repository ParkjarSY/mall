import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)
const Home = () => import('views/home/home')
const Message = () => import('views/message/message')
const Users = () => import('views/users/users')
const Profile = () => import('views/profile/profile')
const ShopCat = () => import('views/shopcat/ShopCat')
const Detail = () => import('views/detail/detail')



const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/message',
    component:Message,
  },
  {
    path:'/users',
    component:Users,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/shopcat',
    component:ShopCat,
  },
  {
    path:'/detail/:id',
    component:Detail,
  },

]

const Router = new VueRouter({
  routes,
  mode:'history',
})


export default Router;
