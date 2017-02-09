<template>
  <aside class="va-sidebar">
    <ul class="va-sidebar-list">
      <li v-for="(item, index) in menu" class="va-sidebar-list-item">
        <router-link class="va-sidebar-list-link" :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path" @click.native="toggle(index, item)">
          <span><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span v-if="item.children && item.children.length">
            <b class="fa fa-angle-down"></b>
          </span>
        </router-link>
        <a class="va-sidebar-list-link" :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">
          <span><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span v-if="item.children && item.children.length">
            <b class="fa fa-angle-down"></b>
          </span>
        </a>
        <expanding v-if="item.children && item.children.length">
          <ul v-show="isExpanded(item)" class="va-sidebar-sublist">
            <li v-for="subItem in item.children" v-if="subItem.path" class="va-sidebar-sublist-item">
              <router-link :to="generatePath(item, subItem)" class="va-sidebar-sublist-link">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
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
      menu: menu
    }
  },

  methods: {
    isExpanded (item) {
      return item.meta.expanded
    },

    toggle (index, item) {
      item.meta.expanded = !item.meta.expanded;
    },

    generatePath (item, subItem) {
      console.log(item.path+":"+subItem.path)
      return `${item.path}/${subItem.path}`
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

      .va-sidebar-sublist{
        position: relative;
        list-style: none;
        padding: 0;

         & > li{
          display: block;
          float: none;
          padding: 0;
          border-bottom: none;
          position: relative;

          .va-sidebar-sublist-link{
            display: block;
            text-shadow: none;
            font-size: 13px;
            color: #fff;
            text-align: left;
            padding-left: 68px;
            height: auto;
            line-height: 29px;
          }
        }
      }
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
      span b{
        display: block;
        opacity: 1;
        width: 14px;
        height: 14px;
        text-shadow: none;
        font-size: 18px;
        position: absolute;
        right: 10px;
        top: 12px;
        padding: 0;
        text-align: center;
      }
    }
    a:hover, a.is-active{
      cursor: pointer;
      color: #00abff;
      opacity: 0.7;
      border-right: 5px solid #00abff;
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
