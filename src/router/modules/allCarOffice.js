/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout';

const PATH = '/inventory';

const allCarOfficeRouter = {
  path: PATH,
  component: Layout,
  redirect: `${PATH}/index`,
  name: '整车部-总部',
  meta: {
    title: '整车部-总部',
    icon: 'el-icon-house',
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/inventory/index/index'),
      name: 'index',
      meta: { title: '库管中心', icon: 'el-icon-house' },
      children: [
        {
          path: 'car-entry',
          component: () => import('@/views/inventory/car-entry'),
          name: 'car-entry',
          hidden: true,
          meta: { title: '车辆入库' },
        },
        {
          path: 'inventory-check',
          component: () => import('@/views/inventory/stock-check/index'),
          name: 'inventory-check',
          hidden: true,
          meta: { title: '库存查询' },
          children: [
            {
              path: 'car-more',
              component: () => import('@/views/inventory/stock-check/car-more'),
              name: 'car-more',
              hidden: true,
              meta: { title: '车型详情' },
            },
          ],
        },
        {
          path: 'car-allot',
          component: () => import('@/views/inventory/car-allot/index'),
          name: 'car-allot',
          hidden: true,
          meta: { title: '车辆分配' },
          children: [
            {
              path: 'allot-info',
              component: () => import('@/views/inventory/car-allot/allot-info'),
              name: 'allot-info',
              hidden: true,
              meta: { title: '分配记录' },
            },
          ],
        },
      ],
    },
    {
      path: 'excrete-car-center',
      component: () => import('@/views/inventory/excrete-car-center'),
      name: 'excrete-car-center',
      meta: { title: '拆车中心', icon: 'el-icon-truck' },
    },
  ],
};

export default allCarOfficeRouter;
