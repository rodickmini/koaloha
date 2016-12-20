/*
* @Author: caiyou
* @Date:   2016-12-16 18:03:57
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 15:15:14
*/

'use strict'
import Index from 'components/Index'
import Hello from 'components/Hello'
import Detail from 'components/Detail'
import Login from 'components/Login'

export default {
  routes: [
    {path: '/', component: Index},
    {path: '/detail', component: Detail},
    {path: '/login', component: Login},
  ]
}