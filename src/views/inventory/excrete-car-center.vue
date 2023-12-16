<template>
  <div class="app-container">
    <div class="filter-container">
      编号：
      <el-input
        v-model="listQuery.id"
        placeholder="请输入编号"
        style="width: 280px"
        class="filter-item"
      />
      分配门店：
      <el-input
        v-model="listQuery.shop"
        placeholder="请输入分配的门店"
        style="width: 280px"
        class="filter-item"
      />
      状态：
      <el-input
        v-model="listQuery.status"
        placeholder="请输入车辆状态"
        style="width: 280px"
        class="filter-item"
      />
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        @click="handleFilter"
      >
        查询
      </el-button>
    </div>
    <el-table
      :key="excreteCar"
      :data="excreteCarList"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        width="710px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分配车辆"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分配门店"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="车辆分配时间"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
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
      <el-table-column
        label="拆车时间"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="拆车负责人"
        width="110px"
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
      <el-table-column
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <el-button
            type="primary"
            size="mini"
            @click="handleUpdate(row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="carForm"
        :model="carInfo"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="分配车辆">
          <!-- <span>{{carInfo.ca}}</span> -->
        </el-form-item>
        <el-form-item label="分配门店"> </el-form-item>
        <el-form-item label="拆车负责人">
          <!-- TODO： 有负责人的时候直接展示，没有的话是Input
          <el-input v-model="temp.title" /> -->
        </el-form-item>
        <el-form-item label="拆车完成"> </el-form-item>
        <el-form-item label="分配门店"> </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false"> 取消 </el-button>
        <el-button
          type="primary"
          @click="updateData"
        >
          确认
        </el-button>
      </div>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogPvVisible"
      title="Reading statistics"
    >
      <el-table
        :data="pvData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column
          prop="key"
          label="Channel"
        />
        <el-table-column
          prop="pv"
          label="Pv"
        />
      </el-table>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="dialogPvVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'excreteCar',
    data() {
      return {
        listQuery: {
          id: '',
          shop: '',
          status: '',
        },
        carInfo: {
          carId: '',
          shopName: '',
          excreteCarOwner: '',
          isFinish: '',
          checkShop: '',
        },
        excreteCarList: [],
        dialogStatus: '',
        textMap: {
          update: '编辑记录',
          check: '查看记录',
        },
      };
    },
    created() {
      // this.getList()
    },
    methods: {
      handleFilter() {
        // TODO: 查询接口接入
      },
      updateData() {
        // TODO: 更新状态
      },
    },
  };
</script>
