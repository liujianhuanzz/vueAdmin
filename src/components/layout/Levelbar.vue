<template>
  <nav class="va-levelbar">
    <h1 class="va-title">{{name}}</h1>

    <div class="va-breadcrumb">
      <breadcrumb :list="list"></breadcrumb>
    </div>
  </nav>
</template>

<style lang="scss">
.va-levelbar{
  padding-top: 13px;
  padding-bottom: 27px;

  h1.va-title{
    font-size: 24px;
    font-weight: 700;
    float: left;
    width: auto;
    color: #fff;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    opacity: 0.9;
  }

  .va-breadcrumb{
    float: right;
    background: none;
    color: #fff;
    padding: 0;
    margin: 0;

    ol.breadcrumb{
      margin: 0;
    }
  }
}
</style>

<script>
import Breadcrumb from 'vue-bulma-breadcrumb'

export default {
  name: 'LevelBar',

  components: {
    Breadcrumb
  },

  data () {
    return {
      list: null
    }
  },

  created () {
    this.getList()
  },

  computed: {
    name () {
      return this.$route.name
    }
  },

  methods: {
    getList () {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched)
      }
      this.list = matched
    }
  },

  watch: {
    $route () {
      this.getList()
    }
  }
}
</script>
