/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const PATH = '/menber'

const menberRouter = [
  {
    path: PATH,
    component: Layout,
    children: [
      {
        path: 'center',
        component: () => import('@/views/memberCenter/center'),
        name: 'menber-center',
        meta: { title: '会员中心', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: PATH,
    component: Layout,
    children: [
      {
        path: 'allot-center',
        component: () => import('@/views/memberCenter/allot-center'),
        name: 'allot-center',
        meta: { title: '调拨中心', icon: 'el-icon-takeaway-box' }
      }
    ]
  }
]

export default menberRouter
