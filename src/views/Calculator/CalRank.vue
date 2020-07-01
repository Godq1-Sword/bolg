<template>
  <el-card class="box-card">
    <div id="weapon">
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
    <div id="calData">
      <el-tabs type="border-card">
        <el-tab-pane label="一键设置">
          <el-form :model="demoData" :rules="rules" ref="demoData" label-width="100px" class="demo-ruleForm">
            <el-form-item label="防具/首饰" prop="equipment">
              <el-select v-model="demoData.equipment" placeholder="请选择增幅等级">
                <el-option label="增幅+8" value="8"></el-option>
                <el-option label="增幅+10" value="10"></el-option>
                <el-option label="增幅+11" value="11"></el-option>
                <el-option label="增幅+12" value="12"></el-option>
                <el-option label="增幅+13" value="13"></el-option>
                <el-option label="增幅+14" value="14"></el-option>
                <el-option label="增幅+15" value="15"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="武器" prop="weapon">
              <el-select v-model="demoData.weapon" placeholder="请选择增幅/强化等级">
                <el-option label="强化+12" value="12"></el-option>
                <el-option label="强化+13" value="13"></el-option>
                <el-option label="强化+14" value="14"></el-option>
                <el-option label="强化+15" value="15"></el-option>
                <el-option label="增幅+12" value="+12"></el-option>
                <el-option label="增幅+13" value="+13"></el-option>
                <el-option label="增幅+14" value="+14"></el-option>
                <el-option label="增幅+15" value="+15"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="耳环" prop="eh" required>
              <el-select v-model="demoData.eh" placeholder="请选择增幅/强化等级">
                <el-option label="强化+12" value="12"></el-option>
                <el-option label="强化+13" value="13"></el-option>
                <el-option label="强化+14" value="14"></el-option>
                <el-option label="强化+15" value="15"></el-option>
                <el-option label="增幅+12" value="+12"></el-option>
                <el-option label="增幅+13" value="+13"></el-option>
                <el-option label="增幅+14" value="+14"></el-option>
                <el-option label="增幅+15" value="+15"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="称号" prop="title">
              <el-select v-model="demoData.title" placeholder="请选择称号">
                <el-option label="(2020)使徒降临" value="stjl"></el-option>
                <el-option label="(2020)伟大意志" value="wdyz"></el-option>
                <el-option label="(2019)神选之英杰" value="sxyj"></el-option>
                <el-option label="(2018/2019)国庆" value="gq"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="宠物" prop="pet">
              <el-select v-model="demoData.pet" placeholder="请选择宠物">
                <el-option label="(2020)弓手/神官" value="gssg"></el-option>
                <el-option label="(2020)雷光/暴风" value="lgbf"></el-option>
                <el-option label="(2019进化)至尊·莱恩/薇泽达" value="jhle"></el-option>
                <el-option label="(2019)至尊·莱恩/薇泽达" value="zzle"></el-option>
                <el-option label="(2019)莱恩/薇泽达" value="lnwz"></el-option>
              </el-select>
            </el-form-item>
            <el-row>
              <el-col :span="8">
                <el-form-item label="左槽宝珠" prop="zcBuff" required>
                  <el-switch v-model="demoData.zcBuff"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="带奶" prop="palBuff" required>
                  <el-switch v-model="demoData.palBuff"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button @click="submitForm('demoData')">计算</el-button>
              <el-button @click="resetForm('demoData')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="自定义角色">
          <el-form :model="customData" :rules="rules" ref="customData" label-width="100px" class="demo-ruleForm">
            <el-form-item label="三攻" prop="sg">
              <el-input v-model.number="customData.sg"></el-input>
            </el-form-item>
            <el-form-item label="力量/智力" prop="lz">
              <el-input v-model.number="customData.lz"></el-input>
            </el-form-item>
            <el-form-item label="属强" prop="sq">
              <el-input v-model.number="customData.sq"></el-input>
            </el-form-item>
            <el-form-item label="称号" prop="title">
              <el-select v-model="customData.title" placeholder="请选择称号">
                <el-option label="(2020)使徒降临" value="stjl"></el-option>
                <el-option label="(2020)伟大意志" value="wdyz"></el-option>
                <el-option label="(2019)神选之英杰" value="sxyj"></el-option>
                <el-option label="(2018/2019)国庆" value="gq"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="宠物" prop="pet">
              <el-select v-model="customData.pet" placeholder="请选择宠物">
                <el-option label="(2020)弓手/神官" value="gssg"></el-option>
                <el-option label="(2020)雷光/暴风" value="lgbf"></el-option>
                <el-option label="(2019进化)至尊·莱恩/薇泽达" value="jhle"></el-option>
                <el-option label="(2019)至尊·莱恩/薇泽达" value="zzle"></el-option>
                <el-option label="(2019)莱恩/薇泽达" value="lnwz"></el-option>
              </el-select>
            </el-form-item>
            <el-row>
              <el-col :span="8">
                <el-form-item label="左槽宝珠" prop="zcBuff">
                  <el-switch v-model="customData.zcBuff"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="带奶" prop="palBuff">
                  <el-switch v-model="customData.palBuff"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click="submitForm('customData')">计算</el-button>
              <el-button @click="resetForm('customData')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="我的角色"></el-tab-pane>
      </el-tabs>
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
      demoData: {
        // 武器
        weapon: '12',
        // 防具
        equipment: '8',
        // 耳环
        eh: '12',
        // 称号
        title: 'wdyz',
        // 宠物
        pet: 'lgbf',
        // 左槽宝珠
        zcBuff: true,
        // 带奶
        palBuff: true
      },
      customData: {
        // 三攻
        sg: '',
        // 力智
        lz: '',
        // 属强
        sq: '',
        // 称号
        title: 'wdyz',
        // 宠物
        pet: 'lgbf',
        // 左槽宝珠
        zcBuff: true,
        // 带奶
        palBuff: true
      },
      rules: {
        sg: [{
          required: true,
          message: '请输入三攻属性',
          trigger: 'blur'
        }, {
          type: 'number',
          message: '三攻属性必须为数字',
          trigger: 'blur'
        }],
        lz: [{
          required: true,
          message: '请输入力智属性',
          trigger: 'blur'
        }, {
          type: 'number',
          message: '三攻属性必须为数字',
          trigger: 'blur'
        }],
        sq: [{
          required: true,
          message: '请输入属强属性',
          trigger: 'blur'
        }, {
          type: 'number',
          message: '三攻属性必须为数字',
          trigger: 'blur'
        }]
      },
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
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var armor5 = JSON.parse(JSON.stringify(this.armor5))
          var jewelry3 = JSON.parse(JSON.stringify(this.jewelry3))
          var special3 = JSON.parse(JSON.stringify(this.special3))
          var oddSy = JSON.parse(JSON.stringify(this.oddSy))
          var oddXz = JSON.parse(JSON.stringify(this.oddXz))
          var oddSe = JSON.parse(JSON.stringify(this.oddSe))
          for (let i = 0; i < armor5.length; i++) {
            for (let j = 0; j < armor5[i].items.length; j++) {
              if (!armor5[i].items[j].flag) {
                armor5[i].items.splice(j--, 1)
              }
            }
            if (armor5[i].items.length === 0) {
              armor5.splice(i--, 1)
            }
          }
          for (let i = 0; i < jewelry3.length; i++) {
            for (let j = 0; j < jewelry3[i].items.length; j++) {
              if (!jewelry3[i].items[j].flag) {
                jewelry3[i].items.splice(j--, 1)
              }
            }
            if (jewelry3[i].items.length === 0) {
              jewelry3.splice(i--, 1)
            }
          }
          for (let i = 0; i < special3.length; i++) {
            for (let j = 0; j < special3[i].items.length; j++) {
              if (!special3[i].items[j].flag) {
                special3[i].items.splice(j--, 1)
              }
            }
            if (special3[i].items.length === 0) {
              special3.splice(i--, 1)
            }
          }
          for (let i = 0; i < oddSy.length; i++) {
            for (let j = 0; j < oddSy[i].items.length; j++) {
              if (!oddSy[i].items[j].flag) {
                oddSy[i].items.splice(j--, 1)
              }
            }
            if (oddSy[i].items.length === 0) {
              oddSy.splice(i--, 1)
            }
          }
          for (let i = 0; i < oddXz.length; i++) {
            for (let j = 0; j < oddXz[i].items.length; j++) {
              if (!oddXz[i].items[j].flag) {
                oddXz[i].items.splice(j--, 1)
              }
            }
            if (oddXz[i].items.length === 0) {
              oddXz.splice(i--, 1)
            }
          }
          for (let i = 0; i < oddSe.length; i++) {
            for (let j = 0; j < oddSe[i].items.length; j++) {
              if (!oddSe[i].items[j].flag) {
                oddSe[i].items.splice(j--, 1)
              }
            }
            if (oddSe[i].items.length === 0) {
              oddSe.splice(i--, 1)
            }
          }
          var equipments = {
            armor5: armor5,
            jewelry3: jewelry3,
            special3: special3,
            oddSy: oddSy,
            oddXz: oddXz,
            oddSe: oddSe
          }
          this.calRank(equipments)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    calRank(equipments) {
      this.axios.post('/calculator/rank', {equipmentsJson: JSON.stringify(equipments)}).then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
    }
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

  #jewelry3AndSpecial3, #oddAll {
    width: 14%;
    float: left;
  }

  #calData {
    float: left;
  }

</style>
