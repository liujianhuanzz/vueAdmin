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

const alertComponent = resolve => {
  require.ensure(['../views/components/alert'], () => {
    resolve(require('../views/components/alert'))
  })
}

const messageComponent = resolve => {
  require.ensure(['../views/components/message'], () => {
    resolve(require('../views/components/message'))
  })
}

const messageBoxComponent = resolve => {
  require.ensure(['../views/components/messageBox'], () => {
    resolve(require('../views/components/messageBox'))
  })
}

const notificationComponent = resolve => {
  require.ensure(['../views/components/notification'], () => {
    resolve(require('../views/components/notification'))
  })
}

const buttonsComponent = resolve => {
  require.ensure(['../views/uifeatures/buttons'], () => {
    resolve(require('../views/uifeatures/buttons'))
  })
}

const tableComponent = resolve => {
  require.ensure(['../views/uifeatures/table'], () => {
    resolve(require('../views/uifeatures/table'))
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
  {
    path: '/components/alert',
    name: 'alert',
    component: alertComponent
  },
  {
    path: '/components/message',
    name: 'message',
    component: messageComponent
  },
  {
    path: '/components/messageBox',
    name: 'messageBox',
    component: messageBoxComponent
  },
  {
    path: '/components/notification',
    name: 'notification',
    component: notificationComponent
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
    path: '/uifeatures/table',
    name: 'table',
    component: tableComponent
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
