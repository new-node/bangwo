import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mine from '@/components/mine'
import guarantee from '@/components/guarantee'
import clean from '@/components/Clearn/elClearn'
import repair from '@/components/Repair/repair'
import appointment from '@/components/Appointment/appointment'
import site from '@/components/Site/site'
import mine_address from '@/components/mineAddress/mine_address'
import repairDetaile from '@/components/Repair/repairDetaile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: mine,
      component: mine
    },
    {
      path: '/guarantee',
      name: 'guarantee',
      component: guarantee
    },
    {
      path: '/index/clean',
      name: 'clean',
      component: clean
    },
    {
      path: '/index/repair',
      name: 'repair',
      component: repair
    },
    {
      path: '/index/position',
      name: 'appointment',
      component: appointment
    },
    {
      path: '/index/position/site',
      name: 'site',
      component: site
    },
    {
      path: '/index/mine_address',
      name: 'mine_address',
      component: mine_address
    },
    {
      path: '/index/repair/repairDetaile',
      name: 'repairDetaile',
      component: repairDetaile
    }
  ]
})
