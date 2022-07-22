import { createRouter, createWebHistory } from 'vue-router'

import { loadLocaleOnInitGuard } from './_utils/loadLocaleOnInit.guard'
import HelloWord from '../views/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HelloWord,
    beforeEnter: loadLocaleOnInitGuard,
    params: {
      msg: 'Vite Vue'
    },
    meta: {
        dict: 'preview'
    }
  },
]

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL  ),
  routes
} )


export default router