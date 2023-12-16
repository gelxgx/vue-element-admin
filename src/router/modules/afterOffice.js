/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout';

const PATH = '/after ';

const afterRouter = {
  path: PATH,
  component: Layout,
  redirect: `${PATH}/index`,
  name: 'after',
  meta: {
    title: '售后部',
    icon: 'el-icon-house',
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/after/index/index'),
      name: 'index',
      meta: { title: '库存中心', icon: 'el-icon-house' },
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'after-order-center',
          component: () => import('@/views/after/order-center/index'),
          name: 'after-order-center',
          meta: { title: '订单中心', icon: 'el-icon-truck' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'after-service-center',
          component: () => import('@/views/after/service-center/index'),
          name: 'after-service-center',
          meta: { title: '维修工单中心', icon: 'el-icon-truck' },
        },
      ],
    },
    {
      path: PATH,
      component: Layout,
      children: [
        {
          path: 'after-allot-center',
          component: () => import('@/views/after/allot-center/index'),
          name: 'after-allot-center',
          meta: { title: '调拨中心', icon: 'el-icon-truck' },
        },
      ],
    },
  ],
};

export default afterRouter;
