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
      component: function(resolve){
        require(['../views/charts/column'],resolve)
      }
    },
    {
      path: '/charts/scatter',
      name: 'scatter',
      component: function(resolve){
        require(['../views/charts/scatter'],resolve);
      }
    },
    /*components*/
    {
      path: '/components',
      redirect: '/components/steps'
    },
    {
      path: '/components/steps',
      name: 'steps',
      component: function(resolve){
        require(['../views/components/steps'],resolve)
      }
    },
    /*uifeatures*/
    {
      path: '/uifeatures',
      redirect: '/uifeatures/buttons'
    },
    {
      path: '/uifeatures/buttons',
      name: 'buttons',
      component: function(resolve){
        require(['../views/uifeatures/buttons'],resolve)
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
// Menu should have 2 levels.
