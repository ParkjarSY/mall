import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Message = () => import('views/message/message')
const Users = () => import('views/users/users')
const Profile = () => import('views/profile/profile')
const ShopCat = () =>import('views/shopcat/ShopCat')

Vue.use(VueRouter)

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
  }
]

const Router = new VueRouter({
  routes,
  mode:'history',
})


export default Router;
