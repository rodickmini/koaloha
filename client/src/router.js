/*
* @Author: caiyou
* @Date:   2016-12-16 18:03:57
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-23 17:14:59
*/

'use strict'
import Index from 'components/Index'
import Hello from 'components/Hello'
import Detail from 'components/Detail'
import Signin from 'components/Signin'
import Write from 'components/Write'

export default {
  routes: [
    { path: '/', component: Index },
    { path: '/detail/:id', component: Detail },
    { path: '/signin', component: Signin, 
      beforeEnter: (to, from, next) => {
        let jwtToken = localStorage.getItem('koaloha_token')
        if(jwtToken === null) {
          next()
        }else {
          next(from.path)
        }
      }
    },
    { path: '/write', component: Write,
      beforeEnter: (to, from, next) => {
        let jwtToken = localStorage.getItem('koaloha_token')
        if(jwtToken === null) {
          next('/signin')
        }else {
          next()
        }
      }
    }
  ]
}