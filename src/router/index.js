import Vue from 'vue'
import Router from 'vue-router'
import menu from '../sidebarData/index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    /*dashboard*/
    {
      path: '/dashboard',
      name: 'dashboard',
      component: require('../views/dashboard')
    },
    /*charts*/
    {
      path: '/charts',
      redirect: '/charts/column'
    },
    {
      path: '/charts/column',
      name: 'column',
      component: require('../views/charts/column')
    },
    {
      path: '/charts/scatter',
      name: 'scatter',
      component: require('../views/charts/scatter')
    },
    /*components*/
    {
      path: '/components',
      redirect: '/components/steps'
    },
    {
      path: '/components/steps',
      name: 'steps',
      component: require('../views/components/steps')
    },
    /*uifeatures*/
    {
      path: '/uifeatures',
      redirect: '/uifeatures/buttons'
    },
    {
      path: '/uifeatures/buttons',
      name: 'buttons',
      component: require('../views/uifeatures/buttons')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
// Menu should have 2 levels.
