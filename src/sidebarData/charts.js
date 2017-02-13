export default {
  name: 'Charts',
  path: '/charts',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'Column',
      path: 'column'
    },
    {
      name: 'Scatter',
      path: 'scatter'
    }
  ]
}
