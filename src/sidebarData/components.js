export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },

  children: [
    {
      name: 'Steps',
      path: 'steps'
    },
    {
      name: 'Loading',
      path: 'loading'
    },
    {
      name: 'Alert',
      path: 'alert'
    },
    {
      name: 'Message',
      path: 'message'
    },
    {
      name: 'MessageBox',
      path: 'messageBox'
    }
  ]
}
