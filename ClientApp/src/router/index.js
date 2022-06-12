import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/HelloWorld.vue'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash

      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (to.matched.some((m) => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
    }
    return position
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
    },
    meta: { scrollToTop: true },
    // props: {
    //   title: 'Heading',
    //   subTitle: 'Base Template',
    //   description: 'version: Sqeel alpha 0.0.1',
    // },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

export default router
