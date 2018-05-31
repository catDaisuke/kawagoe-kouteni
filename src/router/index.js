import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageMain from '@/components/page/PageMain'
import PageMemberList from '@/components/page/PageMemberList'
import PageMemberInfo from '@/components/page/PageMemberInfo'
import PageLogin from '@/components/page/PageLogin'
import PageRegist from '@/components/page/PageRegist'

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
      component: PageMemberList,
      props: true
    },
    {
      path: '/memberInfo',
      name: 'PageMemberInfo',
      component: PageMemberInfo,
      props: true
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/regist',
      name: 'PageRegist',
      component: PageRegist
    }
  ]
})
