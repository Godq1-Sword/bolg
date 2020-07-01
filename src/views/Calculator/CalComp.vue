<template>
  <el-card class="box-card">
    <div id="role">
      <el-select v-model="value" placeholder="选择武器" value="">
        <el-option
          v-for="item in roles"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div id="armor5">
      <el-table :data="armor5" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'armor5')" fit="none"
                      @click="selectSuit(scope.$index,'armor5')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in armor5Header" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'armor5')" fit="none"
                      @click="toggleImage(scope.$index,index,'armor5')"></el-image>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="jewelry3AndSpecial3">
      <el-table :data="jewelry3" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'jewelry3')" fit="none"
                      @click="selectSuit(scope.$index,'jewelry3')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in jewelry3Header" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'jewelry3')" fit="none"
                      @click="toggleImage(scope.$index,index,'jewelry3')"></el-image>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="special3" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'special3')" fit="none"
                      @click="selectSuit(scope.$index,'special3')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in special3Header" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'special3')" fit="none"
                      @click="toggleImage(scope.$index,index,'special3')"></el-image>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="oddAll">
      <el-table :data="oddSy" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'oddSy')" fit="none"
                      @click="selectSuit(scope.$index,'oddSy')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in oddSyHeader" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'oddSy')" fit="none"
                      @click="toggleImage(scope.$index,index,'oddSy')"></el-image>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="oddXz" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'oddXz')" fit="none"
                      @click="selectSuit(scope.$index,'oddXz')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in oddXzHeader" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'oddXz')" fit="none"
                      @click="toggleImage(scope.$index,index,'oddXz')"></el-image>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="oddSe" fit="fit">
        <el-table-column width="70" label="套装名称">
          <template slot-scope="scope">
            <el-image :src="getSuitImgUrl(scope.$index,'oddSe')" fit="none"
                      @click="selectSuit(scope.$index,'oddSe')"></el-image>
          </template>
        </el-table-column>
        <el-table-column width="30" v-for="(item,index) in oddSeHeader" :key="index" :label="item.label">
          <template slot-scope="scope">
            <el-image :ref="'suit'+scope.$index" :src="getImgUrl(scope.$index,index,'oddSe')" fit="none"
                      @click="toggleImage(scope.$index,index,'oddSe')"></el-image>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
import equipments from '../../js/equipments.js'

