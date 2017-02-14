import Vue from 'vue'
import Router from 'vue-router'
import menu from '../sidebarData/index'

Vue.use(Router)

const columnComponent = resolve => {
  require.ensure(['../views/charts/column'], () => {
    resolve(require('../views/charts/column'))
  })
}

const scatterComponent = resolve => {
  require.ensure(['../views/charts/scatter'], () => {
    resolve(require('../views/charts/scatter'))
  })
}

const stepsComponent = resolve => {
  require.ensure(['../views/components/steps'], () => {
    resolve(require('../views/components/steps'))
  })
}

const loadingComponent = resolve => {
  require.ensure(['../views/components/loading'], () => {
    resolve(require('../views/components/loading'))
  })
}

const buttonsComponent = resolve => {
  require.ensure(['../views/uifeatures/buttons'], () => {
    resolve(require('../views/uifeatures/buttons'))
  })
}

const routes = [
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
    component: columnComponent
  },
  {
    path: '/charts/scatter',
    name: 'scatter',
    component: scatterComponent
  },
  /*components*/
  {
    path: '/components',
    redirect: '/components/steps'
  },
  {
    path: '/components/steps',
    name: 'steps',
    component: stepsComponent
  },
  {
    path: '/components/loading',
    name: 'loading',
    component: loadingComponent
  },
  /*uifeatures*/
  {
    path: '/uifeatures',
    redirect: '/uifeatures/buttons'
  },
  {
    path: '/uifeatures/buttons',
    name: 'buttons',
    component: buttonsComponent
  },
  {
    path: '*',
    redirect: '/'
  }
];

const vuerouer =  new Router({
  linkActiveClass: 'is-active',
  routes: routes
})

export default vuerouer;
// Menu should have 2 levels.
