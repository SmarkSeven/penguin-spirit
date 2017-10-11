<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="10" :lg="10">
      <el-tabs type="border-card">
      <el-tab-pane label="下单">
        <section class="panel">
        <h4 class="panel-title">自助下单</h4>
        <el-card>
          <el-form ref="carForm" :model="carForm" :rules="rules" label-width="68px">
            <el-form-item label="选择分类">
              <el-cascader :options="options" :show-all-levels="false" placeholder="请选择商品分类"></el-cascader>
            </el-form-item>
            <el-form-item label="选择商品">
              <el-select v-model="selectvalue" placeholder="请选择商品">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="下单账号">
              <el-input v-model="accountName" placeholder="请输入QQ号/物品ID"></el-input>
            </el-form-item>
            </el-form-item>
              <input type="button" value="立即购买" class="btn-submit">
            </el-form>
          </el-form>
        </el-card>
      </section>
      </el-tab-pane>
      <el-tab-pane label="订单"></el-tab-pane>
      <el-tab-pane label="积分"></el-tab-pane>
    </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      accountName: '',
      selectvalue: '',
      carForm: {
      },
      rules: {
      },
      options: []
    }
  },
  created () {
    this.options.push(...[{
      value: 'zhinan',
      label: '官方业务',
      children: [{
        value: 'shejiyuanze',
        label: '设计原则'
      }, {
        value: 'daohang',
        label: '导航'
      }]
    }, {
      value: 'zujian',
      label: '游戏大咖',
      children: [{
        value: 'basic',
        label: 'Basic'
      }, {
        value: 'form',
        label: 'Form'
      }, {
        value: 'data',
        label: 'Data'
      }, {
        value: 'notice',
        label: 'Notice'
      }, {
        value: 'navigation',
        label: 'Navigation'
      }, {
        value: 'others',
        label: 'Others'
      }]
    }, {
      value: 'ziyuan',
      label: '流量',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }])
  }
}
</script>

<style>
.el-cascader,
.el-select {
  display: inline;
  position: static;
}
</style>


<style lang="scss" scoped>

.el-tabs--border-card {
  height: 97vh;
}

.panel {
  margin-bottom: 20px;
}

.panel-title {
  margin: 0;
  padding: 10px 14px;
  text-align: left;
  font-size: 16px;
  color: #FFF;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #1F2D3D;
}

.el-card {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-submit {
  width: 98%;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
  padding: 8px 32px;
  border-color: #2e6da4;
  border-radius: 5px;
  background-color: #337ab7;
}
</style>
