<template>
  <el-aside class="page-sider">
    <div class="user-info">
      <div class="user-avatar">
        <img src="../assets/avatar.jpg" class="user-avatar-png" />
        <p class="user-name">黎鸿福</p>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-title">基本信息</div>
      <div class="user-info-text">
        <i class="el-icon-trophy"></i>
        <span>性别：男</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-present"></i>
        <span>年龄：30</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-mobile-phone"></i>
        <span>电话：13265117700</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-message"></i>
        <span>邮箱：304860062@qq.com</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-map-location"></i>
        <span>现所在地：广州</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-star-off"></i>
        <span>政治面貌：中共党员</span>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-title">求职意向</div>
      <div class="user-info-text">
        <i class="el-icon-info"></i>
        <span>应聘岗位：前端开发工程师</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-position"></i>
        <span>意向城市：广州、深圳</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-bank-card"></i>
        <span>期望月薪：6-8K</span>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-title">教育经历</div>
      <div class="user-info-text">
        <i class="el-icon-time"></i>
        <span>时间：2008.06 -- 2010.07</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-trophy"></i>
        <span>学校：中央广播电视大学</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-cpu"></i>
        <span>专业：电子商务（大专）</span>
      </div>
    </div>
  </el-aside>
</template>

<style lang="less" scoped>
.page-sider {
  padding: 20px 40px 40px;
  background: #5770ff;
  color: #ffffff;
  text-align: left;
  .user-info {
    margin: 40px 0;
    .user-avatar {
      text-align: center;
      .user-avatar-png {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-bottom: 20px;
      }
    }
    .user-name {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
    }
    .user-status {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
    }
    .user-info-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .user-info-text {
      font-size: 14px;
      line-height: 2;
      i {
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>
