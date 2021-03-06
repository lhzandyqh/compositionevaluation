import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
// import loginPage from '@/components/loginPage'
import compositionContent from '@/components/compositionContent'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/compositionContent',
      name: 'compositionContent',
      component: compositionContent
    }
    // {
    //   path: '/',
    //   name: 'loginPage',
    //   component: loginPage
    // }
  ]
})
