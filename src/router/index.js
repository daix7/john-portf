import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Portfolio from '../components/Portfolio'
import Hobby from '../components/Hobby'

// import Home from './views/Home/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: Hobby,
  }
  ]
})