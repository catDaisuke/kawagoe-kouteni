import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageMain from '@/components/page/PageMain'
import PageMemberList from '@/components/page/PageMemberList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'PageMain',
      component: PageMain
    },
    {
      path: '/memberList',
      name: 'PageMemberList',
      component: PageMemberList
    }
  ]
})
