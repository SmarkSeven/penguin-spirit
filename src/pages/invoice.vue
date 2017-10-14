<template>
  <div class="invoice-list" ref="abc">
    <el-card  v-for="(item, i) in currentPageData" class="invoice-item" @click.native.stop="clickItem(item)" :key="item.title">
      <el-row justify="start">
        <el-col class="invoice-title">
          <span v-html="item.title"></span>
        </el-col>
      </el-row>
      <el-row justify="end">
        <el-col class="invoice-status">
          <span v-if="i % 3 === 1" class="invoice-status-success">已完成</span>
          <span v-else class="invoice-status-cancel">已退款</span>
        </el-col>
      </el-row>
      <el-row justify="start">
        <el-col class="invoice-info">
          <span class="price-icon">￥</span>
          <span class="invoice-price">150积分</span>
          <i class="el-icon-time" ></i>
          <span class="invoice-date">2017-10-09: 08:40</span>
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
    <invoice-info v-if="currentInvoiceInfo" :invoiceInfo="currentInvoiceInfo" @close="closeDialog" :class="{'is-show': invoiceInfoVisible}"></invoice-info>
  </div>
</template>

<script>
import InvoiceInfo from './invoiceInfo'
import * as apiService from '../service/mockService'
export default {
  components: {
    InvoiceInfo
  },
  data () {
    return {
      invoiceInfoVisible: false,
      currentPage: 1,
      invoiceList: [],
      currentPageData: [],
      loadingInfo: false, // 加载订单详情
      currentInvoiceInfo: undefined, // 当前订单详情
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
      apiService.getinvoiceInfo(item.id)
        .then(reps => {
          this.invoiceInfoVisible = true
          this.currentInvoiceInfo = reps.data[0]
        })
        .catch(err => {
          console.log('getinvoiceInfo err:', err)
        })
    },
    closeDialog () {
      this.invoiceInfoVisible = false
    }
  },
  created () {
    // 计算每页显示数据条数
    this.pageSize = Math.floor((window.document.documentElement.clientHeight * 0.97 - 119) / 101)
    for (let i = 0; i < 30; i++) {
      this.invoiceList.push({
        title: `『<font color='red'>新用户专享</font>』快刷名片赞${i + 1}`,
        status: '已完成'
      })
      const end = this.invoiceList.length >= this.pageSize ? this.pageSize : this.invoiceList.length - 1
      this.currentPageData = this.invoiceList.slice(0, end)
    }
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

.invoice-title {
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
