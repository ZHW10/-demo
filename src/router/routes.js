import Buying from '../Pages/Buying.vue'
import Classify from '../Pages/Classify.vue'
import Person from '../Pages/Person.vue'
import Profile from '../Pages/Profile.vue'
import Shoping from '../Pages/Shoping.vue'
import recommend from '../Pages/recommend .vue'
import classifyContain from '../Pages/classifyContain.vue'
import Search from '../Pages/Search.vue'
export default [
  {
    path: '/buying',
    component: Buying
  },
  {
    path: '/search',
    component:Search,
  },
  {
    path: '/classify',
    component: Classify,
    children:[
      {
        path: '/classify/cateList',
        component: classifyContain,
        props: (route) => ({ query: route.query.categoryId })
      },
      {
        path: '/classify',
        redirect:'/classify/cateList'
      }
    ]
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '/Profile/list',
        component: recommend,
        props: (route) => ({ query: route.query.categoryId })
      },
    ]
  },
  {
    path: '/shoping',
    component: Shoping
  },
  {
    path: '/',
    redirect: 'Profile'
  }
]