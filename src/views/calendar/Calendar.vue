<template>
  <el-card class="box-card">
    <el-calendar @click="handleCalendar(date,data)">
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <div @click="handleCalendar(date,data)" style="width: 100%;height: 100%">
          {{ data.day.split('-').slice(1).join('-') }}
        </div>
      </template>
    </el-calendar>
    <el-card style="margin-top: 10%">
      <span>
        日期 - {{date}}<br>
        上班打卡时间 - {{startTime}}<br>
        下班打卡时间 - {{endTime}}<br>
      </span>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        :type="tag.type">
        {{tag.name}}
      </el-tag>
    </el-card>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      date: '未选择',
      startTime: '未选择',
      endTime: '未选择',
      tags: []
    }
  }
}
</script>
<style rel="stylesheet/scss" xml:lang="scss">
  .el-card__body {
    height: 100%;
    padding: 5%;
  }
</style>
<style rel="stylesheet/scss" xml:lang="scss" scoped>
  .box-card {
    width: 100%;
    height: 100%;
  }

  .el-calendar {
    width: 50%;
    float: left;
  }

  .el-tag {
    margin-top: 5px;
    margin-right: 10px;
  }
</style>
