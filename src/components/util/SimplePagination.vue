<template>
  <div :style="simpleStyle">
    <el-pagination
      layout="total,prev, pager, next"
      :total="tableData.data.length"
      :page-size="tableData.pageSize"
      hide-on-single-page>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'SimplePagination',
  props: ['paginationData', 'width'],
  data() {
    return {
      simpleStyle: {
        width: this.width,
        'text-align': 'center'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
