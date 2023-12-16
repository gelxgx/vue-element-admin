<template>
  <div>
    <span class="container-title">车辆型号</span>
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
      <el-table-column label="车辆编号">
        <template slot-scope="{ row }">
          <span>{{ row.carId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="入库时间"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="库管负责人"
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
