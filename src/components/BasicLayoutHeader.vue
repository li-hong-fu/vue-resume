<template>
  <div class="page-header">
    <el-menu
      :default-active="path"
      :router="true"
      mode="horizontal"
      class="el-menu-demo"
    >
      <el-menu-item
        v-for="route in filterRoutes"
        :key="route.path"
        :index="route.path"
        >{{ route.meta.nav.name }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router/route";

export default {
  data() {
    return {
      path: this.$route.path,
      filterRoutes: []
    };
  },
  created() {
    this.getRoutes();
  },
  watch: {
    $route(to) {
      this.path = to.path;
    }
  },
  methods: {
    getRoutes() {
      this.filterRoutes = this.filterNavigator(routes);
    },
    filterNavigator(node) {
      let result = [];
      node.forEach(data => {
        if (data.meta && data.meta.nav) {
          let item = {
            path: data.path,
            name: data.name,
            meta: data.meta
          };
          if (data.children) {
            item.children = this.filterNavigator(data.children);
          }
          result.push(item);
        } else if (data.children) {
          this.filterNavigator(data.children).forEach(item =>
            result.push(item)
          );
        }
      });
      return result;
    },
    hasNavChildren(route) {
      const children = route.children || [];
      return children.some(data => data.meta && data.meta.nav);
    }
  }
};
</script>

<style lang="less" scoped>
.page-header {
  height: 100%;
  line-height: 64px;
  .el-menu.el-menu--horizontal {
    border: none;
    .el-menu-item {
      font-size: 18px;
      font-family: SimSun;
    }
  }
}
</style>
