<template>
  <div class="page-header">
    <div class="user-info">
      <img src="../assets/avatar.jpg" class="user-avatar">
      <p class="user-name">黎鸿福</p>
    </div>
    <div class="user-info">
      <div class="user-info-title">个人信息</div>
      <div class="user-info-text">
        <i class="el-icon-position"></i>
        <span>意向城市：广州</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-mobile-phone"></i>
        <span>联系方式：13265117700</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-wind-power"></i>
        <span>应聘职位：前端研发工程师</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-bank-card"></i>
        <span>期望月薪：6~8k</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-header{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: #5770ff;
  color: #ffffff;
  .user-info{
    .user-avatar{
      height: 100px;
      border-radius: 50%;
    }
    .user-name{
      font-size: 24px;
      font-weight: 500;
      text-align: center;
    }
    .user-info-title{
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .user-info-text{
      font-size: 14px;
      line-height: 2;
      i{
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>