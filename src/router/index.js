import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
// import loginPage from '@/components/loginPage'
import compositionContent from '@/components/compositionContent'
import myFavoritePage from '@/components/myFavoritePage'
import compositionDetails from '@/components/compositionDetails'

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
    },
    {
      path: '/myfavorite',
      name: 'myFavoritePage',
      component: myFavoritePage
    },
    {
      path: '/compositiondetails',
      name: 'compositionDetails',
      component: compositionDetails
    }
    // {
    //   path: '/',
    //   name: 'loginPage',
    //   component: loginPage
    // }
  ]
})
