<template>
  <div>
    <h2>菜单配置</h2>
    <h3>树形节点</h3>
    <el-collapse style="width: 50%">
      <el-collapse-item v-for="(item,index) in treeDataGroup" :title="item.key" :key="item.key">
        <el-tree show-checkbox :data="item.value" :node-key="item.key" :ref="'tree-'+index"
                 draggable default-expand-all :expand-on-click-node="false" highlight-current check-strictly
                 @node-drag-start="handleDragStart" @node-drop="handleDrop">
          <span class="tree-node" slot-scope="{ node, data }">
            <el-input v-show="data.editStatus" v-model.trim="data.text" @blur="editBlur($event,data)"
                      placeholder="菜单内容"></el-input>
            <span v-show="data.errorStatus" style="color: #ff0000">* 不得为空</span>
            <span v-show="!data.editStatus">{{ data.text }}</span>
            <span>
              <el-button type="text" size="mini" @click="append($event,data,item.type)">Append</el-button>
              <el-button type="text" size="mini" @click="edit(data)">Edit</el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
            </span>
          </span>
        </el-tree>
        <div class="toolBar">
          <el-button size="mini" round icon="el-icon-edit" @click="editMenu(index)"></el-button>
          <el-button size="mini" round icon="el-icon-check" @click="saveMenu"></el-button>
          <el-button size="mini" round icon="el-icon-delete"></el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
    <h3>键值匹配</h3>
    <el-table :data="editTable.editSearchData" style="width: 50%">
      <el-table-column label="菜单名称" prop="text"></el-table-column>
      <el-table-column label="路由地址" prop="value"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="searchEditKey" size="mini" placeholder="输入关键字搜索" @blur="searchEditTable"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="width: 50%;text-align: center;">
      <el-pagination
        :page-size="5"
        layout="total, prev, pager, next"
        :total="editTable.editData.length">>
      </el-pagination>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MenuConfig',
  // components: {Block},
  data() {
    return {
      // 菜单节点数据
      treeDataGroup: [{}],
      // 菜单键值数据
      editTable: {editData: [{}], editSearchData: [{}], index: '1'},
      // 菜单搜索
      searchEditKey: '',
      // 增加菜单数据
      insertMenuList: [],
      // 删除菜单数据
      deleteMenuList: [],
      // 更新菜单数据
      updateMenuList: [],
      // 移动节点数据
      moveNodeList: []
    }
  },
  mounted() {
    // 初始化数据
    this.initData()
  },
  methods: {
    initData() {
      this.axios.get('/core/menu/typeGroup').then(result => {
        this.treeDataGroup = result.data
      })
      this.axios.get('/core/menu').then(result => {
        this.editTable.editData = this.editTable.editSearchData = result.data
      })
    },
    // 添加节点
    append($event, data, type) {
      const newNode = {parentId: data.id, editStatus: true, addStatus: true, type: type}
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newNode)
    },
    edit(data) {
      if (data.text) {
        this.$set(data, 'editStatus', !data.editStatus)
      }
    },
    // 删除节点
    remove(node, data) {
      // 确认节点位置
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(item => item.id === data.id)
      // 删除列表
      this.deleteMenuList.push(children[index])
      // 截取
      children.splice(index, 1)
    },
    // 改变编辑状态
    editBlur($event, data) {
      // 校验状态 span
      if (!data.text) {
        this.$set(data, 'errorStatus', true)
      } else {
        this.$set(data, 'errorStatus', false)
        data.editStatus = !data.editStatus
        if (data.addStatus) {
          this.handleExist(this.insertMenuList, data)
        } else {
          this.handleExist(this.updateMenuList, data)
        }
      }
    },
    // 表格数据模糊搜索 - 小写
    searchEditTable() {
      const lowerCase = this.searchEditKey.toLowerCase()
      this.editTable.editSearchData = this.editTable.editData.filter(data => {
        if (!this.searchEditKey) return true
        const textBool = data.text.toLowerCase().includes(lowerCase)
        // value = null
        if (data.value) {
          return textBool || data.value.toLowerCase().includes(lowerCase)
        } else {
          return textBool
        }
      })
      console.log(this.editTable.editData)
    },
    handleDragStart(node) {
      console.log('drag start', node)
    },
    handleDrop(draggingNode, dropNode, dropType) {
      console.log('tree drop: ', dropNode, dropType)
    },
    editMenu(index) {
      if (index != null) {
        const treeData = this.$refs['tree-' + index][0].getCheckedNodes()
        for (const item of treeData) {
          if (item.text) {
            this.$set(item, 'editStatus', item.editStatus == null ? true : !item.editStatus)
          }
        }
      }
    },
    // 提交菜单变更
    saveMenu() {
      if (!this.checkMenuStatus()) {
        this.$notify({
          title: '错 误',
          message: '菜单没有任何更改',
          type: this.messageType.error
        })
      }
      if (this.insertMenuList.length > 0) {
        // 增加
        this.axios.post('/core/menu', this.insertMenuList).then(result => {
          this.$message.success(result.message)
          this.insertMenuList.length = 0
        })
      }
      // 删除
      if (this.deleteMenuList.length > 0) {
        this.axios.delete('/core/menu', this.deleteMenuList).then(result => {
          this.$message.success(result.message)
          this.deleteMenuList.length = 0
        })
      }
      // 更新
      if (this.updateMenuList.length > 0) {
        this.axios.put('/core/menu', this.updateMenuList).then(result => {
          this.$message.success(result.message)
          this.updateMenuList.length = 0
        })
      }
      // 移动
    },
    // 校验
    checkMenuStatus() {
      return this.insertMenuList.length > 0 || this.deleteMenuList.length > 0 || this.updateMenuList.length > 0
    },
    // 添加元素(去重)
    handleExist(list, data) {
      const indexOf = list.indexOf(data)
      if (indexOf !== -1 && list.length > 0) {
        list.splice(indexOf, 1)
      }
      list.push(data)
    }
  }
}
</script>

<style type="stylesheet/scss" lang="scss" scoped>
.tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}

::v-deep .el-input__inner {
  width: 130px;
  height: 24px;
  transition: 2s;
}

.el-input {
  width: 130px;
}

.toolBar {
  text-align: center;
}
</style>
