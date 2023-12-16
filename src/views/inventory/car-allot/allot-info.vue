<template>
  <div>
    <el-table
      key="carMoreInfoList"
      :data="list"
      fit
      highlight-current-row
      :header-row-style="{
        background: '#F6F8FA',
      }"
      :style="{ width: '100%', marginTop: '20px' }"
    >
      <el-table-column
        label="编号"
        prop="id"
        align="center"
        width="80px"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分配车辆"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.carId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分配门店"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作时间"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作人（库管）"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    /> -->
  </div>
</template>

<script>
  // import Pagination from '@/components/Pagination'; // secondary package based on el-pagination

  export default {
    name: 'carMoreInfo',
    // components: { Pagination },
    data() {
      return {
        list: [],
      };
    },
    created() {},
    methods: {},
  };
</script>