export default {
  data() {
    return {
      value: '',
      applyContent: '',
      armor5Header: equipments.armor5Header(),
      armor5: equipments.armor5(),
      jewelry3Header: equipments.jewelry3Header(),
      jewelry3: equipments.jewelry3(),
      special3Header: equipments.special3Header(),
      special3: equipments.special3(),
      oddSyHeader: equipments.oddSeHeader(),
      oddSy: equipments.oddSy(),
      oddXzHeader: equipments.oddXzHeader(),
      oddXz: equipments.oddXz(),
      oddSeHeader: equipments.oddSeHeader(),
      oddSe: equipments.oddSe(),
      roles: [{
        value: 'swordSoul',
        label: '剑魂'
      }, {
        value: 'ghostCry',
        label: '鬼泣'
      }, {
        value: 'redEye',
        label: '红眼'
      }, {
        value: 'swordGhost',
        label: '剑鬼'
      }, {
        value: 'Asrua',
        label: '阿修罗'
      }]
    }
  },
  mounted() {
    // console.log(equipments.jewelry3())
  },
  methods: {
    getSuitImgUrl(row, type) {
      let partId
      switch (type) {
        case 'armor5':
          partId = this.armor5[row].id
          return require('@/assets/images/' + (this.armor5[row].flag ? partId + 'f' : partId) + '.png')
        case 'jewelry3':
          partId = this.jewelry3[row].id
          return require('@/assets/images/' + (this.jewelry3[row].flag ? partId + 'f' : partId) + '.png')
        case 'special3':
          partId = this.special3[row].id
          return require('@/assets/images/' + (this.special3[row].flag ? partId + 'f' : partId) + '.png')
        case 'oddSy':
          partId = this.oddSy[row].id
          return require('@/assets/images/' + (this.oddSy[row].flag ? partId + 'f' : partId) + '.png')
        case 'oddXz':
          partId = this.oddXz[row].id
          return require('@/assets/images/' + (this.oddXz[row].flag ? partId + 'f' : partId) + '.png')
        case 'oddSe':
          partId = this.oddSe[row].id
          return require('@/assets/images/' + (this.oddSe[row].flag ? partId + 'f' : partId) + '.png')
      }
    },
    getImgUrl(row, index, type) {
      let partId
      switch (type) {
        case 'armor5':
          partId = this.armor5[row].items[index].id
          return require('@/assets/images/' + (this.armor5[row].items[index].flag ? partId + 'f' : partId) + '.png')
        case 'jewelry3':
          partId = this.jewelry3[row].items[index].id
          return require('@/assets/images/' + (this.jewelry3[row].items[index].flag ? partId + 'f' : partId) + '.png')
        case 'special3':
          partId = this.special3[row].items[index].id
          return require('@/assets/images/' + (this.special3[row].items[index].flag ? partId + 'f' : partId) + '.png')
        case 'oddSy':
          partId = this.oddSy[row].items[index].id
          return require('@/assets/images/' + (this.oddSy[row].items[index].flag ? partId + 'f' : partId) + '.png')
        case 'oddXz':
          partId = this.oddXz[row].items[index].id
          return require('@/assets/images/' + (this.oddXz[row].items[index].flag ? partId + 'f' : partId) + '.png')
        case 'oddSe':
          partId = this.oddSe[row].items[index].id
          return require('@/assets/images/' + (this.oddSe[row].items[index].flag ? partId + 'f' : partId) + '.png')
      }
    },
    selectSuit(row, type) {
      switch (type) {
        case 'armor5':
          this.armor5[row].flag = !this.armor5[row].flag
          for (let i = 0; i < this.armor5[row].items.length; i++) {
            this.armor5[row].items[i].flag = this.armor5[row].flag
          }
          break
        case 'jewelry3':
          this.jewelry3[row].flag = !this.jewelry3[row].flag
          for (let i = 0; i < this.jewelry3[row].items.length; i++) {
            this.jewelry3[row].items[i].flag = this.jewelry3[row].flag
          }
          break
        case 'special3':
          this.special3[row].flag = !this.special3[row].flag
          for (let i = 0; i < this.special3[row].items.length; i++) {
            this.special3[row].items[i].flag = this.special3[row].flag
          }
          break
        case 'oddSy':
          this.oddSy[row].flag = !this.oddSy[row].flag
          for (let i = 0; i < this.oddSy[row].items.length; i++) {
            this.oddSy[row].items[i].flag = this.oddSy[row].flag
          }
          break
        case 'oddXz':
          this.oddXz[row].flag = !this.oddXz[row].flag
          for (let i = 0; i < this.oddXz[row].items.length; i++) {
            this.oddXz[row].items[i].flag = this.oddXz[row].flag
          }
          break
        case 'oddSe':
          this.oddSe[row].flag = !this.oddSe[row].flag
          for (let i = 0; i < this.oddSe[row].items.length; i++) {
            this.oddSe[row].items[i].flag = this.oddSe[row].flag
          }
          break
      }
    },
    toggleImage(row, index, type) {
      switch (type) {
        case 'armor5':
          this.armor5[row].items[index].flag = !this.armor5[row].items[index].flag
          break
        case 'jewelry3':
          this.jewelry3[row].items[index].flag = !this.jewelry3[row].items[index].flag
          break
        case 'special3':
          this.special3[row].items[index].flag = !this.special3[row].items[index].flag
          break
        case 'oddSy':
          this.oddSy[row].items[index].flag = !this.oddSy[row].items[index].flag
          break
        case 'oddXz':
          this.oddXz[row].items[index].flag = !this.oddXz[row].items[index].flag
          break
        case 'oddSe':
          this.oddSe[row].items[index].flag = !this.oddSe[row].items[index].flag
          break
      }
    }
    // loadData (historyDays) {
    //   this.axios.get('/badHistory', {historyDays: historyDays}).then(result => {
    //   }).catch()
    //   this.axios.get('/clockHistory/Calculator/workTime', {historyDays: historyDays}).then(result => {
    //     if (result.data != null) {
    //       this.percentAge = result.data.percentAge * 100
    //       this.avgWorkTime = result.data.avgWorkTime
    //     }
    //   }).catch()
    // },
  }
}
</script>
<style rel="stylesheet/scss" xml:lang="scss">
  .el-card__body {
    height: 100%;
  }

  .el-table th > .cell {
    padding-left: 0;
    padding-right: 0;
  }

  .el-table .cell {
    padding-left: 0;
    padding-right: 0;
  }

  .el-table td, .el-table th {
    padding: 0;
  }
</style>
<style rel="stylesheet/scss" xml:lang="scss" scoped>
  .box-card {
    width: 100%;
    height: 100%;
  }

  .el-image {
    cursor: pointer;
  }

  #armor5 {
    width: 18%;
    float: left;
  }

  #jewelry3AndSpecial3,#oddAll {
    width: 14%;
    float: left;
  }

</style>
