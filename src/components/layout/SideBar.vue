<!--侧边菜单栏-->
<template>
  <div>
    <menu-tree :menuTreeData="menuTreeData"></menu-tree>
  </div>
</template>

<script>
import MenuTree from '@/components/util/MenuTree'

export default {
  name: 'SideBar',
  components: {MenuTree},
  data() {
    return {
      menuTreeData: [{}]
    }
  },
  created() {
    this.initMenu()
  },
  methods: {
    initMenu() {
      if (this.$route.meta.menuType) {
        this.axios.get('/core/menu/type/' + this.$route.meta.menuType).then(result => {
          this.menuTreeData = result.data
        })
      }
    }
  },
  watch: {
    $route: function () {
      this.initMenu()
    }
  }
}
</script>
