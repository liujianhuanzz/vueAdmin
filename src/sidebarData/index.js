import components from './components'
import charts from './charts'
import uifeatures from './uifeatures'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer'
      }
    },
    uifeatures,
    charts,
    components
  ]
}

export default state.items
