<template>
  <el-container>
    <Sider />
    <el-container>
      <el-header height="64px"><Header /></el-header>
      <el-main><router-view /></el-main>
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import Sider from "./BasicLayoutSider";
import Header from "./BasicLayoutHeader";
import Footer from "./BasicLayoutFooter";
export default {
  components:{
    Sider,
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.el-container{
  height: 100vh;
  .el-footer{
    box-shadow: 0px -2px 8px #f0f1f2;
    z-index: 1;
  }
}
</style>