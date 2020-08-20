<template>
  <div @mouseenter="changeActive($event,true)" @mouseleave="changeActive($event,false)" :class="activeStyle">
    <slot></slot>
    <div class="block bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block',
  data() {
    return {
      activeStyle: 'block',
      bottomBool: false
    }
  },
  methods: {
    changeActive($event, bool) {
      this.activeStyle = bool ? 'block hover' : 'block'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  background: #ffffff;
  font-size: 14px;

  &.hover {
    box-shadow: 0 0 8px 2px rgba(232, 237, 250, 0.6)
  }

  .bottom {
    border-left: none;
    border-right: none;
    border-bottom: none;
    height: 30px;
    line-height: 30px;
    font-size: 11px;
    vertical-align: middle;
    text-align: center;
  }
}
</style>
