<template>
  <ul>
    <template v-for="(item,index) in menuTreeData">
      <!-- ind title -->
      <li v-if="!item.parentId && item.value" :key="index+'_ind_title'"><span class="title">{{ item.text }}</span></li>
      <!-- group title -->
      <li v-else-if="!item.parentId" :key="index+'_group_title'">
        <a class="title" :href="item.value">{{ item.text }}</a>
      </li>
      <!-- group tip -->
      <li v-else-if=" !item.value" :key="index+'_group_title'"><span class="group_tip">{{ item.text }}</span></li>
      <!-- group item -->
      <li v-else :key="index+'_group_item'">
        <a :class="{group_item:true,active:activeIndex === index}" :href="item.value"
           @mouseenter="changeActiveIndex(index)" @mouseleave="removeActiveIndex()">{{ item.text }}
        </a>
      </li>
      <!-- hasChildren -->
      <menu-tree v-if="item.children" :key="index+'_children'" :menuTreeData="item.children"></menu-tree>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'menu-tree',
  props: ['menuTreeData'],
  data() {
    return {
      activeIndex: null
    }
  },
  methods: {
    changeActiveIndex: function (index) {
      this.activeIndex = index
    },
    removeActiveIndex: function () {
      this.activeIndex = null
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  height: 100%;
}

/*li行*/
li {
  overflow: hidden;
  /*不换行*/
  white-space: nowrap;
  /*省略标记*/
  text-overflow: ellipsis;
}

/*标题*/
.title {
  display: block;
  line-height: 40px;
  text-decoration: none;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
}

/*分组名*/
.group_tip {
  display: block;
  line-height: 26px;
  text-decoration: none;
  font-size: 14px;
  color: #999999;
}

/*导航*/
.group_item {
  display: block;
  line-height: 40px;
  text-decoration: none;
  color: #444444;
  font-size: 14px;
  font-weight: 400;

  &.active {
    color: #409eff
  }
}
</style>
