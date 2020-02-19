import Buying from '../Pages/Buying.vue'
import Classify from '../Pages/Classify.vue'
import Person from '../Pages/Person.vue'
import Profile from '../Pages/Profile.vue'
import Shoping from '../Pages/Shoping.vue'
import recommend from '../Pages/recommend .vue'
export default [
  {
    path: '/buying',
    component: Buying
  },
  {
    path: '/classify',
    component: Classify
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
      }
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