<template>
  <el-container>
    <el-row>
      <el-col :xs="24" :sm="6" :md="6" :lg="5" :xl="4" class="hidden-xs-only">
        <el-container>
          <Sider/>
        </el-container>
      </el-col>
      <el-col :xs="24" :sm="18" :md="18" :lg="19" :xl="20">
        <el-container>
          <div class="hidden-sm-and-up"><Header/></div>
          <el-main><router-view/></el-main>
          <el-footer><Footer/></el-footer>
        </el-container>
      </el-col>
    </el-row>
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