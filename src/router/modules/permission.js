/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const PATH = '/peoplePermission'

const highestRouter = [
  {
    path: PATH,
    component: Layout,
    children: [
      {
        path: 'highest-people',
        component: () => import('@/views/peoplePermission/highest-people'),
        name: 'highest-people',
        meta: { title: '最高权限人员', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: PATH,
    component: Layout,
    children: [
      {
        path: 'shop-people',
        component: () => import('@/views/peoplePermission/shop-people'),
        name: 'shop-people',
        meta: { title: '门店权限人员', icon: 'el-icon-takeaway-box' }
      }
    ]
  },
  {
    path: PATH,
    component: Layout,
    children: [
      {
        path: 'normal-people',
        component: () => import('@/views/peoplePermission/normal-people'),
        name: 'normal-people',
        meta: { title: '员工管理', icon: 'el-icon-user' }
      }
    ]
  }
]

export default highestRouter
