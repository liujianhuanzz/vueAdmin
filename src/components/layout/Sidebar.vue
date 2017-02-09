<template>
  <aside class="va-sidebar">
    <ul class="va-sidebar-list">
      <li v-for="(item, index) in menu" class="va-sidebar-list-item" v-on:mouseenter="sidebarHover($event)" v-on:mouseleave="sidebarHoverLeave($event)">
        <router-link class="va-sidebar-list-link" :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path" @click.native="toggle(index, item)">
          <span><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
        <a class="va-sidebar-list-link" :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">
          <span><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </li>
    </ul>
    <div class="sidebar-hover-elem"></div>
  </aside>
</template>

<script>
import menu from '../../sidebarData/index'
import Expanding from 'vue-bulma-expanding'

export default {
  components: {
    Expanding
  },

  props: {
    show: Boolean
  },

  data () {
    return {
      isReady: false,
      menu: menu
    }
  },

  mounted () {
    let route = this.$route
    if (route.name) {
      this.isReady = true
      this.shouldExpandMatchItem(route)
    }
  },

  methods: {
    sidebarHover (evt){
      let index = Math.floor((evt.clientY - 84) / 42);
      evt.target.parentNode.nextElementSibling.style.top = 18 + index * 42 + 'px';
    },
    sidebarHoverLeave(evt){
      evt.target.parentNode.nextElementSibling.style.top = '-200px';
    },
    isExpanded (item) {
      return item.meta.expanded
    },

    toggle (index, item) {
      this.expandMenu({
        index: index,
        expanded: !item.meta.expanded
      })
    },

    shouldExpandMatchItem (route) {
      let matched = route.matched
      let lastMatched = matched[matched.length - 1]
      let parent = lastMatched.parent || lastMatched
      const isParent = parent === lastMatched

      if (isParent) {
        const p = this.findParentFromMenu(route)
        if (p) {
          parent = p
        }
      }

      if ('expanded' in parent.meta && !isParent) {
        this.expandMenu({
          item: parent,
          expanded: true
        })
      }
    },

    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    },

    findParentFromMenu (route) {
      const menu = this.menu
      for (let i = 0, l = menu.length; i < l; i++) {
        const item = menu[i]
        const k = item.children && item.children.length
        if (k) {
          for (let j = 0; j < k; j++) {
            if (item.children[j].name === route.name) {
              return item
            }
          }
        }
      }
    }
  },

  watch: {
    $route (route) {
      this.isReady = true
      this.shouldExpandMatchItem(route)
    }
  }

}
</script>

<style lang="scss">
.va-sidebar{
  width: 180px;
  min-height: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 66px;
  z-index: 1000;
  background-color: #282828;

  .va-sidebar-list{
    margin: 0;
    padding: 18px 0 0 0;
    list-style: none;

    .va-sidebar-list-item{
      display: block;
      position: relative;
      float: none;
      padding: 0;
    }

    a.va-sidebar-list-link{
      display: block;
      height: 42px;
      text-shadow: none;
      font-size: 13px;
      text-decoration: none;
      text-align: left;
      color: #fff;
      line-height: 42px;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;

      span i{
        margin-left: 20px;
        margin-right: 18px;
        width: 16px;
        display: inline-block;
      }
    }
    a:hover{
      cursor: pointer;
      color: #00abff;
    }
  }

  .sidebar-hover-elem {
    display: block;
    width: 4px;
    height: 42px;
    background: #00abff;
    position: absolute;
    left: 176px;
    top: -200px;
    transition: all 0.5s ease;
    transition-property: top, height;
  }
}
</style>
