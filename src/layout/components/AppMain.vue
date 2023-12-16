<template>
  <section class="app-main">
    <span class="container-title">{{ routeName }}</span>
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view
        :key="key"
        class="router-main"
      />
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews;
      },
      key() {
        return this.$route.path;
      },
      routeName() {
        return this.$route.meta.title;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app-main {
    /* 50= navbar  50  */
    min-height: calc(100vh - 50px);
    padding: 24px;
    background: #f6f8fa;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .router-main {
    background: #ffffff;
    box-shadow: 0px 12px 16px 1px rgba(0, 21, 51, 0.03);
    border-radius: 8px;
    min-height: calc(100vh - 180px);
  }

  .fixed-header + .app-main {
    padding-top: 50px;
  }

  .hasTagsView {
    .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      min-height: calc(100vh - 84px);
    }

    .fixed-header + .app-main {
      padding-top: 84px;
    }
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>
