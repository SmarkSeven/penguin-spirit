<template>
  <el-row type="flex" justify="center" class="info-card">
    <el-col :xs="24" :sm="18" :md="10" :lg="10" class="info-wrapper">
      <div class="card-header">
        <span class="card-title">订单详情</span>
        <i class="el-icon-close btn-close" @click="close"></i>
      </div>
      <el-card class="invoice-info-content">
        <section class="good-outline">
          <el-row>
            <el-col class="sub-title">商品概况</el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="good-outline-label">商品名称:</div>
            <div class="good-outline-value">{{productOutline.name}} </div>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="good-outline-label">商品描述:</div>
            <div class="good-outline-value">{{productOutline.extra}}</div>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="good-outline-label">商品价格:</div>
            <div class="good-outline-value">{{productOutline.price}}</div>
          </el-row>
        </section>
        <section class="invoice-outline">
          <el-row>
            <el-col class="sub-title">订单概况</el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="invoice-outline-label">订&nbsp;&nbsp;单&nbsp;&nbsp;ID:</div>
            <div class="invoice-outline-value">{{invoiceOutline.id}} </div>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="invoice-outline-label">购买价格:</div>
            <div class="invoice-outline-value">{{invoiceOutline.totalPrice}}</div>
          </el-row>
          <el-row type="flex" justify="start">
            <div class="invoice-outline-label">购买时间:</div>
            <div class="invoice-outline-value">{{invoiceOutline.createAt}}</div>
          </el-row>
        </section>
        <section class="invoice-progress">
          <el-row>
            <el-col class="sub-title">订单进度</el-col>
          </el-row>
          <el-row>
            <el-col class="progress-wrapper">
              <el-steps direction="vertical" :active="2" finish-status="success">
                <el-step v-for="(setp, i) in setps" :title="setp.label" :key="i">
                  <div slot="description" class="description">
                    {{setp.description}}
                  </div>
                </el-step>
              </el-steps>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" v-if="url">
            <div class="invoice-outline-label">下单地址:</div>
            <div class="invoice-outline-value"><a :href="url" target="_blank" class="lnk">{{url}}</a></div>
          </el-row>
          <el-row type="flex" justify="start" v-if="key">
            <div class="invoice-outline-label">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密:</div>
            <div class="invoice-outline-value">{{key}}</div>
          </el-row>
          <el-row type="flex" justify="start" v-if="key">
            <el-popover ref="popover" placement="top-start" :title="popoverText" width="50" trigger="click">
            </el-popover>
            <el-button :plain="true" size="mini" type="info" class="btn-copy" @click="copyKey" v-popover:popover :data-clipboard-text="key">复制卡密</el-button>
          </el-row>
        </section>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  props: {
    invoiceProgressList: {
      type: Array
    }
  },
  data () {
    return {
      popoverText: '复制成功',
      url: undefined,
      key: undefined
    }
  },
  computed: {
    productOutline () {
      const product = this.invoiceProgressList[0].invoice.product
      return {
        name: product.name.replace(/(<font color='\S+'>)|(<\/font>)/g, ''),
        extra: product.extra,
        price: `${product.price}积分`
      }
    },
    invoiceOutline () {
      const invoice = this.invoiceProgressList[0].invoice
      return {
        id: invoice.id,
        totalPrice: `${invoice.totalPrice}积分`,
        createAt: new Date(invoice.createAt).toLocaleString()
      }
    },
    setps () {
      const invoice = this.invoiceProgressList[0].invoice
      let list = [{label: '提交订单', description: new Date(invoice.createAt).toLocaleString()}]
      this.invoiceProgressList.forEach(item => {
        const extra = item.extra
        if (extra.indexOf('卡密：') > -1) {
          const res1 = /http:\S+.php/.exec(extra)
          const res2 = /(?:卡密：)\S+$/.exec(extra)
          if (res1) {
            // 下单地址
            this.url = res1[0]
          }
          if (res2) {
            // 卡密
            this.key = res2[0].replace('卡密：', '')
          }
        } else {
          list.push({
            label: extra,
            description: new Date(item.createAt).toLocaleString()
          })
        }
      })
      if (invoice.statusStr === '已退款') {
        list.push({
          label: '已退款',
          description: new Date(invoice.updateAt).toLocaleString()
        })
      } else if (invoice.statusStr === '已完成') {
        list.push({
          label: '订单完成',
          description: new Date(invoice.updateAt).toLocaleString()
        })
      }
      return list
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    copyKey () {
      let clipboard = new Clipboard('.btn-copy')
      clipboard.on('success', (e) => {
        this.popoverText = '复制成功'
        e.clearSelection()
      })
      clipboard.on('error', (e) => {
        this.popoverText = '复制失败'
      })
    }
  }
}
</script>


<style>
.el-loading-spinner .path {
  stroke-width: 4;
}

.invoice-info-content {
  overflow: scroll;
}

.invoice-info-content .el-card__body {
   padding: 0;
 }

.el-step__title.is-success {
   color: #48576a;
 }

.el-step__head.is-text.is-success {
  color: #fff;
  background-color: #bfcbd9;
  border-color: #bfcbd9;
 }
</style>

<style lang="scss" scoped>
.info-card {
  position: fixed;
  top: -100vh;
  left: 0;
  padding: 0 8px;
  width: 100%;
  height: 100%;
  align-items: center;
  opacity: .4;
  transition: .3s;
  &.is-show {
    top: 0;
    opacity: 1;
  }
}



.card-header {
  position: relative;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  .btn-close {
    position: absolute;
    top: 16px;
    right: 12px;
    color: #99A9BF;
    &:hover {
      color: #20A0FF;
    }
  }
}

.invoice-progress {
  padding-bottom: 14px;
}

.info-wrapper {
  height: calc(97vh + 4px);
  background: #fff;
}

.invoice-info-content {
  height: calc(97vh + 3px - 50px);
}

.sub-title {
  padding: 10px 8px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  color: #1F2D3D;
  background-color: #EFF2F7;
}

.good-outline, .invoice-outline {
  padding-bottom: 14px;
}

.good-outline-label, .invoice-outline-label {
  padding-right: 6px;
  margin-bottom: 4px;
  width: 70px;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
}

.good-outline-value, .invoice-outline-value {
  flex: 1;
  margin-bottom: 4px;
  padding-right: 12px;
  font-size: 8px;
  font-weight: 500;
  line-height: 22px;
  color: #99A9BF;
  text-align: left;
  word-wrap:break-word;
  word-break:break-all;
}

.progress-wrapper {
  padding-left: 12px;
  text-align: left;
}

.description {
  min-height: 50px;
  font-size: 12px;
  font-weight: 500;
  color: #99A9BF;
}

.goodsInfo {
  text-align: left;
}

a.lnk {
  &:link {color: #324057}
  &:visited {color: #20A0FF}
  &:hover {color: #58B7FF}
  &:active {color: #13CE66}
}

.btn-copy {
  margin-left: 75px;
}
</style>
