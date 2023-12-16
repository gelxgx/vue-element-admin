<template>
  <div
    class="stock-main"
    v-if="path === 'inventory-check'"
  >
    <div class="filter-container filter-list">
      <div class="option-part">
        车型：
        <el-select
          v-model="listQuery.carType"
          placeholder="请选择筛选的车型"
          clearable
          style="width: 280px; margin-right: 50px"
          class="filter-item"
        >
          <el-option
            v-for="item in carTypeList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        是否有现货：
        <el-input
          v-model="listQuery.hasOrder"
          placeholder="请输入筛选的文字"
          style="width: 280px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
      </div>
      <el-button
        class="filter-item"
        type="primary"
        @click="checkMore"
      >
        查询
      </el-button>
    </div>
    <div class="car-list-part">
      <template v-for="item in carList">
        <div
          :key="item.name"
          class="car-item"
        >
          <img
            class="item-img"
            :src="item.img"
            alt=""
          />
          <span class="item-type">车型:</span>
          <span class="item-stock">库存</span>
          <el-button
            class="item-more"
            type="primary"
            @click="checkMore"
          >
            详情
          </el-button>
        </div>
      </template>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
  export default {
    name: 'stockCheck',
    computed: {
      path() {
        return this.$route.name;
      },
    },
    data() {
      return {
        listQuery: {
          hasOrder: '',
          carType: '',
        },
        carTypeList: [],
        carList: [],
      };
    },
    created() {
      console.log('path', this.path);
    },
    methods: {
      handleFilter() {
        // TODO: 查询接口接入
      },
      checkMore() {
        this.$router.push({
          name: 'car-more',
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .filter-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .car-list-part {
    margin-top: 28px;
  }
</style>
