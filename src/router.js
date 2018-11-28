import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search'
import Car from './views/Car'
import Person from './views/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Search',
      name: 'search',
      component: Search
    },
    {
      path: '/Car',
      name: 'car',
      component: Car
    },
    {
      path: '/Person',
      name: 'person',
      component: Person
    }
  ]
})
