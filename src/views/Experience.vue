<template>
  <div class="section">
    <div class="grid-content">
      <!-- <h3 class="sub-title">工作经历</h3> -->
      <el-card 
        class="box-card"
        shadow="hover"
        v-for="item in data"
        :key="item.key">
        <div class="user-item">
          <div class="user-item-text"><h4>时间:</h4><span>{{item.dates}}</span></div>
          <div class="user-item-text"><h4>公司:</h4><span>{{item.name}}</span></div>
          <div class="user-item-text"><h4>职位:</h4><span>{{item.posts}}</span></div>
          <div class="user-item-text"><h4>职能:</h4><span>{{item.functions}}</span></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[
        {
          dates: '2016.03 -- 2017.03',
          name: '广州市公安局增城区分局',
          posts: '派出所辅警',
          functions: '负责社区信息采集以及系统数据录入（如：门牌信息、人员信息、户口信息等）'
        },
        {
          dates: '2017.04 -- 2019.03',
          name: '广州市增城区迷弥坊装饰材料经营部',
          posts: '店长',
          functions: '1、负责门店全面工作，定制门店规章制度。2、负责门店业务处理和顾客投诉建议处理。3、负责门店每日盘点工作。4、做好门店宣传工作。5、做好门店推广及促销活动。6、负责门店员工服务及工作监督。7、控制门店运营成本。8、负责门店商品陈列工作。'
        },
        {
          dates: '2019.03 -- 至今',
          name: '扎克斯（广州）科技有限公司',
          posts: '前端开发工程师',
          functions: '负责内部系统及外部业务的前端开发。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.box-card{
  margin-bottom: 20px;
  .user-item{
    .user-item-text{
      display: flex;
      h4{
        min-width: 50px;
      }
    }
  }
  }
</style>