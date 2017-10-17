<template>
  <section class="panel">
    <h4 class="panel-title">自助下单</h4>
    <el-card>
      <el-form ref="orderForm" :model="orderForm" label-width="80px">
        <el-form-item label="选择分类" prop="selectCategoryId" :rules="rules.selectCategoryId">
          <el-cascader :options="options" :disabled="options.length === 0" @change="changeCategory" placeholder="请选择商品分类"></el-cascader>
        </el-form-item>
        <el-form-item label="选择商品" prop="selectGood" :rules="rules.selectGood">
          <el-col v-loading.lock="goodsLoading">
            <el-select v-model="orderForm.selectGood" @change="changeGood" :disabled="goods.length === 0" value-key="id" placeholder="请选择商品">
              <el-option v-for="good in goods" :label="good.name | labelFilter" :value="good" :key="good.id"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input :value="price" disabled placeholder="商品价格"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="extra" disabled placeholder="商品描述"></el-input>
        </el-form-item>
        <el-form-item v-for="(domain, index) in orderForm.domains" :label="domain.name" :prop="'domains.' + index + '.value'" :rules="rules[domain.name]" :key="index">
          <el-input v-model="domain.value" :placeholder="domain.hint"></el-input>
        </el-form-item>
        </el-form-item>
        <input type="button" value="立即购买" class="btn-submit" @click="submit('orderForm')">
      </el-form>
      </el-form>
    </el-card>
  </section>
</template>

<script>
import Raven from 'raven-js'
import * as apiService from '../service/apiService'
export default {
  data () {
    return {
      goodsLoading: false,
      userInfo: undefined,
      orderForm: {
        selectCategoryId: 0,
        selectGood: undefined,
        domains: []
      },
      rules: {
        selectCategoryId: [{ type: 'array', required: true, message: '请选择商品分类' }],
        selectGood: [{ type: 'object', required: true, message: '请选择要购买的商品' }]
      },
      options: [],
      goods: []
    }
  },
  computed: {
    price () {
      return this.orderForm.selectGood ? `${this.orderForm.selectGood.price}积分` : undefined
    },
    extra () {
      return this.orderForm.selectGood ? this.orderForm.selectGood.extra : undefined
    }
  },
  filters: {
    labelFilter (label) {
      const regex = /(<font color='\S+'>)|(<\/font>)/g
      return label.replace(regex, '')
    }
  },
  methods: {
    changeCategory (categoryId) {
      this.orderForm.selectGood = undefined
      this.goods = []
      this.orderForm.selectCategoryId = categoryId
      this.goodsLoading = true
      apiService.getGoods(this.orderForm.selectCategoryId[1])
        .then(res => {
          this.goods.push(...res)
          setTimeout(() => {
            this.goodsLoading = false
          }, 500)
        })
        .catch(err => {
          this.goodsLoading = false
          Raven.captureException(err)
        })
    },
    changeGood (good) {
      if (good) {
        this.orderForm.domains.splice(0, this.orderForm.domains.length)
        let fields
        if (good.extraHint) {
          fields = JSON.parse(good.extraHint.replace(/\s/g, ''))
        } else if (good.productTemplate && good.productTemplate.content) {
          fields = JSON.parse(good.productTemplate.content.replace(/\s/g, ''))
        }
        if (fields) {
          fields.forEach(field => {
            this.orderForm.domains.push(Object.assign({ value: '' }, field))
            this.$set(this.rules, field.name, [{ required: true, message: field.hint }])
          })
        }
      }
    },
    submit (formName) {
      // 提交订单前检差用户登录状态
      if (!this.userInfo) {
        this.$message({
          message: '请登录',
          type: 'warning',
          showClose: true
        })
        return
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 格式化用户输入信息
          let extra = ''
          this.orderForm.domains.forEach(item => {
            extra = `${extra},${item.name}:${item.value}`
          })
          extra = extra.replace(/^,/, '')
          apiService.createInvoice(this.userInfo.id, this.orderForm.selectGood.id, extra)
            .then(() => {
              this.$message({
                message: '您的订单已提交',
                type: 'success',
                showClose: true
              })
            })
            .catch(err => {
              this.$message({
                message: err.message,
                type: 'error',
                showClose: true
              })
            })
        }
      })
    }
  },
  async created () {
    this.userInfo = apiService.getLocalUserInfo()
    const res = await apiService.getCategoryList()
    const cascaderOptions = res.map(categoryParent => {
      let options = {
        value: categoryParent.id,
        label: categoryParent.name
      }
      let optionsChildern = categoryParent.categoryList.map(category => {
        return { value: category.id, label: category.name }
      })
      options.children = optionsChildern
      return options
    })
    this.options.push(...cascaderOptions)
  }
}
</script>

<style>
.el-cascader,
.el-select {
  display: inline;
  position: static;
}
.el-select-dropdown {
  max-width: 94%;
}

.el-select-dropdown__item {
  height: auto;
  white-space: nowrap;
  text-overflow: initial;
  overflow: scroll;
}
</style>


<style lang="scss" scoped>
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
