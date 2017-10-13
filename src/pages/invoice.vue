<template>
  <div class="invoice-list">
    <el-card v-for="(item, i) in currentPageData" class="invoice-item" @click.native.stop="clickItem(item)" :key="item.title">
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
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="5"
      @current-change="currentChange"
      :total="invoiceList.length">
    </el-pagination>
    <el-dialog
      title="订单详情"
      :visible.sync="dialogVisible"
      :modal="false"
      size="full">
      <el-card class="invoice-info-content" v-loading="loadingInfo">
        <section class="good-outline">
          <el-row>
            <el-col class="sub-title">商品概况</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" class="good-outline-label">商品名称:</el-col>
            <el-col :span="18" class="good-outline-value">996加班费 </el-col> 
          </el-row>
          <el-row>
            <el-col :span="5" class="good-outline-label">商品描述:</el-col>
            <el-col :span="18" class="good-outline-value">按开发发你看开发翻看客服那开发你看发你看饭卡放开那可能思考</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" class="good-outline-label">商品价格:</el-col>
            <el-col :span="18" class="good-outline-value">999积分 </el-col> 
          </el-row>
        </section>
        <section class="invoice-outline">
          <el-row>
            <el-col class="sub-title">订单概况</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" class="invoice-outline-label">订单ID:</el-col>
            <el-col :span="18" class="invoice-outline-value">34BFBJ </el-col> 
          </el-row>
          <el-row>
            <el-col :span="5" class="invoice-outline-label">购买价格:</el-col>
            <el-col :span="18" class="invoice-outline-value">11积分</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" class="invoice-outline-label">购买时间:</el-col>
            <el-col :span="18" class="invoice-outline-value">2017-09-29 08:08:08 </el-col> 
          </el-row>
        </section>
        
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      currentPage: 1,
      invoiceList: [],
      currentPageData: [],
      loadingInfo: false // 加载订单详情
    }
  },
  methods: {
    currentChange (pageNum) {
      const start = (pageNum - 1) * 5
      const end = this.invoiceList.length < start + 5 ? this.invoiceList.length : start + 5
      this.currentPageData = this.invoiceList.slice(start, end)
    },
    clickItem (item) {
      this.dialogVisible = true
      this.loadingInfo = true
      setTimeout(() => {
        this.loadingInfo = false
      }, 1500)
    }
  },
  created () {
    for (let i = 0; i < 30; i++) {
      this.invoiceList.push({
        title: `『<font color='red'>新用户专享</font>』快刷名片赞${i + 1}`,
        status: '已完成'
      })
      const end = this.invoiceList.length >= 5 ? 5 : this.invoiceList.length - 1
      this.currentPageData = this.invoiceList.slice(0, end)
    }
  }
}
</script>

<style>
.el-dialog__title {
  color: #475669;
}
.el-dialog__body {
  height: calc(100% - 40px - 40px);
  padding: 20px 10px;
}
.el-loading-spinner .path {
  stroke-width: 4;
}

 .invoice-info-content .el-card__body {
   padding: 0;
 }
</style>


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

.invoice-info-content {
  height: 100%;
}

.sub-title {
  padding: 10px 8px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 16px;
  color: #FFF;
  background-color: #8492A6;
}

.good-outline, .invoice-outline {
  margin-bottom: 14px;
  padding-bottom: 10px;
  background-color: #F9FAFC;
}

.good-outline-label, .invoice-outline-label {
  padding-right: 6px;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
}

.good-outline-value, .invoice-outline-value {
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}
</style>
