<template>
  <div class="app-container">
    <div
      class="page-main"
      v-if="path === '/inventory/index'"
    >
      <template v-for="item in pageList">
        <div
          :key="item.name"
          class="page-item"
          @click="toUrl(item.url)"
        >
          <img
            :src="item.icon"
            class="item-img"
            alt=""
          />
          <div class="item-text">{{ item.name }}</div>
        </div>
      </template>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
  import carEntry from './img/car-entry.png';
  import carAllot from './img/car-allot.png';
  import stockCheck from './img/stock-check.png';

  export default {
    name: 'index',
    data() {
      return {
        pageList: [
          {
            name: '车辆入库',
            icon: carEntry,
            url: 'car-entry',
          },
          {
            name: '库存查看',
            icon: stockCheck,
            url: 'inventory-check',
          },
          {
            name: '车辆分配',
            icon: carAllot,
            url: 'car-allot',
          },
        ],
      };
    },
    computed: {
      path() {
        return this.$route.path;
      },
    },
    created() {},
    methods: {
      toUrl(url) {
        this.$router.push({ name: url });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .page-main {
    display: flex;
  }
  .page-item {
    margin-right: 20px;
    width: 204px;
    height: 193px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #eeeff1;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 10px 40px 0px rgba(5, 95, 231, 0.1);
      border: 1px solid rgba(55, 128, 237, 0.3);
      cursor: pointer;
    }
    .item-text {
      margin-top: 10px;
      flex: 1;
      justify-content: center;
      align-self: center;
    }
  }
</style>
