<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="10" :lg="10">
      <el-tabs type="border-card">
        <el-tab-pane label="下单">
          <purchas></purchas>
        </el-tab-pane>
        <el-tab-pane label="订单"></el-tab-pane>
        <el-tab-pane label="积分"></el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import Purchas from './purchas'
export default {
  components: {
    Purchas
  }
}
</script>

<style lang="scss" scoped>

.el-tabs--border-card {
  height: 97vh;
}
</style>
