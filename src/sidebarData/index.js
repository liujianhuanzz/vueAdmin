import components from './components'
import charts from './charts'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer'
      }
    },
    charts,
    components
  ]
}

export default state.items
