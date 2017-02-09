export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },

  children: [
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump'
      },
      component: ''
    }
  ]
}
