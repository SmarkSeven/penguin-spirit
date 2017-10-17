<template>
  <div class="invoice-list" ref="abc">
    <el-card  v-for="(item, i) in currentPageData" class="invoice-item" @click.native.stop="clickItem(item)" :key="item.title">
      <el-row justify="start">
        <el-col class="invoice-title">
          <span v-html="item.product.name"></span>
        </el-col>
      </el-row>
      <el-row justify="end">
        <el-col class="invoice-status">
          <span :class="{'invoice-status-cancel': item.statusStr !== '已完成', 'invoice-status-success': item.statusStr === '已完成'}">{{item.statusStr}}</span>
        </el-col>
      </el-row>
      <el-row justify="start">
        <el-col class="invoice-info">
          <span class="price-icon">￥</span>
          <span class="invoice-price">{{item.totalPrice}}积分</span>
          <i class="el-icon-time" ></i>
          <span class="invoice-date">{{new Date(item.createAt).toLocaleString()}}</span>
        </el-col>
      </el-row>
    </el-card>
    <el-card v-if="invoiceList.length === 0">
      <i class="el-icon-warning"></i>
      <span class="invoice-no-data">没有历史订单</span>
    </el-card>
    <el-pagination
      v-if="invoiceList.length != 0"
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      @current-change="currentChange"
      :total="invoiceList.length">
    </el-pagination>
    <invoice-info v-if="show" :invoiceProgressList="currentInvoiceProgressList" @close="closeDialog" :class="{'is-show': invoiceInfoVisible}"></invoice-info>
  </div>
</template>

<script>
import Raven from 'raven-js'
import InvoiceInfo from './invoiceInfo'
import * as apiService from '../service/apiService'
export default {
  components: {
    InvoiceInfo
  },
  data () {
    return {
      show: false,
      userInfo: undefined,
      invoiceInfoVisible: false,
      currentPage: 1,
      invoiceList: [],
      currentPageData: [],
      loadingInfo: false, // 加载订单详情
      currentInvoiceProgressList: undefined, // 当前订单详情
      pageSize: 5 // 每页数据条数
    }
  },
  methods: {
    currentChange (pageNum) {
      const start = (pageNum - 1) * this.pageSize
      const end = this.invoiceList.length < start + this.pageSize ? this.invoiceList.length : start + this.pageSize
      this.currentPageData = this.invoiceList.slice(start, end)
    },
    clickItem (item) {
      apiService.getInvoiceProcessList(item.id)
        .then(data => {
          if (data.length === 0) {
            this.$message({
              message: '订单详情数据错误',
              type: 'error',
              showClose: true
            })
          } else {
            this.currentInvoiceProgressList = data
            if (!this.show) {
              this.show = true
              setTimeout(() => {
                this.invoiceInfoVisible = true
              }, 200)
            } else {
              this.invoiceInfoVisible = true
            }
          }
        })
        .catch(err => {
          Raven.captureException(err)
          this.$message({
            message: '获取订单信息失败',
            type: 'error',
            showClose: true
          })
        })
    },
    closeDialog () {
      this.invoiceInfoVisible = false
    }
  },
  created () {
    // 计算每页显示数据条数
    this.pageSize = Math.floor((window.document.documentElement.clientHeight * 0.97 - 119) / 101)
    this.userInfo = apiService.getLocalUserInfo()
    apiService.getInvoiceList(this.userInfo.id, 1, 100)
      .then(res => {
        this.invoiceList = res.data
        const end = this.invoiceList.length >= this.pageSize ? this.pageSize : this.invoiceList.length - 1
        this.currentPageData = this.invoiceList.slice(0, end)
      })
      .catch(err => {
        Raven.captureException(err)
        this.$message({
          message: '获取订单列表失败',
          type: 'error',
          showClose: true
        })
      })
  }
}
</script>


<style lang="scss" scoped>
.invoice-list {
  height: 100%;
  overflow: scroll;
}

.invoice-title, .invoice-info {
  text-align: left;
}

.invoice-title, .invoice-info, .invoice-status {
  font-size: 14px;
}
.invoice-info {
  .invoice-price, .invoice-date  {
    color: #475669;
    font-weight: 500;
  }
}

.invoice-title {
  padding-right: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  span {
    font-size: 14px;
    font-weight: 700;
  }
}

.invoice-status {
  text-align: right;
  span {
    font-weight: 500;
  }
  .invoice-status-success {
    color: #1D8CE0;
  }
  .invoice-status-cancel {
    color: #8492A6;
  }
}

.invoice-info {
  padding-left: 5px;
}

.invoice-price, .invoice-date {
  font-size: 12px;
}

.invoice-price {
  position: relative;
  margin-right: 15px;
  margin-left: -5px;
}

.price-icon, .el-icon-time {
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
}

.invoice-no-data, .el-icon-warning {
  font-size: 14px;
  color: #99A9BF;
}

.el-pagination {
  margin-top: 15px;
}
</style>
