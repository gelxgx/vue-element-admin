/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout';

const PATH = '/equipment ';

const equipmentRouter = {
  path: PATH,
  component: Layout,
  redirect: `${PATH}/index`,
  name: 'equipment',
  meta: {
    title: '装备部',
    icon: 'el-icon-house',
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/equipment/index/index'),
      name: 'index',
      meta: { title: '库存中心', icon: 'el-icon-house' },
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'equipment-order-center',
          component: () => import('@/views/equipment/order-center/index'),
          name: 'equipment-order-center',
          meta: { title: '订单中心', icon: 'el-icon-truck' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'equipment-allot-center',
          component: () => import('@/views/equipment/allot-center/index'),
          name: 'equipment-allot-center',
          meta: { title: '调拨中心', icon: 'el-icon-truck' },
        },
      ],
    },
  ],
};

export default equipmentRouter;
