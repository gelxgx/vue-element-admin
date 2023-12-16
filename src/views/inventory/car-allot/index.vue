<template>
  <div
    class="allot-main"
    v-if="path === 'car-allot'"
  >
    <div class="allot-form">
      <el-form
        ref="allotForm"
        :model="allotInfo"
        label-position="left"
        label-width="70px"
        style="width: 80%; margin-left: 50px"
      >
        <span class="select-title">选择车辆</span>
        <template v-for="(item, index) in allotInfo.carList">
          <div
            :key="index"
            class="edit-part"
          >
            <el-form-item
              label="车型："
              style="margin-right: 20px"
            >
              <el-select
                v-model="item.carType"
                placeholder="选择车辆车型"
              >
                <el-option
                  v-for="item in carTypeList"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="数量：">
              <el-input-number
                v-model="item.num"
                :min="1"
              />
            </el-form-item>
            <div
              :key="index"
              class="add-part"
            >
              <i
                style="font-size: 36px"
                class="el-icon-remove-outline"
              ></i>
              <i
                style="font-size: 36px"
                class="el-icon-circle-plus-outline"
              ></i>
            </div>
          </div>
        </template>

        <span class="select-title">选择门店</span>
        <el-form-item label="门店">
          <el-select
            v-model="allotInfo.shop"
            placeholder="选择车辆车型"
          >
            <el-option
              v-for="item in shopList"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-button
      style="color: #055fe7; border: 1px solid #055fe7"
      @click="toRecord"
      >查看分配记录</el-button
    >
    <el-button type="primary">确认</el-button>
  </div>
  <router-view v-else />
</template>

<script>
  export default {
    name: 'carAllot',
    computed: {
      path() {
        return this.$route.name;
      },
    },
    data() {
      return {
        allotInfo: {
          carList: [
            {
              carType: '',
              num: null,
            },
          ],
          shop: '',
        },
        carTypeList: [],
        shopList: [],
      };
    },
    created() {
      console.log('path', this.path);
    },
    methods: {
      handleFilter() {
        // TODO: 查询接口接入
      },
      toRecord() {
        this.$router.push({
          name: 'allot-info',
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .select-title {
    font-weight: 500;
    display: inline-block;
    margin-bottom: 20px;
  }
  .edit-part {
    display: flex;
    .add-part {
      margin-left: 50px;
    }
  }
</style>
