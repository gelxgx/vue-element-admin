/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout';

const PATH = '/stock';

const allCarShopRouter = {
  path: PATH,
  component: Layout,
  redirect: `${PATH}/index`,
  name: '整车部-门店',
  meta: {
    title: '整车部-门店',
    icon: 'el-icon-house',
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/stock/index/index'),
      name: 'index',
      meta: { title: '库存中心', icon: 'el-icon-house' },
    },
    {
      path: 'shop-car-entry',
      component: () => import('@/views/stock/car-entry'),
      name: 'shop-car-entry',
      hidden: true,
      meta: { title: '门店车辆入库' },
    },
    {
      path: 'stock-check',
      component: () => import('@/views/stock/stock-check/index'),
      name: 'stock-check',
      hidden: true,
      meta: { title: '库存管理' },
      children: [
        {
          path: 'shop-car-more',
          component: () => import('@/views/stock/stock-check/car-more'),
          name: 'shop-car-more',
          hidden: true,
          meta: { title: '车型详情' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'shop-order-center',
          component: () => import('@/views/stock/order-center/index'),
          name: 'shop-order-center',
          meta: { title: '订单中心', icon: 'el-icon-truck' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'shop-allot-center',
          component: () => import('@/views/stock/allot-center/index'),
          name: 'shop-allot-center',
          meta: { title: '调拨中心', icon: 'el-icon-truck' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'shop-permission-config',
          component: () => import('@/views/stock/permission-config/index'),
          name: 'shop-permission-config',
          meta: { title: '权限管理', icon: 'el-icon-truck' },
        },
      ],
    },
  ],
};

export default allCarShopRouter;
