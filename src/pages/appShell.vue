<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="10" :lg="10">
      <el-tabs type="border-card" @tab-click="tabClick">
        <el-tab-pane label="下单">
          <purchas></purchas>
        </el-tab-pane>
        <el-tab-pane label="订单">
          <invoice v-if="signInStatus"></invoice>
        </el-tab-pane>
        <el-tab-pane label="积分"></el-tab-pane>
      </el-tabs>
      <div class="fab" :class="{'signin-link': !signInStatus}" @click="$router.replace('signIn')">
        <span class="fab-label"></span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as apiService from '../service/apiService'
import Purchas from './purchas'
import Invoice from './invoice'
export default {
  components: {
    Purchas,
    Invoice
  },
  data () {
    return {
      signInStatus: false
    }
  },
  methods: {
    tabClick () {
      if (!this.signInStatus) {
        this.$message.closeAll()
        this.open()
      }
    },
    open () {
      this.$message({
        message: '请登录',
        type: 'warning',
        showClose: true
      })
    }
  },
  created () {
    if (apiService.getLocalUserInfo()) {
      this.signInStatus = true
    }
  }
}
</script>

<style>
.el-tabs__content {
  height: calc(100% - 42px - 30px);
}
</style>


<style lang="scss" scoped>
.el-tabs--border-card {
  height: 97vh;
}

.el-tab-pane {
  height: 100%;
}

.fab {
  background-color: #8492A6;
  position: fixed;
  right: -10vw;
  bottom: 70px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  opacity: 0;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  transition: 1s;
}

.fab-label {
  color: #fff;
  display: block;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  &:before {
    content: "登陆";
  }
}

.signin-link {
  right: 5vw;
  opacity: 1;
}
</style>
